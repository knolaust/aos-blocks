# AOS Blocks for WordPress

AOS Blocks integrates the AOS (Animate On Scroll) library with WordPress, allowing users to easily add scroll animations to Gutenberg blocks. This plugin provides a straightforward way to enhance the visual appeal of your WordPress site with rich animations.

## Features

- **Seamless Integration**: Easily integrate AOS animations with WordPress without touching a line of code.
- **Gutenberg Compatibility**: Designed to work flawlessly with Gutenberg blocks.
- **Customizable**: Offers a range of animation options that can be applied to blocks right from the Gutenberg editor.
- **Lightweight**: Optimized for performance, ensuring animations load quickly and smoothly.

## Installation

1. **Manual Installation**:
   - Download the `aos-blocks.zip` file.
   - Go to your WordPress dashboard, navigate to the "Plugins" section.
   - Click on "Add New" > "Upload Plugin".
   - Choose the downloaded zip file and click "Install Now".
   - After installation, activate the plugin through the "Plugins" menu in WordPress.

2. **FTP Installation**:
   - Extract the `aos-blocks.zip` file to your computer.
   - Upload the `aos-blocks` folder to the `/wp-content/plugins/` directory on your server.
   - Activate the plugin through the "Plugins" menu in WordPress.

## Usage

After installation, the AOS Blocks plugin automatically adds animation options to all Gutenberg blocks in the block editor's sidebar. To apply animations:

1. Select a block in the Gutenberg editor.
2. Navigate to the block settings in the right sidebar.
3. Find the AOS Animation settings.
4. Choose an animation from the dropdown list.

## Customization

The plugin allows customization of animation types, durations, and delays directly from the Gutenberg editor, providing a user-friendly interface to make your website stand out.

## Contributing

Contributions are welcome, and here are a few ways you can help improve the AOS Blocks plugin:

- **Report Issues**: If you find a bug or have a feature request, please report it via the [Issues](https://github.com/knolaust/aos-blocks/issues) section.
- **Submit Pull Requests**: Feel free to fork the repository and submit pull requests with bug fixes or new features.

## Development

To set up for development:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use the provided NPM scripts to build and test changes.
`npm run build` will build the plugin files and create a `dist` folder along with a `aos-blocks.zip` file.

See `package.json` for all available scripts.

## License

The AOS Blocks plugin is open-source software licensed under the ISC license.

## Credits

- AOS Library: [michalsnik/aos](https://github.com/michalsnik/aos)
- Plugin Author: [Knol Aust](https://knolaust.com)
