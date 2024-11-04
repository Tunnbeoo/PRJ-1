<?php
$host = "localhost";
$db_name = "laptop1";
$db_un = "root";
$db_pw = "";
$conn = null;
try {
    $conn = new PDO("mysql:host=$host; dbname=$db_name; charset=utf8", $db_un, $db_pw);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('loi database' . $e->getMessage());
}
function layloaisp()
{
    global $conn;
    try {
        $sql = "SELECT id_loai, ten_loai, thutu, anhien
        FROM loai
        WHERE anhien=1 ORDER BY thutu asc";
        $loaisp_arr = $conn->query($sql);
        return $loaisp_arr;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function layxemnhieu()
{
    global $conn;
    try {
        $sql = "SELECT id_sp, ten_sp, gia, hinh
        FROM sanpham
        WHERE anhien=1 AND hot=1 ORDER BY soluotxem DESC LIMIT 0,9";
        $kq = $conn->query($sql);
        return $kq;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function laysp_chitiet($id = 0)
{
    global $conn;
    try {
        $sql = "SELECT sanpham.id_sp, ten_sp, gia, gia_km,hinh,ngay,RAM,CPU,Dia,Mausac,Cannang,mota
        FROM sanpham, sanphamchitiet
        WHERE sanpham.id_sp=sanphamchitiet.id_sp AND sanpham.id_sp=$id";
        $sp = $conn->query($sql);
        return $sp;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function laysp_trongloai($id=1, $page_num = 1, $page_size = 9)
{
    global $conn;
    try {
        $start_row = ($page_num - 1) * $page_size;
        $sql = "SELECT id_sp, ten_sp, gia,hinh,ngay
        FROM sanpham WHERE id_loai=$id 
        ORDER BY ngay DESC LIMIT $start_row, $page_size";
        $sp = $conn->query($sql);
        return $sp;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function laytenloai($id=0)
{
    global $conn;
    try {
        $sql = "SELECT ten_loai FROM loai WHERE id_loai=$id ";
        $kq = $conn->query($sql);
         $row=$kq->fetch();
        return $row['ten_loai'];
    }
     catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function chenloai($ten_loai, $thutu, $anhien)
{
    global $conn;
    try {
        $sql = "INSERT INTO loai SET ten_loai = '$ten_loai' , thutu=$thutu , anhien=$anhien ";
        $conn->exec($sql);
        return true;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function lay1loai($id = 0)
{
    global $conn;
    try {
        $sql = "SELECT id_loai, ten_loai , thutu, anhien FROM loai WHERE id_loai=$id ";
        $kq = $conn->query($sql);
        return $kq->fetch();
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function listloaisp()
{
    global $conn;
    try {
        $sql = "SELECT id_loai, ten_loai , thutu, anhien FROM loai ORDER BY thutu ASC ";
        $loaisp_arr = $conn->query($sql);
        return $loaisp_arr;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function xoa1loai($id_loai)
{
    global $conn;
    try {
        $sql = "DELETE FROM loai WHERE id_loai=$id_loai ";
        $conn->exec($sql);
        return true;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function chenuser($ho, $ten, $email, $mk)
{
    global $conn;
    try {
        $sql = "INSERT INTO users SET ho='$ho', ten='$ten',email='$email',matkhau='$mk'";
        $conn->exec($sql);
        return true;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function checkEmailPass($email, $mk)
{
    global $conn;
    try {
        $sql = "SELECT * FROM users WHERE email='$email' ";
        $kq = $conn->query($sql);
        $row = $kq->fetch();
        if ($row == null) return "khong ton tai email $email";
        $mk_mahoa = $row['matkhau'];
        if (password_verify($mk, $mk_mahoa) == false) return "mat khau khong dung";
        else return $row;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function capnhatmatkhau($email, $mk)
{
    global $conn;
    try {
        $sql = "UPDATE users SET matkhau = '$mk' WHERE email='$email'";
        $kq = $conn->exec($sql);
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function lay1sp($id = 0)
{
    global $conn;
    try {
        $sql = "SELECT id_sp, ten_sp , ngay, anhien FROM sanpham WHERE id_sp=$id ";
        $kq = $conn->query($sql);
        return $kq->fetch();
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function listsp()
{
    global $conn;
    try {
        $sql = "SELECT id_sp, ten_sp , ngay, anhien FROM sanpham ORDER BY ngay ASC ";
        $sp_arr = $conn->query($sql);
        return $sp_arr;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}
function chensp($ten_sp, $id_sp, $anhien)
{
    global $conn;
    try {
        $sql = "INSERT INTO sanpham SET ten_sp = '$ten_sp' , id_sp = '$id_sp' , anhien=$anhien ";
        $conn->exec($sql);
        return true;
    } catch (PDOException $e) {
        die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
    }
}