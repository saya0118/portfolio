<?php

    $message_sent = false;
    
    if(isset($_POST['email']) && $_POST['email'] != ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

            //submit the form....
            $username = $_POST['name'];
            $userEmail = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];
        
            $to = "chemi0802@gmail.com";
            $body = "";
        
            $body .= "From: ".$username."\r\n";
            $body .= "Email: ".$userEmail."\r\n";
            $body .= "Message: ".$message."\r\n";
        
            // mail($to, $subject, $body);

            if(mail($to, $subject, $body)){
                $message_sent = true;
            }else{
                echo 'Failed to send';
            }

        }else{
            $invalid_class_name = "form-invalid";
        }
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Webform</title>
</head>
<body>

    <?php if($message_sent): ?>
        <h3>Thanks! We'll be in touch</h3>
    <?php else: ?>
    <div class="container">
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
            <div class="form-group">
                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
                <input type="email" class="form-control <?= $invalid_class_name ?? "" ?>" id="email" name="email" placeholder="Email" required />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div class="form-group">
                <textarea class="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <div>
                <button type="submit" class="btn">Send Message</button>
            </div>
        </form>
    </div>
    <?php endif ?>
</body>
</html>