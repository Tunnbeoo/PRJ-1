<?php
function connection_database(){
    $servername = "localhost";
    $username="root";
    $password="";
    try{
        $conn = new PDO("mysql:host=$servername;dbname=lab4", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);   
    }catch(PDOException $e){   
        throw $e;
    }
    return $conn;
}
?>