<?php
/**
 * Plugin Name: AOS Blocks
 * Plugin URI:  https://github.com/knolaust/aos-blocks
 * Description: Adds AOS animation controls to Gutenberg blocks.
 * Version:     1.0.0
 * Author:      Knol Aust
 * Author URI:  https://knolaust.com
 */
function aos_blocks_enqueue_assets() {
    wp_enqueue_style('aos-blocks-style', plugins_url('assets/css/aos-blocks.css', __FILE__));
    wp_enqueue_script('aos-blocks-script', plugins_url('assets/js/aos-blocks.bundle.js', __FILE__), array(), '1.0.0', true);
    wp_add_inline_script('aos-script', 'AOS.init();');
}
add_action('wp_enqueue_scripts', 'aos_blocks_enqueue_assets'); 
add_action('enqueue_block_editor_assets', 'aos_blocks_enqueue_assets');