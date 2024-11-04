<?php
if (isset($_GET['id']) == true) {
    $id = (int) $_GET['id'];
} else $id = 0;
$sp = lay1sp($id);
?>
<form action="suasp_.php" method="post" id="frm1">
    <h2>SỬA SẢN PHẨM</h2>
    <div>
        <label>Tên Sản Phẩm</label> <input type="text" class="txt" value="<?php echo $sp[1] ?>" name="ten_sp">
    </div>
    <div>
        <label>Thứ tự </label> <input type="number" class="txt" min="1" name="thutu">
    </div>
    <div>
        <label>Ẩn hiện </label>
        <input type="radio" value="0" name="anhien"> Ẩn
        <input type="radio" value="1" name="anhien" checked> Hiện
    </div>
    <div> <label></label> <button type="submit">Lưu san pham</button> </div>
</form>
<style>
<<<<<<< HEAD
#frm1 {
    width: 800px;
    margin: auto;
    border: 1px solid black;
}
=======
    #frm1 { width: 800px; margin: auto; border: 1px solid black;}
#frm1 h2 { background: darkblue; color:white; padding: 10px; }
#frm1 div { padding: 10px 10px; border-bottom: 1px dotted black; }
#frm1 label {display: inline-block;width:120px }
#frm1 .txt { padding: 5px; width: calc(100% - 130px); outline: none;}
#frm1 button{ width: 120px; height: 30px;}
>>>>>>> 92dcbc86862439f2d9b05d01c16ffa00f621f59f

#frm1 h2 {
    background: black;
    color: white;
    padding: 10px;
}

#frm1 div {
    padding: 10px 10px;
    border-bottom: 1px dotted black;
}

#frm1 label {
    display: inline-block;
    width: 120px
}

#frm1 .txt {
    padding: 5px;
    width: calc(100% - 130px);
    outline: none;
}

#frm1 button {
    width: 120px;
    height: 30px;
}
</style>