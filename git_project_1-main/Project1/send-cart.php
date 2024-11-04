<!-- <h1>Bạn đã đặt hàng thành công!</h1>
    <p>Cảm ơn bạn đã mua hàng. Chúng tôi sẽ xử lý đơn hàng của bạn trong thời gian sớm nhất.</p>
    <a href="index.php">Quay về trang chủ</a> -->
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sendcart.css">
    <title>Đặt Hàng Thành Công</title>
</head>
<body>
    <div class="container">
        <div class="success-message">
            <h1>Đặt Hàng Thành Công!</h1>
            <p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ xử lý đơn hàng của bạn ngay lập tức.</p>
            <a href="index.php">Quay lại Trang Chủ</a>
        </div>
    </div>
</body>
</html>

<?php
session_start();
include 'functionss.php'; 

if (isset($_POST['send_order'])) {
 
    if (!$db) {
        die("Lỗi kết nối cơ sở dữ liệu: " . mysqli_connect_error());
    }
    
    $id_user = 0; 
    $tennguoinhan = $_POST['user_info']['name'];
    $dienthoai = $_POST['user_info']['tel'];
    $diachigiaohang = $_POST['user_info']['address'];
    $email = $_POST['user_info']['email'];
    $thoidiemmua = date("Y-m-d H:i:s"); 
    $trangthai = 0; 
    $noidung = $_POST['user_info']['note'];

    $sql_order = "INSERT INTO donhang (id_user, thoidiemmua, tennguoinhan, dienthoai, diachigiaohang, trangthai, email, noidung) VALUES ('$id_user', '$thoidiemmua', '$tennguoinhan', '$dienthoai', '$diachigiaohang', '$trangthai', '$email', '$noidung')";

 
    if (mysqli_query($db, $sql_order)) {
        $order_id = mysqli_insert_id($db);

        foreach ($_SESSION['cart'] as $item) {
            $product_id = $item['id_sp'];
            $quantity = 1; 
            $price = $item['gia_km'];
            $ten_sp = $item['ten_sp'];
         
            $sql_detail = "INSERT INTO donhangchitiet (id_dh, id_sp, ten_sp, soluong, gia) VALUES ('$order_id', '$product_id', '$ten_sp', '$quantity', '$price')";
            mysqli_query($db, $sql_detail);
        }


    } else {
  
        echo "Lỗi khi lưu đơn hàng: " . mysqli_error($db);
    }

    mysqli_close($db);
}
?>
