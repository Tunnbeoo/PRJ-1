<?php
include('functions.php'); // Kết nối đến cơ sở dữ liệu

if (isset($_GET['keyword'])) {
    $keyword = $_GET['keyword'];

    // Truy vấn SQL để tìm kiếm sản phẩm theo từ khóa
    $sql = "SELECT * FROM sanpham WHERE ten_sp LIKE '%$keyword%'";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':keyword', $keyword, PDO::PARAM_STR);
    $stmt->execute();

    // Kiểm tra số lượng hàng trả về
    if ($stmt->rowCount() > 0) 
    {
        echo "<h2>Kết Quả Tìm Kiếm:</h2>";
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) 
        {
            echo "<p>{$row['ten_sp']}</p>";
        }
    } else 
    {
        echo "<p>Không tìm thấy sản phẩm.</p>";
    }
}

$conn = null; // Đóng kết nối
?>
