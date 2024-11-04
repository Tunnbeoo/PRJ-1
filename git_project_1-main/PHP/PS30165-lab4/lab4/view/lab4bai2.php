<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
    <p>
        <label for="username">Name*</label><br>
        <input type="text" name="username">
    </p>
    <p><button>submit</button></p>
</form>

<?php
// Kiểm tra xem biến $_POST['username'] có tồn tại hay không
if(isset($_POST['username'])){
    $username = $_POST['username'];

    // Validate empty or less than 3 characters
    if(empty($username) || strlen($username) < 3){
        echo "<p>Error: Name requires a minimum of 3 characters</p>";
    }
}
?>






