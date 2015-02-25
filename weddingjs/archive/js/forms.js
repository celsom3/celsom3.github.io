// Lantern Wedding Theme 
// Version : v1.0

function validate_email(email) 
{
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   return reg.test(email);
}
$(document).ready(function(e) {
    $('#contact-submit').click(function(e) {
        e.preventDefault();
		contact_submit();
    });
	 $('#rsvp-submit').click(function(e) {
        e.preventDefault();
		rsvp_submit();
    });
	$('input:text, textarea').keyup(function(e) {
		$(this).removeClass('error');
	});
	$('#contact-error').hide();
	$('#contact-loading').hide();
	$('#contact-success').hide();
	$('#contact-failed').hide();
	$('#rsvp-error').hide();
	$('#rsvp-loading').hide();
	$('#rsvp-success').hide();
	$('#rsvp-failed').hide();
});



// Contact form validation

function contact_submit()
{
	$('#contact-error').hide();
	var submit_flag = 'yes';
	var contact_name = $('#contact-name').val();
	if( contact_name =='')
	{
			if(submit_flag == 'yes')
			{
				$('#contact-name').focus();
			}
			$('#contact-name').addClass('error');
			submit_flag = 'no';
	}
	var contact_email =$('#contact-email').val();
	if(contact_email =='')
	{
			if(submit_flag == 'yes')
			{
				$('#contact-email').focus();
			}
			$('#contact-email').addClass('error');
			submit_flag = 'no';
	}
	if(!validate_email(contact_email))
	{
			if(submit_flag == 'yes')
			{
				$('#contact-email').focus();
			}
			$('#contact-email').addClass('error');
			submit_flag = 'no';
	}
	var contact_phone = $('#contact-phone').val();
	if($('#contact-phone').val() =='')
	{
			if(submit_flag == 'yes')
			{
				$('#contact-phone').focus();
			}
			$('#contact-phone').addClass('error');
			submit_flag = 'no';
	}
	var contact_subject = $('#contact-subject').val()
	if( contact_subject =='')
	{
			if(submit_flag == 'yes')
			{
				$('#contact-subject').focus();
			}
			$('#contact-subject').addClass('error');
			submit_flag = 'no';
	}
	var contact_msg = $('#contact-msg').val();
	if( contact_msg =='' || contact_msg== 'Your Message *')
	{
			if(submit_flag == 'yes')
			{
				$('#contact-msg').focus();
			}
			$('#contact-msg').addClass('error');
			submit_flag = 'no';
	}
	if(submit_flag != 'yes')
	{	
		$('#contact-error').show().html('Please review the above details filled');
	}
	else
	{
		$('#contact-error').hide();
		$('#contact-success').hide();
		$('#contact-failed').hide();
		$('#contact-form').hide();
		$('#contact-loading').show();

		$.ajax({
			url: 'reachus.php',
			type: 'post',
			cache: false,
			data: {'name' : contact_name, 'email' : contact_email , 'phone' : contact_phone, 'subject' : contact_subject, 'msg' : contact_msg},
			success: function(data) {
							if(data =='ok')
							{
								$('#contact-error').hide();
								$('#contact-failed').hide();
								$('#contact-form').hide();
								$('#contact-loading').hide();
								$('#contact-success').show();
								
								$('#contact-name').val('');
								$('#contact-email').val('');
								$('#contact-phone').val('');
								$('#contact-subject').val('');
								$('#contact-msg').val('');
								setTimeout("$('#contact-success').hide();$('#contact-form').show();",5000);
							}
							else
							{
								$('#contact-error').hide();
								$('#contact-success').hide();
								$('#contact-form').hide();
								$('#contact-loading').hide();
								$('#contact-failed').show();
								setTimeout("$('#contact-failed').hide();$('#contact-form').show();",5000);
							}
					}
				});	
	}
}



// RSVP form validation

function rsvp_submit()
{
	$('#rsvp-error').hide();
	var submit_flag = 'yes';
	var rsvp_name = $('#rsvp-name').val();
	if( rsvp_name =='')
	{
			if(submit_flag == 'yes')
			{
				$('#rsvp-name').focus();
			}
			$('#rsvp-name').addClass('error');
			submit_flag = 'no';
	}
	var rsvp_email =$('#rsvp-email').val();
	if(rsvp_email =='')
	{
			if(submit_flag == 'yes')
			{
				$('#rsvp-email').focus();
			}
			$('#rsvp-email').addClass('error');
			submit_flag = 'no';
	}

	var rsvp_phone =$('#rsvp-phone').val();
	if(rsvp_phone =='')
	{
			if(submit_flag == 'yes')
			{
				$('#rsvp-phone').focus();
			}
			$('#rsvp-phone').addClass('error');
			submit_flag = 'no';
	}


	if(!validate_email(rsvp_email))
	{
			if(submit_flag == 'yes')
			{
				$('#rsvp-email').focus();
			}
			$('#rsvp-email').addClass('error');
			submit_flag = 'no';
	}
	var rsvp_persons = $('#rsvp-persons').val();
	if($('#rsvp-persons').val() =='')
	{
			if(submit_flag == 'yes')
			{
				$('#rsvp-persons').focus();
			}
			$('#rsvp-persons').addClass('error');
			submit_flag = 'no';
	}
	//var rsvp_wedding = $('#rsvp-wedding').val()
	
	// Adds value to rsvp_wedding only if it is checked
	
	if($('#rsvp-wedding').is(':checked')){
		var rsvp_wedding = $('#rsvp-wedding').val();
	}
	else{
		var rsvp_wedding = ' ';
	}

	/*if( rsvp_wedding =='')
	{
			if(submit_flag == 'yes')
			{
				$('#rsvp-wedding').focus();
			}
			$('#rsvp-wedding').addClass('error');
			submit_flag = 'no';
	}*/
	
	//var rsvp_reception = $('#rsvp-reception').val()
	if($('#rsvp-reception').is(':checked')){
		var rsvp_reception = $('#rsvp-reception').val();
	}
	else{
		var rsvp_reception = ' ';
	}

	/*if( rsvp_reception =='')
	{
			if(submit_flag == 'yes')
			{
				$('#rsvp-reception').focus();
			}
			$('#rsvp-reception').addClass('error');
			submit_flag = 'no';
	}*/

	if(submit_flag != 'yes')
	{	
		$('#rsvp-error').show().html('Please review the above details filled');
	}
	else
	{
		$('#rsvp-error').hide();
		$('#rsvp-success').hide();
		$('#rsvp-failed').hide();
		$('#rsvp-form').hide();
		$('#rsvp-loading').show();

		$.ajax({
			url: '../rsvp.php',
			type: 'post',
			cache: false,
			data: {'name' : rsvp_name, 'email' : rsvp_email , 'phone' : rsvp_phone, 'persons' : rsvp_persons, 'wedding' : rsvp_wedding, 'reception' : rsvp_reception},
			success: function(data) {
							if(data =='ok')
							{
								$('#rsvp-error').hide();
								$('#rsvp-failed').hide();
								$('#rsvp-form').hide();
								$('#rsvp-loading').hide();
								$('#rsvp-success').show();
								
								$('#rsvp-name').val('');
								$('#rsvp-email').val('');
								$('#rsvp-phone').val('');
								$('#rsvp-subject').val('');
								$('#rsvp-msg').val('');
								setTimeout("$('#rsvp-success').hide();$('#rsvp-form').show();",5000);
							}
							else
							{
								$('#rsvp-error').hide();
								$('#rsvp-success').hide();
								$('#rsvp-form').hide();
								$('#rsvp-loading').hide();
								$('#rsvp-failed').show();
								setTimeout("$('#rsvp-failed').hide();$('#rsvp-form').show();",5000);
							}
					}
				});	
	}
}
