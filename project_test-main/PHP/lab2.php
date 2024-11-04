<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h2>Minh Trung PS30165</h2>
<?php
$color = array('red', 'green', 'white');
print_r($color);
echo "<br>";
echo $color[0];

$age = array();
$age[0] = 10;
$age[0] = 20;
$age[0] = 30;
print_r($age);
?>

<?php
$salaries = array(
    "mohammad" => 2000,
    "qadir" => 1000,
    "zara" => 500
);
echo "<br>";
echo "Salary of mohammad is ". $salaries['mohammad']. "<br>";
echo "Salary of qadir is ". $salaries['qadir']. "<br>";
echo "Salary of zara is ". $salaries['zara']. "<br>";
?>

<?php
define('LOCATOR', "/locator");
define('CLASSES', LOCATOR."/code/classes");
define('FUNCTIONS', LOCATOR."/code/functions");
define('USERDIR', LOCATOR. "/user");
?>

<?php
$age = 50;
if($age < 30)
{
    echo "Your age is less than 30";
}
elseif($age >30 && $age <50)
{
    echo " Your age is between 30 and 40";
}
elseif ($age >40 && $age <50) 
{
    echo "Your age is between 40 and 50";
}
else
{
    echo "Your age is greater than 50 <br>";
}
?>

<?php
$max = 0;
echo $i = 0;
echo ",";
echo $j = 1;
echo ",";
$result = 0;

while ($max < 10) {
    $result = $i + $j;

    $i = $j;
    $j = $result;
    $max.=$max +1;
    echo $result;
    echo ",";
}
?>

<?php
$fruits = array('<br> apple', 'banana', 'orange', 'grapes');
foreach ($fruits as $fruit) {
    echo $fruit;
    echo "<br>";
}
$employee = array('name' => 'John Smith', 'age' => 30, 'profession');
foreach ($employee as $key => $value) {
    echo sprintf("%s : %s</br>", $key, $value);
    echo "<br/>";
}
?>
<?php
echo 'Simple Break';
for ($i=1; $i<=2  ; $i++) { 
    echo "\n". '$i = '. $i.'';
    for ($j=1; $j <= 5 ; $j++) { 
   if ($j ==2) {
    break;
   }
   echo '$j = '. $j. '<br>';
    }
}
echo 'Multi-level Break';
for($i =1; $i <= 2; $i++){
    echo "\n". '$i = '.$i. '';
    for ($j=1; $j<=5 ; $j++) { 
        if ($j==2) {
            break 2;
        }
        echo '$j = '. $j. '';
    }

}
?>
</body>
</html>
