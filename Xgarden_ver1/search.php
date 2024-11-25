<?php include "headernguoidung.php"; ?>
<?php
include "thuvien.php";

$searchResults = [];
if (isset($_GET['query']) && !empty($_GET['query'])) {
    $searchQuery = $_GET['query'];
    $searchResults = searchProducts($searchQuery);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="assets/css/base.css">
    <link rel="stylesheet" href="assets/css/grid.css">
    <link rel="stylesheet" href="assets/scss/style.scss">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        .product__heading {
            font-size: 3.0rem;
            margin-bottom: 20px;
        }

        .info-product__table {
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            padding: 21px;
            margin-bottom: 20px;
        }

        .detail-items__code {
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 500;
        }

        .info-product__heading-status {
            color: var(--primary-color);
            font-size: 1.6rem;
            font-weight: 500;
            text-transform: uppercase;
        }

        .info-product__table-container {
            display: flex;
            padding: 30px 0;
            border: 1px solid #ebebeb;
            border-left: none;
            border-right: none;
        }

        .info-product__container-left {
            width: 10%;
            display: flex;
            align-items: center;
        }

        .info-product__container-left-img {
            width: 80px;
            height: 80px;
            border-radius: 2px;
        }

        .info-product__container-center {
            width: 85%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .info-product__container-title {
            font-size: 1.6rem;
            margin: 0;
            max-height: 1.6rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    </style>
</head>

<body>

    <div class="wrapper">
        <div class="info-product">
            <div class="grid wide">
                <div class="col l-12">
                    <h3 class='product__heading'>Kết quả tìm kiếm cho: "<?= htmlspecialchars($searchQuery) ?>"</h3>
                    <?php if (!empty($searchResults)): ?>
                        <?php foreach ($searchResults as $product): ?>
                            <div class='info-product__table'>
                                <div class='info-product__table-heading'>
                                    <p class='detail-items__code'><?= htmlspecialchars($product['name']) ?></p>
                                    <p class='info-product__heading-status'><?= number_format($product['price'], 0, ',', '.') ?> VNĐ</p>
                                </div>
                                <div class='info-product__table-container'>
                                    <div class='info-product__container-left'>
                                        <img src='./upload/<?= htmlspecialchars($product['img']) ?>' alt='' class='info-product__container-left-img'>
                                    </div>
                                    <div class='info-product__container-center'>
                                        <h4 class='info-product__container-title'><?= htmlspecialchars($product['description']) ?></h4>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <p>Không tìm thấy sản phẩm nào.</p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

</body>

</html>