<div class="menu" id="menu">
        <div class="container">
            <div class="d-flex position-relative menu-list">
                <div class="item js-hover-menu" data-id="42">                   
                    <span class="icon_root transition">
                        <img src="/media/category/cb_e90d157ceaa8bd152905d6b420c3bd29.png" alt=""></span>                   
                    <a href="/laptop-moi.html" class="root">LAPTOP MỚI</a>
                    <div class="sub_nav">
                      <div class="sub_filter">
                        <div class="list-unstyled sub_list-attr list_2col m-0 p-0 d-flex flex-wrap"> 
                            <div class="danhmuc-2">
                              
                              <div class="danhmuc-3 d-flex flex-wrap">
                                <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                <?php foreach($loaisp_arr as $loaisp) { ?>
        <li>
            <a href="index.php?page=loai&id=<?php echo $loaisp[0]?>">
            <?php echo $loaisp [1]?></a>
        </li>
<?php } ?>
                                </div>
                              </div>
                          	</div>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="item js-hover-menu" data-id="42">                   
                    <span class="icon_root transition">
                        <img src="/media/category/cb_e90d157ceaa8bd152905d6b420c3bd29.png" alt=""></span>                   
                    <a href="/laptop-moi.html" class="root">LAPTOP LIKE NEW</a>
                    <div class="sub_nav">
                      <div class="sub_filter">
                        <div class="list-unstyled sub_list-attr list_2col m-0 p-0 d-flex flex-wrap"> 
                            <div class="danhmuc-2">
                              
                              <div class="danhmuc-3 d-flex flex-wrap">
                                <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                <?php foreach($loaisp_arr as $loaisp) { ?>
        <li>
            <a href="index.php?page=loai&id=<?php echo $loaisp[0]?>">
            <?php echo $loaisp [1]?></a>
        </li>
<?php } ?>
                                </div>
                              </div>
                          	</div>
                            
                        </div>
                    </div>
                    </div>
                </div>
                
              	<div class="item js-hover-menu">
                    <span class="icon_root transition"><img src="https://laptopaz.vn/media/lib/hot-sale.png" alt=""></span>
                    <a href="/tin-khuyen-mai.html" class="root">KHUYẾN MÃI</a>
               </div>
              <div class="item js-hover-menu">
                    <span class="icon_root transition"><img src="https://laptopaz.vn/media/lib/tr-gp.png" alt=""></span>
                    <a href="/huong-dan-tra-gop.html" class="root">TRẢ GÓP</a>
               </div>
            </div>
        </div>
    </div>  





    <input type="submit" name="addcard" value="dathang" href="">









    <?php
session_start();
 require_once "functions.php"; ?>
<?php if (isset($_GET['page'])==true){
    $page = $_GET['page'];
    $page = strip_tags($page);
}
else $page = "" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="index.css">

</head>
<body>
<header>
    <div class="container">
        <div class="align-items-center justify-content-between d-flex">
            <a class="logo" href="index.php">
                <img alt="laptopaz.com chuyên laptop cũ, bán laptop cũ uy tín Hà Nội và toàn quốc" src="img/COMPUTER.png" class="img-fluid">
            </a>

            <div class="search-form">
                <!-- form search -->
                <form id="frm-search" name="search" action="/tim">
                    <button type="submit" id="sbutton"><i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                    <input type="text" placeholder="Bạn muốn tìm sản phẩm gì?" value="" name="q" id="stext" autocomplete="off">
                </form>
                <div class="autocomplete-suggestions">
                    <div class="suggest-container"></div>
                </div>
                <!-- end form search -->
            </div>

            <div class="box-hotline d-flex align-items-center flex-column" style="margin-top: 12px;line-height: 25px;font-weight: bold;">
                <p class="m-0 red text-18 text-uppercase">
                  <i class="fa fa-phone mr-2 text-20" aria-hidden="true"></i>Hotline</p>
                <p class="font-weight-bold hotline text-20 text-bold m-0"> 0825 233 233 </p>
            </div>

            <div class="align-items-center cart d-flex flex-column mt25 position-relative">
                <i class="fa fa-shopping-cart text-24 red" aria-hidden="true"></i>
                <a href="index.php?page=cart" class="text-16"> Giỏ hàng </a>
                <span class="cart-quantity-counter" id="count_shopping_cart_store">0</span>
            </div>
        </div>
    </div>

    <div class="menu" id="menu"> 
      <?php include "loai.php" ?> </div>
</header>
<div class="content_mid">
 
 
  
    <div class="slideshow-container">
    <?php switch($page){
                case "sp" : require_once "chitietsp.php"; break;
                case "loai" : require_once "sptrongloai.php"; break;
                case "cart" : require_once "test_add-card.php"; break;
                case "dangky" : require_once "dangky.php"; break;
                case "dangnhap" : require_once "dangnhap.php"; break;
                case "doipass" : require_once "doipass.php"; break;
                default : require_once "home.php";
            } 
            ?>
    </div>

  </div>
</body>
<footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section about">
                    <h3>CÔNG TY TNHH CÔNG NGHỆ VIỆT NAM</h3>
                    <p>Địa chỉ : số 155 Quang Trung, Gò Vấp, Tp. HCM</p>
                    <p>Hotline : 0909090909</p>
                    <p>Email : Xcomputer@gmail.com</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div class="footer-section links">
                    <h3>Thông tin công ty</h3>
                    <ul>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Tuyển dụng</a></li>
                        <li><a href="#">Gửi góp ý, khiếu nại</a></li>
                    </ul>
                </div>
                <div class="footer-section links">
                    <h3>Chính sách công ty</h3>
                    <ul>
                        <li><a href="#">Chính sách giới thiệu</a></li>
                        <li><a href="#">Chính sách bảo hành</a></li>
                        <li><a href="#">Chính sách đổi trả</a></li>
                        <li><a href="#">Chính sách vận chuyển</a></li>
                        <li><a href="#">Chính sách bảo mật thông tin</a></li>
                        <li><a href="#">Hướng dẫn mua hàng - thanh toán</a></li>
                    </ul>
                </div>
                
            </div>
        </div>

    </footer>
  
</html>