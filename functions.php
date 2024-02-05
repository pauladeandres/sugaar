<?php

function sugaar_resources() {
    wp_enqueue_style('main_styles', get_theme_file_uri('/css/style-index.css'));
     wp_enqueue_script('main--js', get_theme_file_uri('/build/index.js'),  array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'sugaar_resources');

function sugaar_features() {
    add_theme_support('title-tag');
    register_nav_menu('headerMenuLocation1', 'Header Menu Location Left');
    register_nav_menu('headerMenuLocation2', 'Header Menu Location Right');
    register_nav_menu('footerMenuLocation1', 'Footer Menu Location One');
}

add_action('after_setup_theme', 'sugaar_features');

class Add_Div_Walker extends Walker_Nav_Menu {
    function start_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<div class='plus-icon-menu'></div>
        <div class='plus2-icon-menu'></div>
        <ul class='submenu'>\n";
    }
    function end_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
    }
}

add_filter('ai1wm_exclude_content_from_export', 'ignoreFiles');

function ignoreFiles($exclude_filters) {
    $exclude_filters[] = 'themes/sugaar/node_modules';
    return $exclude_filters;
}

?>