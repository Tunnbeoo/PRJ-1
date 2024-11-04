<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="index.css">
  <link rel="stylesheet" href="add-card.css">
  <title>Documenst</title>
</head>

<body>
  <main>
    <style>
      .radio-label.current {
        font-weight: bold;
        color: #ff8f00;
      }

      .cart-left {
        width: 685px;
        float: left;
      }

      .cart-right {
        width: 490px;
        float: right;
      }

      .box-cart {
        border: solid 1px #ccc;
        margin-bottom: 15px;
      }

      .content-box-cart {
        padding: 10px;
      }

      .pay-content {
        background: #ff8f00;
        color: #fff;
        padding: 10px;
      }

      .title-box-cart {
        line-height: 34px;
        padding: 0 10px;
        font-weight: bold;
        font-size: 15px;
        /* Permalink - use to edit and share this gradient:http://colorzilla.com/gradient-editor/#f7f7f7+0,ededed+98 */
        background: #f7f7f7;
        /* Old browsers */
        background: -moz-linear-gradient(top, #f7f7f7 0%, #ededed 98%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #f7f7f7 0%, #ededed 98%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #f7f7f7 0%, #ededed 98%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7', endColorstr='#ededed', GradientType=0);
        /* IE6-9 */
        border-bottom: solid 1px #ccc;
      }

      .box-cart select {
        width: 184px;
      }

      .box-cart .inputText {
        width: 435px;
        margin-bottom: 10px;
      }

      .gradient-title {
        background: #f7f7f7;
        /* Old browsers */
        background: -moz-linear-gradient(top, #f7f7f7 0%, #ededed 98%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #f7f7f7 0%, #ededed 98%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #f7f7f7 0%, #ededed 98%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7', endColorstr='#ededed', GradientType=0);
        /* IE6-9 */
      }

      .space10 {
        height: 10px;
        clear: both;
      }

      .btn {
        border: none;
        cursor: pointer;
        padding: 6px 15px;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        display: inline-block;
        font-size: 14px;
      }

      .clear {
        clear: both;
      }

      .unit-detail-amount-control {
        position: relative;
        width: 126px;
        height: 32px;
        line-height: 32px;
        zoom: 1;
      }

      .unit-detail-amount-control a {
        cursor: pointer;
        float: left;
        width: 26px;
        height: 26px;
        border: 1px solid #ccc;
        line-height: 26px;
        overflow: hidden;
        text-align: center;
        color: #333;
        background: #eee;
      }

      .unit-detail-amount-control input {
        float: left;
        width: 30px;
        text-align: center;
        height: 26px;
        line-height: 26px;
        border-width: 1px;
        border-style: solid;
        border-color: #ccc;
        border-left: none;
        border-right: 0;
        outline: none;
      }

      .unit-detail-amount-control a:hover {
        background: #ddd;
      }
    </style>




    <div id="breadcrumb">
      <div class="container">
        <div class="row m-0">
          <div class="item" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="/" itemprop="url" class="nopad-l">
              <span itemprop="title">Trang chủ</span>
            </a>
          </div>
          <div class="item" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="" itemprop="url">

              <span itemprop="title">Giỏ hàng</span>

            </a>
          </div>

        </div>
      </div>
    </div>

    <div>

    </div>
    <section id="main">
      <div class="container">
        <div id="content">
          <form method="post" enctype="multipart/form-data" action="send-cart.php" onsubmit="return check_field()">
            <table cellpadding="5" border="1" bordercolor="#CCCCCC"
              style="border-collapse: collapse; width: 100%; background: #fff;" id="tbl_list_cart">
              <thead>
                <tr style="background: #f7f7f7; font-size: 14px;">
                  <td style="height: 23px;">STT</td>
                  <td width="600">Tên sản phẩm</td>
                  <td>Giá</td>
                  <td>Số lượng</td>
                  <td>Tổng</td>
                  <td>Xóa</td>
                </tr>
              </thead>
              <tbody>
                <?php
                $tongTien = 0;
                if (isset($_GET['remove'])) {
                  $remove_id = $_GET['remove'];
                  foreach ($_SESSION['cart'] as $key => $item) {
                    if ($item['id_sp'] == $remove_id) {
                      unset($_SESSION['cart'][$key]);
                      break; 
                    }
                  }

                 
                  header("Location: index.php?page=cart");
                  exit;
                }
                if (isset($_SESSION['cart']) && count($_SESSION['cart']) > 0) {
                  $stt = 1;
                  $tongTien = 0;
                  foreach ($_SESSION['cart'] as $item) {
                    $thanhTien = $item['gia_km'] * 1; 
                    $tongTien += $thanhTien;
                    echo "<tr>";
                    echo "<td>" . $stt++ . "</td>";
                    echo "<td>" . $item['ten_sp'] . "</td>";
                    echo "<td>" . number_format($item['gia_km']) . " đ</td>";
                    echo "<td>1</td>";
                    echo "<td>" . number_format($thanhTien) . " đ</td>";
                    echo "<td><a href='index.php?page=cart&remove=" . $item['id_sp'] . "'>Xóa</a></td>";
                    echo "</tr>";
                  }
                  echo "<tr>";
                  echo "<td colspan='4'>Tổng cộng</td>";
                  echo "<td>" . number_format($tongTien) . " đ</td>";
                  echo "<td></td>";
                  echo "</tr>";
                } else {
                  echo "<tr><td colspan='6'>Giỏ hàng trống</td></tr>";
                }
                echo "<tr>";
                echo "<td colspan='4' style='text-align:right;'><strong>Tổng cộng :</strong></td>";
                echo "<td colspan='2'><strong>" . number_format($tongTien) . " đ</strong></td>";
                echo "</tr>";

                echo "<tr>";
                echo "<td colspan='4' style='text-align:right;'><strong>Thanh toán :</strong></td>";
                echo "<td colspan='2' style='color:red;'><strong>" . number_format($tongTien) . " VND</strong></td>";
                echo "</tr>";
                ?>
              </tbody>
            </table>



            <div class="clear space10"></div>
            <div align="right">
              <input type="button" class="btn btn-blue" value="Tiếp tục mua hàng" onclick="location.href='/'">
            </div>
            <div class="clear space10"></div>
            <div class="cart-left">
              <div class="box-cart">
                <div class="title-box-cart">1. Khách hàng khai báo thông tin</div>
                <div class="content-box-cart">
                  <b style="font-size:14px;">Thông tin người mua</b>
                  <br>
                  <span style="font-size:11px;">Những phần đánh dấu (*) là bắt buộc</span>
                  <div class="space10"></div>
                  <table>
                    <tbody>
                      <tr>
                        <td width="95">Họ tên*</td>
                        <td colspan="3">
                          <input type="text" class="inputText" name="user_info[name]" id="buyer_name" value="">
                        </td>
                      </tr>
                      <tr>
                        <td>Điện thoại*</td>
                        <td colspan="3">
                          <input type="text" class="inputText" name="user_info[tel]" id="buyer_tel" value="">
                        </td>
                      </tr>
                      <tr>
                        <td>Địa chỉ*</td>
                        <td colspan="3">
                          <input type="text" class="inputText" name="user_info[address]" id="buyer_address" value="">
                        </td>
                      </tr>
                      <tr>
                        <td>Email *</td>
                        <td colspan="3">
                          <input type="text" class="inputText" name="user_info[email]" id="buyer_email" value="">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="space20"></div>
                  <div class="line"></div>
                  <div class="space20"></div>
                </div>
              </div>
            </div>

            <div class="cart-right">
              <div class="box-cart">
                <div class="title-box-cart">2. Ghi chú cho đơn hàng</div>
                <div class="content-box-cart">
                  <textarea name="user_info[note]" id="ship_to_note"
                    style="margin: 0px;width: 100%;height: 87px;box-sizing: border-box; padding: 5px;"></textarea>
                </div>
              </div>

              <div class="box-cart">
                <div class="title-box-cart">3. Chọn phương thức thanh toán</div>
                <div class="content-box-cart">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top"><input id="pay_0_input" name="pay_method" value="1" type="radio"
                            onchange="show('pay_0')" checked=""></td>
                        <td>
                          <label class="radio-label" for="pay_0_input" style="padding-left:0;" id="label_pay_0">Thanh
                            toán tại cửa hàng</label>

                          <div class="boxContent pay-content" id="pay_0">Nhận hàng và thanh toán tiền tại cửa hàng
                            Laptop AZ:
                            <br>-CS1: Số 18, ngõ 121, Thái Hà, Đống Đa, Hà Nội
                            <br>-CS2: Số 56 Trần Phú, Hà Đông, Hà Nội
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td valign="top">
                          <input id="pay_1_input" name="pay_method" value="2" type="radio" onchange="show('pay_1')">
                        </td>
                        <td>
                          <label class="radio-label" for="pay_1_input" style="padding-left:0;" id="label_pay_1">Thanh
                            toán khi nhận hàng (COD)</label>
                          <div class="boxContent pay-content" id="pay_1" style="display:none;">Trả tiền mặt khi giao
                            hàng
                            <br>
                            <br>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td valign="top">
                          <input id="pay_2_input" name="pay_method" value="3" type="radio" onchange="show('pay_2')">
                        </td>
                        <td>
                          <label class="radio-label" for="pay_2_input" style="padding-left:0;" id="label_pay_2">Thanh
                            toán bằng chuyển khoản ngân hàng</label>

                          <div class="boxContent pay-content" id="pay_2" style="display:none;">Thực hiện thanh toán vào
                            tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung
                            đơn đặt hàng thành công. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
                            <br>Thông tin tài Khoản ngân hàng:
                            <br>
                            <br>– STK: 986502468;
                            <br>– Chủ TK: Hoàng Thị Yến;
                            <br>– Tại ngân hàng ACB chi nhánh Hoàng Cầu - Hà Nội.
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td valign="top">
                          <input id="pay_3_input" name="pay_method" value="4" type="radio" onchange="show('pay_3')">
                        </td>
                        <td>
                          <label class="radio-label" for="pay_3_input" style="padding-left:0;" id="label_pay_3">Thanh
                            toán trả góp</label>

                          <div class="boxContent pay-content" id="pay_3" style="display:none;">Hỗ trợ trả góp qua thẻ
                            tín dụng Visa, Master, JCB.
                            <br>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="product-actions-single">
                <button type="submit" id="btn-submit" class="action-button green"
                  style="color: #fff;text-transform: uppercase;font-weight: bold;background: #ff8f00;border: solid 1px #d27a0a;padding: 11px 40px;display: block;margin: 10px auto;border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;cursor: pointer;">Gửi
                  đơn hàng</button>
                <input type="hidden" name="send_order" value="yes">
              </div>
            </div>
          </form>
          <p>&nbsp;</p>
          <script src="/template/t2021/script/jquery.js"></script>
          <script>
            function show(id) {
              $(".pay-content").hide();
              $("#" + id).show();
              $(".radio-label").removeClass("current");
              $("#label_" + id).addClass("current");
            }

            function open_tax_form(check_box_id, tax_form_id) {
              var chk = document.getElementById(check_box_id).checked;
              if (chk) {
                document.getElementById(tax_form_id).style.display = "block";
              } else {
                document.getElementById(tax_form_id).style.display = "none";
              }
            }

            function fill_ship_info() {
              document.getElementById('ship_to_name').value = document.getElementById('buyer_name').value;
              document.getElementById('ship_to_tel').value = document.getElementById('buyer_tel').value;
              document.getElementById('ship_to_address').value = document.getElementById('buyer_address').value;
            }

          </script>
          <style>
            label:before {
              content: '';
              display: none;
            }
          </style>
          <script type="text/javascript">

            function removeAllPro() {
              var r = confirm("Bạn muốn xóa toàn bộ sản phẩm trong giỏ hàng?");
              if (r == true) {
                hura_erase_cookie("shopping_cart_store");
                location.href = "/cart";
              }
            }
          </script>


          <div class="clear"></div>
        </div>

      </div>
    </section>


    <!-- <script>
let cart = JSON.parse(localStorage.getItem("cart"));
function xoa(i)
{
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(i,1)
    localStorage.setItem("cart" , JSON.stringify(cart));
    location.reload();
}
</script> -->
  </main>