<?php include "headerquantri.php"; ?>
<?php
include "function_lienhe.php";

$lienhe = new lienhe();

// Kiểm tra xem có dữ liệu từ form gửi lên không
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Lấy dữ liệu từ form
    $hoten = $_POST['hoten'];
    $sdt = $_POST['sdt'];
    $email = $_POST['email'];
    $noidung = $_POST['noidung'];

    // Gọi phương thức add để thêm dữ liệu
    $lienhe->add($hoten, $sdt, $email, $noidung);
}
?>

<!-- Form thêm liên hệ -->
<form method="POST" action="">
    <label for="hoten">Họ và tên:</label>
    <input type="text" name="hoten" required><br>

    <label for="sdt">Số điện thoại:</label>
    <input type="text" name="sdt" required><br>

    <label for="email">Email:</label>
    <input type="email" name="email" required><br>

    <label for="noidung">Nội dung:</label>
    <textarea name="noidung" required></textarea><br>

    <input type="submit" value="Thêm liên hệ">
</form>