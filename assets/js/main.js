$(document).ready(function(){
	// svg

	// if(SVG.supported) {
	// 	var draw = SVG('svgme').size('100%', '100%');
	// 	var polygon1 = draw.polygon('184.458,269.258 198.239,172.788 215.328,221.023 ').fill('#201F1F');
	// 	var polygon2 = draw.polygon('202.462,159.833 219,216.889 219,124.277 ').fill('#201F1F');
	// 	var polygon3 = draw.polygon('224.148,117.111 286.44,60.883 268.8,103.33 ').fill('#201F1F');
	// 	var polygon4 = draw.polygon('224,124.277 340.867,93.407 224,210.825 ').fill('#201F1F');
	// 	var polygon5 = draw.polygon('276.518,102.778 296.914,55.371 353.142,24.5 ').fill('#201F1F');
	// 	var polygon6 = draw.polygon('286.44,102.778 362.514,24.5 411.024,44.896 ').fill('#201F1F');
	// 	var polygon7 = draw.polygon('286.44,161.212 371.885,71.357 435.831,88.997 ').fill('#201F1F');
	// 	var polygon8 = draw.polygon('381.256,66.396 413.78,49.307 431.972,82.933 ').fill('#201F1F');
	//
	// 	var polygon9 = draw.polygon('366.372,129.239 440.24,96.164 497.021,144.674 435.831,124.277 ').fill('#201F1F');
	// 	var polygon10 = draw.polygon('180.047,381.714 139.806,328.794 176.188,334.858 ').fill('#201F1F');
	// 	var polygon11 = draw.polygon('139.806,326.038 144.767,306.192 180.047,275.322 171.227,328.794 ').fill('#201F1F');
	// 	var polygon12 = draw.polygon('184.458,359.664 186.663,275.322 242.339,248.862 ').fill('#201F1F');
	// 	var polygon13 = draw.polygon('196.585,355.254 232.968,387.778 242.339,271.463 ').fill('#201F1F');
	// 	var polygon14 = draw.polygon('282.03,198.697 377.949,170.583 366.372,214.132 ').fill('#201F1F');
	// 	var polygon15 = draw.polygon('375.744,211.376 385.666,168.929 489.303,177.198 ').fill('#201F1F');
	// 	var polygon16 = draw.polygon('431.972,202.556 499.776,181.057 559.312,194.287 ').fill('#201F1F');
	// 	var polygon17 = draw.polygon('521.275,207.242 548.287,237.836 630.424,216.889 ').fill('#201F1F');
	// 	var polygon18 = draw.polygon('551.595,243.349 570.338,302.058 633.732,222.539 ').fill('#201F1F');
	// 	var polygon19 = draw.polygon('215.052,254.65 278.584,194.425 391.661,154.666 506.328,170.618 535,185.467 535,177.198\
	//   489.55,144.674 424.377,131.444 336.666,144.674 269.933,177.198 192.19,262.298 ').fill('#201F1F');
	// 	var polygon20 = draw.polygon('315.691,303.91 331.729,297.747 348.775,284.366 353.142,294 376,294 376,284.142 383.038,294.026\
	//   393.448,288.942 375.744,275 354.796,275 319.516,295.006 ').fill('#201F1F');
	// 	var polygon21 = draw.polygon('471.938,283.315 487.648,270.774 506.392,264.159 521.275,263.194 534.506,269.238 542.774,283\
	//   527,283 527,275.322 521.381,283.315 502.034,280.674 500.328,275 489.165,275 483.515,277.917 476.348,283.373 481.447,289.576\
	//   495.366,297.628 480.069,294.33 ').fill('#201F1F');
	// 	var polygon22 = draw.polygon('408.819,350.844 419.293,367.933 435.831,356.908 459.535,350.844 463.394,359.389 432.523,371.792\
	//   414.883,375.1 406.062,362.972 ').fill('#201F1F');
	// 	var polygon23 = draw.polygon('479.38,355.254 489.303,348.639 497.021,351.947 503.635,359.664 511.353,350.844 503.635,362.972\
	//   489.303,365.177 ').fill('#201F1F');
	// 	var polygon24 = draw.polygon('396.002,441.802 427.493,428.145 454.573,420 471.662,420 495.366,413.26 516.314,422.57\
	//   528.809,422.172 532.852,416.459 541.121,415.716 531.198,408.179 521.275,413.512 503.084,399 489.303,399 471.938,405.518\
	//   463.394,401.058 441.343,408.199 417.088,427.481 403.307,434.09 388.974,435.74 ').fill('#201F1F');
	// 	var polygon25 = draw.polygon('466.149,449.047 471.938,437 489.303,437 497.021,444.914 479.38,458.835 481.585,470 497.021,470\
	//   484.893,476 466.149,476 476.072,464.866 ').fill('#201F1F');
	// 	var polygon26 = draw.polygon('246.198,465.781 270.178,522.423 278.033,560.391 251.642,554.844 246.715,544.904 237.361,541.036\
	//   246.741,532.212 242.178,515.672 231,501.337 231,522.285 212.756,530.554 189,512.914 189,490.312 202.439,478.735\
	//   189.314,441.867 173.432,405 179.496,405 196.585,446.002 219.462,471.465 ').fill('#201F1F');
	// 	var polygon27 = draw.polygon('232,435.187 232,420.854 226,416.443 226,402.111 219.286,391.637 210.968,398.804 199.917,413.412\
	//   210.93,425.264 222.292,420.303 ').fill('#201F1F');
	// 	var polygon28 = draw.polygon('192.175,420.303 196.585,393.842 208.713,387.778 213.398,378.958 199.893,369.036 186.663,365.177\
	//   184.458,378.958 187.214,398.804 ').fill('#201F1F');
	// 	var polygon29 = draw.polygon('428.664,552.787 481.585,540.661 422.049,610.486 466.149,607.73 488.936,566.387 534.506,537.169\
	//   573.094,500.786 590.183,456.686 586.324,395.496 575.85,460.82 551.595,503.542 515.396,523.389 476.439,511.627 443.365,530\
	//   393.752,530 ').fill('#201F1F');
	// 	var polygon30 = draw.polygon('260.531,480.39 290.942,530.371 329.056,602.769 351,633.271 351,588.436 409.311,566.386\
	//   368.639,562.711 344.444,556.831 295.965,507.585 260.516,444.375 239.759,405.419 ').fill('#201F1F');
	// 	var polygon31 = draw.polygon('551.595,600.931 555.086,640.621 542.774,688.396 507.356,746.463 471.938,777.333 534.506,728.087\
	//   563.906,657.526 566.846,633.271 621.237,642.826 691.062,667.816 675.627,641.355 597.716,617.836 548.471,592.11 ').fill('#201F1F');
	// 	var polygon32 = draw.polygon('278.217,585.68 232.509,603.228 151.611,625.967 108.958,642.113 216.166,617.848 247.858,610.491\
	//   249.325,668.555 255.939,619.307 278.113,592.111 273,622.246 273,657.895 283.762,684.722 277.98,610.486 283.841,607.546\
	//   293.41,672.226 333.842,744.258 304.444,653.116 283.131,578.881 ').fill('#201F1F');
	// 	var polygon33 = draw.polygon('247.301,242.247 278.033,204.761 348.732,216.889 ').fill('#201F1F');
	// 	var polygon34 = draw.polygon('389.102,287.633 396.387,280.296 381.624,251 350.386,251 319.516,269.225 315.691,282.655\
	//   343.035,265.391 365.581,262.294 376,269.258 376,276.424 ').fill('#201F1F');
	// 	var polygon35 = draw.polygon('473.316,273.393 489.303,257.958 508.872,255.201 521.275,258.784 534.506,265.951 508.872,251.066\
	//   495.642,252.169 511.353,247.483 528.718,254.099 534.506,255.477 503.911,234.253 483.79,237.836 471.938,257.958 463.394,275.322\
	//   ').fill('#201F1F');
	// }

	// tipsy
	$('svg#celso > polygon').tipsy({gravity: 's', fade: true, offset: 0});

	$('svg#celso > polygon').on('click', function(e) {
		if($(this).attr('data-link')) {
			window.open($(this).attr('data-link'));
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
