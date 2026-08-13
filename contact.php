<?php
if(isset($_POST['submit'])){

    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $phone   = htmlspecialchars(trim($_POST['phone']));
    $project = htmlspecialchars(trim($_POST['project_name']));

    // Change this to your email address
    $to = "your@email.com";

    $subject = "New Enquiry - " . $project;

    $message = "
    New enquiry received.

    Project: $project

    Name: $name
    Email: $email
    Phone: $phone
    ";

    $headers  = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if(mail($to, $subject, $message, $headers)){
        echo "<script>alert('Thank you! Your enquiry has been submitted successfully.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Sorry! Something went wrong. Please try again.'); window.history.back();</script>";
    }
}
?>