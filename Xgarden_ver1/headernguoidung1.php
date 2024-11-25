<?php session_start(); ?>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tunnbeoo";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch product groups
$sql_nhom = "SELECT * FROM `sanpham_nhom`";
$result_nhom = mysqli_query($conn, $sql_nhom);

$addToCartClicked = isset($_POST['addcart']);

if ($addToCartClicked && !isset($_SESSION['user'])) {
    // Redirect to login if user is not logged in and tries to add to cart
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>

<head>
    <!-- Basic Meta Tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Title and Meta Tags -->
    <title>X-Garden</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="./assetss/css/style.css">
    <link rel="stylesheet" href="./assetss/css/responsive.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">

    <!-- Additional CSS -->
    <link rel="stylesheet" href="./assetss/css/jquery.mCustomScrollbar.min.css">

    <!-- Favicon -->
    <link rel="icon" href="./assetss/images/fevicon.png" type="image/gif" />

    <style>
        .header_section {
            width: 100%;
            float: left;
            background-image: url(./assetss/images/banner-bg.png) !important;
            background-color: #f6bca6;
            height: auto;
            background-size: 100%;
            background-repeat: no-repeat;
        }

        .bg-light {
            /* background-image: url(./assetss/images/header1.jpg) !important; */
        }

        .container-fluid {
            padding-left: 0;
            padding-right: 0;
            margin-left: 0;
            margin-right: 0;
        }

        .user-menu {
            display: none;
            position: absolute;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            right: 0;
            top: 120%;
            z-index: 1000;
            min-width: 150px;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translateY(-10px);
        }

        .user-menu.show {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>

<body>
    <div class="header_section">
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.php"><img src="./assetss/images/logo.png"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <?php if (isset($_SESSION['user'])) { ?>
                        <!-- Search Form -->
                        <form class="form-inline my-2 my-lg-0 mr-auto" action="search.php" method="GET">
                            <input class="form-control mr-sm-2" type="search" name="query" placeholder="Tìm kiếm sản phẩm" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                        </form>

                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
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
                                    <li>
                                        <a href="#" id="userMenuToggle">
                                            <span class="user_icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                                            <?php echo $_SESSION['user']; ?>
                                        </a>
                                        <div id="userMenu" style="display: none;">
                                            <ul>
                                                <li><a href="logout.php"><span class="user_icon"> <i class="fa fa-sign-out-alt" aria-hidden="true"></i></span>Đăng xuất</a></li>
                                                <li><a href="cart.php"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Giỏ Hàng</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    <?php } else { ?>
                        <ul class="navbar-nav ml-auto">
                            <form class="form-inline my-2 my-lg-0 mr-auto" action="search.php" method="GET">
                                <input class="form-control mr-sm-2" type="search" name="query" placeholder="Tìm kiếm sản phẩm" aria-label="Search">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                            </form>
                            <li class="nav-item active">
                                <a class="nav-link" href="index.php">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="fullsp.php">Sản Phẩm</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="login.php">Đơn Hàng</a>
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
                    <?php } ?>
                </div>
            </nav>
        </div>

        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var userMenuToggle = document.getElementById('userMenuToggle');
                var userMenu = document.getElementById('userMenu');

                userMenuToggle.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default link action
                    // Toggle menu display
                    if (userMenu.style.display === "none" || userMenu.style.display === "") {
                        userMenu.style.display = "block";
                    } else {
                        userMenu.style.display = "none";
                    }
                });

                // Close menu when clicking outside
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