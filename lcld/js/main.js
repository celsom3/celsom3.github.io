$(document).ready(function(){
	
	
	// Sets the height of all sections to screen height

	var screenHeight = $(window).height();

	$('#construction').css('height', screenHeight);
	$('#about').css('min-height', screenHeight);
	$('#dates').css('min-height', screenHeight);

	// Smooth Scrolling
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

  // Initializes Bigfoot footnotes plugin
  $.bigfoot();
});
