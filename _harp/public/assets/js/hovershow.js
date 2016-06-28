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


	// Initialize a data object where translation will get appended to.
	var opts = {}



	hoverShow.prototype = {

		listening: function() {

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
