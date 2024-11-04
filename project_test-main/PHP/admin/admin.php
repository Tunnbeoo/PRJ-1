<?php
$conn = mysqli_connect("localhost", "root", "", "shop");
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="/css/ASMfinal.css">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> -->

  <title>Layout</title>
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
        <a href="/WEB/HTML/ASMfinal.php"><img height="100%" src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg" title="Trang chủ"></a>
        <h2>Admin</h2>
      </div>
      <!-- <div class="seacher">
            <input type="text" name="" id="" placeholder="Tìm kiếm sản phẩm">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div> -->
      <div class="menu">
        <style>
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          .container {
            width: 1200px;
            margin: auto;
          }

          .container>header {
            height: 17px;
          }

          .container>nav {
            height: 60px;
            background: silver;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
          }

          .container>main {
            min-height: 500px;
            background: grey;
          }

          .container>nav ul {
            list-style: none;
            font-size: 20px;
          }

          .container>nav>ul>li {
            display: inline-block;
            position: relative;
            text-align: center;
            padding: 0 10px;
          }

          .container>nav>ul>li>a {
            text-decoration: none;
            color: white
          }

          .container>nav>ul>li>a:hover {
            font-weight: bold
          }

          .container>nav>ul>li>ul {
            display: none;
          }

          .container>nav>ul>li:hover>ul {
            display: block;
            position: absolute;
            background: grey;
            width: 200px;
            text-align: left;
          }

          .container>nav>ul>li:hover>ul>li {
            padding: 8px;
            border-bottom: solid 1px wheat
          }

          .container>nav>ul>li:hover>ul a {
            text-decoration: none;
            color: white
          }

          .container>nav>ul>li:hover>ul a:hover {
            text-decoration: underline;
            font-weight: 900
          }
        </style>

        <body>
          <div class="container">
            <header> </header>
            <nav>
              <ul> 
                <li> <a href="index.php">Trang chủ</a></li>
                <li> <a href="#">Quản lý loại </a>
                  <ul>
                    <li><a href="index.php?page=dsloai">Danh sách loại</a></li>
                    <li><a href="index.php?page=themloai">Thêm loại</a></li>
                    <li><a href="index.php?page=upfile">upfile</a></li>
                  </ul>
                </li>
                <li> <a href="#">Quản lý sản phẩm </a>
                  <ul>
                    <li><a href="index.php?page=dssanpham">Danh sách sản phẩm</a></li>
                    <li><a href="index.php?page=themsanpham">Thêm sản phẩm</a></li>
                    <li><a href="index.php?page=suasanpham">Sửa sản phẩm</a></li>
                  </ul>
                </li>
                <li> <a href="#">Quản lý đơn hàng </a></li>
                <li> <a href="/WEB/HTML/ASMfinal.php">Thoát </a></li>
              </ul>

            </nav>
            <form action="crud.php" method="post" enctype="multipart/form-data">
              <div class="group-input">
                <span>Nhập tên sản phẩm</span>
                <input type="text" name="name" />
              </div>
              <div class="group-input">
                <span>Nhập giá sản phẩm</span>
                <input type="text" name="price" />
              </div>
              <!-- <div class="group-input">
                <span>Nhập Ảnh sản phẩm</span>
                <input type="file" accept=".jpg, .png, .svg" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" name="image">
              </div> -->
              <button type="submit" class="btn btn-primary" name="addproduct">ADD</button>
            </form>
          </div>
          <!-- <div class="form">  
            <div class="login-signup">
              <i class="fa-solid fa-circle-user"></i>
              <div class="login">
                <li><a href="/WEB/HTML/formdn.php" title="Đăng nhập">Đăng nhập /</a></li>
              </div>
              <div class="signup">
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
  <div class="content-midle">
      <div class="img1">
        <section aria-label="Newest Photos">
          <div class="carousel" data-carousel>
            <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
            <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
            <div class="slide_screen">
              <ul class="slide_main"> 
                <li class="slide" data-active>
                  <img src="/img/OpenAI - ChatGPT-37620.jpg" alt="Nature Image #1">
                </li>
                <li class="slide">
                  <img src="/img/Atomic Heart1-62377.jpg" alt="Nature Image #2">
                </li>
                <li class="slide">
                  <img src="/img/netflix-49596.png" alt="Nature Image #3">
                </li>
                <li class="slide">
                    <img src="/img/tối ưu công việc-45178.png" alt="Nature Image #3">
                </li>
                <li class="slide">
                    <img src="/img/Divine Shop tuyển dụng-66809.png" alt="Nature Image #3">
                </li>
                <li class="slide">
                  <img src="/img/banner Google One (3)-10567.png" alt="Nature Image #3">
                </li>
                <li class="slide">
                  <img src="/img/AutoDesk Main banner-89472.png" alt="Nature Image #3">
                </li>
              </ul>
            </div>
          </div>
      </section>
      </div>
      <div class="img2"><img src="/img/Fake IP-93612.png" alt=""></div>
      <div class="img3"><img src="/img/Spotify (3)-78485.png" alt=""></div>
  </div>
  <div class="content-bottom">
    <div class="img_1"><img src="/img/Steam (1)-63472.png" alt=""></div>
    <div class="img_2"><img src="/img/ChatGPT-36911.png" alt=""></div>
    <div class="img_3"><img src="/img/gmail (1)-68843.png" alt=""></div>
    <div class="img_4"><img src="/img/Microsoft Office (1)-79722.png" alt=""></div>
  </div> -->


          <script>
            var marginLeft = 0;
            document.querySelector('.next').addEventListener('click', () => {
              marginLeft -= 720;
              if (marginLeft < scri - (720 * 6)) {
                marginLeft = 0;
              }
              document.querySelector('.slide_main').style.marginLeft = marginLeft + `px`
            })
            document.querySelector('.prev').addEventListener('click', () => {
              marginLeft += 720;
              if (marginLeft > 0) {
                marginLeft = -(720 * 6);
              }
              document.querySelector('.slide_main').style.marginLeft = marginLeft + `px`
            })
          </script>
        </body>

</html>