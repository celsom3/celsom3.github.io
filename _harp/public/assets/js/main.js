$(document).ready(function(){
	// Make splash full height
	var wHeight = $(window).height();
	var wWidth = $(window).width();
	//$('#splash').css('height', wHeight + 'px');

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
	var  mainNav = $(".main-nav"),
  stickyClass = "main-nav-scrolled",
  splashHeight = $('#splash').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > (splashHeight - 31) ) {
	    mainNav.addClass(stickyClass);
	  } else {
	    mainNav.removeClass(stickyClass);
	  }
	});


	// Smooth scroll
	$('body').on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 130
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
	if ( pos > 66) {
		whichThird = 3;
	} else if ( pos > 33 ) {
		whichThird = 2;
	} else  {
		whichThird = 1;
	}

	//
	switch (whichThird) {
		case 1:
			$('#splash-img').attr('src', 'assets/img/feature/01.png');
			$('#splash-heading').html('Engineer');
			break;
		case 2:
			$('#splash-img').attr('src', 'assets/img/feature/02.png');
			$('#splash-heading').html('Artist');
			break;
		case 3:
			$('#splash-img').attr('src', 'assets/img/feature/03.png');
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
