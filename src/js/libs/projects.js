// Projects
var projects = function(){
  
	$('a[rel=simplezoom]').simplezoom();
	
	var data = $('[data-bg]');
		bg = data.attr('data-bg');

	var data_color = $('[data-color]');
		color = data_color.attr('data-color');

	$('[data-bg]').css({
		'background': '#'+bg
	});
	
	$('[data-color]').css({
		'color': '#'+color
	});
	

	/*
	*	Function for projects list
	*/
	if(window.matchMedia('(min-width:1200px)').matches){

		$('.Projects__link').hover(function() {
		    $('.Projects__link').each(function() {
		        $('.Projects__link').addClass('Projects__link-hide-other');
		        $(this).removeClass('Projects__link-show');
		    });
		    $(this).addClass('Projects__link-show');
		}, function() {
		    $('.Projects__link').each(function() {
		        $('.Projects__link').removeClass('Projects__link-hide-other');
		    });
		});

	}

	/*
	* Lazy loading in 1k
	*/
	var unveil = require('../vendor/unveil');

  $(".Project img").unveil(300);

 

}

module.exports = projects;
