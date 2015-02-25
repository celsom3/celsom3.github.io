// Lantern Wedding Theme 
// Version : v1.0
(function() {
	"use strict";

// ---------- Menu Close ----------

    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

// ---------- Menu Toggle ----------

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });


// ---------- Image Popup ----------

	$('.isotom_lant').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  // other options
	});


// ---------- Scroll Top ----------

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
	
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});


// ---------- Preloader ----------

	$(window).load(function() {
		$("#loader").fadeOut();
		$("#mask").delay(1000).fadeOut("slow");
	});

//Adding fixed position to header
	$(document).scroll(function() {
		if ($(document).scrollTop() >= 500) {
			$('.navbar').addClass('navbar-fixed-top');
			$('html').addClass('has-fixed-nav');
		} else {
			$('.navbar').removeClass('navbar-fixed-top');
			$('html').removeClass('has-fixed-nav');
		}
	});


// ---------- Animations ----------

	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {
				setTimeout(function(){
					elem.addClass( animation + " visible" );
				}, animationDelay);
			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});
	
// ---------- Easy Tab ----------

    $(document).ready( function() {
      $('#tab-container').easytabs();
    });
	
	
})(jQuery);