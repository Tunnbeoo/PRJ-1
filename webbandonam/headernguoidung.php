<?php session_start(); ?>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tunnbeoo";

// Tạo kết nối
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if (!$conn) {
   die("Kết nối thất bại: " . mysqli_connect_error());
}

// Lấy dữ liệu nhóm sản phẩm
$sql_nhom = "SELECT * FROM `sanpham_nhom`";
$result_nhom = mysqli_query($conn, $sql_nhom);

$addToCartClicked = isset($_POST['addcart']);

if ($addToCartClicked && !isset($_SESSION['user'])) {
   // Người dùng chưa đăng nhập và đã nhấn nút "Thêm vào giỏ hàng"
   // Chuyển hướng đến trang login.php
   header("Location: login.php");
   exit();
}
?>
<!DOCTYPE html>
<html>

<head>
   <!-- Thẻ meta cơ bản -->
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- Tiêu đề và thẻ meta -->
   <title>X-Garden</title>
   <meta name="keywords" content="">
   <meta name="description" content="">
   <meta name="author" content="">
   <!-- Bootstrap CSS -->
   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
   <!-- CSS tùy chỉnh -->
   <link rel="stylesheet" type="text/css" href="./assetss/css/style.css">
   <link rel="stylesheet" href="./assetss/css/responsive.css">
   <!-- Favicon -->
   <link rel="icon" href="./assetss/images/fevicon.png" type="image/gif" />
   <!-- Font CSS -->
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
   <!-- Scrollbar Custom CSS -->
   <link rel="stylesheet" href="./assetss/css/jquery.mCustomScrollbar.min.css">
   <!-- Font Awesome -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
   <style>
      .header_section {
         width: 100%;
         float: left;
         background-color: #398801;
         height: auto;
         background-size: 100%;
         background-repeat: no-repeat;
      }

      .navbar.navbar-expand-lg {
         background-color: #398801 !important;
      }

      .navbar-nav .nav-link,
      .navbar-brand {
         color: white !important;
      }

      .search-container {
         display: flex;
         align-items: center;
         border: 2px solid white;
         border-radius: 20px;
         overflow: hidden;
         background-color: #398801;
      }

      .form-inline .form-control {
         color: white;
         background-color: transparent;
         border: none;
         border-radius: 0;
         width: 250px;
         padding: 10px;
      }

      .form-inline .form-control::placeholder {
         color: white;
      }

      .search-icon {
         background-color: transparent;
         border: none;
         color: white;
         padding: 10px;
         cursor: pointer;
      }

      .navbar-toggler {
         border-color: white;
      }

      .navbar-toggler-icon {
         background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
      }
   </style>
</head>

<body>
   <div class="header_section"></div>
   <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-light">
         <a class="navbar-brand" href="index.php"><img src="./assetss/images/logo.png"></a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
               <form class="form-inline my-2 my-lg-0 mr-auto" action="search.php" method="GET">
                  <div class="search-container">
                     <input class="form-control" type="search" name="query" placeholder="Tìm kiếm" aria-label="Search">
                     <button class="search-icon" type="submit">
                        <i class="fas fa-search"></i>
                     </button>
                  </div>
               </form>
               <li class="nav-item">
                  <a class="nav-link" href="index.php">Trang chủ</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="fullsp.php">Sản Phẩm</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="cart.php">Giỏ Hàng</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="xemdonhang_dadat.php">Đơn Hàng</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="lienhe.php">Liên hệ</a>
               </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <div class="login_bt">
                  <ul>
                     <li><a href="login.php"><span class="user_icon"><i class="fa fa-user" aria-hidden="true"></i></span>Đăng nhập</a></li>
                     <li><a href="dangki.php"><span class="user_icon"><i class="fa fa-user-plus" aria-hidden="true"></i></span>Đăng kí</a></li>
                  </ul>
               </div>
            </form>
         </div>
      </nav>
   </div>

   <script>
      document.addEventListener('DOMContentLoaded', function() {
         var userMenuToggle = document.getElementById('userMenuToggle');
         var userMenu = document.getElementById('userMenu');

         userMenuToggle.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            // Chuyển đổi hiển thị của menu
            if (userMenu.style.display === "none" || userMenu.style.display === "") {
               userMenu.style.display = "block";
            } else {
               userMenu.style.display = "none";
            }
         });

         // Đóng menu khi nhấp ra ngoài
         document.addEventListener('click', function(event) {
            if (!userMenuToggle.contains(event.target) && !userMenu.contains(event.target)) {
               userMenu.style.display = "none";
            }
         });
      });
   </script>

   <!-- Javascript files-->
   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
   <script src="./assetss/js/jquery.min.js"></script>
   <script src="./assetss/js/popper.min.js"></script>
   <script src="./assetss/js/bootstrap.bundle.min.js"></script>
   <script src="./assetss/js/jquery-3.0.0.min.js"></script>
   <script src="./assetss/js/plugin.js"></script>
   <!-- sidebar -->
   <script src="./assetss/js/jquery.mCustomScrollbar.concat.min.js"></script>
   <script src="./assetss/js/custom.js"></script>
</body>
</html>