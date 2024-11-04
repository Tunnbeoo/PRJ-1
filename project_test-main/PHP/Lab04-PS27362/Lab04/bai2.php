<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    *{
        font-family: arial;
        width: max-content;
        margin: 0 auto;
    }
    form{
        background-color: #8a41e9;
        color: white;
        padding: 10px;
        width: 300px;
        margin: 0 auto;
        border: 1px solid black
    }
    input{
        margin: 5px 0px 5px 0px;
    }
    #submit{
        padding: 3px 5px 3px 5px;
        background-color: white;
        transition: 0.2s;
        cursor: pointer;
        border: none;
        box-shadow: 0px 0px 5px 0px black;
    }
    #submit:hover{
        background-color: #1975bf;
        color: white;
    }
    #sum{
        outline: none;
        background-color: #eaeaea;
    }
    #red{
        color: #ff8d8d;
    }
    h1{
        margin-top: 20px;
    }
    h4{
        margin-bottom: 20px;
        font-size: x-large;
    }
</style>
<body>
    <h1>Điểm TB SV</h1>
    <h4>Minh Trung-PS30165</h4>
    <form action="bai2.php" method="post">
        <input type="text" name="mssv" id="mssv" placeholder="Mã Số Sinh Viên"><br>
         <input type="text" name="gd1" id="php" placeholder="Điểm GD1"><br>
        <input type="text" name="gd2" id="java" placeholder="Điểm GD 2"><br>
       <input type="text" name="final" id="html5" placeholder="Điểm Final"><br>
        <input type="text" name="sum" id="ai" placeholder="Điểm Tổng"><br>
        <input type="submit" value="Kết Quả" name="dtb" id="submit">
    </form>
    <br>
    <?php
        include "bai2.1.php";
        if (isset($_POST['dtb'])&&($_POST['dtb'])) {
            $mssv = $_POST['mssv'];
            $php = $_POST['gd1'];
            $java = $_POST['gd2'];
            $html5 = $_POST['final'];
            $ai = $_POST['sum'];

            $dtb = dtb($php,$java,$html5,$ai);

            $xl = xeploai($dtb);

            echo showkq($mssv,$php,$java,$html5,$ai,$dtb,$xl);
            
        }
    ?>
</body>
</html>