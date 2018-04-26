<?php get_header();?>
<section id="alquiler">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <?php
        if ( function_exists('yoast_breadcrumb') ) {
        yoast_breadcrumb('
        <p id="breadcrumbs">','</p>
        ');
        }
        ?>
      </div>
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <div class="col-md-12 col-sm-12 col-xs-12">
      <p class="titulo-page">
        <?= the_title()?>
      </p>
      <span class="cont-page">
        <?= the_content()?>
      </span>
      </div>
      <?php endwhile; else : ?>
      <?php endif; ?>
    </div>
  </div>
</section>
<?php get_footer();?>