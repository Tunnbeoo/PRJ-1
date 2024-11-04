<?php

$host = 'localhost'; 
$username = 'root'; 
$password = ''; 
$database = 'laptop1'; 

// Thực hiện kết nối
$db = mysqli_connect($host, $username, $password, $database);

// Kiểm tra kết nối
if (!$db) {
    die("Lỗi kết nối cơ sở dữ liệu: " . mysqli_connect_error());
}

// Hàm để đóng kết nối cơ sở dữ liệu
function closeDatabase() {
    global $db;
    mysqli_close($db);
}
?>
