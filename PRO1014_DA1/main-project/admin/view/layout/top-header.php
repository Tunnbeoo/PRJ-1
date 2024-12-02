<header class="top-header">
    <nav class="navbar navbar-expand gap-3">
        <div class="mobile-toggle-icon fs-3">
            <i class="bi bi-list"></i>
        </div>
        <form class="searchbar">
            <div class="position-absolute top-50 translate-middle-y search-icon ms-3"><i class="bi bi-search"></i></div>
            <input class="form-control" type="text" placeholder="Type here to search">
            <div class="position-absolute top-50 translate-middle-y search-close-icon"><i class="bi bi-x-lg"></i></div>
        </form>
        <div class="top-navbar-right ms-auto">
        </div>
        <div class="dropdown dropdown-user-setting">
            <a class="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                <div class="user-setting d-flex align-items-center gap-3">
                    <?php
                    if (isset($_SESSION['img'])) {
                        $img = substr($_SESSION['img'], 0, 4) == 'http' ? $_SESSION['img'] : "../uploads/" . $_SESSION['img'];
                        echo '
                        <img src="' . $img . '" class="user-img" alt="">
                        ';
                    }
                    ?>
                    <div class="d-none d-sm-block">
                        <?php
                        if (isset($_SESSION['idadmin'])) {
                            $role = '';
                            if (isset($_SESSION['role'])) {
                                switch ($_SESSION['role']) {
                                    case '1':
                                        $role = "Quản trị viên";
                                        break;
                                    case '2':
                                        $role = "Nhân viên";
                                        break;
                                    default:
                                        $role = "Nhân viên";
                                        break;
                                }
                            } else {
                                $role = "Nhân viên";
                            }
                            echo '
                            <p class="user-name mb-0">' . $_SESSION['username'] . '</p>
                            <small class="mb-0 dropdown-user-designation">' . $role . '</small>
                            ';
                        }
                        ?>
                    </div>
                </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
                <li>
                    <a class="dropdown-item" href="./index.php?act=my-profile">
                        <div class="d-flex align-items-center">
                            <div class=""><i class="bi bi-person-fill"></i></div>
                            <div class="ms-3"><span>Profile</span></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="./index.php?act=dashboard">
                        <div class="d-flex align-items-center">
                            <div class=""><i class="bi bi-speedometer"></i></div>
                            <div class="ms-3"><span>Dashboard</span></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="./index.php?act=orderlist">
                        <div class="d-flex align-items-center">
                            <div class=""><i class="bi bi-piggy-bank-fill"></i></div>
                            <div class="ms-3"><span>Earnings</span></div>
                        </div>
                    </a>
                </li>

                <li>
                    <hr class="dropdown-divider">
                </li>
                <li>
                    <a class="dropdown-item" href="./index.php?act=logout">
                        <div class="d-flex align-items-center">
                            <div class=""><i class="bi bi-lock-fill"></i></div>
                            <div class="ms-3"><span>Đăng xuất</span></div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<!--end top header-->