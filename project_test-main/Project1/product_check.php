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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="product_check.css">

</head>

<header>
    <div class="container">
        <div class="align-items-center justify-content-between d-flex">
            <a class="logo" href="index.php">
                <img alt="laptopaz.com chuyên laptop cũ, bán laptop cũ uy tín Hà Nội và toàn quốc" src="img/COMPUTER.png" class="img-fluid">
            </a>

            <div class="search-form">
                <!-- form search -->
                <form id="frm-search" name="search" action="search.php" method="get">
                    <button type="submit" id="sbutton"><i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                    <input type="text" placeholder="Bạn muốn tìm sản phẩm gì?" value="" name="keyword" id="stext" autocomplete="off">
                </form>
                <div class="autocomplete-suggestions">
                    <div class="suggest-container"></div>
                </div>
                <!-- end form search -->
            </div>

            <div class="box-hotline d-flex align-items-center flex-column" style="margin-top: 12px;line-height: 25px;font-weight: bold;">
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
                } else { ?><div class="align-items-center cart d-flex flex-column mt30 position-relative icon-user " style="margin-top: 25px;">
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
<div class="history_product">
    <div class="oder_h2">
        <h2>Lịch Sử Mua Hàng</h2>
    </div>
    <div class="select_product">
        <div class="code_oder">
            <h3>Mã Đặt Hàng</h3>
            <h5>ABC</h5>
        </div>
        <div class="money">
            <h3>Thành tiền</h3>
            <div class="text_13">
                <div class="name-price"></div>
            </div>
        </div>
        <div class="oder">
            <h3>Ngày Đặt Hàng</h3>
            <div class="text_13"></div>
        </div>
        <div class="status">
            <h3>Trạng thái</h3>
            <div class="text_13"></div>
        </div>
        <div class="act">
            <h3>Hành Động</h3>
            <div class="text_13"></div>
        </div>
    </div>
</div>