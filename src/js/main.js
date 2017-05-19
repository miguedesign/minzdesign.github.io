/*!
	Theme Name: MINZ | Miguel Martínez: Product interface designer
	Theme URI: http://minz.design
	Author: MINZ
	Author URI: http://minz.design
	Author Contact: minzdesigner@gmail.com
	Description: Profile of Miguel aka MINZ
	Version: 1.0

	Licensed under the MIT license.
	Copyright 2016 Miguel Martínez
*/

var easing = require('./vendor/easing');

var simplezoom = require('./vendor/simplezoom');

var scrollreveal = require('./libs/scrollreveal');

var scrolled = require('./libs/scrolled');

var topbar = require('./libs/topbar');

var projects = require('./libs/projects');

var sticknav = require('./libs/sticknav');


jQuery(document).ready(function($) {

  scrolled();
  
  topbar();
	
	projects();
	
	sticknav();

	scrollreveal();

});





