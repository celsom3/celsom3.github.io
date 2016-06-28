// Author: Celso Mireles
// Website: http://PochoLabs.com
// License: MIT License
// Github:

(function(global, $) {

	var hoverShow = function(options) {
        return new hoverShow.init(options);
  };

//*********************
//
//  Declare plugin variables
//
//*********************

	// In the future, this will be the default selector
	var hoverShow_Class = '.hoverShow';

	var currentQuadrant = null;


	// Initialize a data object where translation will get appended to.
	var opts = {}



	hoverShow.prototype = {

		listening: function() {

		},

		getMousePosition: function() {
			var currentMousePos = { x: -1, y: -1 };
		    $(document).mousemove(function(event) {
		        currentMousePos.x = event.pageX;
		        currentMousePos.y = event.pageY;
						// console.log('X: ' + currentMousePos.x);
						// console.log('Y: ' + currentMousePos.y);
						// console.log(whichQuadrant(currentMousePos, getMiddlePoint()));
		    });
				return currentMousePos;
		},
		getMiddlePoint: function(){
			var wHeight = $(window).height();
			var wWidth = $(window).width();
			return {
				x: wWidth / 2,
				y: wHeight / 2
			};
		},

		whichQuadrant: function(pos, middle) {

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


		},


		logOptions: function() {
			if ( console ) {
				console.log('options: ' + this.opts);
			}
			return this;
		},
		setOption: function (opts) {
			this.opts = opts;
			this.listening(this.option);
			return this;
		}
	};

	hoverShow.init = function(opts) {
		var self = this;
		self.opts = opts;
	};

	hoverShow.init.prototype = hoverShow.prototype;

	global.hoverShow = global._h = hoverShow;


}(window, jQuery));
