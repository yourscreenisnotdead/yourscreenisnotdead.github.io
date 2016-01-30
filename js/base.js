$(window).load(function(){
  $( '.load' ).addClass('load-finished');
  $( '.border-menu' ).click(function(){
    $( '.mobile-nav' ).toggleClass('menu-open');
  })
  // parallax();
});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.hero-title').css({
    'transform' : 'translateY('+ wScroll /15 +'%)'
  })

  $('.hero-text').css({
    'transform' : 'translateY('+ wScroll /20 +'%)'
  })

});
