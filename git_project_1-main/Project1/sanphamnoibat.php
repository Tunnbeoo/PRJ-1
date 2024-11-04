
<?php
try {
  $sql = "SELECT id_sp, ten_sp, gia_km, hinh
   FROM sanpham
   WHERE anhien=1 AND hot=1 ORDER BY ngay DESC LIMIT 0,9";
  $sanphamnoibat = $conn->query($sql);
} catch (PDOException $e) {
  die('loi thuc thi sql' . $e->getMessage() . "<br>" . $sql);
}
?>
<link rel="stylesheet" href="index.css">

<div class="container-product">
  <div class="pro-head d-flex">
    <div class="title">
      <h5>
        <a href="/laptop-van-phong.html">Sản Phẩm Nổi Bật</a>
      </h5>
    </div>
    <div class="filter-price d-flex align-items-center">
      <div class="product-list">
        <h6><span>Mức giá:</span></h6>
        <ul class="d-flex m-0 list-unstyled">
          <li>
            <a href="/laptop-mong-nhe.html?max=10000000&amp;min=5000000">5 Triệu - 10 Triệu</a>
          </li>
          <li>
            <a href="/laptop-mong-nhe.html?max=20000000&amp;min=10000000">10 Triệu - 20 Triệu</a>
          </li>
          <li>
            <a href="/laptop-mong-nhe.html?max=30000000&amp;min=20000000">20 Triệu - 30 Triệu</a>
          </li>
          <li>
            <a href="/laptop-mong-nhe.html?max=40000000&amp;min=30000000">30 Triệu - 40 Triệu</a>
          </li>
          <li>
            <a href="/laptop-mong-nhe.html?max=400000000&amp;min=40000000">Trên 40 Triệu</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <section class="product-container">
    <?php foreach ($sanphamnoibat as $sp) { ?>
      
        <div class="product">
          <a href="index.php?page=sp&id=<?php echo $sp[0] ?>"> <img src="<?php echo $sp[3] ?>"> </a>
          <h2><a href="index.php?page=sp&id=<?php echo $sp[0] ?>"><?php echo $sp[1] ?></a></h2>
          <p>Mô tả ngắn về sản phẩm. Mô tả ngắn về sản phẩm. Mô tả ngắn về sản phẩm.</p>
          <p class="price"><?php echo $sp[2] ?>VND</p>
          


                      <!-- Thêm các sản phẩm khác tương tự -->

      
  </div>
<?php } ?>
</section>
<script>
   function chonsp(id,ten,hinh,gia_km){
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(cart==null) cart = [];
      index = cart.findIndex(sp=>sp[0]==id);
      if ( index ==-1){
         cart.push([id,ten,hinh,gia_km,soluong=1]);
      }else{
         cart[index][4]++;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
   }
</script>