$(document).ready(function(){
	// Make splash full height
	var wHeight = $(window).height();
	var wWidth = $(window).width();

	$('#splash').height(857 - $('.main-nav').height() );

	$(window).resize(function(){
		if($(window).width() > 550){
			$('nav').css('display', 'block');
		} else {
			$('nav').css('display', 'none');
			//$('#burger > button').click();
		}
	});


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

	// Sticky Nav

	$(window).scroll(function() {
		var  mainNav = $(".main-nav"),
	  stickyClass = "main-nav-scrolled",
	  splashHeight = $('#splash').height();

	  if( $(this).scrollTop() > (splashHeight + 50) ) {
	    mainNav.addClass(stickyClass);
	  } else {
	    mainNav.removeClass(stickyClass);
	  }
	});


	// Smooth scroll
	$('body').on('click', 'a.page-scroll,a.page-scrollx', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 150
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


	// Show slider

	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
		start: [50],
		connect: false,
		range: {
			'min': 0,
			'max': 100
		}
	});


		// The Splash section

		var mousePos = getMousePosition();
		var middlePoint =getMiddlePoint();
		var posPercent = 50;
		//console.log(middlePoint);
		// var whichQuadrant = whichQuadrant(mousePos, middlePoint);

		$(document).mousemove(function(){

			var posPercent = ((mousePos.x/wWidth) * 100);

			slider.noUiSlider.set( posPercent );

			myHoverShow( posPercent );
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


		// Display random quote
		displayRandomQuote();

		// Now display a random quote whenever the quote is clicked
		$('.my-quote').on('click', function(){
			displayRandomQuote();
		});


//===============================
//
// End DOCUMENT.READY block
});
//
//===============================

function myHoverShow ( pos ) {
	var pos = pos;
	var whichThird = null;
	//console.log('Position: ' + pos + '\nType: ' + typeof(pos))

	// Determine which third the mouse is positioned in
	// and hence, which graphic to display.
	if ( pos > 50) {
		whichThird = 2;
	} else  {
		whichThird = 1;
	}

	//
	switch (whichThird) {
		case 1:
			$('#splash-img').attr('src', 'assets/img/feature/01.svg');
			$('#splash-heading').html('Engineer');
			break;
		case 2:
			$('#splash-img').attr('src', 'assets/img/feature/02.svg');
			$('#splash-heading').html('Artist');
			break;
		case 3:
			$('#splash-img').attr('src', 'assets/img/feature/03.svg');
			$('#splash-heading').html('Organizer');
			break;
		default:

	}



}


function getMousePosition(){
	var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
				// console.log('X: ' + currentMousePos.x);
				// console.log('Y: ' + currentMousePos.y);
				// console.log(whichQuadrant(currentMousePos, getMiddlePoint()));
    });
		return currentMousePos;
}

function getMiddlePoint(){
	var wHeight = $(window).height();
	var wWidth = $(window).width();
	return {
		x: wWidth / 2,
		y: wHeight / 2
	};
}

function whichQuadrant(pos, middle){

	// var pos = getMousePosition();
	// var middle = getMiddlePoint();
	var pos = pos;
	var middle = middle;

	var belowMiddle = pos.y > middle.y;
	var toRight = pos.x > middle.x;
	if(belowMiddle && toRight){

		return 2;
	} else if ( belowMiddle && !toRight ){
		return 3;
	} else if ( !belowMiddle && toRight) {
		return 1;
	} else if ( !belowMiddle && !toRight){
		return 4;
	} else {
		return 1;
	}


}

function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayQuote( num ) {
	var num = num;
	var quotes = [
		'I am a life long learner that likes to type on the keyboard.',
		'Fun Fact: I type using the Colemak layout. Slight typying efficiency...unlocked.',
		'While I graduated with a B.S. Degree in Business Management, my true passion has always been technology.',
		'I became a coder out of a passion for building tech tools for social justice movements.',
		'I also like to play guitar, but let\'s stay on the subject of web development.'
	];

	$('.my-quote').html(quotes[num - 1]);
}

function displayRandomQuote(){
	var randInt = getRandomIntBetween(1, 5);
	displayQuote(randInt);
}
