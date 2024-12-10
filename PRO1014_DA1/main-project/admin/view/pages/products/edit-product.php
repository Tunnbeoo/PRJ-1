<div class="card">
    <div class="card-header">
        <h5>Cập nhật sản phẩm</h5>
    </div>
    <div class="card-body">
        <form action="index.php?act=updateproduct" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="masanpham" value="<?= $product['masanpham'] ?>">
            
            <div class="mb-3">
                <label class="form-label">Tên sản phẩm</label>
                <input type="text" name="tensp" class="form-control" value="<?= $product['tensp'] ?>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Đơn giá</label>
                <input type="number" name="don_gia" class="form-control" value="<?= $product['don_gia'] ?>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Giảm giá (%)</label>
                <input type="number" name="giam_gia" class="form-control" value="<?= $product['giam_gia'] ?>">
            </div>

            <div class="mb-3">
                <label class="form-label">Tồn kho</label>
                <input type="number" name="ton_kho" class="form-control" value="<?= $product['ton_kho'] ?>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Mô tả</label>
                <textarea name="mo_ta" class="form-control"><?= $product['mo_ta'] ?></textarea>
            </div>

            <div class="mb-3">
                <label class="form-label">Hình ảnh</label>
                <input type="file" name="images" class="form-control">
            </div>

            <div class="mb-3">
                <label class="form-label">Danh mục</label>
                <select name="ma_danhmuc" class="form-control" required>
                    <?php
                    $cate_list = cate_select_all();
                    foreach($cate_list as $cate) {
                        $selected = ($cate['ma_danhmuc'] == $product['ma_danhmuc']) ? 'selected' : '';
                        echo "<option value='{$cate['ma_danhmuc']}' $selected>{$cate['ten_danhmuc']}</option>";
                    }
                    ?>
                </select>
            </div>

            <button type="submit" name="update" class="btn btn-primary">Cập nhật</button>
            <a href="index.php?act=productlist" class="btn btn-secondary">Hủy</a>
        </form>
    </div>
</div>
