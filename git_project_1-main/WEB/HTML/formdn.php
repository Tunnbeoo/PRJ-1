<?php
    if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $servername = "localhost";
        $dbname = 'mainpage';
        $username = "root";
        $password = "";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        $email = $_POST["email"];
        $password = $_POST["password"];


        $sql = sprintf("SELECT * FROM admin2 
                        WHERE email = '%s'", 
                        $conn->real_escape_string($email));
        $result = $conn->query($sql);
        $user = $result->fetch_assoc();
        if ($user) {
           if (password_verify($password, $user["password_hash"])) {
                session_start();

                session_regenerate_id();

                $_SESSION["user_id"] = $user["id"];
                header("Location: session.php");
                exit;
           }
           else {
                die ("Login failed");
           }
        }
        $is_invalid = true;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/ASMfinal.css  ">
    <link rel="stylesheet" href="/css/dangnhap1.css">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
    <div class="header">
        <div class="header_in">
            <div class="haeder_in-left"><a href="">Divine Shop tuyển dụng</a></div>
            <div class="haeder_in-right">
                <li><i class="fa-solid fa-book"></i><a href="">Hướng dẫn mua hàng</a></li>
                <li><i class="fa-light fa-percent"></i><a href="">Ưu đãi khách hàng</a></li>
                <li><i class="fa fa-phone-alt ro"></i><a href="">Thông tin liên hệ</a></li>
                <li><i class="fa fa-credit-card"></i><a href="">Hình thức thanh toán</a></li>   
            </div>
        </div>
    </div>
    <div class="next-header">
        <div class="next-header_in">
            <div class="logo_text" title="Trang chủ">
                <a href="/WEB/HTML/ASMfinal.php">
                    <img height="100%" src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg" title="Trang chủ"></a>
                <a href="/WEB/HTML/ASMfinal.php"></a>    <h2>Divine Shop</h2>
            </div>
            <div class="seacher">
                <input type="text" name="" id="" placeholder="Tìm kiếm sản phẩm">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="form">  
                <div class="lopdangnhapchung">
                  <i class="fa-solid fa-circle-user"></i>
                  <div class="dangnhap1">
                    <li><a href="/WEB/HTML/formdn.php" title="Đăng nhập">Đăng nhập /</a></li>
                  </div>
                  <div class="dangky001">
                  <li><a href="/WEB/HTML/formdk1.php" title="Đăng ký"> Đăng ký</a></li>
                  </div>
                </div>
            </div>
            <div class="cart">
              <li><i class="fas fa-shopping-cart"></i><a href="/WEB/HTML/giohang.php">Giỏ hàng</a></li>
          </div>
      </div>
    </div>
    <div class="content">
      <div class="content-text">
          <li><i class="fas fa-gamepad"></i><a href="">Giải trí</a></li>
          <li><i class="fas fa-briefcase"></i><a href="">Làm việc</a></li>
          <li><i class="fas fa-graduation-cap"></i><a href="">Học tập</a></li>
          <li><i class="fab fa-steam"></i><a href="">Game stream</a></li>
          <li><i class="fas fa-trophy"></i><a href="">Game Origin</a></li>
          <li><i class="fab fa-windows"></i><a href="">Window, Office</a></li>
          <li><i class="fab fa-google-drive"></i><a href="">Google Drive</a></li>
          <li><i class="fas fa-wallet"></i><a href="">Steam Wallet</a></li>
          <li><i class="fas fa-wifi"></i><a href="">Gói Data Mobile</a></li>
          <li><i class="fab fa-google-play"></i><a href="">Google Play, iTunes</a></li>
      </div>
      <!-- <div class="popup"> -->
        <div class="form1" >
            <div class="form2">
                <form action="" id="formchinh" onsubmit="return kiemtra()" method="post">
                    <fieldset>
                        <div class="form03">
                            <div class="form4">
                                <h3 class="dk_dn">
                                    <button class="dangnhap">
                                        <a href="/WEB/HTML/formdn.php" >Đăng nhập</a>
                                    </button>
                                    <button class="dangky">
                                       <a href="/WEB/HTML/formdk1.php">Đăng kí</a>
                                    </button>
                                </h3>
                                <div class="theodoidonhang">Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận ưu đãi hấp dẫn</div>
                                <div class="lopemail">
                                    <input name="email" type="text" id="emailchinh" minlength="6" maxlength="40" placeholder="Email hoặc tên đăng nhập"> <b id="loiemail"></b>
                                    <br>
                                    <label>Email hoặc tên đăng nhập</label>
                                    </div>
                                <div class="loptaomk">
                                    <input name="password" id="matkhau" type="password" minlength="4" maxlength="40" placeholder="Mật khẩu"><b id="saipass"></b>
                                    <br>
                                    <label>Mật khẩu</label>
                                </div>
                                <a class="quenmk0">Bạn quên mật khẩu</a>
                                    <button type="submit" onclick="cc()" class="dn1">Đăng nhập</button>
                                    <script>
                                        // function cc()
                                        // {
                                        //     alert('Đăng nhập thành công');
                                        // }
                                    </script>
                                <div class="loptrong">
                                    <div class="loptrong1">
    
                                    </div>
                                    <div class="dangnhapbang">Hoặc đăng nhập bằng</div>
                                    <div class="loptrong2">
    
                                    </div>
                                </div>
                                <div class="phuongthucdn">
                                        <button type="button" class="dangnhapgg" title="Đăng nhập bằng Google">
                                            <img loading="lazy" src="https://cdn.divineshop.vn/static/0b314f30be0025da88c475e87a222e5a.svg" alt="Google">
                                        </button>
                                        <button type="button" class="dangnhapbangfb" title="Đăng nhập bằng Facebook">
                                            <img loading="lazy" src="https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg" alt="Facebook">
                                        </button>
                                </div>
                            </div>
                                    <div class="muitenthoat">
                                        <img loading="lazy" src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" alt="Đăng nhập / Đăng ký">
                                    </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
    <!-- </div> -->
    </div>
    <footer>
        <div class="hinhthucthanhtoan">
            <div class="img_thanhtoan">
              <img src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg" alt="">
              <img style=" width: 81px; height: 25px;" src="https://cdn.divineshop.vn/static/72a3a36fc7c66085b3f442940ba45fde.svg" alt="">
              <img style="width: 65px; height: 25px;" src="https://cdn.divineshop.vn/static/464c7c79044dea88e86adf0e1b9c064c.svg" alt="">
              <img src="https://cdn.divineshop.vn/static/ddb866eb1214c914ea62417879046b99.svg" alt="">
              <small>và nhiều hình thức thanh toán khác</small>
            </div>
        </div>
        <div class="icon">
          <div class="fb">
            <img src="https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg" alt="">
          </div>
          <div class="youtube">
            <img src="https://cdn.divineshop.vn/static/4ae438165f9d5ea0fc6ff3da6051f938.svg" alt="">
          </div>
          <div class="ig">
              <img src="https://cdn.divineshop.vn/static/20334129395885adefc2e5217043f670.svg" alt="">
          </div>
        </div>
        <div class="gioithieu">
          <div class="gioithieu1">
            <div style="font-size: 30px;"><b> Giới thiệu </b></div>
            <div class="game1">
              <a href="">Game bản quyền là gì?</a>
              <br>
              <a href="">Giới thiệu Divine Shop</a>
              <br>
              <a href="">Đièu khoản dịch vụ</a>
              <br>
              <a href="">Chính sách bảo mật</a>
            </div>
          </div>
          <div class="gioithieu2">
            <div style="font-size: 30px;"><b> Tài khoản </b></div>
            <a href="/WEB/HTML/formdn.php">Đăng nhập</a><br>
            <a href="/WEB/HTML/formdk.php">Đăng ký</a>
          </div>
          <div class="gioithieu3">
            <div style="font-size: 30px;"><b> Liên hệ </b></div>
            <a href="">Hotline tự động</a>
            <a href="" style="color: rgb(195, 13, 13);">1900 633 305</a><br>
            <a href="">Liên hệ Hỗ trợ</a><br>
            <a href="">Chat với CSKH</a>
          </div>
          <div class="anhbanquyen">
            <a href=""> <img src="https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=18522dc6-fdd6-4b49-ab40-395a79849050" alt=""></a>
          </div>
      </div>
      </footer>
<script>
// function kiemtra(){
//     if (document.getElementById("emailchinh").value.lenght<=6){
//         document.getElementById("loiemail").innerHTML="Nhập sai địa chỉ Email";
//         return false;
//     }
//     else{
//         document.getElementById("loiemail").innerHTML="";
//     }

//     if (document.getElementById("matkhau").value.lenght<=4){
//         document.getElementById("saipass").innerHTML="Nhập sai mật khẩu";
//         return false;
//     }
//     else{
//         document.getElementById("saipass").innerHTML="";
//     }
// }
</script>
</body>
</html>