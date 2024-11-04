<?php
    if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $mysqli = require __DIR__ . "/database.php";
        $email = $_POST["email"];
        $password = $_POST["password"];


        $sql = sprintf("SELECT * FROM user 
                        WHERE email = '%s'", 
                        $mysqli->real_escape_string($email));
        $result = $mysqli->query($sql);
        $user = $result->fetch_assoc();
        if ($user) {
           if (password_verify($password, $user["password_hash"])) {
                session_start();

                session_regenerate_id();

                $_SESSION["user_id"] = $user["id"];
                header("Location: session.php");
                exit;
           }
           else {
                die ("Login failed");
           }
        }
        $is_invalid = true;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/ASMfinal.css">
    <link rel="stylesheet" href="/css/dangky1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
            <div class="logo_text" title="Trang chủ">
                <a href="/WEB/HTML/ASMfinal.php"><img height="100%" src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg" title="Trang chủ"></a>
                <h2>Divine Shop</h2>
            </div>
            <div class="seacher">
                <input type="text" name="" id="" placeholder="Tìm kiếm sản phẩm">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="form">  
                <div class="lopdangnhapchung">
                  <i class="fa-solid fa-circle-user"></i>
                  <div class="dangnhap1">
                    <li><a href="/WEB/HTML/formdn.php" title="Đăng nhập">Đăng nhập /</a></li>
                  </div>
                  <div class="dangky001">
                  <li><a href="/WEB/HTML/formdk1.php" title="Đăng ký"> Đăng ký</a></li>
                  </div>
                </div>
            </div>
            <div class="cart">
              <li><i class="fas fa-shopping-cart"></i><a href="/WEB/HTML/giohang.php">Giỏ hàng</a></li>
          </div>
      </div>
    </div>
<div class="content" style="background-color: gainsboro;">
    <div class="content-text" style="background-color: rgb(204, 212, 219);">
        <li><i class="fas fa-gamepad"></i><a href="">Giải trí</a></li>
        <li><i class="fas fa-briefcase"></i><a href="">Làm việc</a></li>
        <li><i class="fas fa-graduation-cap"></i><a href="">Học tập</a></li>
        <li><i class="fab fa-steam"></i><a href="">Game stream</a></li>
        <li><i class="fas fa-trophy"></i><a href="">Game Origin</a></li>
        <li><i class="fab fa-windows"></i><a href="">Window, Office</a></li>
        <li><i class="fab fa-google-drive"></i><a href="">Google Drive</a></li>
        <li><i class="fas fa-wallet"></i><a href="">Steam Wallet</a></li>
        <li><i class="fas fa-wifi"></i><a href="">Gói Data Mobile</a></li>
        <li><i class="fab fa-google-play"></i><a href="">Google Play, iTunes</a></li>
    </div>    
    

    <!-- <div class="w A rd Rc">
        <div class="ta mc jc za">
            <div class="z ta ec kc Nb Qa xc Sc eb" style="width: 992px;">
                <div class="Qa db za sc u"> -->
                    <div class="Ta db za rd Yf" style="width: 1400px; padding-left: 330px; position: absolute; top: 150px; border: 0px;">
                        <form action="/WEB/HTML/signup_protest.php" style="background-color: #fff;  border-radius: 5px;" method="post">
                            <fieldset style="border: 0px;">
                                <div class="ta Qe">
                                    <div class="af og Qf Oe">
                                        <h3 class="vc">
                                            <div class="dkdn">
                                                <a href="/WEB/HTML/formdn.php"><button type="button" class="dangnhap_2">Đăng nhập</button></a> 
                                                <a href="/WEB/HTML/formdk1.php"> <button type="button" class="dangky_2">Đăng ký</button></a>
                                            </div>
                                        </h3>
                                        <div class="fe" style="padding-bottom: 5px;">Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn</div>
                                        <div>
                                            <div class="z" style="padding-bottom: 10px;">
                                                <input class="g h" name="username" required="" maxlength="50" placeholder="Họ và Tên"> <br>
                                                <label>Họ và tên</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="z" style="padding-bottom: 10px;">
                                                <input class="g h" name="email" type="email" required="" minlength="6" placeholder="Địa chỉ email"> <br>
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <!-- <div>
                                            <div class="z" style="padding-bottom: 10px;">
                                                <input class="g h" name="username" required="" minlength="6" maxlength="16" pattern="[a-zA-Z0-9]+" placeholder="Tên đăng nhập"> <br>
                                                <label>Tên đăng nhập</label>
                                            </div>
                                        </div> -->
                                        <div>
                                            <div class="z" style="padding-bottom: 10px;">
                                                <input class="g h" name="password" type="password" required="" minlength="6" maxlength="50" placeholder="Mật khẩu"> <br>
                                                <label>Mật khẩu</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="z" style="padding-bottom: 10px;">
                                                <input class="g h" name="cfpassword" type="password" required="" minlength="6" maxlength="50" placeholder="Nhập lại mật khẩu"> <br>
                                                <label>Nhập lại mật khẩu</label>
                                            </div>
                                        </div>
                                        <!-- <div>
                                            <div class="z" style="padding-bottom: 10px;">
                                                <input class="g h" name="telephone" placeholder="Số điện thoại ( không bắt buộc)"> <br>
                                                <label>Số điện thoại (không bắt buộc)</label>
                                            </div>
                                        </div> -->
                                        <!-- <div>
                                            <div class="z" style="padding-bottom: 10px;">
                                                <input class="g h" name="affiliate_code" type="tel" placeholder="Mã giới thiệu (nếu có)"> <br>
                                                <label>Mã giới thiệu (nếu có)</label>
                                            </div>
                                        </div> -->
                                        <div>
                                            <label class="checkdongy" style="padding-bottom: 10px;">
                                                <input class="Ub k bc" type="checkbox" name="newsletter" value="1">
                                                <div  style="padding-bottom: 10px;">Tôi đồng ý nhận thông tin marketing mới từ Divine Shop.</div>
                                            </label>
                                        </div>
                                        <a href="/WEB/HTML/formdn.php">
                                            <button type="submit" class="b c db">Tạo tài khoản</button></a>
                                        <small class="fe ra">Khi bấm <span class="Zd" onclick="co()">Tạo tài khoản</span>, bạn đã đồng ý với <a href="#" target="_blank" rel="noreferrer" class="Zd">Điều khoản dịch vụ của Divine Shop</a>
                                        </small>
                                    </div>
                                    <div class="hinhdk">
                                        <img loading="lazy" src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg" alt="Đăng nhập / Đăng ký">
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                <!-- </div> -->
                <!-- <button type="button" class="y F D Gf Hf b pd oe vf Af">
                    <div class="bb wa yc Tc fd jd ld nd">

                    </div>
                </button> -->
            <!-- </div>
        </div>
    </div> -->
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
    function co()
    {
        alert('Đăng ký thành công');
    }
</script>
<script>
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			// if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
			// 	// console.log('Live reload enabled.');
				// sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			// }
		})();
	}
	// else {
	// 	console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	// }

</script>
</body>
</html>