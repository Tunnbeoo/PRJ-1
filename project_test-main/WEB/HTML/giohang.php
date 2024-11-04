<?php 
    session_start();
    require('database.php');
    if (isset($_SESSION['user_id'])) {
        $servername = "localhost";
        $dbname = 'mainpage';
        $username = "root";
        $password = "";
        
        // Create connection
          $sql = "SELECT * FROM admin2 WHERE id = {$_SESSION['user_id']}";
          $result = $conn->query($sql);
          $user = $result->fetch_assoc();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/ASMfinal.css">
    <link rel="stylesheet" href="/css/giohang.css">
    <title>Document</title>
</head>
<body>
  <div class="header">
    <div class="header_in">
        <div class="haeder_in-left"><a href="">Divine Shop tuyển dụng</a></div>
        <div class="haeder_in-right">
            <li><i class="fa-solid fa-book"></i><a href="">Hướng dẫn mua hàng</a></li>
            <li><i class="fa-light fa-percent"></i><a href="">Ưu đãi khách hàng</a></li>
            <li><i class="fa fa-phone-alt ro"></i><a href="">Thông tin liên hệ</a></li>
            <li><i class="fa fa-credit-card"></i><a href="">Hình thức thanh toán</a></li>   
        </div>
    </div>
</div>
<div class="next-header">
    <div class="next-header_in">
        <div class="logo_text">
            <a href="/WEB/HTML/ASMfinal.php">
                <img height="100%" src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg" alt="">
            </a>
            <h2>Divine Shop</h2>
        </div>
        <div class="seacher">
            <input type="text" name="" id="" placeholder="Tìm kiếm sản phẩm">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="form">
        <div class="lopdangnhapchung">
              <i class="fa-solid fa-circle-user"></i>
              <div class="namelogin" style="margin-top:5px;">
              <?php if (isset($_SESSION['user_id'])): ?>
                        <?=htmlspecialchars($user["name"])?>
                    <?php endif; ?>
              </div>
            </div>
        </div>
        <div class="cart">
          <li><i class="fas fa-shopping-cart"></i><a href="/WEB/HTML/giohang.php">Giỏ hàng</a></li>
      </div>
  </div>
</div>
<div class="content1">
  <div class="lopchothanhtoan">

</div>
<article>
    <div class="shop">
        <div class="titlee">
           <h2 id="ifsp">Có 0 sản phẩm trong giỏ hàng</h2>
        </div>
        <div class="ttsp">
            <table>
                <tbody id="cart">

                </tbody>
            </table>
        </div>
    </div>
    <div class="tongtien">
        <div class="sotien">
            <p>Tổng tiền: </p>
            <p>Giảm: </p>
            <p id="thanhtoan" style="font-size: medium; font-weight: bold; color: red;">Cần Thanh Toán: </p>
        </div>

        <div class="btndathang">
            <a href="/WEB/hinhthuctt.html">
                <button>ĐẶT HÀNG</button>
            </a>
        </div>
    </div>
</article>
</div>
<footer>
    <div class="hinhthucthanhtoan">
        <div class="img_thanhtoan">
          <img src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg" alt="">
          <img style=" width: 81px; height: 25px;" src="https://cdn.divineshop.vn/static/72a3a36fc7c66085b3f442940ba45fde.svg" alt="">
          <img style="width: 65px; height: 25px;" src="https://cdn.divineshop.vn/static/464c7c79044dea88e86adf0e1b9c064c.svg" alt="">
          <img src="https://cdn.divineshop.vn/static/ddb866eb1214c914ea62417879046b99.svg" alt="">
          <small>và nhiều hình thức thanh toán khác</small>
        </div>
    </div>
    <div class="icon">
      <div class="fb">
        <img src="https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg" alt="">
      </div>
      <div class="youtube">
        <img src="https://cdn.divineshop.vn/static/4ae438165f9d5ea0fc6ff3da6051f938.svg" alt="">
      </div>
      <div class="ig">
          <img src="https://cdn.divineshop.vn/static/20334129395885adefc2e5217043f670.svg" alt="">
      </div>
    </div>
    <div class="gioithieu">
      <div class="gioithieu1">
        <div style="font-size: 30px;"><b> Giới thiệu </b></div>
        <div class="game1">
          <a href="">Game bản quyền là gì?</a>
          <br>
          <a href="">Giới thiệu Divine Shop</a>
          <br>
          <a href="">Đièu khoản dịch vụ</a>
          <br>
          <a href="">Chính sách bảo mật</a>
        </div>
      </div>
      <div class="gioithieu2">
        <div style="font-size: 30px;"><b> Tài khoản </b></div>
        <a href="/WEB/HTML/formdn.php">Đăng nhập</a><br>
        <a href="/WEB/HTML/formdk1.php">Đăng ký</a>
      </div>
      <div class="gioithieu3">
        <div style="font-size: 30px;"><b> Liên hệ </b></div>
        <a href="">Hotline tự động</a>
        <a href="" style="color: rgb(195, 13, 13);">1900 633 305</a><br>
        <a href="">Liên hệ Hỗ trợ</a><br>
        <a href="">Chat với CSKH</a>
      </div>
      <div class="anhbanquyen">
        <a href=""> <img src="https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=18522dc6-fdd6-4b49-ab40-395a79849050" alt=""></a>
      </div>
  </div>
  </footer>
<script>
     function tinhtien(a){
        var sl = a.value;
        var gia = a.dataset.gia;
        a.setAttribute('data-total',`${sl*gia}`)
        a.parentElement.parentElement.querySelector('.price').children[0].innerHTML = `${(sl*gia).toLocaleString('vi', {style : 'currency', currency : 'VND'})}`;
        a.parentElement.parentElement.querySelector('.price').children[1].innerHTML = `${(sl*Number(a.dataset.gg)).toLocaleString('vi', {style : 'currency', currency : 'VND'})}`;
        tong(); 
    }
    
    function tong(){
        let input = document.querySelectorAll('input[type=number]');
        let sum = 0;
        input.forEach(e =>{
            sum += Number(e.dataset.total);
        })
        document.getElementById('thanhtoan').innerHTML = `<p style="font-size: medium; font-weight: bold; color: red;">Cần Thanh Toán: ${sum.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>`
    } 
    function hiengiohang(){
        var mang = JSON.parse(localStorage.getItem("cart"));
        for(i=0; i < mang.length; i++){
            var sp = mang[i];
            var str= `
                    <tr>
                        <td>
                            <img src=${sp[0]}> 
                        </td>
                        <td>
                            <p class="name">${sp[1]}</p> 
                        </td>
                        <td>
                            <input type="number" onchange="tinhtien(this)" value=${sp[3]} data-gia = "${sp[2]}" data-total='${sp[3]*Number(sp[2])}' data-gg='${Number(sp[4])}'>
                        </td>
                        <td>
                            <div class="price">
                                <p>${sp[2].toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                                <del>${sp[4].toLocaleString('vi', {style : 'currency', currency : 'VND'})}</del>
                            </div>
                        </td>
                        <td>
                            <button onclick="remove(this)">Xóa</button>
                        </td>
                    </tr>       
            `;
            document.getElementById('cart').innerHTML += str;
            tong();
        }
        document.getElementById('ifsp').innerHTML=`<h3 style="font-size: 30px;">Có ${mang.length} sản phẩm trong giỏ hàng</h3>`;
        // document.getElementById('sosp').innerHTML=`<span title="Số sản phẩm bạn đã chọn">${mang.length}</span>`;
    }
    function remove(x){
        document.getElementById('ifsp').innerHTML=`<h3 style="font-size: 30px;">Có ${JSON.parse(localStorage.getItem("cart")).length} sản phẩm trong giỏ hàng</h3>`;
        document.getElementById('cart').removeChild(x.parentElement.parentElement);
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach((e,index) =>{
            if(e.includes(x.parentElement.parentElement.querySelector('.name').innerText)){
                cart.splice(index,1);
                localStorage.setItem('cart',JSON.stringify(cart));
            }
        })
        document.getElementById('ifsp').innerHTML=`<h3 style="font-size: 30px;">Có ${cart.length} sản phẩm trong giỏ hàng</h3>`;
        tong();
    }
hiengiohang();
</script>
</body>
</html>