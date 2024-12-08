<?php
$error = []; // Khởi tạo mảng lỗi

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Kiểm tra dữ liệu đầu vào
    if (empty($_POST['tensp'])) {
        $error['product-name'] = "Vui lòng điền tên sản phẩm.";
    }
    if (empty($_POST['don_gia'])) {
        $error['price'] = "Vui lòng điền đơn giá.";
    }
    if (empty($_POST['ma_danhmuc'])) {
        $error['cate'] = "Vui lòng chọn danh mục.";
    }
    if (empty($_POST['mo_ta'])) {
        $error['desc'] = "Vui lòng điền mô tả sản phẩm.";
    }
    if (empty($_POST['thong_tin'])) {
        $error['info'] = "Vui lòng điền thông tin sản phẩm.";
    }
    if (empty($_POST['so_luong'])) {
        $error['quantity'] = "Vui lòng điền số lượng.";
    }
    if (empty($_FILES['images']['name'][0])) {
        $error['images'] = "Vui lòng chọn hình ảnh.";
    }
    if (isset($_POST['giam_gia']) && $_POST['giam_gia'] < 0) {
        $error['discount'] = "Mã giảm giá không hợp lệ.";
    }

    // Nếu không có lỗi, thực hiện thêm sản phẩm
    if (empty($error)) {
        // Gọi hàm thêm sản phẩm ở đây
        // insert_product(...);
    }
}
?>

<div class="row">
    <div class="col-lg-8 mx-auto">
        <div class="card">
            <div class="card-header py-3 bg-transparent">
                <h5 class="mb-0">Thêm sản phẩm mới</h5>
            </div>
            <div class="card-body">
                <div id="add-product-content" class="border p-3 rounded">
                    <form id="add-product-form" action="./index.php?act=addproduct" class="row g-3" method="POST" enctype="multipart/form-data">
                        <div class="col-12">
                            <label class="form-label">Tên sản phẩm</label>
                            <input type="text" name="tensp" class="form-control" placeholder="Tên sản phẩm">
                            <p class="error-message product-name-error">
                                <?php if (isset($error['product-name'])) {
                                    echo $error['product-name'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Mô tả sản phẩm</label>
                            <textarea name="mo_ta" class="form-control" placeholder="Mô tả sản phẩm" rows="4"></textarea>
                            <p class="error-message desc-error">
                                <?php if (isset($error['desc'])) {
                                    echo $error['desc'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Thông tin sản phẩm</label>
                            <textarea name="thong_tin" class="form-control" placeholder="Thông tin sản phẩm" rows="4"></textarea>
                            <p class="error-message info-error">
                                <?php if (isset($error['info'])) {
                                    echo $error['info'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Thêm hình ảnh (Có thể thêm nhiều hình ảnh)</label>
                            <input class="form-control" name="images[]" multiple accept="image/png, image/jpeg" type="file">
                            <p class="error-message images-error">
                                <?php if (isset($error['images'])) {
                                    echo $error['images'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Đơn giá (Đơn vị VND)</label>
                            <input type="number" min="1" name="don_gia" class="form-control" placeholder="VD: 2000000">
                            <p class="error-message price-error">
                                <?php if (isset($error['price'])) {
                                    echo $error['price'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Giảm giá (Đơn vị %)</label>
                            <input type="number" min="0" max="100" name="giam_gia" class="form-control" placeholder="VD: 5">
                            <p class="error-message discount-error">
                                <?php if (isset($error['discount'])) {
                                    echo $error['discount'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Số lượng</label>
                            <input type="number" min="1" name="so_luong" class="form-control" placeholder="VD: 10">
                            <p class="error-message quantity-error">
                                <?php if (isset($error['quantity'])) {
                                    echo $error['quantity'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Danh mục chính</label>
                            <select name="ma_danhmuc" class="form-select">
                                <?php
                                $cate_list = cate_select_all();
                                foreach ($cate_list as $cate_item) {
                                    echo '<option value="' . $cate_item['ma_danhmuc'] . '">' . $cate_item['ten_danhmuc'] . '</option>';
                                }
                                ?>
                            </select>
                            <p class="error-message cate-error">
                                <?php if (isset($error['cate'])) {
                                    echo $error['cate'];
                                } ?>
                            </p>
                        </div>
                        <div class="col-12">
                            <input type="submit" name="addproductbtn" class="btn btn-primary px-4" value="Nhập sản phẩm" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>