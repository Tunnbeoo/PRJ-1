<?php
ob_start();
session_start();

$FOLDER_VAR = "/PRO1014_DA1/main-project";
$ROOT_URL = $_SERVER['DOCUMENT_ROOT'] . "$FOLDER_VAR";

include $ROOT_URL . "/admin/models/category.php";
include $ROOT_URL . "/DAO/order.php";
include $ROOT_URL . "/DAO/product.php";
include $ROOT_URL . "/DAO/category.php";
include $ROOT_URL . "/global.php";

switch ($_GET['act']) {

    case 'addproduct':

        break;
    case 'editproduct':
        $error = array();
        $idproduct = $_POST['id'];
        $product_item = product_select_by_id($idproduct);

        $image_files = $_FILES['images'];
        if ($_FILES['images']['name'][0] == "") {
            $image_list = $product_item['images'];
        } else {
            $image_list = implode(',', $image_files['name']);

            $i = 0;
            foreach ($image_files['name'] as $image_name) {

                move_uploaded_file($image_files["tmp_name"][$i], "$ROOT_URL/uploads/" . $image_name);
                $i++;
            }
        }

        $tensp = $_POST['tensp'];
        $ma_danhmuc = $_POST['ma_danhmuc'];
        $id_dmphu = $_POST['id_dmphu'];
        $giam_gia = $_POST['giam_gia'];
        $don_gia = $_POST['don_gia'];
        $so_luong = $_POST['so_luong'];
        // $view = $_POST['view'];
        $mo_ta = $_POST['mo_ta'];
        $thong_tin = $_POST['thong_tin'];
        $dac_biet = 0;
        $promote = 1;
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date_create = date('Y-m-d H:i:s');
        // Validate at server

        // Validate server here !!!
        if (strlen($tensp) == 0) {
            $error['product-name'] = "Không để trống tên sản phẩm!";
        }
        if (!is_numeric($ma_danhmuc)) {
            $error['cate'] = "Không để trống mã danh mục!";
        }

        if (!is_numeric($id_dmphu)) {
            $error['subcate'] = "Không để trống mã danh mục phụ";
        }

        if (empty($mo_ta)) {
            $error['desc'] = "Không để trống mô tả sản phẩm";
        }

        if (empty($thong_tin)) {
            $error['info'] = "Không để trống thông tin sản phẩm";
        }

        if (empty($don_gia)) {
            $error['price'] = "không để trống đơn giá";
        } else if ($don_gia < 0) {
            $error['price'] = "Đơn giá phải lớn hơn 0!";
        }

        if (empty($giam_gia)) {
            $error['discount'] = "Không để trống giảm giá";
        } else if ($giam_gia < 0 || $giam_gia > 100) {
            $error['discount'] = "Giảm giá phải lớn hơn hoặc bằng 0 và nhỏ hơn bằng 100";
        }

        if (!$error) {
            $is_updated = product_update($idproduct, $tensp, $don_gia, $so_luong, $image_list, $giam_gia, $dac_biet, $date_create, $mo_ta, $thong_tin, $ma_danhmuc, $id_dmphu, $promote);
            if ($is_updated) {
                $result = array(
                    "status" => 1,
                    "content" => "Cập nhật sản phẩm thành công!",
                );
                echo json_encode($result);
            }
        } else {
            $result = array(
                "status" => 0,
                "content" => "Cập nhật sản phẩm thất bại",
                "error" => $error,
            );
            echo json_encode($result);
        }

    case 'getproduct':
        if (isset($_GET['id'])) {
            $product_item = product_select_by_id($_GET['id']);
            $result = array(
                "status" => 1,
                "content" => $product_item,
            );
            echo json_encode($result);

        }
        break;
    case 'dataproducts':
        $product_list = product_select_all();
        break;
    case 'deleteproduct':
        if (isset($_POST['id'])) {
            product_delete($_POST['id']);
            var_dump(
                array(
                    "status" => 1,
                    "message" => "Xóa sản phẩm thành công!",
                )
            );
        }
        break;



    case 'warning-inventory-productlist':

        $product_list = product_select_all_inventory_less_than(10);

        if (isset($_POST['cateid']) && $_POST['cateid'] >= 0) {
            $product_list = array_filter($product_list, function ($product_item) {
                return $product_item['ma_danhmuc'] == $_POST['cateid'];
            });
        }

        if (isset($_POST['datevalue'])) {
            $datevalue = $_POST['datevalue'];

            $product_list = select_products_by_date($datevalue);
        }

        $result = array();
        foreach ($product_list as $product_item) {

            $image_list = explode(",", $product_item['images']);
            $thumbnail = getthumbnail($image_list);
            $price_item = $product_item['don_gia'] * (1 - $product_item['giam_gia'] / 100);
            $sl_ban = count_sold_product_by_id($product_item['masanpham']);
            $is_danger_class = $product_item['ton_kho'] <= 10 ? 'bg-danger' : "bg-success";
            # code...
            $row = array();
            $row[0] = $product_item['masanpham'];
            $row[1] = '
                    <a class="d-flex align-items-center gap-2" href="#">
                        <div class="product-box">
                            <img src="' . $thumbnail . '" alt="' . $thumbnail . '">
                        </div>
                        <div>
                            <h6 class="mb-0 product-title">' . $product_item['tensp'] . '</h6>
                        </div>
                    </a>
        ';
            $row[2] = $sl_ban;
            $row[3] = '<span>' . number_format($product_item['don_gia']) . ' VND</span>';
            $row[4] = '<span class="badge rounded-pill ' . $is_danger_class . '">' . $product_item['ton_kho'] . '</span>';
            $row[5] = '<span>' . $product_item['ngay_nhap'] . '</span>';
            $row[6] = '
                    <div class="d-flex align-items-center gap-3 fs-6">
                        <a href="javascript:viewDetail(' . $product_item['masanpham'] . ')" class="text-primary"
                            title=""
                            aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                        <a href="javascript:editProduct(' . $product_item['masanpham'] . ')" class="text-warning" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="Edit info"
                            aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                        <a href="javascript:deleteProduct(this,' . $product_item['masanpham'] . ');" class="text-danger" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="Delete"
                            aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
        ';

            $result[] = $row;

        }

        echo json_encode(
            array(
                "product_list" => $result,
            )
        );

        break;
    default:
        # code...
        break;
}
