<?php
    include "database.php";
    function danhsachsp($table_name){
        $conn = connection_database();
        $sql = "select IDProduct, ProductName, Description, Price, CategoryName, image from ".$table_name." INNER JOIN category ON ".$table_name.".IDCategory = category.IDCategory order by IDProduct asc";
        $result = $conn->query($sql);
        $danhsach = $result->fetchAll();
        return $danhsach;
    }
    function themsp($tenbang,$name,$description,$price,$category,$image){
        $conn = connection_database();
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('d-m-y h:i:s');
        $sql =  "INSERT into ".$tenbang."(ProductName, Description, Price, IDCategory , image) VALUES ('".$name."'
        ,'".$description."',".$price.",'".$category."','".$image."')";
        // echo $sql;
        $conn->query($sql); 
    }
    function danhsachcategory($table_name){
        $conn = connection_database();
        $sql = "select * from ".$table_name." order by IDCategory asc";
        $result = $conn->query($sql);
        $danhsach = $result->fetchAll();
        return $danhsach;
    }
    function themcategory($tenbang,$category){
        $conn = connection_database();
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('d-m-y h:i:s');
        $sql =  "INSERT into ".$tenbang."(CategoryName) VALUES ('".$category."')";
        // echo $sql;
        $conn->query($sql); 
    }

?>