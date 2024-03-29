=== AOS Blocks for WordPress ===
Contributors: knolaust
Tags: aos, animation, gutenberg, blocks
Requires at least: 6.0
Tested up to: 6.9
Requires PHP: 8.0
Stable tag: 1.0.0
License: ISC

Adds AOS animation controls to Gutenberg blocks.

== Description ==

AOS Blocks integrates the AOS (Animate On Scroll) library with WordPress, allowing users to easily add scroll animations to Gutenberg blocks. This plugin provides a straightforward way to enhance the visual appeal of your WordPress site with rich animations.

== Features ==

- **Seamless Integration**: Easily integrate AOS animations with WordPress without touching a line of code.
- **Gutenberg Compatibility**: Designed to work flawlessly with Gutenberg blocks.
- **Customizable**: Offers a range of animation options that can be applied to blocks right from the Gutenberg editor.
- **Lightweight**: Optimized for performance, ensuring animations load quickly and smoothly.

== Installation ==

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
   
   **Note**: Ensure your WordPress version is compatible with the plugin before installation. After installation, remember to activate the plugin in the "Plugins" menu.

== Usage ==

After installation, the AOS Blocks plugin automatically adds animation options to all Gutenberg blocks in the block editor's sidebar. To apply animations:

1. Select a block in the Gutenberg editor.
2. Navigate to the block settings in the right sidebar.
3. Find the AOS Animation settings.
4. Choose an animation from the dropdown list.

For more information on available AOS animations, visit [AOS GitHub repository](https://github.com/michalsnik/aos).

== Customization ==

The plugin allows customization of animation types, durations, and delays directly from the Gutenberg editor, providing a user-friendly interface to make your website stand out.

== Contributing ==

Contributions are welcome! Here's how you can help improve the AOS Blocks plugin:

- **Report Issues**: If you find a bug or have a feature request, please report it via the [Issues](https://github.com/knolaust/aos-blocks/issues) section. Check existing issues to avoid duplicates.
- **Submit Pull Requests**: Fork the repository, make your changes, and submit pull requests with bug fixes or new features. Ensure changes adhere to any coding standards or practices mentioned in the repository.

== Development ==

To set up for development:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use the provided NPM scripts to build and test changes.
   - `npm run build` will build the plugin files and create a `dist` folder along with a `aos-blocks.zip` file.

See `package.json` for all available scripts.

== Screenshots ==

### AOS Animation settings in the Gutenberg editor.
   ![AOS Animation settings in the Gutenberg editor](assets/screenshot-1.jpg)
   Alt text: AOS Animation settings in the Gutenberg editor.

### Another screenshot showcasing AOS Animation settings.
   ![Another screenshot showcasing AOS Animation settings](assets/screenshot-2.jpg)
   Alt text: Another screenshot showcasing AOS Animation settings.

== License ==

The AOS Blocks plugin is open-source software licensed under the GNU General Public License v3 (https://www.gnu.org/licenses/gpl-3.0.html).

== Credits ==

- AOS Library: [michalsnik/aos](https://github.com/michalsnik/aos)
- Plugin Author: [Knol Aust](https://knolaust.com)
