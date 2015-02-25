$( document ).ready(function() {
    $('body.docs .entry h1').each( function(i){
    	var href = 'ancla' + i;
    	var $struct = $('<li><a href="#' + href + '">'+ $(this).text() +'</a></li>');
    	$('.docs header #navigation').append( $struct );
    	$(this).append('<a name="' + href + '" />');
    });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});