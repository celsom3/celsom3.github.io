$(document).ready(function(){

	// This changes color on language options based on hover

	// ***** SPANISH *********
	$('#spanish').on('mouseenter',function(){
		$(this).css('background-color','rgba(40,175,120,0.7)');
		//469979 9CDBC3 rgba(40,175,120,0.7)
		
	});
	$('#spanish').on('mouseleave',function(){
		$(this).css('background-color','rgba(91,186,152,0.7)');
		// rgba(91,186,152,0.7) 5BBA98
		
	});

	// ***** ENGLISH *********
	$('#english').on('mouseenter',function(){
		$(this).css('background-color','rgba(153,51,204,0.7)');
		// rgba(153,51,204,0.7)  9933CC
		
	});
	$('#english').on('mouseleave',function(){
		$(this).css('background-color','rgba(144, 91, 186,0.7)');
		//905BBA  rgba(144, 91, 186,0.5)
	});

	// Event handlers for language decision

	// ***** SPANISH *********

	$('#lang-spanish').click(function(event){
		event.preventDefault();
		//alert("You clicked on Spanish.");
		$('.choose-container').css('display','none');
		var page = $(this).attr('href');

		$('.spanish-content').css('display','inline');

	});

	// ***** ENGLISH *********

	$('#lang-english').click(function(event){
		event.preventDefault();
		$('.choose-container').css('display','none');
		var page = $(this).attr('href');

		$('.english-content').css('display','inline');
	});

});