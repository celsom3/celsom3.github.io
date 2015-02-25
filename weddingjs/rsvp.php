<?php
	$msg = "no"; 
    $name     = $_POST['name'];
    $email    = $_POST['email'];
    $persons    = $_POST['persons'];
    $wedding    = $_POST['wedding'];
    $phone = $_POST['phone'];
    $reception = $_POST['reception'];
    
    if($name !='' && $persons !='' && $wedding !='' && $phone !=''){
        $to = "celso.mireles@gmail.com, ileana.m.salinas@gmail.com";
	$subject = "RSVP Mail";
	$message = "<p>You have a RSVP request. </p><p>Please find the below information</p>
                    <p>Name: ".$name."</p>
                    <p>Email: ".$email."</p>
                    <p>Phone: ".$phone."</p>
                    <p>Number of Persons Attending: ".$persons."</p>
                    <p>Event: ".$wedding." ".$reception;
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
