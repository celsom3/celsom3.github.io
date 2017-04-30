$(document).ready(function(){

	var hamburger = document.querySelector('.mobile-menu');
	var collapsibleNav = document.querySelector('#collapsible-nav');
	var navLinks = document.querySelectorAll('a.nav-link');
	var isVisible = collapsibleNav.dataset.visible === 'visible';

	hamburger.addEventListener('click', function() {
	  var collapsibleNav = document.querySelector('#collapsible-nav');
	  var navLinks = document.querySelectorAll('a.nav-link');
	  var isVisible = collapsibleNav.dataset.visible === 'visible';

	  if(isVisible) {
	    collapsibleNav.classList.remove('display');
	    collapsibleNav.setAttribute('data-visible', 'hidden');
	  } else {
	    collapsibleNav.classList.add('display');
	    collapsibleNav.setAttribute('data-visible', 'visible');
	  }
	});

	collapsibleNav.addEventListener('click', function(){
		var isVisible = collapsibleNav.dataset.visible === 'visible';
		var collapsibleNav = document.querySelector('#collapsible-nav');

		if(isVisible){
			collapsibleNav.classList.remove('visible');
			collapsibleNav.setAttribute('data-visible', 'hidden');
		}
	});


	// tipsy
	$('svg#celso > polygon').tipsy({
		gravity: 's',
		fade: true,
		offset: 0,
		trigger: 'focus'
	});

	$('svg#celso > polygon').hover(function(e){
		if($(this).attr('data-link')){
			$(this).css('cursor', 'pointer');
		}
	})

	var isActuallyHovering = false;

	$('svg#celso > polygon').mouseenter(function(){
		$('#svgme svg > polygon').removeClass('svg-hovered');
		$(this).trigger('focus');
		isActuallyHovering = true;
	}).mouseleave(function(){
		$(this).trigger('blur');
		isActuallyHovering = false;
	})

	$('svg#celso > polygon').on('click', function(e) {
		if($(this).attr('data-link')) {

			window.open($(this).attr('data-link'));
		}
	});


	randomHover();

	function randomHover() {
		setInterval(function(){
			if(!isActuallyHovering){
				$('#svgme svg > polygon').removeClass('svg-hovered').trigger('blur');
				if($('.tipsy').length === 0) {
					var randomPoly = getRandomInt(1, 35);
					var thing = $('#svgme svg > polygon');

					$(thing[randomPoly]).addClass('svg-hovered');
					$(thing[randomPoly]).trigger('focus');
				}
			}


		}, 2000);
	}

	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
	// transformicons
	transformicons
		.add('.tcon', function(){
			toggleMenu();
		})
		// .remove('.tcon-menu--xcross') // remove default behavior for the first icon
    // .add('.tcon-menu--xcross', {
    //     transform: "click",
    //     revert: "click"
    // })
		;


	// Smooth scroll
	$('body').on('click', 'a.page-scroll,a.page-scrollx', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 150
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


		// Initialize Modals

		var modalOptions = {
			animatedIn: 'lightSpeedIn',
			animatedOUt: 'bounceOutDown',
			color: '#f9e8a0',
			modalTarget: 'modal1'
		};

		var animationIn = 'lightSpeedIn';
		var animationOut = 'bounceOutDown';
		var modalColor = '#fff';

		$("#modal-link-01").animatedModal({
			animatedIn: animationIn,
			animatedOUt: animationOut,
			color: modalColor,
			modalTarget: 'modal1',
			overflow: 'scroll'
		});

		$("#modal-link-02").animatedModal({
			animatedIn: animationIn,
			animatedOUt: animationOut,
			color: modalColor,
			modalTarget: 'modal2',
			overflow: 'scroll'
		});

		$("#modal-link-03").animatedModal({
			animatedIn: animationIn,
			animatedOUt: animationOut,
			color: modalColor,
			modalTarget: 'modal3',
			overflow: 'scroll'
		});

		$("#modal-link-04").animatedModal({
			animatedIn: animationIn,
			animatedOUt: animationOut,
			color: modalColor,
			modalTarget: 'modal4',
			overflow: 'scroll'
		});

		$("#modal-link-05").animatedModal({
			animatedIn: animationIn,
			animatedOUt: animationOut,
			color: modalColor,
			modalTarget: 'modal5',
			overflow: 'scroll'
		});

		$("#modal-link-06").animatedModal({
			animatedIn: animationIn,
			animatedOUt: animationOut,
			color: modalColor,
			modalTarget: 'modal6',
			overflow: 'scroll'
		});

		$("#modal-link-blog").animatedModal({
			animatedIn: animationIn,
			animatedOUt: animationOut,
			color: modalColor,
			modalTarget: 'blog',
			overflow: 'scroll'
		});

		$('.noUi-handle').addClass('animated infinite pulse');


//===============================
//
// End DOCUMENT.READY block
});
//
//===============================
