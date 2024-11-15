<?php
class ketnoi { 
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "tunnbeoo";
    protected $conn;

    // B1: Tạo kết nối
    function __construct() {
        $this->conn = mysqli_connect($this->servername, $this->username, $this->password, $this->dbname);
        
        // Kiểm tra kết nối
        if (!$this->conn) {
            die("Kết nối thất bại: " . mysqli_connect_error());
        }
    }
}
?>