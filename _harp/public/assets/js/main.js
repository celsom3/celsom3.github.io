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
	  if( $(this).scrollTop() > (splashHeight + 30) ) {
	    mainNav.addClass(stickyClass);
	  } else {
	    mainNav.removeClass(stickyClass);
	  }
	});

	// My splash
	var mousePos = getMousePosition();
	var middlePoint =getMiddlePoint();
	console.log(middlePoint);
	// var whichQuadrant = whichQuadrant(mousePos, middlePoint);

	$(document).mousemove(function(){
		// var whichQuadrant = whichQuadrant(mousePos, middlePoint);
		console.log(whichQuadrant(mousePos, middlePoint));
	});



//===============================
//
// End DOCUMENT.READY block
});
//
//===============================


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





(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD module
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS-like environment (i.e. Node)
    module.exports = factory();
  } else {
    // Browser global
    root.transformicons = factory();
  }
}(this || window, function () {

  // ####################
  // MODULE TRANSFORMICON
  // ####################
  'use strict';

  var
    tcon = {}, // static class
    _transformClass = 'tcon-transform',

    // const
    DEFAULT_EVENTS = {
      transform : ['click'],
      revert : ['click']
    };

  // ##############
  // private methods
  // ##############

  /**
  * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
  * @private
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
  * @returns {array} Array of DOM elements
  */
  var getElementList = function (elements) {
    if (typeof elements === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(elements));
    } else if (typeof elements === 'undefined' || elements instanceof Array) {
      return elements;
    } else {
      return [elements];
    }
  };

  /**
  * Normalize a string with eventnames separated by spaces or an array of eventnames into an array of eventnames.
  * @private
  *
  * @param {(string|array)} elements - String with eventnames separated by spaces or array of eventnames
  * @returns {array} Array of eventnames
  */
  var getEventList = function (events) {
    if (typeof events === 'string') {
      return events.toLowerCase().split(' ');
    } else {
      return events;
    }
  };

  /**
  * Attach or remove transformicon events to one or more elements.
  * @private
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @param {object} [events] - An Object containing one or more special event definitions
  * @param {boolean} [remove=false] - Defines wether the listeners should be added (default) or removed.
  */
  var setListeners = function (elements, events, remove) {
    var
      method = (remove ? 'remove' : 'add') + 'EventListener',
      elementList = getElementList(elements),
      currentElement = elementList.length,
      eventLists = {};

    // get events or use defaults
    for (var prop in DEFAULT_EVENTS) {
      eventLists[prop] = (events && events[prop]) ? getEventList(events[prop]) : DEFAULT_EVENTS[prop];
    }

    // add or remove all events for all occasions to all elements
    while(currentElement--) {
      for (var occasion in eventLists) {
        var currentEvent = eventLists[occasion].length;
        while(currentEvent--) {
          elementList[currentElement][method](eventLists[occasion][currentEvent], handleEvent);
        }
      }
    }
  };

  /**
  * Event handler for transform events.
  * @private
  *
  * @param {object} event - event object
  */
  var handleEvent = function (event) {
    tcon.toggle(event.currentTarget);
  };

  // ##############
  // public methods
  // ##############

  /**
  * Add transformicon behavior to one or more elements.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @param {object} [events] - An Object containing one or more special event definitions
  * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
  * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.add = function (elements, events) {
    setListeners(elements, events);
    return tcon;
  };

  /**
  * Remove transformicon behavior from one or more elements.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @param {object} [events] - An Object containing one or more special event definitions
  * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
  * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.remove = function (elements, events) {
    setListeners(elements, events, true);
    return tcon;
  };

  /**
  * Put one or more elements in the transformed state.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be transformed
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.transform = function (elements) {
    getElementList(elements).forEach(function(element) {
      element.classList.add(_transformClass);
    });
		$('nav').css('display', 'block');
    return tcon;
  };

  /**
  * Revert one or more elements to the original state.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be reverted
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.revert = function (elements) {
    getElementList(elements).forEach(function(element) {
      element.classList.remove(_transformClass);
    });
		$('nav').css('display', 'none');
    return tcon;
  };

  /**
  * Toggles one or more elements between transformed and original state.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.toggle = function (elements) {
    getElementList(elements).forEach(function(element) {
      tcon[element.classList.contains(_transformClass) ? 'revert' : 'transform'](element);
    });
    return tcon;
  };

  return tcon;
}));
