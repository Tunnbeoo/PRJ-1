<?php
// Create connection
$connect = mysqli_connect("localhost", "root", "", "shop");

// define("UPLOAD_SRC", "../upload/");

// define("FETCH_SRC", "../upload/");
// function imageUpload($img)
// {
//     $tmp_loc = $img['tmp_name'];
//     $new_name = $img['name'];
//     // $new_name = random_int(11111,99999).$img['name'];
//     $new_loc = UPLOAD_SRC . $new_name;

//     if (!move_uploaded_file($tmp_loc, $new_loc)) {
//         header("Location: admin.php?alert=img_upload");
//         exit;
//     } else {
//         return $new_name;
//     }
// }

if (isset($_POST['addproduct'])) {
    foreach ($_POST as $key => $value) {
        $_POST[$key] = mysqli_real_escape_string($connect, $value);
    }
    // $imgpath =  imageUpload($_FILES['image']);

    $query = "INSERT INTO shopcart(name, price)
                VALUES (
                '{$_POST['name']}',
                '{$_POST['price']}')
        ";
    mysqli_query($connect, $query);
}
// if (isset($_GET['remove'])) {
//     $remove_id = $_GET['remove'];
//     if ($remove_id) {
//         mysqli_query($connect, "DELETE FROM shopcart WHERE id = '$remove_id'");
//     }
//     header("Location: index.php");
// }
