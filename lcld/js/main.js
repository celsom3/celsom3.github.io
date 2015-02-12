$(document).ready(function(){
	
	
	// Sets the height of all sections to screen height

	var screenHeight = $(window).height();

	$('#construction').css('height', screenHeight);
	$('#about').css('min-height', screenHeight);
	$('#dates').css('min-height', screenHeight);

  // Initializes Bigfoot footnotes plugin
  $.bigfoot();

  $('#menu').slicknav({
    'label' : '', // Label for menu button. Use an empty string for no label.
    'duplicate': true, // If true, the mobile menu is a copy of the original.
    'duration': 800, // The duration of the sliding animation.
    'easingOpen': 'easeOutBounce', // Easing used for open animations.
    'easingClose': 'easeOutBounce', // Easing used for close animations.
    'prependTo': '#floating-menu', // Element, jQuery object, or jQuery selector string to prepend the mobile menu to.
    'parentTag': 'a', // Element type for parent menu items.
    'closeOnClick': true // Close menu when a link is clicked.
  });


  // Smooth Scrolling
  $('a[href*=#]:not([href=#]).nav-item').click(function() {
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
