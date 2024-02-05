<?php /* Template Name: Home*/ ?>

<!DOCTYPE html>
<html>
    <head>
        <?php get_header(); ?>
    </head>
    
<div class="hero-slider">
    <div class="hero-slider-arrow prev">PREV</div>
    <div class="hero-slider-arrow next">NEXT</div>
    <div class="hero--slider-overlay"></div>
    <?php while (have_rows('carousel_images')) : $the_row = the_row();
        $i = 1; ?>
        <?php foreach ($the_row as $field_key => $field_value) {
            $pre = 'image_';
            $imageName = $pre . $i;
            $image = get_sub_field($imageName); ?>
            <?php if ( $image ) : ?>
                <div class="hero-slider__slide <?php if($i !== 1) { ?>fade<?php } ?>" style="background-image: url('<?php echo esc_url( $image['url'] ); ?>');">
                </div>
            <?php endif; ?>
        <?php $i++; ?>  
        <?php } ?>
    <?php endwhile ?>
</div>

    <div class="hero__content">
        <div class="top--content">
            <p><?php the_field('title'); ?></p>
            <p><?php the_field('introduction'); ?></p>
        </div>
        <div class="bottom--content">
            <div class="left--content">
                <a href="https://maps.app.goo.gl/RRNZumJEku5gXJmD9" target="_blank"><p>5 Rue Gozlin<br>Saint-Germain-Des-Prés<br>6eme — Paris</p></a>
            </div>
            <div class="center--content">
                <img class="mobile--logo" src="<?php echo get_theme_file_uri('/assets/images/dragon_logo.svg') ?>"/>
            </div>
            <div class="right--content">
                <a target="_blank" href="tel:+33143265186">+33 1 43 26 51 86</a>
                <a target="_blank" href="mailto:sugaar@sugaarparis.com">sugaar@sugaarparis.com</a>
                <a target="_blank" href="https://www.instagram.com/sugaarparis">Instagram</a>
            </div>
        </div>
    </div>


    <div class="homepage--manifesto-section">
        <h2><?php the_field('heading'); ?></h2>
        <p><?php the_field('manifesto'); ?></p>
        <a target="_blank" data-open-reservations><span><?php the_field('link_text'); ?></span></a>
    </div>

        <?php
        $lacarte = get_field('carte_section');
        if( $lacarte ): ?>
    <div class="homepage--menu-section">
        <div class="half--block image"
        style="background-image: url('<?php echo $lacarte['image'] ; ?>')"></div>
        <div class="half--block text">
            <div>
                <h3><?php echo $lacarte['title'] ; ?></h3>
                <p><?php echo $lacarte['text'] ; ?></p>
            </div>
            <div class="vertical--line"></div>
            <div>
                
                    <?php if (empty($lacarte['link_text'])) { ?>
                        <div class="logo-small" data-open-popup class="open-menu-button"
                        style="background-image: url('<?php echo get_theme_file_uri('/assets/images/sugaar_logo.png') ?>')"></div>
                    <?php  
                        } else {
                            ?>
                            <div class="link" data-open-popup class="open-menu-button">
                            <?php
                            echo $lacarte['link_text'] ; 
                            ?>
                            </div>
                        <?php
                        }
                    ?>
                
            </div>
        </div>
    </div>
    <?php endif; ?>

    <?php
        $lacarte = get_field('vins_section');
        if( $lacarte ): ?>
    <div class="homepage--menu-section vins">
        <div class="half--block text">
            <div>
                <h3><?php echo $lacarte['title'] ; ?></h3>
                <p><?php echo $lacarte['text'] ; ?></p>
            </div>
            <div class="vertical--line"></div>
            <div>
                <div data-open-popup class="open-menu-button">
                    <?php if (empty($lacarte['link_text'])) { ?>
                        <div class="logo-small" data-open-popup class="open-menu-button"
                        style="background-image: url('<?php echo get_theme_file_uri('/assets/images/dragon_logo.svg') ?>')"></div>
                    <?php  } else {
                            echo $lacarte['link_text'] ; 
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="half--block image"
        style="background-image: url('<?php echo $lacarte['image'] ; ?>')"></div>
    </div>
    <?php endif; ?>

    <?php
        $lacarte = get_field('boissons_section');
        if( $lacarte ): ?>
    <div class="homepage--menu-section">
        <div class="half--block image"
        style="background-image: url('<?php echo $lacarte['image'] ; ?>')"></div>
        <div class="half--block text">
            <div>
                <h3><?php echo $lacarte['title'] ; ?></h3>
                <p><?php echo $lacarte['text'] ; ?></p>
            </div>
            <div class="vertical--line"></div>
            <div>
                <div data-open-popup class="open-menu-button">
                    <?php if (empty($lacarte['link_text'])) { ?>
                        <div class="logo-small" data-open-popup class="open-menu-button"
                        style="background-image: url('<?php echo get_theme_file_uri('/assets/images/dragon_logo.svg') ?>')"></div>
                    <?php  } else {
                            echo $lacarte['link_text'] ; 
                        }
                    ?>
                </div>
            </div>
        </div>
    </div>
    <?php endif; ?>

    <div class="logo--homepage-section">
        <div class="logo-container" style="background-image: url('<?php echo get_theme_file_uri('/assets/images/Sugaar_wordmark_home.svg') ?>')"></div>
    </div>

    <div class="reservations--section" data-close-reservations>

        <div class="iframe--container">
            <iframe allowtransparency="true" name="reservations-iframe" id="reservations-iframe" src="https://bookings.zenchef.com/results?rid=358531&pid=1001"
                frameborder="0">
            </iframe>
        </div>
    </div>

<div class="menu--popup">
 	<div class="popup--overlay">
  		<div class="close-icon--menu" data-close-popup>
    		    <svg data-close-reservations class="close--icon" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 11 11" fill="none">
                <line y1="-0.65" x2="14.1421" y2="-0.65" transform="matrix(-0.707107 0.707107 0.707107 0.707107 10.9092 1)" stroke="white" stroke-width="1.3"/>
                <line y1="-0.65" x2="14.1421" y2="-0.65" transform="matrix(-0.707107 0.707107 0.707107 0.707107 10.9092 1)" stroke="white" stroke-width="1.3"/>
                <line x1="0.459619" y1="0.540381" x2="10.4596" y2="10.5404" stroke="white" stroke-width="1.3"/>
                <line x1="0.459619" y1="0.540381" x2="10.4596" y2="10.5404" stroke="white" stroke-width="1.3"/>
            </svg>
  		</div>
  		<p class="menu-popup--title">LA CARTE</p>
		<div class="menu--container">
  			<div class="prev--button">
    			<span>PREV</span>
  			</div>
            <div class="menu-slider">
                <div class="menu--slider-scroll">
  			        <?php while (have_rows('menu_pages')) : $the_row = the_row();
                        $i = 1; ?>
                        <?php foreach ($the_row as $field_key => $field_value) {
                            $pre = 'page_';
                            $imageName = $pre . $i;
                            $image = get_sub_field($imageName); ?>
                            <?php if ( $image ) : ?>
                                <div class="menu_slider_slide <?php if($i === 1) { ?>cover--slide<?php } ?>" style="background-image: url('<?php echo esc_url( $image['url'] ); ?>');">
                                </div>
                            <?php endif; ?>
                         <?php $i++; ?>  
                        <?php } ?>
                    <?php endwhile ?>
                </div>
            </div>
    		<div class="next--button">
    			<span>NEXT</span>
  			</div>
		</div>
        <div class="menu--pagination">
            <span data-current-number>1</span>/<span data-total-number>1</span>
        </div>
     </div>
</div>

    <body>
    <footer>
        <?php  get_footer(); ?>
   </footer>
     </body>
</html>

