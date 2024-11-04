<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h1>Minh Trung PS30165</h1>
<!-- <?php
    $sanpham = array ("/img/z4526769575868_381c6749f2a179693496817705cff7eb.jpg", "pocket cotton sweatshirt", "Nam tempus ...." , "629.99", "495.00");

    echo'
    <div class="boxsp">
        <img src="'.$sanpham[0].'" alt="">
        <p>'.$sanpham[1].'</p>
        <p>'.$sampham[2].'</p>
        <p>Gia: <del>$'.$sanpham[3].'</del><span>$'.$sanpham[4].'</span></p>
        <input type="submit" value="Đặt hàng">
    </div>
';
?> -->
<h2>bài 1</h2>
<?php
    $say = function($name)
    {
        echo"Hello <br>" .$name;
    };
    $say("World<br>"); //"Hello World";
    function myCaller($myCallback)
    {
        echo $myCallback();
    }
    //"Hello"
    myCaller( function() { echo "Hello<br>"; } );

    $a = array(1, 2, 3, 4, 5);
    $b = array_map(function($n)
    {
        return $n * $n * $n;
    }, $a);
    print_r($b);
?>
<h2>bài 2</h2>
<?php
function countToFive()
{
    yield 1;
    yield from [2, 3, 4];
    yield 5;
}
foreach (countToFive() as $v)
echo $v; //"12345"
?>
<h2>bài 3</h2>
<?php
echo chunk_split("082307", 2,":");
?>
</body>
</html>