<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <title>sign-in sign-up</title>
</head>

<body>

<div class="container" id="container">
        <div class="form-container sign-up">
            <div class="sign-out-sign-up">
                <a href="index.php"><i class="fa-solid fa-right-from-bracket" style="position: absolute; top: 20px; right: 15px; font-size: 30px;"></i></a>
            </div>
            <form action="" method="post">
                <h1>Create Account</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <input type="text" placeholder="ho" name="ho"required>
                <input type="text" placeholder="ten" name="ten" required>
                <input type="email" placeholder="Email" name="email">
                <input type="password" placeholder="matkhau" name="matkhau">
                <button name="btn" type="submit">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <div class="sign-out-sign-in">
                <a href="index.php"><i class="fa-solid fa-right-from-bracket fa-rotate-180" style="position: absolute; top: 20px; left: 15px; font-size: 30px;"></i>></a>
            </div>
            <form action="" method="post">
                <h1>Sign In</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email" name="email" required>
                <input type="password" placeholder="Password" name="matkhau">
                <a href="#">Forget Your Password?</a>
                <button name="btn1" type="submit">Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button class="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script_1.js"></script>
</body>

</html>

<?php
if(isset ($_POST['btn1']))
{
    $email = trim(strip_tags($_POST['email']));
    $mk = trim(strip_tags($_POST['matkhau']));
    require_once "functions.php";
    $kq = checkEmailPass($email,$mk);

if(session_status()=== PHP_SESSION_NONE) session_start();
if(is_string($kq)==true){
    $_SESSION['thongbao']=$kq;
    header("location:thongbao.php");exit();
}
else {
    $_SESSION['id_user']= $kq['id_user'];
    $_SESSION['ho']= $kq['ho'];
    $_SESSION['ten']= $kq['ten'];
    $_SESSION['email']= $kq['email'];
    if(isset($_SESSION['back']))
    header("location:". $_SESSION['back']);
    else header("location:index.php");
    exit();
}
}
?>

<?php
if(isset ($_POST['btn']))
{
    $ho = trim(strip_tags($_POST['ho']));
    $ten = trim(strip_tags($_POST['ten']));
    $email = trim(strip_tags($_POST['email']));
    $mk = trim(strip_tags($_POST['matkhau']));
$loi="";
if(strlen($ho)<2||strlen($ten)<3) $loi.="ban can nhap du ho ten nhe <br>";
if($email==""|| filter_var($email, FILTER_VALIDATE_EMAIL)==false ){
    $loi.='ban chua nhap dung email<br>';
}
if(strlen($mk)<6) $loi.='mat khau ban qua ngan';
if($loi!=""){
    session_start(); $_SESSION['thongbao']=$loi;
    header("location:thongbao.php");exit();
}
    require_once "functions.php";
    $mk= password_hash($mk, PASSWORD_BCRYPT);
    $kq= chenuser($ho,$ten,$email,$mk);
    if($kq=true) header("location: index.php?page=thongbao");
}
?>