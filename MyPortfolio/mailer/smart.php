<?php 

$name = $_POST['name'];
$text = $_POST['text'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$mail->isSMTP();                                     
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                               
$mail->Username = 'work00616@gmail.com';                 
$mail->Password = '1998QWE1998';                           
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                    
 
$mail->setFrom('work00616@gmail.com', 'Portfolio');   
$mail->addAddress('4reient4@gmail.com');    
$mail->isHTML(true);
$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	text: ' . $text . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>