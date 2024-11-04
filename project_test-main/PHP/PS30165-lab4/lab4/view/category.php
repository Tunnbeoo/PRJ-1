<?php
include "./../Model/xlSanPham.php";
$category = "";
$flag = 1;
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    if(empty($_POST["category"])){ echo ("input category"); $flag = 0;
    }else {$category = $_POST['category'];$flag = 1;}
    if($flag ==1){
        themcategory("category",$category);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php?act=2" method="post" enctype="multipart/form-data">
    Category: <br><input type="text" name="category" value=""><br>
    <button type="submit">Save</button>
    </form>
</body>
</html>