<?php 
if ( isset($_GET['id']) ==true){
    $id = $_GET['id'];
    settype($id, "int");
}
else $id=0;
$page_num=1;
if(isset($_GET['pn'])) $page_num = (int) $_GET['pn'];
if($page_num <= 0) $page_num = 1;
$page_size = 9;
$page_prev = $page_num -1;
$page_next = $page_num +1;
$listsp = laysp_trongloai($id, $page_num, $page_size);
$tenloai = laytenloai($id);
?>



<div class="container-product">
  <div class="pro-head d-flex">
    <div class="title">
      <h5>
        <a href="#">Laptop: <?php echo $tenloai ?></a>
      </h5>
    </div>
  </div>

  <section class="product-container">
    <?php foreach ($listsp as $sp) { ?>
      
        <div class="product">
          <a href="index.php?page=sp&id=<?php echo $sp[0] ?>"> <img src="<?php echo $sp[3] ?>"> </a>
          <h2><a href="index.php?page=sp&id=<?php echo $sp[0] ?>"><?php echo $sp[1] ?></a></h2>
          <p><?php echo $sp[4] ?></p>
          <p class="price"><?php echo number_format($sp[2]) ?>VND</p>
          


                      <!-- Thêm các sản phẩm khác tương tự -->

      
  </div>
<?php } ?>
</section>
<script>
   function chonsp(id,ten,hinh,gia){
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(cart==null) cart = [];
      index = cart.findIndex(sp=>sp[0]==id);
      if ( index ==-1){
         cart.push([id,ten,hinh,gia,soluong=1]);
      }else{
         cart[index][4]++;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
   }
</script>

