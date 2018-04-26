let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
	'resources/assets/plantilla/css/bootstrap.min.css',
	'resources/assets/plantilla/css/style.css'
], 'public/css/plantilla.css')
.scripts([
	'resources/assets/plantilla/js/jquery.min.js',
	'resources/assets/plantilla/js/bootstrap.min.js',
	'resources/assets/plantilla/js/jquery.fullscreen.min.js',
	'resources/assets/plantilla/js/general.js'
], 'public/js/plantilla.js')
.js('resources/assets/js/app.js','public/js/app.js');