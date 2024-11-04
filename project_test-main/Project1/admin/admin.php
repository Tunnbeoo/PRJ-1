<?php require_once "../functions.php"; ?>
<?php if (isset($_GET['page']) == true) {
    $page = $_GET['page'];
    $page = strip_tags($page);
} else $page = "" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Trang Admin</title>
    <link rel="stylesheet" href="admin.css">
    <link rel="stylesheet" href="../xtreme-admin-lite-master/assets/libs/chartist/dist/chartist.min.css">
    <link rel="stylesheet" href="../xtreme-admin-lite-master/dist/css/style.min.css">
</head>

<body>

    <header class="">
        <div class="navbar-header" data-logobg="skin5">
            <!-- ============================================================== -->
            <!-- Logo -->
            <!-- ============================================================== -->
            <a class="navbar-brand" href="">
                <!-- Logo icon -->
                <b class="logo-icon">
                    <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                    <!-- Dark Logo icon -->

                    <img src="../img/COMPUTER.png" alt="homepage" class="light-logo">
                    <div class="class-text">
                        Computer
                    </div>
                </b>
            </a>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <!-- This is for the sidebar toggle which is visible on mobile only -->
            <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
                    class="ti-menu ti-close"></i></a>
        </div>
        <ul class="navbar-nav float-end">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic show" href=""
                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src="../xtreme-admin-lite-master/assets/images/users/1.jpg" alt="user" class="rounded-circle"
                        width="31">
                </a>
                <ul class="dropdown-menu dropdown-menu-end user-dd animated " aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i>
                        My Profile</a>
                    <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i>
                        My Balance</a>
                    <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i>
                        Inbox</a>
                </ul>
            </li>
        </ul>
    </header>

    <nav>
        <ul>
            <div class="user-profile d-flex no-block dropdown m-t-20">
                <div class="user-pic"><img src="../xtreme-admin-lite-master/assets/images/users/1.jpg" alt="users"
                        class="rounded-circle" width="40"></div>
                <div class="user-content hide-menu m-l-10">
                    <a href="#" class="show" id="Userdd" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true">
                            <h5 class="m-b-0 user-name font-medium">Steave Jobs <i class="fa fa-angle-down"></i></h5>
                            <span class="op-5 user-email">varun@gmail.com</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="Userdd"
                        style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(64.8px, 54.4px);"
                        data-popper-placement="bottom-end">
                        <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My
                            Profile</a>
                        <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i> My
                            Balance</a>
                        <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i>
                            Inbox</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0)"><i class="ti-settings m-r-5 m-l-5"></i>
                            Account
                            Setting</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="../index.php"><i class="fa fa-power-off m-r-5 m-l-5"></i>
                            Logout</a>
                    </div>
                </div>
            </div>
            <!-- <img src="/Project1/img/logokh.png" alt=""> -->
            <li><a href="admin.php">TRANG CHỦ</a></li>
            <li><a href="admin.php?page=khachhang">KHÁCH HÀNG</a></li>
            <li> <a href="#">Quản lý loại </a>
                <ul>
                    <li><a href="admin.php?page=dsloai">Danh sách loại</a></li>
                    <li><a href="admin.php?page=themloai">Thêm loại</a></li>
                    <li><a href="#">upfile</a></li>
                </ul>
            </li>
            <li> <a href="#">Quản lý sản phẩm </a>
                <ul>
                    <li><a href="admin.php?page=dssanpham">Danh sách sản phẩm</a></li>
                    <li><a href="admin.php?page=themsanpham">Thêm sản phẩm</a></li>
                    <li><a href="admin.php?page=suasanpham">Sửa sản phẩm</a></li>
                </ul>
            </li>
            <li><a href="#">DANH SÁCH TIN TỨC</a></li>
            <li><a href="admin.php?page=doanhthu">DOANH THU</a></li>
        </ul>

        <div class="page-wrapper">
            <div class="page-breadcrumb">
                <div class="row align-items-center">
                    <div class="col-5">
                        <h4 class="page-title">Dashboard</h4>
                        <div class="d-flex align-items-center">
                            <nav class="breadcrumb-home" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card ">
                            <div class="card-body">
                                <div class="d-md-flex align-items-center">
                                    <div>
                                        <h4 class="card-title">Sales Summary</h4>
                                        <h5 class="card-subtitle">Overview of Latest Month</h5>
                                    </div>
                                    <div class="ms-auto d-flex no-block align-items-center">
                                        <ul class="list-inline font-12 dl m-r-15 m-b-0">
                                            <li class="list-inline-item text-info"><i class="fa fa-circle"></i> Iphone
                                            </li>
                                            <li class="list-inline-item text-primary"><i class="fa fa-circle"></i> Ipad
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <!-- column -->
                                    <div class="col-lg-12">
                                        <div class="campaign ct-charts">
                                            <div class="chartist-tooltip" style="top: 58.6px; left: 662px;"></div>
                                            <!-- <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 100%; height: 100%;"> -->
                                            <g class="ct-grids">
                                                <line x1="30" x2="30" y1="15" y2="215" class="ct-grid ct-horizontal">
                                                </line>
                                                <line x1="133.9696480887277" x2="133.9696480887277" y1="15" y2="215"
                                                    class="ct-grid ct-horizontal">
                                                </line>
                                                <line x1="237.93929617745536" x2="237.93929617745536" y1="15" y2="215"
                                                    class="ct-grid ct-horizontal"></line>
                                                <line x1="341.908944266183" x2="341.908944266183" y1="15" y2="215"
                                                    class="ct-grid ct-horizontal">
                                                </line>
                                                <line x1="445.8785923549107" x2="445.8785923549107" y1="15" y2="215"
                                                    class="ct-grid ct-horizontal">
                                                </line>
                                                <line x1="549.8482404436384" x2="549.8482404436384" y1="15" y2="215"
                                                    class="ct-grid ct-horizontal">
                                                </line>
                                                <line x1="653.817888532366" x2="653.817888532366" y1="15" y2="215"
                                                    class="ct-grid ct-horizontal">
                                                </line>
                                                <line x1="757.7875366210938" x2="757.7875366210938" y1="15" y2="215"
                                                    class="ct-grid ct-horizontal">
                                                </line>
                                                <line y1="215" y2="215" x1="30" x2="757.7875366210938"
                                                    class="ct-grid ct-vertical"></line>
                                                <line y1="148.33333333333331" y2="148.33333333333331" x1="30"
                                                    x2="757.7875366210938" class="ct-grid ct-vertical"></line>
                                                <line y1="81.66666666666666" y2="81.66666666666666" x1="30"
                                                    x2="757.7875366210938" class="ct-grid ct-vertical"></line>
                                                <line y1="15" y2="15" x1="30" x2="757.7875366210938"
                                                    class="ct-grid ct-vertical"></line>
                                            </g>
                                            <g>
                                                <g class="ct-series ct-series-a">
                                                    <path
                                                        d="M30,215L30,215C64.657,203.889,99.313,185.37,133.97,181.667C168.626,177.963,203.283,177.963,237.939,175C272.596,172.037,307.252,169.62,341.909,161.667C376.565,153.713,411.222,48.333,445.879,48.333C480.535,48.333,515.192,150.817,549.848,155C584.505,159.183,619.161,161.667,653.818,161.667C688.474,161.667,723.131,90.556,757.788,55L757.788,215Z"
                                                        class="ct-area" x1="NaN"></path>
                                                    <path
                                                        d="M30,215C64.657,203.889,99.313,185.37,133.97,181.667C168.626,177.963,203.283,177.963,237.939,175C272.596,172.037,307.252,169.62,341.909,161.667C376.565,153.713,411.222,48.333,445.879,48.333C480.535,48.333,515.192,150.817,549.848,155C584.505,159.183,619.161,161.667,653.818,161.667C688.474,161.667,723.131,90.556,757.788,55"
                                                        class="ct-line"></path>
                                                    <line x1="30" y1="215" x2="30.01" y2="215" class="ct-point"
                                                        ct:value="0"></line>
                                                    <line x1="133.9696480887277" y1="181.66666666666666"
                                                        x2="133.97964808872769" y2="181.66666666666666" class="ct-point"
                                                        ct:value="5"></line>
                                                    <line x1="237.93929617745536" y1="175" x2="237.94929617745535"
                                                        y2="175" class="ct-point" ct:value="6"></line>
                                                    <line x1="341.908944266183" y1="161.66666666666666"
                                                        x2="341.918944266183" y2="161.66666666666666" class="ct-point"
                                                        ct:value="8"></line>
                                                    <line x1="445.8785923549107" y1="48.33333333333334"
                                                        x2="445.8885923549107" y2="48.33333333333334" class="ct-point"
                                                        ct:value="25"></line>
                                                    <line x1="549.8482404436384" y1="155" x2="549.8582404436384"
                                                        y2="155" class="ct-point" ct:value="9"></line>
                                                    <line x1="653.817888532366" y1="161.66666666666666"
                                                        x2="653.827888532366" y2="161.66666666666666" class="ct-point"
                                                        ct:value="8"></line>
                                                    <line x1="757.7875366210938" y1="55" x2="757.7975366210937" y2="55"
                                                        class="ct-point" ct:value="24"></line>
                                                </g>
                                                <g class="ct-series ct-series-b">
                                                    <path
                                                        d="M30,215L30,215C64.657,208.333,99.313,195,133.97,195C168.626,195,203.283,208.333,237.939,208.333C272.596,208.333,307.252,205.476,341.909,201.667C376.565,197.857,411.222,161.667,445.879,161.667C480.535,161.667,515.192,208.333,549.848,208.333C584.505,208.333,619.161,181.667,653.818,181.667C688.474,181.667,723.131,199.444,757.788,208.333L757.788,215Z"
                                                        class="ct-area" x1="NaN"></path>
                                                    <path
                                                        d="M30,215C64.657,208.333,99.313,195,133.97,195C168.626,195,203.283,208.333,237.939,208.333C272.596,208.333,307.252,205.476,341.909,201.667C376.565,197.857,411.222,161.667,445.879,161.667C480.535,161.667,515.192,208.333,549.848,208.333C584.505,208.333,619.161,181.667,653.818,181.667C688.474,181.667,723.131,199.444,757.788,208.333"
                                                        class="ct-line"></path>
                                                    <line x1="30" y1="215" x2="30.01" y2="215" class="ct-point"
                                                        ct:value="0"></line>
                                                    <line x1="133.9696480887277" y1="195" x2="133.97964808872769"
                                                        y2="195" class="ct-point" ct:value="3"></line>
                                                    <line x1="237.93929617745536" y1="208.33333333333334"
                                                        x2="237.94929617745535" y2="208.33333333333334" class="ct-point"
                                                        ct:value="1"></line>
                                                    <line x1="341.908944266183" y1="201.66666666666666"
                                                        x2="341.918944266183" y2="201.66666666666666" class="ct-point"
                                                        ct:value="2"></line>
                                                    <line x1="445.8785923549107" y1="161.66666666666666"
                                                        x2="445.8885923549107" y2="161.66666666666666" class="ct-point"
                                                        ct:value="8"></line>
                                                    <line x1="549.8482404436384" y1="208.33333333333334"
                                                        x2="549.8582404436384" y2="208.33333333333334" class="ct-point"
                                                        ct:value="1"></line>
                                                    <line x1="653.817888532366" y1="181.66666666666666"
                                                        x2="653.827888532366" y2="181.66666666666666" class="ct-point"
                                                        ct:value="5"></line>
                                                    <line x1="757.7875366210938" y1="208.33333333333334"
                                                        x2="757.7975366210937" y2="208.33333333333334" class="ct-point"
                                                        ct:value="1"></line>
                                                </g>
                                            </g>
                                            <g class="ct-labels">
                                                <foreignObject style="overflow: visible;" x="30" y="220"
                                                    width="103.96964808872768" height="20">
                                                    <span class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 104px; height: 20px;">1</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" x="133.9696480887277" y="220"
                                                    width="103.96964808872768" height="20"><span
                                                        class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 104px; height: 20px;">2</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" x="237.93929617745536" y="220"
                                                    width="103.96964808872767" height="20"><span
                                                        class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 104px; height: 20px;">3</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" x="341.908944266183" y="220"
                                                    width="103.9696480887277" height="20"><span
                                                        class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 104px; height: 20px;">4</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" x="445.8785923549107" y="220"
                                                    width="103.96964808872764" height="20"><span
                                                        class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 104px; height: 20px;">5</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" x="549.8482404436384" y="220"
                                                    width="103.9696480887277" height="20"><span
                                                        class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 104px; height: 20px;">6</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" x="653.817888532366" y="220"
                                                    width="103.9696480887277" height="20"><span
                                                        class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 104px; height: 20px;">7</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" x="757.7875366210938" y="220"
                                                    width="30" height="20"><span class="ct-label ct-horizontal ct-end"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="width: 30px; height: 20px;">8</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" y="148.33333333333331" x="10"
                                                    height="66.66666666666667" width="10"><span
                                                        class="ct-label ct-vertical ct-start"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="height: 67px; width: 10px;">0k</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" y="81.66666666666664" x="10"
                                                    height="66.66666666666667" width="10"><span
                                                        class="ct-label ct-vertical ct-start"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="height: 67px; width: 10px;">10k</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" y="15" x="10"
                                                    height="66.66666666666666" width="10">
                                                    <span class="ct-label ct-vertical ct-start"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="height: 67px; width: 10px;">20k</span>
                                                </foreignObject>
                                                <foreignObject style="overflow: visible;" y="-15" x="10" height="30"
                                                    width="10"><span class="ct-label ct-vertical ct-start"
                                                        xmlns="http://www.w3.org/2000/xmlns/"
                                                        style="height: 30px; width: 10px;">30k</span>
                                                </foreignObject>
                                            </g>
                                            <defs>
                                                <linearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
                                                    <stop offset="0" stop-color="rgba(255, 255, 255, 1)"></stop>
                                                    <stop offset="1" stop-color="rgba(64, 196, 255, 1)"></stop>
                                                </linearGradient>
                                            </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- column -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-right">
                            <div class="card-body">
                                <h4 class="card-title">Feeds</h4>
                                <div class="feed-widget">
                                    <ul class="list-style-none feed-body m-0 p-b-20">
                                        <li class="feed-item">
                                            <div class="feed-icon bg-info"><i class="far fa-bell"></i>
                                            </div> You have 4
                                            pending tasks. <span class="ms-auto font-12 text-muted">Just
                                                Now</span>
                                        </li>
                                        <li class="feed-item">
                                            <div class="feed-icon bg-success"><i class="ti-server"></i>
                                            </div> Server #1
                                            overloaded.<span class="ms-auto font-12 text-muted">2 Hours
                                                ago</span>
                                        </li>
                                        <li class="feed-item">
                                            <div class="feed-icon bg-warning"><i class="ti-shopping-cart"></i></div> New
                                            order received.<span class="ms-auto font-12 text-muted">31
                                                May</span>
                                        </li>
                                        <li class="feed-item">
                                            <div class="feed-icon bg-danger"><i class="ti-user"></i>
                                            </div> New user
                                            registered.<span class="ms-auto font-12 text-muted">30
                                                May</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </nav>

    <main>
        <section class="dashboard">
            <?php
            switch ($page) {
                case "dsloai":
                    require_once 'dsloai.php';
                    break;
                case "themloai":
                    require_once 'themloai.php';
                    break;
                case "sualoai":
                    require_once 'sualoai.php';
                    break;
                case "dssanpham":
                    require_once 'danhsachsp.php';
                    break;
                case "themsanpham":
                    require_once 'themsp.php';
                    break;
                case "suasanpham":
                    require_once 'suasp.php';
                    break;
                case "thongbao":
                    require_once 'thongbao.php';
                    break;
                case "upfile":
                    require_once 'upfile.php';
                    break;
                case "thongvao":
                    require_once 'thongbao.php';
                    break;
                case "khachhang":
                    require_once 'khachhang.php';
                    break;
                case "doanhthu":
                    require_once 'doanhthu.php';
                    break;
                default:;
            }

            ?>
        </section>
    </main>


    </div>

</body>

</html>
<style>
nav>ul>li:hover>ul>li {
    padding: 8px;
    border-bottom: solid 1px wheat
}

nav>ul>li:hover>ul a {
    text-decoration: none;
    color: black
}

nav>ul>li:hover>ul a:hover {
    text-decoration: underline;
    font-weight: 900
}

nav>ul>li>ul {
    display: none;
    position: absolute;
    top: 200px;
    z-index: 999;
    left: 200px;
}

nav>ul>li:hover>ul {
    display: block;
    position: absolute;
    background: #ddd;
    width: 200px;
    text-align: left;
    border-radius: 20px 0px 20px 0px;
}
</style>
<script src="../xtreme-admin-lite-master/assets/libs/jquery/dist/jquery.min.js"></script>
<script src="../xtreme-admin-lite-master/assets/libs/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap tether Core JavaScript -->
<script src="../xtreme-admin-lite-master/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="../xtreme-admin-lite-master/dist/js/app-style-switcher.js"></script>
<!--Wave Effects -->
<script src="../xtreme-admin-lite-master/dist/js/waves.js"></script>
<!--Menu sidebar -->
<script src="../xtreme-admin-lite-master/dist/js/sidebarmenu.js"></script>
<!--Custom JavaScript -->
<script src="../xtreme-admin-lite-master/dist/js/custom.js"></script>
<!--This page JavaScript -->
<!--chartis chart-->
<script src="../xtreme-admin-lite-master/assets/libs/chartist/dist/chartist.min.js"></script>
<script src="../xtreme-admin-lite-master/assets/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js">
</script>
<script src="../xtreme-admin-lite-master/dist/js/pages/dashboards/dashboard1.js"></script>
<script src="../xtreme-admin-lite-master/dist/js/pages/dashboards/dashboard1.js"></script>