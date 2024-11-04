<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Định dạng</title>
    <style>
        body{
            width: 600px;
            height: auto;
            margin: auto;
        }
        h1{
            width: 600px;
            height: 50px;
            background-color: red;
            color: white;
            text-align: center;
            display: block;
            margin-bottom: 0px;
        }
        form{
            text-align: center;
           
            background-color: #d736b95c;

        }
        .form_group{
            padding-bottom: 10px;
        }
        .form-botton{
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>ĐỊNH DẠNG MÀU CHỮ - MÀU NỀN</h1>
    <form method="post" action="dinhdang.php">
        <div class="form_group">
            <label for="" class="form-label">Nội dung:</label>
            <input type="text" name="noidung" class="form-input">
        </div>
        <div class="form_group">
            <label for="" class="form-label">Màu nền:</label>
            <input type="text" name="maunen" class="form-input">
        </div>
        <div class="form_group">
            <label for="" class="form-label">Màu chữ:</label>
            <input type="text" name="mauchu" class="form-input">
        </div>
        <input type="submit" name="hienthi" value="Hiển thị kết quả">
        <!-- <button class="form-botton" name="hienthi" type="submit">Xem kết quả</button> -->
    </form>

    <?php 
        if(insset($_POST['hienthi']) && ($_POST['hienthi'])){
            echo" 10 điểm";
        }
    ?>
</body>
</html>