<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sản phẩm</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<style>
    .boxcenter {
    width: 70%;
    margin: 0 auto;
    }

    .boxsp {
        float: left;
        width: 30%;
        margin: 1.5%;
        text-align: center;
    }

    .boxsp img {
        width: 100%;
    }

    span {
        color: red;
    }

    .boxsp p {
        font-size: 14pt;
        font-weight: bold;
    }

    th {
        background-color: #CCC;
    }

    table {
        width: 100%;
    }
</style>
<body>
    <?php
        $sanpham = array("banner3 gameboots.png","Áo Thun Nam","Full size","490.000đ","    $395.000đ");
    ?>
    <div class="boxsp">
        <img src="<?=$sanpham[0];?>" alt="ảnh thời trang">
        <p><?=$sanpham[1];?></p>
        <p><?=$sanpham[2];?></p>
        <p>Giá:<del><?=$sanpham[3];?></del><span><?=$sanpham[4];?></span></p>
        <input type="submit" value="Đặt hàng">
    </div>

    
</body>

</html>