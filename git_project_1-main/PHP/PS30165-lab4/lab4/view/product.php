<?php
    include "./../Model/xlSanPham.php";
    $danhsach = danhsachsp("product");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>DANH SACH SAN PHAM</h1>
    <table>
        <tr>
            <td>stt</td>
            <td>Name</td>
            
            <td>description</td>
            <td>Price</td>
            <td>category</td>
            <td>image</td>
        </tr>
<?php
    for($i = 0;$i<count($danhsach);$i++){
        $rc = $danhsach[$i];   
?>
        <tr>
            <td><?=$i+1;?></td>
            <td><?=$rc['ProductName']?></td>
            <td><?=$rc['Description']?></td>
            <td><?=$rc['Price']?></td>
            <td><?=$rc['CategoryName']?></td>
            <td><img height="60px" width="60px" src="../view/image/<?=$rc['image']?>"></td>
        </tr>

<?php
    }
?>

    </table>


</body>
</html>