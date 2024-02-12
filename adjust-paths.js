const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dist/aos-blocks.php');
let content = fs.readFileSync(filePath, { encoding: 'utf8' });

// Update asset paths to production paths in the dist directory
content = content.replace(/plugins_url\('node_modules\/aos\/dist\/aos.css', __FILE__\)/g, "plugins_url('assets/css/aos.css', __FILE__)");
content = content.replace(/plugins_url\('node_modules\/aos\/dist\/aos.js', __FILE__\)/g, "plugins_url('assets/js/aos.js', __FILE__)");
content = content.replace(/plugins_url\('assets\/js\/aos-blocks.js', __FILE__\)/g, "plugins_url('assets/js/aos-blocks.js', __FILE__)");

fs.writeFileSync(filePath, content);
