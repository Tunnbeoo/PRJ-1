<?php
    $conn = mysqli_connect("localhost", "root", "", "shop");
    $id = "";
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
    }
    $sql = "SELECT * FROM shops WHERE id = $id";
    $result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/ASMfinal.css">
    <link rel="stylesheet" href="/css/trangchitiet.css">
    <title>ASM GD1 JVS</title>
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
<?php    

    if ($result-> num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                ?>
                <div class="hinh">
    <div class="hinh1">
        <div class="hinh011">
            <div class="hinh012">
                <div class="img001">
                    <div class="img0001">
                        <img src="/img/<?php echo $row['image']?>" alt="">
                    </div>
                    <button>Xem thêm ảnh</button>
                </div>
            </div>
            <div class="spchinh1">
                <div class="spchinh2">
                    <div class="sanpham1">
                        <div class="sp1">
                            <a href="">Sản phẩm</a>
                            <h3>Tài Khoản Netflix Premium 1 tháng - Xem phim chất lượng 4k và Full HD</h3>
                        </div>
                        <div class="sp2">
                            <div class="tinhtrang1">

                                <div class="the1">
                                    Tình trạng:
                                <span>Còn hàng</span>
                                </div>
                                
                            </div>
                            <div class="tinhtrang2">

                                <div class="the2">
                                    Thể loại: 
                                    <a href="">App</a>,
                                    <a href="">Giải trí</a>,
                                    <a href="">Xem phim</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sanpham2">
                        <div class="giatien1">
                            <h4>99.000đ</h4>
                            <button>
                               <li<i class="fa-solid fa-bell" style="color: #000000;"></i></li>
                            </button>
                            <button>
                                <li><i class="fa-solid fa-heart" style="color: #000000;"></i></li>
                            </button>
                        </div>
                        <div class="giatien2">
                            <h6>260.000đ</h6>
                            <small>-62%</small>
                        </div>
                    </div>
                    <div class="sanpham3">

                    </div>
                    <div class="sanpham4">
                        <h6>hạn sử dụng</h6>
                        <div class="ngay">
                            <div class="phanloai">
                                <!-- <div class="theongay1">
                                    <a href="">Netflix 1 ngày</a>
                                </div> -->
                                <!-- <div class="theongay2">
                                    <a href="">Netflix 20 ngày</a>
                                </div> -->
                                <div class="theongay3">
                                    <a href="">Netflix 1 tháng</a>
                                </div>
                            </div>
                            <!-- <div class="phanloai">
                                <div class="theongay4">
                                    <a href="">Netflix 3 tháng</a>
                                </div>
                                <div class="theongay5">
                                    <a href="">Netflix 6 tháng      </a>
                                </div>
                                <div class="theongay6">
                                    <a href="">Netflix 1 tuần</a>
                                </div>
                            </div>
                            <div class="phanloai">
                                <div class="theongay7">
                                     <a href="">Disnay 1 tháng</a>
                                </div>
                            </div> -->
                   
                <?php
            }
        }
    ?>



                    <div class="sanpham5">
                        
                    </div>
                    <div class="thethanhtoanchinh">
                        <div class="thethanhtoan">
                            <div class="themua">
                                <button><a href="">Mua ngay</a></button>
                            </div>
                            <div class="thethemgiohang">
                                <button><a href="/WEB/HTML/giohang.php "  onclick="add_Cart(`/img/Divine-Shop-NETFLIX-1-thang-23298.jpg`,`Tài Khoản Netflix Premium 1 tháng - Xem phim chất lượng 4k và Full HD`,99000,1,260000)" >Thêm vào giỏ hàng</a></button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
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
    <script src="/WEB/Java/script.js"></script>
    <script src="/WEB/HTML/add_cart.js"></script>
  </body>
  </html>