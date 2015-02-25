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
/*
	$('.lang-option > a').on('click',function(event){
		event.preventDefault();
		var page = $(this).attr('href');
		//$('#hidden-form').submit();
		if (page == "english2.php"){
			$('.spanish-content').remove();
		}
		else{
			$('.english-content').remove();
		}
		
	});

*/



	// ***** SPANISH *********

	//$('.spanish-content').detach();
	//$('.english-content').detach();

	$('#lang-spanish').click(function(event){
		event.preventDefault();
		//alert("You clicked on Spanish.");
		$('.english-content').remove();
		//$('.spanish-content').appendTo('body');
		$('.choose-container').css('display','none');
		var page = $(this).attr('href');

		$('.spanish-content').css('display','inline');

		

	});

	// ***** ENGLISH *********

	$('#lang-english').click(function(event){
		event.preventDefault();
		$('.choose-container').css('display','none');
		$('.spanish-content').detach().remove();
		$('.english-content').appendTo('body');

		$('.english-content').css('display','inline');
		$('.spanish-content').detach().remove();
		window.location.reload();
		$('.spanish-content').detach().remove();

	});
	


});