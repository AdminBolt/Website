<?php

//REMOVE NOT TO ALLOW REMOTE ACCESS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
//REMOVE NOT TO ALLOW REMOTE ACCESS END
header('Content-Type: application/json');

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$postRequired = ["annualSpending","email","companyName","companyPosition","fullName","interested","numberAccount","panelType"];

//CONFIG
$config = [
	"SMTPHost"=>'mail.adminbolt.com',
	"SMTPUsername"=>'form@adminbolt.com',
	"SMTPPassword"=>'ziXaDxxaADxNB3Pe0XxXA',
	"SMTPPort"=>587,
	"SMTPIgnoreSslCert"=>true,
	"SMTPFrom"=>['email'=>'form@adminbolt.com','name'=>'admin bolt'],
	"SMTPSendMailTo"=>'form@adminbolt.com',
	"googleRecaptchaSecret"=>"6LdMQuoqAAAAAE9RA4SCa8f9Dx9OSqnuh_xYukRt",
	"mailSubject"=>'Website Form Submitted',
	"mailBody"=>'
	Hi,<br>
	Full name : {fullName}<br>
	Email : {email}<br>
	Company Name : {companyName}<br>
	Panel Type : {panelType}<br>
	Company Position : {companyPosition}<br>
	Number Account : {numberAccount}<br>
	Annual Spendings : {annualSpending}<br>
	Interested : {interested}<br>
	',
];
//CONFIG END


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$input = $_POST;
} else {
	$input = $_GET;
}
if(!empty($config['googleRecaptchaSecret'])){
	if (isset($input['recaptchaToken']) && !empty($input['recaptchaToken'])) {
		$data = array(
			'secret' => $config['googleRecaptchaSecret'],
			'response' => $input['recaptchaToken']
		);
		$verify = curl_init();
		curl_setopt($verify, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
		curl_setopt($verify, CURLOPT_POST, true);
		curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
		curl_setopt($verify, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
		$response = curl_exec($verify);
		$responseData = json_decode($response, true);
		if (!isset($responseData['success']) || !$responseData['success']) {
			die(json_encode(["status" => "error", "message" => "Captcha not validated"]));
		}
	}else{
		die(json_encode(["status" => "error", "message" => "Captcha Error"]));
	}
}


foreach($postRequired as $required) {
	if(!isset($input[$required]))
		die(json_encode(["status" => "error", "message" => "Missing $required"]));
}

$mail = new PHPMailer(true);

try {
	$bodyParser = $config["mailBody"];
	$bodyParser = preg_replace_callback('/\{(.*?)\}/', function ($matches) use ($input) {
		return $input[$matches[1]] ?? 'undefined';
	}, $bodyParser);
	$mail->isSMTP();
	$mail->Host = $config["SMTPHost"];
	$mail->SMTPAuth = true;
	$mail->Username = $config["SMTPUsername"];
	$mail->Password = $config["SMTPPassword"];
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
	$mail->Port = $config["SMTPPort"];
	if($config["SMTPIgnoreSslCert"]){
		$mail->SMTPOptions = [
			'ssl' => [
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true,
			],
		];
	}
	$mail->CharSet = 'UTF-8';
	$mail->Encoding = 'base64';
	$mail->setFrom($config["SMTPFrom"]["email"], $config["SMTPFrom"]["name"]);
	$mail->addAddress($config['SMTPSendMailTo']);
	$mail->Subject = $config["mailSubject"];
	$mail->Body    = $bodyParser;
	$mail->isHTML(true);

	$mail->send();

	die(json_encode(["status" => "success", "message" => "Email sent successfully"]));
} catch (Exception $e) {
	if(!isset($mail->ErrorInfo)){
		die(json_encode(["status" => "error", "message" => $mail->ErrorInfo]));
	}
	die(json_encode(["status" => "error", "message" => $e->getMessage()]));
}
?>
