<?php include "headernguoidung.php"; ?>


<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Nhận thông tin từ giỏ hàng
    $products = $_SESSION['giohang'];
    $totalAmount = 0;

    foreach ($products as $product) {
        // Chuyển đổi giá trị thành số trước khi tính toán
        $price = floatval(str_replace(',', '', $product[2])); // Xóa dấu phẩy và chuyển đổi thành số
        $quantity = intval($product[3]); // Chuyển đổi thành số nguyên
        $totalAmount += $price * $quantity; // Đơn giá * Số lượng
    }

    // Nhận thông tin người đặt hàng
    $hoten = $_POST['hoten'];
    $dienthoai = $_POST['dienthoai'];
    $diachi = $_POST['diachi'];
    $email = $_POST['email'];
} else {
    // Nếu không có dữ liệu, chuyển về trang giỏ hàng
    header("Location: cart.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <title>Thanh Toán</title>
    <style>
        /* Thêm CSS tùy chỉnh ở đây */
    </style>
</head>

<body>
    <h2>Thông Tin Đặt Hàng</h2>
    <p>Họ Tên: <?php echo htmlspecialchars($hoten); ?></p>
    <p>Số Điện Thoại: <?php echo htmlspecialchars($dienthoai); ?></p>
    <p>Địa Chỉ: <?php echo htmlspecialchars($diachi); ?></p>
    <p>Email: <?php echo htmlspecialchars($email); ?></p>

    <h3>Chi Tiết Sản Phẩm</h3>
    <ul>
        <?php foreach ($products as $product): ?>
            <li>
                <img src="<?php echo htmlspecialchars($product[0]); ?>" alt="<?php echo htmlspecialchars($product[1]); ?>" style="width:50px;height:50px;">
                <strong><?php echo htmlspecialchars($product[1]); ?></strong> - Giá: 
                <?php echo htmlspecialchars($product[2]); ?> VNĐ - Số lượng: 
                <?php echo htmlspecialchars($product[3]); ?> - Thành tiền: 
                <?php echo htmlspecialchars(floatval(str_replace(',', '', $product[2])) * intval($product[3])); ?> 000 VNĐ
            </li>
        <?php endforeach; ?>
    </ul>
    <h3>Tổng Số Tiền: <?php echo htmlspecialchars($totalAmount); ?>000 VNĐ</h3>

    <h2>Phương Thức Thanh Toán</h2>
    <form action="process_payment.php" method="POST">
        <label>
            <input type="radio" name="payment_method" value="cash" checked> Thanh toán bằng tiền mặt
        </label><br>
        <label>
            <input type="radio" name="payment_method" value="qr"> Thanh toán bằng mã QR
        </label><br>
        <input type="hidden" name="totalAmount" value="<?php echo htmlspecialchars($totalAmount); ?>">
        <input type="submit" value="Xác Nhận Thanh Toán">
    </form>
</body>

</html>