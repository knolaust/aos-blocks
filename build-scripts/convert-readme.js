const fs = require('fs');
const path = require('path');
const marked = require('marked').marked;

// Specify the path for the Markdown and output txt file
const markdownPath = path.join(__dirname, '../dist', 'readme.md');
const outputPath = path.join(__dirname, '../dist', 'readme.txt');

// Create a new instance of the Renderer
const renderer = new marked.Renderer();

// Override link renderer for plain text output
renderer.link = (href, title, text) => `${text} (${href})`;

// Override heading renderer to convert headings to uppercase
renderer.heading = (text, level) => `${'#'.repeat(level)} ${text}\n`;

// Convert Markdown lists to plain text
renderer.list = (body, ordered) => `${body}\n`;
renderer.listitem = (text) => `- ${text}\n`;

// Set the options globally to the marked library
marked.setOptions({
    renderer: renderer
});

// Read the Markdown file
fs.readFile(markdownPath, 'utf8', (err, markdown) => {
    if (err) {
        console.error('Error reading Markdown file:', err);
        return;
    }

    // Use marked to convert Markdown to plain text
    // Since options are set globally, you can directly call marked() with markdown content
    const plaintext = marked(markdown);

    // Write the plain text to readme.txt in the dist directory
    fs.writeFile(outputPath, plaintext, (err) => {
        if (err) {
            console.error('Error writing readme.txt file:', err);
            return;
        }
        console.log('Successfully converted readme.md to readme.txt');
    });
});
