<?php

if(isset($_REQUEST['act'])){
    $act = $_REQUEST['act'];
    switch($act){
        case 1:
            include "./../View/menu.php";
            include "./../View/addProduct.php";
            break;
        case 2:
            include "./../View/menu.php";
            include "./../View/category.php";
            break;
    }
}else{
    include "./../View/menu.php";
    include "./../View/product.php";
}
?>