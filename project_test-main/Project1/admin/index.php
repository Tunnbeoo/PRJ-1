<?php require_once "../functions.php"; ?>
<?php if (isset($_GET['page'])==true){
    $page = $_GET['page'];
    $page = strip_tags($page);
}
else $page = "" ?>
<head>
  <title>Quản trị website</title> <meta charset="utf-8">  
</head>
<style>
    * { box-sizing: border-box; padding: 0; margin: 0;}
.container { width: 1200px; margin: auto;}
.container > header { height: 90px; background: black; }
.container > nav { 
    height: 60px; background: silver; 
    display: flex; align-items: center; justify-content: center;
    border-radius: 15px;
}
.container > main { min-height: 500px; background: grey; }
.container > nav ul { list-style: none; font-size: 20px; }
.container > nav > ul > li { 
    display: inline-block; position: relative; text-align: center;padding: 0 10px;
} 
.container > nav > ul > li > a { text-decoration: none; color:white}
.container > nav > ul > li > a:hover { font-weight:bold}
.container > nav > ul > li >ul  { display: none;}
.container > nav > ul > li:hover > ul { 
    display: block; position: absolute;  background: grey;
    width: 200px; text-align:left;
}
.container > nav > ul > li:hover > ul > li{padding:8px; border-bottom:solid 1px wheat}
.container > nav > ul > li:hover > ul a {text-decoration: none; color: white}
.container > nav > ul > li:hover > ul a:hover{text-decoration: underline;font-weight:900}

</style>
<body>
<div class="container">
    <header> </header>    
    <nav> 
    <ul>
    <li> <a href="index.php">Trang chủ</a></li>
    <li> <a href="#">Quản lý loại </a>
            <ul>
            <li><a href="index.php?page=dsloai">Danh sách loại</a></li>
            <li><a href="index.php?page=themloai">Thêm loại</a></li>
            <li><a href="index.php?page=upfile">upfile</a></li>
            </ul>
    </li>
    <li> <a href="#">Quản lý sản phẩm </a>
        <ul>
            <li><a href="index.php?page=dssanpham">Danh sách sản phẩm</a></li>
            <li><a href="index.php?page=themsanpham">Thêm sản phẩm</a></li>
            <li><a href="index.php?page=suasanpham">Sửa sản phẩm</a></li>
            </ul>
    </li>
    <li> <a href="#">Quản lý đơn hàng </a></li>
    <li> <a href="thoat.php">Thoát </a></li>
</ul>

    </nav> 
    <main> <?php
switch ($page){
    case "dsloai": require_once 'dsloai.php'; break;
    case "themloai": require_once 'themloai.php'; break;
    case "sualoai": require_once 'sualoai.php'; break;
    case "dssanpham": require_once 'danhsachsp.php'; break;
    case "themsanpham": require_once 'themsp.php'; break;
    case "suasanpham": require_once 'suasp.php'; break;
    case "thongbao": require_once 'thongbao.php'; break;
    case "upfile": require_once 'upfile.php'; break;
    default: ;
}
?>
<div id="admin">
   <h3> Xin Chao ADMIN</h3>
</div>
 </main>
</div>
</body>
