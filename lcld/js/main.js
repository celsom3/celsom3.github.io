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


  

  // Smooth Scrolling a[href*=#]:not([href=#])   
  $('.nav-item').click(function() {
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

  // Initialize the first #fixed-scroller to link to current section

  var currentSection = $(document).closest('section').attr('id');
  var currentSectionStr = '#' + currentSection;
  $('#fixed-scroller').attr('href', "#about");

  $(document).scroll(function(){

    // Make the #fixed-scroller automatically scroll to the next div
    // Get the current position/section and find the next section ID

    var cutoff = $(window).scrollTop();
    var nextSection;
    $('section').each(function(){
      if($(this).offset().top + $(this).height() > cutoff){
          // Find the next section
          var nextSection = $(this).closest('section').next().attr('id');
          var nextSectionStr = '#' + nextSection;

          // Change #fixed-scroller to next section
          $('#fixed-scroller').attr('href', nextSectionStr);

          return false; // stops the iteration after the first one on screen
      }

    });

    // Checks if you are in the last section. If so, change #fixed-scroller
    // link to the top section and make the arrow point up

    while($('#fixed-scroller').attr('href') === '#footer'){
      $('#fixed-scroller').attr('href', '#construction');
      $('#fixed-scroller > i').removeClass('fa-arrow-circle-down').addClass('fa-arrow-circle-up');
    }

    // If you are back at the top, change the arrow to point down
    
    if($('#fixed-scroller').attr('href') === '#about'){
      $('#fixed-scroller > i').removeClass('fa-arrow-circle-up').addClass('fa-arrow-circle-down');
    }


  });

});


