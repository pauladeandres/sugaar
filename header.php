<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <!-- <div class="logoload">
            <div class="animation-logo-container">
                <img src="<?php echo get_theme_file_uri('/assets/images/Sugaar_soft_texture.svg') ?>">
            </div>
        </div> -->
</head>

<body <?php body_class(); ?>>
    <header class="header--container desktop">
        <?php
        if (has_nav_menu('headerMenuLocation1')) {
            wp_nav_menu(array('theme_location' => 'headerMenuLocation1'));
        } else {
            echo '<div></div>';
        }
        ?>

        <div class="header--logo--container">
            <a href="<?php echo site_url(); ?>">
                <img class="header--logo" src="<?php echo get_theme_file_uri('/assets/images/dragon_logo.svg') ?>" />
                <img class="header--logo dark" src="<?php echo get_theme_file_uri('/assets/images/dragon_logo_black.svg') ?>" />
            </a>
        </div>

        <div class="menu-right-menu-container">
            <ul id="menu-right-menu" class="menu">
                <li class="menu-item">
                    <a data-open-popup href="#">Menu</a>
                </li>
                <li class="menu-item">
                    <a data-open-reservations href="#">Reservations</a>
                </li>
            </ul>
        </div>
    </header>

    <header class="header--container mobile">
        <div id="mobile-menu-icon">
            <div class="close-icon-container">
                <div class="close-icon">
                </div>
            </div>
        </div>
    </header>

    <div class="mobile-menu-drawer">
        <?php
        if (has_nav_menu('headerMenuLocation1')) {
            wp_nav_menu(array('theme_location' => 'headerMenuLocation1', 'walker' => new Add_Div_Walker));
        } else {
            echo '<div></div>';
        }
        ?>
        <div class="menu-right-menu-container">
            <ul id="menu-right-menu" class="menu">
                <li class="menu-item">
                    <a data-open-popup href="#">Menu</a>
                </li>
                <li class="menu-item">
                    <a data-open-reservations href="#">Reservations</a>
                </li>
            </ul>
        </div>
        <div class="menu-info-container">
            <div style="margin-bottom: 20px">
                <a href="https://maps.app.goo.gl/RRNZumJEku5gXJmD9" target="_blank">
                    <p>5 Rue Gozlin<br>Saint-Germain-Des-Prés<br>6eme — Paris</p>
                </a>
            </div>
            <div>
                <a target="_blank" href="tel:+33143265186">
                    <p>+33 1 43 26 51 86</p>
                </a>
                <a target="_blank" href="mailto:sugaar@sugaarparis.com">
                    <p>sugaar@sugaarparis.com</p>
                </a>
                <a target="_blank" href="https://www.instagram.com/sugaarparis">
                    <p>Instagram</p>
                </a>
            </div>
            <div class="logo">
                <img src="<?php echo get_theme_file_uri('/assets/images/logo_black.png') ?>" />
            </div>
        </div>
    </div>