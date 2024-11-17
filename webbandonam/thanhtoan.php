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

<?php
require './vendor/autoload.php'; // Đảm bảo bạn đã tải thư viện

use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;

// Tạo nội dung cho mã QR
$accountNumber = '09190599922'; // Số tài khoản ngân hàng của bạn
$bankName = 'Ngân hàng Tiên Phong'; // Tên ngân hàng
$totalAmount = 100000; // Tổng số tiền (thay thế bằng giá trị thực tế)
$qrText = 'Ngân hàng: ' . $bankName . ' - Số tài khoản: ' . $accountNumber . ' - Tổng số tiền: ' . $totalAmount . ' VNĐ';

// Tạo mã QR
$qrCode = new QrCode($qrText);
$qrCode->setSize(300); // Kích thước mã QR
$qrCode->setMargin(10); // Lề của mã QR

// Tạo writer để xuất mã QR
$writer = new PngWriter();

// Lưu mã QR vào tệp
$writer->write($qrCode)->saveToFile(__DIR__ . '/qrcode.png'); // Lưu mã QR vào tệp qrcode.png

// Hoặc bạn có thể xuất mã QR trực tiếp ra trình duyệt
header('Content-Type: image/png');
echo $writer->write($qrCode)->getString();
?>

<?php include 'config.php'; // Bao gồm file cấu hình ?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thanh Toán</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
        }

        h2,
        h3 {
            color: #333;
            padding-bottom: 10px;
        }

        p {
            font-size: 16px;
            color: #555;
            margin: 5px 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        th,
        td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #007bff;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        .image-cell {
            text-align: center;
        }

        .product-img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding: 5px;
            background-color: #f9f9f9;
            display: block;
            margin: 0 auto;
        }

        .total-amount {
            margin-top: 15px;
        }

        .payment-form {
            max-width: 900px;
            margin: 20px 0;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .payment-option {
            display: inline-flex;
            align-items: center;
            padding: 10px;
            border: 2px solid #007bff;
            border-radius: 5px;
            background-color: #f9f9f9;
            color: #333;
            cursor: pointer;
            transition: background-color 0.3s, border-color 0.3s;
            margin-bottom: 10px;
        }

        .payment-option input[type="radio"] {
            display: none;
        }

        .payment-option:hover {
            background-color: #e9ecef;
        }

        .payment-option input[type="radio"]:checked+span {
            background-color: #007bff;
            color: white;
        }

        .submit-button {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        .submit-button:hover {
            background-color: #0056b3;
        }

        /* Flexbox container for payment method and QR code */
        .payment-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
        }

        #qrCodeContainer {
            display: none;
            /* Ẩn mã QR ban đầu */
            margin-left: 20px;
            /* Khoảng cách bên trái cho mã QR */
        }
        </style>
</head>
<body>
    <h2>Thông Tin Đặt Hàng</h2>
    <p>Họ Tên: <?php echo htmlspecialchars($hoten); ?></p>
    <p>Số Điện Thoại: <?php echo htmlspecialchars($dienthoai); ?></p>
    <p>Địa Chỉ: <?php echo htmlspecialchars($diachi); ?></p>
    <p>Email: <?php echo htmlspecialchars($email); ?></p>

    <h3>Chi Tiết Sản Phẩm</h3>
    <table>
        <thead>
            <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($products as $product): ?>
                <tr>
                    <td class="image-cell">
                        <?php
                        $imagePath = 'upload/' . htmlspecialchars($product[0]);
                        if (file_exists($imagePath)):
                        ?>
                            <img src="<?php echo $imagePath; ?>" alt="<?php echo htmlspecialchars($product[1]); ?>" class="product-img">
                        <?php else: ?>
                            <img src="path/to/default/image.png" alt="Hình ảnh không có sẵn" class="product-img">
                        <?php endif; ?>
                    </td>
                    <td><strong><?php echo htmlspecialchars($product[1]); ?></strong></td>
                    <td><?php echo number_format(floatval($product[2]), 0, ',', '.'); ?> VNĐ</td>
                    <td><?php echo htmlspecialchars($product[3]); ?></td>
                    <td><?php echo number_format(floatval(str_replace(',', '', $product[2])) * intval($product[3]), 0, ',', '.'); ?> VNĐ</td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <h3 class="total-amount">Tổng Số Tiền: <?php echo number_format($totalAmount, 0, ',', '.'); ?> VNĐ</h3>

    <h2>Phương Thức Thanh Toán</h2>
    <form action="process_payment.php" method="POST" class="payment-form">
        <div class="payment-container">
            <div>
                <label class="payment-option">
                    <input type="radio" name="payment_method" value="cash" checked>
                    Thanh toán bằng tiền mặt
                </label><br>
                <label class="payment-option">
                    <input type="radio" name="payment_method" value="qr">
                    Thanh toán bằng mã QR
                </label><br>
            </div>
            <div id="qrCodeContainer" style="display: none;">
                <h3>Mã QR cho tổng số tiền: <span id="totalAmountDisplay"><?php echo $totalAmount . ' VNĐ'; ?></span></h3>
                <img id="qrCode" src="qrcode.png" alt="Mã QR" /> <!-- Hiển thị mã QR -->
            </div>
        </div>
        <input type="hidden" name="totalAmount" value="<?php echo htmlspecialchars($totalAmount); ?>">
        <input type="submit" value="Xác Nhận Thanh Toán" class="submit-button">
    </form>

    <script>
        // Khi người dùng thay đổi phương thức thanh toán
        document.querySelectorAll('input[name="payment_method"]').forEach(function(element) {
            element.addEventListener('change', function() {
                if (this.value === 'qr') {
                    document.getElementById('qrCodeContainer').style.display = 'block'; // Hiển thị mã QR
                } else {
                    document.getElementById('qrCodeContainer').style.display = 'none'; // Ẩn mã QR
                }
            });
        });
    </script>
</body>
</html>