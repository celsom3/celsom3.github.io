<?php




	$msg = "no"; 
    $name     = $_POST['name'];
    $email    = $_POST['email'];
    $phone = $_POST['phone'];
    $persons    = $_POST['persons'];
    $wedding    = $_POST['wedding'];
    $reception = $_POST['reception'];
    
    if($name !='' && $email!='' && $persons !='' && $wedding !=''){
        $to = "celso.mireles@gmail.com";
	$subject = "[RSVP Mail]";
	$message = "<p>Dear Admin,</p><p>You have a RSVP request </p><p>Please find the below information</p>
                    <p>Name : ".$name."</p>
                    <p>Email : ".$email."</p>
                    <p>Phone : ".$phone."</p>
                    <p>Number of Persons Attanding : ".$persons."</p>
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
