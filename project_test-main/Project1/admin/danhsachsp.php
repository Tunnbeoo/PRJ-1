<?php  $list = listsp(); ?>
<div id="danhsach">
    <h1>Danh sách sản phẩm</h1>
    <div class="dshead">
       <div>Id sản phẩm</div><div>Tên sản phẩm</div><div>Thứ tự</div><div>Ẩn hiện</div><div></div>
    </div>
    <?php foreach($list as $row){?>
    <div class="dsdata">
       <div><?php echo $row['id_sp'];?></div>
       <div><?php echo $row['ten_sp'];?></div>
       <div><?php echo $row['ngay'];?></div>
       <div><?php echo $row['anhien'];?></div>
       <div><a href="xoasp.php?id=<?=$row[0]?>">xoa</a>
       <a href="admin.php?page=suasanpham&id=<?=$row[0]?>">sua 
       </a></div>
    </div><?php } ?>
</div>
<style>
    #danhsach { width: 1000px; margin: auto;;}
#danhsach > h1 {background:darkblue; padding: 10px; color:white;font-size: 24px;}
#danhsach > div {display: grid; grid-template-columns: 90px auto 100px 150px 150px;}
#danhsach .dshead { font-weight: bold; font-size: 20px;}
#danhsach > div > div {border: 1px solid darkblue; padding: 10px; text-align: center;}
#danhsach a {text-decoration: none; color: wheat;font-weight: bold;}
#danhsach a:hover { text-decoration: underline; color: black;}

</style>