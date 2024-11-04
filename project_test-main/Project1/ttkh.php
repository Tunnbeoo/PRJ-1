<?php
session_start();
ob_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);
require_once "functions.php";




if (isset($_GET['page'])) {
    $page = strip_tags($_GET['page']);
} else {
    $page = "";
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['ten_sp'])) {
    // Khởi tạo giỏ hàng nếu chưa có
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = [];
    }

    $product = [
        'id_sp' => $_POST['id_sp'],
        'ten_sp' => $_POST['ten_sp'],
        'hinh' => $_POST['hinh'],
        'gia_km' => $_POST['gia_km'],
        'mota' => $_POST['mota']
    ];

    $_SESSION['cart'][] = $product;

    header("Location: index.php?page=cart");
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="index.css">

</head>

<body>


    <header>
        <div class="container">
            <div class="align-items-center justify-content-between d-flex">
                <a class="logo" href="index.php">
                    <img alt="laptopaz.com chuyên laptop cũ, bán laptop cũ uy tín Hà Nội và toàn quốc"
                        src="img/COMPUTER.png" class="img-fluid">
                </a>

                <div class="search-form">
                    <!-- form search -->
                    <form id="frm-search" name="search" action="search.php" method="get">
                        <button type="submit" id="sbutton"><i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                        <input type="text" placeholder="Bạn muốn tìm sản phẩm gì?" value="" name="keyword" id="stext"
                            autocomplete="off">
                    </form>
                    <div class="autocomplete-suggestions">
                        <div class="suggest-container"></div>
                    </div>
                    <!-- end form search -->
                </div>

                <div class="box-hotline d-flex align-items-center flex-column"
                    style="margin-top: 12px;line-height: 25px;font-weight: bold;">
                    <p class="m-0 red text-18 text-uppercase">
                        <i class="fa fa-phone mr-2 text-20" aria-hidden="true"></i>Hotline
                    </p>
                    <p class="font-weight-bold hotline text-20 text-bold m-0"> 0825 233 233 </p>
                </div>

                <div id="chao">
                    <?php
                    if (isset($_SESSION['ho'])) {
                        echo " " . $_SESSION['ho'] . "" . $_SESSION['ten'] . "<br>";
                        echo " <a href='thoat.php'>Thoát</a>";
                    } else { ?><div
                        class="align-items-center cart d-flex flex-column mt30 position-relative icon-user "
                        style="margin-top: 25px;">
                        <i class="fa-solid fa-user fa-xl"></i>
                        <a href="dndk.php" class="text-16"> Đăng nhập / Đăng ký </a>
                    </div><?php }

                                ?>
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
    <!-- <div class="profile">
        <div class="customer-in4">
            <div class="in4">
                <div class="Oe">
                    <h4>Tổng quan</h4>
                    <div>
                        <div class="ta gc Ge eg vc">
                            <div class="af kg ta Lf Mb De">
                                <div class="fe xb">Tên đăng nhập</div>
                                <div class="Ua Zd rc tc">
                                    <div class="de">Chưa có tên đăng nhập</div>
                                </div>
                            </div>
                            <div class="af kg ta Lf Mb De">
                                <div class="fe xb">Email</div>
                                <div class="Ua Zd rc tc">duongminhtrung.12c4htk@gmail.com</div>
                            </div>
                            <div class="af kg ta Lf Mb De">
                                <div class="fe xb">Họ và tên</div>
                                <div class="Ua Zd rc tc">Trung Minh</div>
                            </div>
                            <div class="af kg ta Lf Mb De">
                                <div class="fe xb">Nhóm khách hàng</div>
                                <div class="Ua Zd rc tc">Member</div>
                            </div>
                            <div class="af kg ta Lf Mb De">
                                <div class="fe xb">Số dư</div>
                                <div class="Ua Zd rc tc">0đ</div>
                            </div>
                            <div class="af kg ta Lf Mb De">
                                <div class="fe xb">Đã tích lũy</div>
                                <div class="Ua Zd rc tc">0đ</div>
                            </div>
                            <div class="af kg ta Lf Mb De">
                                <div class="fe xb">Ngày tham gia</div>
                                <div class="Ua Zd rc tc">2023-04-14 21:09:06</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <section style="background-color: #eee;">
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="index.php">Trang Chủ</a></li>
                            <!-- <li class="breadcrumb-item"><a href="#">Profile</a></li> -->
                            <li class="breadcrumb-item active" aria-current="page"><a href="ttkh.php">Thông tin khách
                                    hàng</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <?php
                if (isset($_SESSION['ho'])) {
                 
                    
                
                ?>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
                            <h5 class="my-3"><?php echo "" . $_SESSION['ho'] . "" . $_SESSION['ten'] . ""?></h5>
                            <!-- <p class="text-muted mb-1">Full Stack Developer</p>
                            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p> -->
                            <!-- <div class="d-flex justify-content-center mb-2">
                                <button type="button" class="btn btn-primary">Follow</button>
                                <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                            </div> -->
                        </div>
                    </div>

                </div>
               <div class="col-lg-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Họ và Tên</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0"><?php echo "" . $_SESSION['ho'] . "" . $_SESSION['ten'] . ""?></p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0"><?php echo "" . $_SESSION['email'] . ""?></p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Số điện thoại</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(097) 234-5678</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Địa chỉ</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            <?php } 

                            ?>
            </div>
        </div>
    </section>
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
<style>
#chao {
    border-bottom: 1px lightgoldenrodyellow solid;
    padding: 20px;
    font-size: 20px;
    text-align: center;
    color: #2b80dd;
}
</style>
</body>