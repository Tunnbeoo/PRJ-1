<div id="thongbao">
    <p> <?php
          if (session_status() === PHP_SESSION_NONE) session_start();        
          if (isset($_SESSION['thongbao'])){
              echo $_SESSION['thongbao'];  unset($_SESSION['thongbao']);
          }
        ?>
    <a href="admin.php">Về trang chủ</a>
    </p>
</div>
<style>
    #thongbao { 
    background: lightcyan; font-size: 24px;  height: 100%; text-align: center;
    display: grid; justify-content: center; align-items: center; 
}

</style>