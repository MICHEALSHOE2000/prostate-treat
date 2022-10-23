<?php
    
    $fname = $_POST['firstName'];
    $lname = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "aderintomicheal6@gmail.com";
    $subject = "New Form Submission";
    $body = "";

    $body .="FIRST NAME: ".$fname."\n";
    $body .="LAST NAME: ".$lname."\n";
    $body .="EMAIL: ".$email."\n";
    $body .="MESSAGE: ".$message;

	$message_sent = "";

    if(mail($to,$subject,$body)){
		    $message_sent = "sent";
    }
    
    echo $message_sent;
    
?>