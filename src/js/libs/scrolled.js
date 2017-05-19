// Slide scroll down
var scrolled = function(){

var $btn_scroll = $('.scroll');
    
  $btn_scroll.on('click', function(e){
    e.preventDefault();

    $('body').animate({scrollTop: $(this.hash).position().top -50}, 500, 'easeInOutCirc');
    
    $('.scroll.is-current').removeClass('is-current');
    $(this).addClass('is-current');

    
  });

}

module.exports = scrolled;
