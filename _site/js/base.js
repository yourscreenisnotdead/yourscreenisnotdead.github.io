$(window).load(function(){
  $( 'audio' ).audioPlayer();
  $( '.load' ).addClass('load-finished');
  $( '.border-menu' ).click(function(){
    $( '.mobile-nav' ).toggleClass('menu-open');
  })
});