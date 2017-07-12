/*!
	Theme Name: Migue | @mishortcut: Product interface designer
	Theme URI: http://minz.design
	Author: Mishortcut
	Author URI: http://minz.design
	Author Contact: mishortcut@gmail.com
	Description: Profile of Migue | @mishortcut
	Version: 2.0
	Licensed under the MIT license.
	Copyright 2017 Migue
*/

var easing = require('./vendor/easing');

var simplezoom = require('./vendor/simplezoom');

var typed = require('./vendor/typed');

var scrollreveal = require('./libs/scrollreveal');

var scrolled = require('./libs/scrolled');

var topbar = require('./libs/topbar');

var projects = require('./libs/projects');

var sticknav = require('./libs/sticknav');

var tipedJS = require('./libs/tipedJS');



jQuery(document).ready(function($) {

  scrolled();
  
  topbar();
	
	projects();
	
	sticknav();

	scrollreveal();

	tipedJS();

});





