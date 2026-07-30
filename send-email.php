<?php
// Get data from form
$project      = trim($_POST['project']);
$name         = trim($_POST['name']);
$email        = trim($_POST['email']);
$ip           = getUserIP();
$phone_number = trim($_POST["full_number"]);

$to      = "suneel@property-first.com";
$subject = "New CRM Lead - " . $project;

// Clean and format the message properly
$txt = "NEW LEAD INQUIRY\n";
$txt .= "================\n\n";
$txt .= "Project: " . $project . "\n";
$txt .= "Name: " . $name . "\n";
$txt .= "Email: " . $email . "\n";
$txt .= "Telephone: " . $phone_number . "\n";
$txt .= "IP Address: " . $ip . "\n";
$txt .= "Submission Date: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: propertyfirstads@gmail.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Debug: Check what's being received (remove this after testing)
error_log("Project value received: '" . $project . "'");

if ($email != NULL) {
    if(mail($to, $subject, $txt, $headers)) {
        error_log("Email sent successfully");
    } else {
        error_log("Email failed to send");
    }
}

// Redirect
header("Location: thankyou.html");
exit(); // Always exit after redirect

// Function to get user IP (your existing function is fine)
function getUserIP() {
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
        $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
        $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }

    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    return $ip;
}
?>