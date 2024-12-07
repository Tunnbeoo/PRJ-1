<!--start content-->
<main class="page-content">

    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">

        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-50">
                            <p>Số đơn hàng</p>
                            <h4 class=""><?php echo count_all_orders() ?></h4>
                        </div>
                    </div>
                    <div class="d-flex">
                        <a href="./index.php?act=orderlist" class="btn btn-outline-dark">Xem</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-30 px-3">
                            <p>Đơn hàng đã giao</p>
                            <h4 class=""><?php echo count_all_orders_success() ?></h4>
                        </div>
                        <div class="w-70">
                            <p>Tổng doanh thu</p>
                            <h4 class="mt-3"><?php echo number_format(sum_all_sales()) ?></h4>
                        </div>

                    </div>
                    <a href="javascript:showOrders(4)" class="btn btn-outline-primary">Xem nhanh</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-30 flex-fill px-3">
                            <p>Đơn hàng đang giao</p>
                            <h4 class=""><?php echo count_all_shipping_orders() ?></h4>
                        </div>
                        <div class="w-70 flex-fill ">
                            <p>Tổng tiền đang giao</p>
                            <h4 class="mt-3">
                                <?php echo number_format(sum_all_money_of_shipping_orders()); ?>
                            </h4>
                        </div>
                    </div>
                    <a href="javascript:showOrders(3)" class="btn btn-outline-primary">Xem nhanh</a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-100">
                            <p>Đơn hàng chờ xác nhận</p>
                            <h4 class=""><?php echo count_all_unconfirmed_orders() ?></h4>
                        </div>
                    </div>
                    <a href="javascript:showOrders(1)" class="btn btn-outline-primary">Xem nhanh</a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-100">
                            <p>Đơn hàng đã xác nhận</p>
                            <h4 class=""><?php echo count_all_confirmed_orders() ?></h4>
                        </div>
                    </div>
                    <a href="javascript:showOrders(2)" class="btn btn-outline-primary">Xem nhanh</a>

                </div>
            </div>
        </div>
        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-100">
                            <p>Đơn hàng đã bị hủy</p>
                            <h4 class=""><?php echo count_all_orders_being_destroyed() ?></h4>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="w-100">
                            <p>Hoàn tiền (đơn đã thanh toán )</p>
                            <h4>
                                <?php
                                echo number_format(sum_money_all_orders_failed_paid());
                                ?>
                            </h4>
                        </div>
                    </div>
                    <a href="javascript:showOrders(6)" class="btn btn-outline-primary">Xem nhanh</a>

                </div>
            </div>
        </div>

        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-100">
                            <p>Đơn hàng giao thất bại</p>
                            <h4 class=""><?php echo count_all_orders_failed() ?></h4>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="w-100">
                            <p>Hoàn tiền (đơn đã thanh toán )</p>
                            <h4><?php echo number_format(sum_money_all_failed_orders_paid()) ?></h4>
                        </div>
                    </div>
                    <a href="javascript:showOrders(5)" class="btn btn-outline-primary">Xem nhanh</a>
                </div>
            </div>

        </div>

        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-100">
                            <p>Số lượt xem sp</p>
                            <h4 class=""><?php echo count_all_views() ?></h4>
                        </div>
                        <!-- <div class="w-50">
                            <p class="mb-3 float-end text-danger">- 3.4% <i class="bi bi-arrow-down"></i></p>
                            <div id="chart2"></div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">

                        <div class="w-100">
                            <p class="w-100">
                                Gần hết hàng
                            </p>
                            <h4>
                                <?php echo count_all_products_inventory_less_than(10) ?>
                            </h4>
                        </div>

                    </div>
                    <div class="d-flex">
                        <a href="javascript:callAjaxProducts()" class="btn btn-outline-danger">Nhập thêm</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-50">
                            <p>Số khách hàng</p>
                            <h4 class=""><?php echo count_all_customer() ?></h4>
                        </div>
                        <!-- <div class="w-50">
                            <p class="mb-3 float-end text-success">+ 8.2% <i class="bi bi-arrow-up"></i></p>
                            <div id="chart4"></div>
                        </div> -->
                    </div>
                    <div class="d-flex">
                        <a href="./index.php?act=userlist" class="btn btn-outline-dark">Xem</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Total Post -->
        <div class="col">
            <div class="card overflow-hidden radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-stretch justify-content-between overflow-hidden">
                        <div class="w-100">
                            <p>Số lượng bài viết</p>
                            <h4 class=""><?php echo count_all_posts() ?></h4>
                        </div>
                    </div>
                    <div class="d-flex">
                        <a href="./index.php?act=bloglist" class="btn btn-outline-dark">Xem</a>
                    </div>

                </div>
            </div>
        </div>
        <!-- Total Comment -->
        <!-- Total Comment -->

        <!-- Total phản hồi -->
    </div>
    <div class="row">

        <div class="col-12 col-lg-6 d-flex">
            <div class="card rounded-4 w-100">
                <div class="card-header bg-transparent border-0">
                    <div class="row g-3 align-items-center">
                        <div class="col-10">
                            <h6 class="mb-0">Top Views (Sản phẩm được xem nhiều nhất )</h6>
                        </div>
                        <div class="col-2">
                            <div class="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                                <div class="dropdown">
                                    <a class="dropdown-toggle dropdown-toggle-nocaret" href="#"
                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                            class="bx bx-dots-horizontal-rounded font-22 text-option"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li><a class="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="best-product p-2 mb-3 ps ps--active-y">
                        <?php
                        $top_views_products = select_top_view_products();

                        // var_dump($top_sold_products);

                        foreach ($top_views_products as $product) {
                            # code...
                            $image_list = explode(',', $product['images']);
                            foreach ($image_list as $image_item) {

                                if (substr($image_item, 0, 6) == "thumb-") {
                                    // echo $image_item;
                                    $thumbnail = "../uploads/" . $image_item;
                                    break;
                                }
                            }
                            echo '
        <div class="best-product-item">
            <div class="d-flex align-items-center gap-3">
                <div class="product-box border">
                    <img src="../uploads/' . $thumbnail . '" alt="' . $product['tensp'] . '">
                </div>
                <div class="product-info flex-grow-1">
                    <div class="progress-wrapper">
                        <div class="progress" style="height: 5px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 80%;">
                            </div>
                        </div>
                    </div>
                    <p class="product-name mb-0 mt-2 fs-6">' . $product['tensp'] . ' <span
                            class="float-end">' . $product['so_luot_xem'] . ' đã xem</span></p>
                </div>
            </div>
        </div>
    ';
                        }
                        ?>

                    </div>
                    <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                    </div>
                    <div class="ps__rail-y" style="top: 0px; height: 420px; right: 0px;">
                        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 253px;"></div>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
        <div class="row">
            <!-- Top khách hàng mua hàng nhiều nhất -->
            <div class="col-12 col-lg-6 d-flex">
                

            </div>
            <div class="col-12 col-lg-6 d-flex">
                

            </div>
        </div>

        <!--end row-->

        <div class="row">
            
        </div>
        <!--end row-->
</main>
<!--end page main-->