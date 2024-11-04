<?php 
$ten_sp = trim(strip_tags($_POST['ten_sp']));
$id_sp = (int) $_POST['id_sp'];
$anhien = (int) $_POST['anhien'];
require_once "../functions.php";
$kq = chensp($ten_sp, $id_sp, $anhien);
if($kq == true) header('location: admin.php?page=thongbao');
?>