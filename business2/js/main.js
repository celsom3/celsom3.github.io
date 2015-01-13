$(document).ready(function(){
	var $root = $('html, body');
	$('#nav a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});


});