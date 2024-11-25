<?php 
include "ketnoi.php";

class lienhe extends ketnoi {
    public $hoten;
    public $sdt;
    public $email;
    public $noidung;

    function insert() {
        $sql = "INSERT INTO `lienhe`(`hoten`, `sdt`, `email`, `chuc_nang`)
        VALUES ('".$this->hoten."','".$this->sdt."','".$this->email."','".$this->noidung."')";
        $result = mysqli_query($this->conn, $sql);
        if ($result) {
            echo "<script>alert('Đã Gửi Thành Công')</script>";
            echo "<script>window.location = 'lienhe.php'</script>";
        } else {
            echo "<script>alert('Lỗi')</script>";
        }
    }

    function hienthilienhe() {
        $sql = "SELECT * FROM lienhe";
        $result = mysqli_query($this->conn, $sql);
        return $result;
    }

    function hienthisdt($sdt) {
        $sql = "SELECT * FROM `lienhe` WHERE sdt = '$sdt'";
        $result = mysqli_query($this->conn, $sql);
        return $result;
    }

    function add($hoten, $sdt, $email, $noidung) {
        $this->hoten = $hoten;
        $this->sdt = $sdt;
        $this->email = $email;
        $this->noidung = $noidung;

        $sql = "INSERT INTO `lienhe`(`hoten`, `sdt`, `email`, `chuc_nang`)
        VALUES ('".$this->hoten."','".$this->sdt."','".$this->email."','".$this->noidung."')";
        $result = mysqli_query($this->conn, $sql);
        if ($result) {
            echo "<script>alert('Thêm thành công')</script>";
            echo "<script>window.location = 'lienhe.php'</script>";
        } else {
            echo "<script>alert('Lỗi khi thêm')</script>";
        }
    }

    function delete($sdt) {
        $sql = "DELETE FROM `lienhe` WHERE sdt='$sdt'";
        $result = mysqli_query($this->conn, $sql);
        if ($result) {
            echo "<script>alert('Xóa thành công')</script>";
            echo "<script>window.location = 'lienhe1.php'</script>";
        } else {
            echo "<script>alert('Lỗi')</script>";
        }
    }
}
?>