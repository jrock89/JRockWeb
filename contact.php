<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message']; 
// $field_number = $_POST['contact'];

$mail_to = 'jesserock11@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Phone Number: '.$field_number. "\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. I will contact you shortly.');
		window.location = 'http://www.jrockweb.com';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to jesserock11@gmail.com');
		window.location = 'index.php';
	</script>
<?php
}
?>