<!-- <?php
    require_once('lab4conec.php');

    $fname = $lname = $gender = $email = $password = $pwd = '';

    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $pwd = $_POST['password'];
    $password = md5($pwd);

    $sql = "INSERT INTO lab4user(firstname, lastname,gender, email, password) 
    VALUES('$fname','$lname','$gender','$email','$password') ";

    $result = mysqli_query

    if ($result) {
        herder("Location: login.php");
    }

?> -->