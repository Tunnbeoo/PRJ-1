
<?php
include "./../Model/xlSanPham.php";
$danhsach = danhsachsp("product");
$danhsachc = danhsachcategory("category");
$name ="";
$description = "";
$price = "";
$category = "";
$image = "";
$flag =1;
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    if(empty($_POST["name"])){ echo ("input name"); $flag = 0;
    }else {$name = $_POST['name'];$flag = 1;}
    if(empty($_POST["description"])){ echo ("input description"); $flag = 0;
    }else {$description = $_POST['description'];$flag = 1;}
    if(empty($_POST["price"])){ echo ("input price"); $flag = 0;
    }else {$price = $_POST['price'];$flag = 1;}
    if(empty($_POST["category"])){ echo ("input category"); $flag = 0;
    }else {$category = $_POST['category'];$flag = 1;}
    if(isset($_FILES['image'])){    
        //var_dump($_FILES['image']);
        $image = basename($_FILES['image']['name']) ;
        $path = __DIR__ . './../View/image/';
        $target_file = $path . $image;
        move_uploaded_file($_FILES['image']['tmp_name'], $target_file);
        $flag =1;
    }
    if($flag ==1){
        themsp("product",$name,$description,$price,$category,$image);
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
    <form action="index.php?act=1" method="post" enctype="multipart/form-data">
    Product Name : <br><input type="text" name="name" value=""><br>
    Description : <br><input type="text" name="description" value=""><br>
    Price : <br><input type="number" name="price" value=""><br>
    Category:
    <select name="category" id="">
    <?php
    for ($i = 0; $i < count($danhsachc); $i++) {
        $rc = $danhsachc[$i];
    ?>
        <option value="<?php echo $rc['IDCategory']; ?>"><?php echo $rc['CategoryName']; ?></option>
    <?php
    }
    ?>
</select><br>
    Room image : <br><input type="file" name="image" value=""><br>
    <button type="submit">Save</button>
    </form>
</body>
</html>