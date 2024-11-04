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
        <h2>Divine Shop</h2>
      </div>
      <div class="seacher">
        <input type="text" name="" id="" placeholder="Tìm kiếm sản phẩm">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="form">
        <div class="login-signup">
          <i class="fa-solid fa-circle-user"></i>
          <div class="login">
            <li><a href="/WEB/HTML/formdn.php" title="Đăng nhập">Đăng nhập /</a></li>
          </div>
          <div class="signup">
            <li><a href="/WEB/HTML/formdk1.php" title="Đăng ký"> Đăng ký</a></li>
          </div>
        </div>
        <div class="admin_protest">
          <li><a href="/PHP/admin/admin.php" title="Đăng ký"> Admin</a></li>
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
    </div>
  </div>
  <div class="product">
    <div class="product_content_top">
      <b><a>Sản phẩm nổi bật</a></b>
      <a href="">Khám phá</a>
    </div>
    <div class="product_content_bot">
      <a>Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích</a>
    </div>
  </div>
  <div class="comlum_top">
    <?php
    $sql = "SELECT * FROM shops";
    $result = mysqli_query($conn, $sql);

    while ($row = mysqli_fetch_array($result)) {
    ?>
      <div class="colum">
        <a href="trangchitiet.php?id=<?php echo $row['id'] ?>"><img src="/img/<?php echo $row['image'] ?>" alt=""></a>
        <a href="#" class="name_product"><?php echo $row['name']; ?></a>
        <div class="price">
          <b><?php echo $row['price'] ?>đ <del>260.000đ</del></b>
          <a href="">-62%</a>
        </div>
      </div>
    <?php
    }
    ?>


  </div>
  <div class="colum_bot">
    <a href="">Xem thêm</a>
  </div>

  <div class="seacher_hot">
    <a>Từ khóa nổi bật</a>
    <div class="col-warp">
      <div class="col1">
        <h6>Làm việc</h6>
      </div>
      <div class="col2">
        <h6>Giải trí</h6>
      </div>
      <div class="col3">
        <h6>Học tập</h6>
      </div>
      <div class="col4">
        <h6>Spotify</h6>
      </div>
      <div class="col5">
        <h6>Wallet</h6>
      </div>
      <div class="col6">
        <h6>YouTube </h6>
      </div>
    </div>
  </div>
  <div class="flash_sell">
    <div class="sell_product">
      <img width="100%" src="https://divineshop.vn/static/0de2668c294edf9d5fd8a8647b2c65b6.png" alt="">
      <a href=""><img src="	https://cdn.divineshop.vn/static/1478de4bf059d759990c4849f3c3e8ce.svg" alt="" style="transform: translateY(5px)">
        <b> #Sản phẩm bán chạy </b></a>
      <a href="">Khám phá</a>
    </div>
    <div class="comlum_top">

      <div class="colum">
        <img src="/img/ChatGPT-36911.png" alt="">
        <a href="">Tài khoản OpenAI - ChatGPT (Có sẵn 18$)</a>
        <div class="price">
          <b>99.000đ <del>200.000đ</del></b>
          <a href="">-50%</a>
        </div>
      </div>

      <div class="colum">
        <img src="/img/STEAM 100 TWD.jpg" alt="">
        <a href="">Steam Wallet Code 100 TWD (~78.100 VNĐ)</a>
        <div class="price">
          <b>89.000đ</b>
        </div>
      </div>

      <div class="colum">
        <img src="/img/Divine-Shop-NETFLIX-1-thang-23298.jpg" alt="">
        <a href="">Tài Khoản Netflix Premium 1 tháng - Xem phim chất lượng 4k và Full HD</a>
        <div class="price">
          <b>99.000đ <del>260.000đ</del></b>
          <a href="">-62%</a>
        </div>
      </div>

      <div class="colum">
        <img src="/img/Divine-Shop-NETFLIX-1-Tuan-69361.jpg" alt="">
        <a href="">Tài khoản Netflix Premium for 1 User (1 Tuần)</a>
        <div class="price">
          <b>29.000đ <del>65.000đ</del></b>
          <a href="">-55%</a>
        </div>
      </div>

      <div class="colum">
        <img src="/img/Random Code Steam.jpg" alt="">
        <a href="">Random Code Steam</a>
        <div class="price">
          <b>9.000đ <del>20.000đ</del></b>
          <a href="">-55%</a>
        </div>
      </div>
      <div class="colum">
        <img src="/img/STEAM 150 TWD.jpg" alt="">
        <a href="">Steam Wallet Code 150 TWD (~117.150 VNĐ)</a>
        <div class="price">
          <b>129.000đ</b>

        </div>
      </div>

      <div class="colum">
        <img src="/img/Divine-Shop-Tai-Khoan-Spotify-1-Thang-49689.jpg" alt="">
        <a href="">Tài khoản nghe nhạc Spotify Premium (1 tháng)</a>
        <div class="price">
          <b>19.000đ <del>59.000đ</del></b>
          <a href="">-68%</a>
        </div>
      </div>

      <div class="colum">
        <img src="/img/STEAM 300 TWD.jpg" alt=" ">
        <a href="">Tài khoản Grammarly Premium 1 năm</a>
        <div class="price">
          <b>257.000đ</b>
        </div>
      </div>
      <div class="colum_bot_2">
        <a>Xem thêm</a>
      </div>
    </div>
  </div>
  </div>


  <div class="steam_game">
    <div class="cheap_game">
      <b><a href="">Giá phù hợp</a></b>
      <div class="price_list">
        <div class="price1">
          <li>20.000đ</li>
        </div>
        <div class="price2">
          <li>50.000đ</li>
        </div>
        <div class="price3">
          <li>100.000đ</li>
        </div>
        <div class="price4">
          <li>200.000đ</li>
        </div>
        <div class="price5">
          <li>500.000đ</li>
        </div>
        <div class="price6">
          <li>1.000.000đ</li>
        </div>
      </div>
    </div>
    <div class="game">
      <a href="">Game trên Steam</a>
      <h6>Những trò chơi được đánh giá tốt, nội dung hấp dẫn thu hút đang chờ bạn</h6>
    </div>
    <div class="colum">
      <img src="/img/Random Code Steam.jpg" alt="">
      <a href="">Random Code Steam</a>
      <div class="price">
        <b>9.000đ <del>20.000đ</del></b>
        <a href="">-55%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Elden-Ring-82335.jpg" alt="">
      <a href="">Elden Ring (CD Key Steam)</a>
      <div class="price">
        <b>790.000đ <del>800.000đ</del></b>
        <a href="">-1%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/tài khoản BF4.jpg" alt="">
      <a href="">Tài khoản Battlefield 4 (Origin)</a>
      <div class="price">
        <b>79.000đ <del>500.000đ</del></b>
        <a href="">-84%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/raven-hunter-hood-tower-defense-simulator-44997.jpg" alt="">
      <a href="">Code Roblox Raven Hunter Hood - Tower Defense Simulator</a>
      <div class="price">
        <b>12.000đ <del>99.000đ</del></b>
        <a href="">-88%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/fifa.jpg" alt="">
      <a href="">EA SPORTS™ FIFA 21 Champions Edition </a>
      <div class="price">
        <b>1.750.000đ</b>

      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-GTA-V19-92008.jpg" alt="">
      <a href="">Tài khoản Grand Theft Auto V: Premium Edition (GTA 5)</a>
      <div class="price">
        <b>300.000đ <del>1.500.000đ</del></b>
        <a href="">-80%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Random Code Steam Legendary-78055.jpg" alt="">
      <a href="">Random Code Steam Legendary</a>
      <div class="price">
        <b>60.000đ <del>150.000đ</del></b>
        <a href="">-60%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/header (1).jpg" alt=" ">
      <a href="">Killing Floor 2 (CD KEY)</a>
      <div class="price">
        <b>99.000đ <del>247.000đ</del></b>
        <a href="">-60%</a>
      </div>
    </div>
    <div class="colum_bot_6">
      <a href="">Xem thêm</a>
    </div>
  </div>


  </div>
  <div class="study">
    <div class="study_1" style="margin: 30px 0;">
      <a href="" style="text-decoration: none;font-size: 35px;
      height: 70px; ">Học tập</a>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Duolingo-1-Nam-38503.jpg" alt="">
      <a href="">Tài khoản học ngoại ngữ Duolingo 1 năm</a>
      <div class="price">
        <b>190.000đ <del>490.000đ</del></b>
        <a href="">-67%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Grammarly-Premium-1-Nam-35103 (1).jpg" alt="">
      <a href="">Tài khoản Grammarly Premium 1 năm</a>
      <div class="price">
        <b>299.000đ <del>590.000đ</del></b>
        <a href="">-49%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Lumosity-1-Nam-25729.jpg" alt="">
      <a href="">Tài khoản Lumosity 1 năm</a>
      <div class="price">
        <b>299.000đ <del>1.100.000đ</del></b>
        <a href="">-73%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Memrise-1-Nam-98141.jpg" alt="">
      <a href="">Tài khoản học ngoại ngữ Memrise 1 năm</a>
      <div class="price">
        <b>300.000đ <del>2.300.000đ</del></b>
        <a href="">-87%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Lynda (LinkedIn Learning).jpg" alt="">
      <a href="">Tài khoản Lynda Premium vĩnh viễn</a>
      <div class="price">
        <b>290.000đ <del>1.500.000đ</del></b>
        <a href="">-81%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Skillshare-Premium-2-Thang-68733.jpg" alt="">
      <a href="">Tài khoản Skillshare premium 2 tháng</a>
      <div class="price">
        <b>79.000đ <del>320.000đ</del></b>
        <a href="">-75%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Coursera-14882.jpg" alt="">
      <a href="">Khóa học Coursera</a>
      <div class="price">
        <b>150.000đ</b>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Busuu-Premium-Plus-1-Thang-62667.jpg" alt=" ">
      <a href="">Tài khoản học ngoại ngữ Busuu Premium Plus 1 Tháng</a>
      <div class="price">
        <b>19.000đ <del>200.000đ</del></b>
        <a href="">-90%</a>
      </div>
    </div>
    <div class="colum_bot_3">
      <a href="">Xem thêm</a>
    </div>
  </div>


  <div class="entertaiment">
    <div class="entertaiment_1" style="margin: 30px 0;">
      <a href="" style="text-decoration: none;font-size: 35px;
      height: 70px; ">Giải trí</a>
    </div>

    <div class="colum">
      <img src="/img/Divine-Shop-NETFLIX-1-thang-23298 (1).jpg" alt="">
      <a href="">Tài Khoản Netflix Premium 1 tháng - Xem phim chất lượng 4k và Full HD</a>
      <div class="price">
        <b>99.000đ <del>260.000đ</del></b>
        <a href="">-62%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Goi-Gia-Han-Spotify-1-Nam-40567 (1).jpg" alt="">
      <a href="">Gói price hạn Spotify Premium 01 năm</a>
      <div class="price">
        <b>299.000đ <del>590.000đ</del></b>
        <a href="">-49%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/YOUTUBE NO ADS 6 THANG.jpg" alt="">
      <a href="">price hạn YouTube Premium + YouTube Music (6 tháng)</a>
      <div class="price">
        <b>210.000đ <del>350.000đ</del></b>
        <a href="">-40%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/YOUTUBE NO ADS 1 THANG.jpg" alt="">
      <a href="">price hạn YouTube Premium + YouTube Music (1 Tháng)</a>
      <div class="price">
        <b>290.000đ <del>400.000đ</del></b>
        <a href="">-28%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/YOUTUBE NO ADS 2 THANG.jpg" alt="">
      <a href="">price hạn YouTube Premium + YouTube Music (2 Tháng)</a>
      <div class="price">
        <b>479.000đ <del>6.720.000đ</del></b>
        <a href="">-93%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-YOUTUBE-NO-ADS-1-NAM-53447 (1).jpg" alt="">
      <a href="">price hạn YouTube Premium + YouTube Music (1 Năm)</a>
      <div class="price">
        <b>479.000đ <del>6.720.000đ</del></b>
        <a href="">-93%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Discord Nitro 1 thang-38313.jpg" alt="">
      <a href="">Discord Nitro 1 Tháng</a>
      <div class="price">
        <b>119.000đ <del>250.000đ</del></b>
        <a href="">-52%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Tidal HiFi1406.jpg" alt=" ">
      <a href="">Tài khoản Grammarly Premium 1 năm</a>
      <div class="price">
        <b>19.000đ <del>550.000đ</del></b>
        <a href="">-97%</a>
      </div>
    </div>
    <div class="colum_bot_4">
      <a href="">Xem thêm</a>
    </div>
  </div>


  <div class="working">
    <div class="working_small">
      <a href="">Làm việc </a>
    </div>
    <div class="colum">
      <img src="/img/Divine-shop-windows-10-pro-55555.jpg" alt="">
      <a href="">Windows 10 Professional CD Key</a>
      <div class="price">
        <b>290.000đ <del>400.000đ</del></b>
        <a href="">-28%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Canva-1-Nam-44514 (1).jpg" alt="">
      <a href="">Gói price hạn Canva 1 năm</a>
      <div class="price">
        <b>300.000đ <del>1.500.000đ</del></b>
        <a href="">-80%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Doodly-Standard-Vinh-Vien-47767.jpg" alt="">
      <a href="">Tài khoản Doodly Standard vĩnh viễn</a>
      <div class="price">
        <b>99.000đ <del>200.000đ</del></b>
        <a href="">-50%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Malwarebytes-Vinh-Vien-51870.jpg" alt=" ">
      <a href="">Key bản quyền diệt virus Malwarebytes vĩnh viễn</a>
      <div class="price">
        <b>490.000đ <del>1.500.000đ</del></b>
        <a href="">-67%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Microsoft-Office-2019-Professional-Plus-For-Windows-45649.jpg" alt="">
      <a href="">Microsoft Office 2019 Professional Plus for Windows</a>
      <div class="price">
        <b>599.000đ <del>4.800.000đ</del></b>
        <a href="">-88%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Microsoft-Office-2021-Professional-Plus-For-Windows-89833.jpg" alt="">
      <a href="">Microsoft Office 2021 Professional Plus for Windows</a>
      <div class="price">
        <b>599.000đ <del>1.500.000đ</del></b>
        <a href="">-60%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Turnitin 6 tháng-31152.jpg" alt="">
      <a href="">Gói nâng cấp Turnitin (6 Tháng)</a>
      <div class="price">
        <b>629.000đ <del>839.000đ</del></b>
        <a href="">-25%</a>
      </div>
    </div>
    <div class="colum">
      <img src="/img/Divine-Shop-Nang-Cap-AutoCAD-Windows-12083.jpg" alt="">
      <a href="">Nâng cấp AutoCAD (1 năm)</a>
      <div class="price">
        <b>300.000đ <del>1.500.000đ</del></b>
        <a href="">-80%</a>
      </div>
    </div>

    <div class="colum_bot_5">
      <a href="">Xem thêm</a>
    </div>
  </div>
  <div class="account_class">
    <div>
      <img src="/img/528b91cfa29c7ffd85418f4b1e8cc8ce.svg" alt="">
      <h2>Bạn chưa có tài khoảng?</h2>
      <h4>Hãy tạo ngay một tài khoản để sử dụng đầy đủ các tính năng, tích lũy ưu đãi khi thanh toán các sản phẩm
        và tham price vào chương trình Giới thiệu bạn bè nhận hoa hồng vĩnh viễn tại Divine Shop.</h4>
      <div class="signup_1_1">
        <div class="signup_1_2">
          <a href="/WEB/HTML/formdk1.php">Đăng ký ngay</a>
        </div>
        <div class="sigup_2_1" style="width: 280px; height: 100%; color: white; margin-left: 5px;">Hoặc bạn đã
          có tài khoảng?
          <a href="/WEB/HTML/formdn.php" style="color: #fff; margin-left: 5px;"><b> Đăng nhập</b></a>
        </div>
      </div>
    </div>
    <div class="gioithieuthem">

    </div>
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
          <a href="">Giới thiệu Divine Shop</ a>
            <br>
            <a href="">Đièu khoản dịch vụ</a>
            <br>
            <a href="">Chính sách bảo mật</a>
        </div>
      </div>
      <div class="gioithieu2">
        <div style="font-size: 30px;"><b> Tài khoản </b></div>
        <a href="/WEB/HTML/formdn.html">Đăng nhập</a><br>
        <a href="/WEB/HTML/formdk1.html">Đăng ký</a>
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
  <div class="form-container">
    <div class="form-login">
      <div class="form-login-du">
        <div class="form-login-title1"><a href="">Đăng nhập</a></div>
        <div class="form-login-title2"><a href="">Đăng ký</a></div>
      </div>
      <div class="form-login-des">Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều
        ưu đãi hấp dẫn</div>
      <div class="form-close">
        <i class="fa-solid fa-x"></i>
      </div>
      <form action="" id="form">
        <div class="form-img">
          <img src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" alt="">
        </div>
        <input type="email" name="email" id="email" placeholder="Email hoac ten dang nhap">
        <input type="password" name="password" id="password" placeholder="Mat Khau">
        <div class="form-forget-pass"><a href="">Bạn quên mật khẩu?</a></div>
        <button type="submit" class="form-submit">Đăng nhập</button>
      </form>
    </div>
  </div>


  <!-- <div class="form-container">
    <div class="form-login">
      <div class="form-login-du">
        <div class="form-login-title1"><a href="">Đăng nhập</a></div>
        <div class="form-login-title2"><a href="">Đăng ký</a></div>
      </div>
      <div class="form-login-des">Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn</div>
      <div class="form-close">
        <i class="fa-solid fa-x"></i>
      </div>
      <form action="" id="form">
          <div class="form-img">
            <img src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg" alt="">
          </div>
          <input type="email" name="email" id="email" placeholder="Ho Va Ten">
          <input type="password" name="password" id="password" placeholder="Mat Khau">
          <input type="password" name="password" id="password" placeholder="Mat Khau">
          <input type="password" name="password" id="password" placeholder="Mat Khau">
          <input type="password" name="password" id="password" placeholder="Mat Khau">
          <input type="password" name="password" id="password" placeholder="Mat Khau">
          <button type="submit" class="form-submit">Đăng Ký</button>
      </form>
    </div>
  </div> -->

  <!-- <div class="form-container">
    <div class="form-sgin-up">
      <div class="form-sgin-up-du">
        <div class="form-sgin-up-title1"><a href="">Đăng nhập</a></div>
        <div class="form-sgin-up-title2"><a href="">Đăng ký</a></div>
      </div>
      <div class="form-login-des">Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn</div>
      <div class="form-close">
        <i class="fa-solid fa-x"></i>
      </div>
      <form action="" id="form">
          <div class="form-img">
            <img src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" alt="">
          </div>
          <input type="text" name="fist-lastname" id="name" placeholder="Họ Và Tên">
          <input type="email" name="email" id="email" placeholder="Mật khẩu">
          <input type="text" name="namelogin" id="Tên đăng nhập">
          <input type="password" name="password" id="Password">
          <input type="password" name="password-again" id="Nhập lại mật khẩu">
          <input type="tel" name="Phone" id="Số điện thoại(Không bắt buộc)">
          <input type="text" name="referral code" id="Mã giới thiệu(Không bắt buộc)">
          <input type="checkbox" name="checkmarketing" id="Tôi đồng ý nhận thông tin marketing mới từ Divine Shop.">
          <button type="submit" class="form-submit">Đăng ký</button>
      </form>
    </div>
  </div> -->
</body>

</html>
<script>
  var marginLeft = 0;
  document.querySelector('.next').addEventListener('click', () => {
    marginLeft -= 720;
    if (marginLeft < -(720 * 6)) {
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


  // var buttonDN = document.querySelector(".dangnhap1")
  // var loginForm = document.querySelector(".form-login")
  // var closeX = document.querySelector(".form-close")
  // buttonDN.addEventListener('click', () => {
  //     loginForm.classList.add('active')
  // })

  // closeX.addEventListener('click', () => {
  //     loginForm.classList.remove('active')
  // })


  // var buttonDN = document.querySelector(".dangky001")
  // var loginForm = document.querySelector(".form-login")
  // var closeX = document.querySelector(".form-close")

  // buttonDN.addEventListener('click', () => {
  //     loginForm.classList.add('active')
  // })

  // closeX.addEventListener('click', () => {
  //     loginForm.classList.remove('active')
  // })

  // buttonDN.addEventListener('click', () => {
  //     loginForm.classList.add('active')
  // })

  // closeX.addEventListener('click', () => {
  //     loginForm.classList.remove('active')
  // })
</script>
</body>

</html>