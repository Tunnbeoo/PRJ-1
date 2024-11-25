<?php
require 'vendor/autoload.php'; // Đảm bảo rằng dòng này có ở đầu file

include "headernguoidung.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Nhận thông tin từ giỏ hàng
    $products = $_SESSION['giohang'];
    $totalAmount = 0;

    if (empty($products)) {
        // Giỏ hàng trống, chuyển về trang giỏ hàng
        header("Location: cart.php");
        exit();
    }

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

// Format the total amount to include VNĐ
$formattedTotalAmount = number_format($totalAmount, 0, ',', '.') . ' VNĐ';

// Extract the numeric part for the QR code URL
$qrAmount = number_format($totalAmount, 0, '', '');
?>


<?php include 'config.php'; // Bao gồm file cấu hình 
?>

<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <title>Thanh Toán</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .order-info-container {
            margin-left: 20px;
            /* Indent to the right */
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .order-info-title {
            color: #4CAF50;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .order-info-item {
            font-size: 16px;
            margin: 5px 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        th,
        td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        .image-cell img {
            max-width: 100px;
            height: auto;
            display: block;
            margin: 0 auto;
        }

        .total-amount {
            font-size: 18px;
            font-weight: bold;
            text-align: right;
            margin-top: 20px;
        }

        .payment-form-container {
            max-width: 450px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .payment-method-container {
            margin-bottom: 20px;
        }

        .payment-method-option {
            display: block;
            margin-bottom: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            padding: 10px;
            border-radius: 5px;
            background-color: #fff;
            border: 1px solid #ddd;
        }

        .payment-method-option:hover {
            background-color: #e0e0e0;
        }

        .payment-method-option input[type="radio"] {
            margin-right: 10px;
        }

        .qr-code-container {
            display: none;
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .qr-code-image {
            width: 500px;
            /* height: 500px; */
            display: block;
            margin: 10px auto;
        }

        .payment-submit-button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .payment-submit-button:hover {
            background-color: #45a049;
        }

        h3 {
            font-size: 1.5em;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }

        h3.total-amount {
            color: #e74c3c;
            font-weight: bold;
        }

        h2 {
            font-size: 2em;
            color: #2c3e50;
            text-align: center;
            margin-top: 30px;
            margin-bottom: 20px;
            border-top: 2px solid #ddd;
            padding-top: 10px;
        }

        .modal {
            display: none;
            /* Hidden by default */
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.5);
            /* Black with opacity */
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            text-align: center;
            position: relative;
        }

        .close-button {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        .close-button:hover,
        .close-button:focus {
            color: black;
            text-decoration: none;
        }

        .checkmark-icon {
            font-size: 50px;
            color: #4CAF50; /* Green color for success */
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <div class="order-info-container">
        <h2 class="order-info-title">Thông Tin Đặt Hàng</h2>
        <p class="order-info-item">Họ Tên: <?php echo htmlspecialchars($hoten); ?></p>
        <p class="order-info-item">Số Điện Thoại: <?php echo htmlspecialchars($dienthoai); ?></p>
        <p class="order-info-item">Địa Chỉ: <?php echo htmlspecialchars($diachi); ?></p>
        <p class="order-info-item">Email: <?php echo htmlspecialchars($email); ?></p>
    </div>

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
                            <!-- Placeholder or alternative content if image not found -->
                        <?php endif; ?>
                    </td>
                    <td><strong><?php echo htmlspecialchars($product[1]); ?></strong></td>
                    <td><?php echo number_format(floatval($product[2]), 0, ',', '.') . ' VNĐ'; ?></td>
                    <td><?php echo htmlspecialchars($product[3]); ?></td>
                    <td><?php echo number_format(floatval(str_replace(',', '', $product[2])) * intval($product[3]), 0, ',', '.') . ' VNĐ'; ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <h3 class="total-amount">Tổng Số Tiền: <?php echo number_format($totalAmount, 0, ',', '.') . ' VNĐ'; ?></h3>

    <h2>Phương Thức Thanh Toán</h2>
    <form id="paymentForm" class="payment-form-container">
        <div class="payment-method-container">
            <div>
                <label class="payment-method-option">
                    <input type="radio" name="payment_method" value="cash" checked>
                    Thanh toán bằng tiền mặt
                </label><br>
                <label class="payment-method-option">
                    <input type="radio" name="payment_method" value="qr">
                    Thanh toán bằng mã QR
                </label><br>
            </div>
            <div id="qrCodeContainer" class="qr-code-container">
                <h3>Mã QR cho tổng số tiền: <span id="totalAmountDisplay"><?php echo $formattedTotalAmount; ?></span></h3>
                <img src="https://img.vietqr.io/image/TPBank-09190599922-compact2.png?amount=<?php echo $qrAmount; ?>&addInfo=Thanh Toán qua VietQR&accountName=Dương%20Minh%20Trung" alt="" class="qr-code-image">
            </div>
        </div>
        <input type="hidden" name="totalAmount" value="<?php echo htmlspecialchars($totalAmount); ?>">
        <input type="button" value="Xác Nhận Thanh Toán" class="payment-submit-button" onclick="confirmOrder()">
    </form>
    <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="checkmark-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Đặt Hàng Thành Công!</h2>
            <p>Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được xử lý thành công.</p>
        </div>
    </div>
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
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('.payment-form-container');
            const modal = document.getElementById('successModal');
            const closeButton = document.querySelector('.close-button');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the form from submitting
                modal.style.display = 'block'; // Show the modal
            });

            closeButton.addEventListener('click', function() {
                modal.style.display = 'none'; // Hide the modal
            });

            // Close the modal when clicking outside of it
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                    window.location.href = 'index.php'; // Redirect to homepage
                }
            });
        });
    </script>
    <script>
        function confirmOrder() {
            // Here you can add any logic needed before redirecting, like sending data to the server via AJAX

            // Redirect to the homepage
            window.location.href = 'index.php';
        }
    </script>
</body>

</html>