<?php

echo" $ = (2==3) <br>";
echo" $ = (2 != 3) <br>";
echo" $ = (2 <>3) <br>";
echo" $ = (2 === 3) <br>";
echo" $ = (2 !== 3) <br>";
echo" $ = (2 > 3) <br>";
echo" $ = (2 < 3) <br>";
echo" $ = (2 >= 3) <br>";
echo" $ = (2 <= 3) <br> <br> ";

?>
<!-- chuỗi string -->

<?php

$S = "Hello \n World ";
echo $S;
$S = "It\"s\n <br>"; //It 's
echo $S;
echo " Hello <br> World";
echo "<br>\u{00C2A9}<br>"; // copyright sign
echo "\u{C2A9}<br>";
?>

<?php

$a = 'Hello';
$$a = 'World';

echo "$a ${$a} <br>";
?>

