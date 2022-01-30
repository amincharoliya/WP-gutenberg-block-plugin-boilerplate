<?php
/*
    Plugin Name: Accordion Block
*/

function my_register_gutenberg_accordion_block() {

    // Register our block script with WordPress
    wp_register_script(
        'gutenberg-accordion-block',
        plugins_url('/blocks/dist/blocks.build.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor')
    );
    
    // Register our block's CSS
    if( is_admin() ) :
        wp_register_style(
            'gutenberg-accordion-block-edit-style',
            plugins_url('/blocks/dist/main.build.css', __FILE__),
            array( 'wp-edit-blocks' )
        );
    endif;
    
    // Enqueue the script in the editor
    register_block_type('accordion-block/main', array(
        'editor_script' => 'gutenberg-accordion-block',
        'editor_style' => 'gutenberg-accordion-block-edit-style',
        'style' => 'gutenberg-accordion-block-edit-style'
    ));
  }
  
  add_action('init', 'my_register_gutenberg_accordion_block');