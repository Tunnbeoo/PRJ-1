<h1>Tong doanh thu</h1>
<?php
// Truy vấn SQL để lấy tổng doanh thu
$sql = "SELECT SUM(gia) as totalRevenue FROM donhangchitiet";
$stmt = $conn->prepare($sql);
$stmt->execute();

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    $totalRevenue = $result['totalRevenue'];

    echo "$" . number_format($totalRevenue, 2);
} else {
    echo "Không có dữ liệu doanh thu.";
}

// Đóng kết nối
$conn = null;
?>
