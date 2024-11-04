<?php 
$ten_loai = trim(strip_tags($_POST['ten_loai']));
$thutu = (int) $_POST['thutu'];
$anhien = (int) $_POST['anhien'];
require_once "../functions.php";
$kq = chenloai($ten_loai, $thutu, $anhien);
if($kq == true) header('location: admin.php?page=thongbao');
?>
