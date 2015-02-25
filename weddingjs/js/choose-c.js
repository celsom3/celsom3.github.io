$(document).ready(function(){
	
	$.ajax('/spanish2.html',{
			success: function(response){
				
				$('.result-content-spanish').html(response).addClass('hidden');
			}
		});
	$.ajax('/english2.html',{
			success: function(response){
				
				$('.result-content-english').html(response).addClass('hidden');
			}
		});

	$('#spanish').on('click','button',function(){
		$.ajax('/spanish2.html',{
			success: function(response){
				$('.choose-container').addClass('hidden');
				$('#menu-toggle').removeClass('hidden');
				$('.content-spanish').removeClass('hidden');
			}
		});
	}); 


});