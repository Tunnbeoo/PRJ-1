<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tunnbeoo";

// B1: Tạo kết nối
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if (!$conn) {
   die("Kết nối thất bại: " . mysqli_connect_error());
}

// B2: Truy vấn dữ liệu
$sql = "SELECT * FROM sanpham1 ORDER BY rand() LIMIT 12";
$result = mysqli_query($conn, $sql);
?>

<style>
   .looking_text {
      color: green !important;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
   }

   .looking_text_a {
      color: red;
      font-weight: bold;
   }

   input[type="submit"] {
      background-color: pink;
      color: black;
      border: none;
      font-weight: bold;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
   }

   input[type="submit"]:hover {
      background-color: yellow !important;
   }

   .image_1 {
      width: 220px;
      height: 220px;
      margin-bottom: 10px;
   }

   .col-lg-3 {
      margin-bottom: 20px;
   }

   .header_section {
      width: 100%;
      float: left;
      background-image: url(../images/banner.jpg) !important;
      height: auto;
      background-size: 100%;
      background-repeat: no-repeat;
   }

   .image-container {
      position: relative;
      width: auto;
      /* Đặt chiều rộng của container là 1900px */
      margin: 0 auto;
      margin-top: 10px;
      /* Căn giữa container */
      display: flex;
      justify-content: center;
      /* Căn giữa theo chiều ngang */
      align-items: center;
      /* Căn giữa theo chiều dọc */
      height: 50vh;
      /* Chiều cao của container */
      overflow: hidden;
      /* Ẩn phần hình ảnh ra ngoài container */
   }

   .anh {
      width: 1410px;
      /* Đặt chiều rộng của hình ảnh là 1410px */
      height: auto;
      /* Giữ tỷ lệ của hình ảnh */
      transition: opacity 0.5s ease-in-out;
      /* Hiệu ứng chuyển đổi mượt mà */
      position: absolute;
      /* Để các hình ảnh chồng lên nhau */
      top: 50%;
      /* Đặt hình ảnh ở giữa theo chiều dọc */
      left: 50%;
      /* Đặt hình ảnh ở giữa theo chiều ngang */
      transform: translate(-50%, -50%);
      /* Căn giữa hoàn hảo */
      opacity: 0;
      /* Bắt đầu với độ mờ là 0 */
   }

   .anh.active {
      opacity: 1;
      /* Khi hình ảnh được chọn, độ mờ là 1 */
   }

   .arrow {
      position: absolute;
      /* Đặt vị trí nút mũi tên */
      top: 50%;
      /* Đặt giữa theo chiều dọc */
      transform: translateY(-50%);
      /* Căn giữa theo chiều dọc */
      background-color: rgba(255, 255, 255, 0.7);
      /* Nền mờ */
      border: none;
      font-size: 30px;
      /* Kích thước nút */
      cursor: pointer;
      padding: 10px;
      border-radius: 5px;
      /* Bo góc */
      z-index: 10;
      /* Đảm bảo nút nằm trên hình ảnh */
   }

   .left-arrow {
      left: 10px;
      /* Đặt nút bên trái */
   }

   .right-arrow {
      right: 10px;
      /* Đặt nút bên phải */
   }

   .custom-container {
      background-color: #398801;
      border-top-right-radius: 50%;
      padding-top: 15px;
      margin-left: 0;
      /* Đảm bảo nó nằm sát bên trái */
      margin-right: auto;
      /* Đẩy sang trái */
      width: fit-content;
      /* Đặt chiều rộng vừa đủ cho nội dung */
      display: inline-block;
      /* Đảm bảo kích thước vừa đủ cho nội dung */
   }

   .container .row {
      display: flex;
      align-items: center;
   }

   .coffee_taital,
   .bulit_icon {
      margin: 0 10px;
      /* Khoảng cách giữa các phần tử */
      color: #fff;
      height: 30px;
   }
   .margin-left{
      margin-left: 90px;
   }
   .about_taital {
      color: #fff;
   }
</style>

<div class="image-container">
   <img src="./assetss/images/banner.jpg" class="anh active">
   <img src="./assetss/images/banner4.jpg" class="anh">
   <img src="./assetss/images/banner3.jpg" class="anh">
   <button class="arrow left-arrow" onclick="changeImage(-1)">&#10094;</button>
   <button class="arrow right-arrow" onclick="changeImage(1)">&#10095;</button>
</div>

<!-- coffee section start -->
<div class="coffee_section layout_padding margin-left">
   <div class="custom-container">
      <div class="container">
         <div class="row about_taital">
            <h2 class="coffee_taital">cây văn phòng</h2>
            <!-- <div class="bulit_icon"> -->
               <!-- <img src="./assetss/images/bulit-icon.png"> -->
            </div>
         </div>
      </div>
   </div>
   <div class="coffee_section_2">
      <div id="main_slider" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active">
               <div class="container-fluid">
                  <div class="row">
                     <?php $limit = 8;
                     $count = 0;
                     while ($row = mysqli_fetch_assoc($result)) {
                        if ($count >= $limit) {
                           break;
                        }
                     ?>
                        <div class="col-lg-3 col-md-6">
                           <div class="coffee_img">
                              <a href="chitiet.php?masp=<?php echo $row["masp"] ?>">
                                 <img src="upload/<?php echo $row["img1"] ?>" class="image_1"> </a>
                           </div>
                           <a href="chitiet.php?masp=<?php echo $row["masp"] ?>">
                              <h3 class="looking_text_a"><?php echo $row["dongiamoi"] ?> VNĐ</h3>
                           </a>
                           <a href="chitiet.php?masp=<?php echo $row["masp"] ?>">
                              <p class="looking_text"><?php echo $row["tensp"] ?></p>
                           </a>
                           <form action="cart.php" method="post">
                              <div class="read_bt"></div>
                              <input type="submit" value="Mua Ngay" name="addcart">
                              <ul>
                                 <li class="active"> </li>
                                 <input type="hidden" name="soluong" value="1">
                                 <input type="hidden" name="tensp" value="<?php echo $row["tensp"] ?>">
                                 <input type="hidden" name="dongiamoi" value="<?php echo $row["dongiamoi"] ?>  VNĐ">
                                 <input type="hidden" name="img1" value="<?php echo $row["img1"] ?>">
                              </ul>
                           </form>
                        </div>
                     <?php
                        $count++;
                     } ?>
                  </div>
               </div>
<!-- 
               <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i class="fa fa-arrow-left"></i>
               </a>
               <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i class="fa fa-arrow-right"></i>
               </a> -->
            </div>
         </div>
      </div>
   </div>
</div>

<script>
   let currentIndex = 0;

   function changeImage(direction) {
      const imageElements = document.querySelectorAll('.anh');
      imageElements[currentIndex].classList.remove('active');

      currentIndex += direction;
      if (currentIndex < 0) {
         currentIndex = imageElements.length - 1;
      } else if (currentIndex >= imageElements.length) {
         currentIndex = 0;
      }

      imageElements[currentIndex].classList.add('active');
   }

   setInterval(() => {
      changeImage(1);
   }, 5000);
</script>