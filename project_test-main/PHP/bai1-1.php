<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            padding-left: 100px;
            padding-right: 100px;
        }
        h1{
            text-align: center;
            font-size: x-large;
            color: aqua;
            padding-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Lab1: Minh Trung-PS30165</h1>
</body>
</html>

<?php
echo"<br> <hr>bài 1_1 <hr>";
?>
<?php
echo"<br>";
echo " Hello <br>";
echo ("Hello <br>");
echo "Hello World <br>";
echo "Hello", "World<br>";

?>

<?php

$str=" hello string ";
$X=200;
$Y=44.6;
echo "string is: $str <br/>";
echo "integer is: $X <br/>";
echo "string is: $Y <br/>";

?>

<?php

$color="red";
echo "My car is " . $color . "<br>";
echo "My house is " . $color . "<br>";
echo "My boat is " . $color . "<br>";

?>

<?php
echo"<br><hr> bài 1_2 <br><hr>";
?>

<?php
echo"<br>";
?>
<?php

$y = $x = (2==3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 != 3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 <>3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 === 3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 !== 3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 > 3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 < 3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 >= 3)? "true" : "false" ;
echo $y . "<br>";
$y = $x = (2 <= 3)? "true" : "false" ; 
echo $y . "<br>";

?>
<!-- chuỗi string -->

<?php
echo"<br>";
$S = "Hello \n World ";
echo $S;
$S = "It\"s\n <br>";
echo $S;
echo " Hello <br> World";
echo "<br>\u{00C2A9}<br>";
echo "\u{C2A9}<br>";
?>

<?php

$a = 'Hello';
$$a = 'World';

echo "$a ${$a} <br>";
?>

<?php
$x = 5;
$y = 3;
$sum = $x+$y ;
echo"kết quả là: $sum";
?>
