<?php
    $servername = "localhost";
    $dbname = 'mainpage';
    $username = "root";
    $password = "";
    $conn = new mysqli($servername, $username, $password, $dbname);

    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cfpassword = $_POST['cfpassword'];
    // $nameErr = $emailErr = $passwordErr = $cfpasswordErr = "";
    if (empty($email)) {
        die ("Email is required");
    };
    if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die ("Valid email is required");
    }
    if (strlen($password) <= 3) {
        die ("Password must be at least 3 characters");
    }
    if (! preg_match("/[a-z]/i", $password)) {
        die ("Password must be contain at least one letter");
    }

    if (! preg_match("/[0-9]/i", $password)) {
        die ("Password must be contain at least one num");
    }
    if ($password !== $cfpassword) {
        die ("Password must be match");
    }
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
 // thêm file database
    $sql = "INSERT INTO admin2 (name, email, password_hash) 
            VALUES(?, ?, ?)";

    $stmt = $conn -> stmt_init();

    if (! $stmt -> prepare($sql)) {  
        die("SQL error: " .$conn -> error);
    }

    $stmt -> bind_param("sss", $name, $email, $passwordHash);

   if ( $stmt -> execute()) {
        header('location: formdn.php');
   }
    // if( ){
    //     // header("location:login.php");
    // }
    // else {
    //     if ($mysqli -> errono === 1062) {
    //         die ("email already taken");
    //     }
    //     else {
    //         die($mysqli->error." ".$mysqli->errono);
    //     }
    // }

    // print_r($_POST);
    // echo "<br>";
    // var_dump($passwordHash)
?>

