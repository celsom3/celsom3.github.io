<?php
// Check for empty fields
if(empty($_POST['rsvp-name'])  		||
   empty($_POST['rsvp-email']) 		||
   empty($_POST['rsvp-phone']) 		||
   empty($_POST['rsvp-persons'])      ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$persons = $_POST['rsvp-persons'];

	
// Create the email and send the message
$to = 'celso.mireles@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Wedding RSVP:  $name";
$email_body = "You have received a new RSVP to your wedding.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nPersons:# $persons";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>