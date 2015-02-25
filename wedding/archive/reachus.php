<?php
	$msg = "no"; 
    $name     = $_POST['name'];
    $email    = $_POST['email'];
    $phone    = $_POST['phone'];
    $msg_subject    = $_POST['subject'];
    $msgs     = $_POST['msg'];
    
    if($name !='' && $email!='' && $phone !='' && $msg_subject !='' && $msgs !=''){
        $to = "lanternthemes@gmail.com";
	$subject = "Contact Mail";
	$message = "<p>Dear Admin,</p><p>You have a contact request </p><p>Please find the below information</p>
                    <p>Name :".$name."</p>
                    <p>Email :".$email."</p>
                    <p>Phone :".$phone."</p>
                    <p>subject :".$msg_subject."</p>
                    <p>Message:</p><p>".$msgs."</p>";
	$header .= 'To: '.$name.' '.$email. "\r\n";
	$header  = "From:".$email."\r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html\r\n";
	$send = mail ($to,$subject,$message,$header);
        if($send){
	$msg = "ok"; 
	} else{
	$msg = "no"; 
	}
        echo $msg;
    }
	else
	{
		echo $msg;
	}
?>
