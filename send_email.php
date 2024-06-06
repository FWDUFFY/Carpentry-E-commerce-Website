<?php
// Start with PHPMailer class
use PHPMailer\PHPMailer\PHPMailer;

require_once './vendor/autoload.php/'

$mail = new PHPMailer();

// Configure an SMTP
$mail->isSMTP();
$mail->Host='';
$mail->SMPTAuth = true;
$mail->Username = '';
$mail->Password = '';
$mail->SMTPSecure = '';