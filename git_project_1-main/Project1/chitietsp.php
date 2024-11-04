<?php
if (isset($_GET['id']) == true) {
  $id = $_GET['id'];
  settype($id, "int");
} else
  $id = 0;
$kq = laysp_chitiet($id);
$sp = $kq->fetch();
?>
<link rel="stylesheet" href="dell-xps.css">
<div class="content_mid">

  <div class="product-item">
    <div class="product_text">
      <div>
        <?php echo $sp['ten_sp'] ?>
      </div>
    </div>
    <div class="product_new">
      <div class="product_detail">
        <form action="index.php?page=cart" method="post">
          <div class="product_detail_img">
            <img src="<?php echo $sp['hinh']; ?>" alt="">
          </div>
      </div>
      <div class="product_colum">
        <div class="product_colum_text">
          <span>
            <?php echo $sp['gia_km'] ?>VND
          </span>
          <p style="margin-bottom: 0.5rem;"><strong>Bảo hành:</strong> 12 tháng Xcomputer</p>
          <p style="margin-bottom: 3rem;"><strong>Tình trạng</strong> Còn hàng</p>
          <p><strong>Cấu hình:</strong></p>
          <p>
            <?php echo $sp['mota'] ?>
          </p>
        </div>

        <div class="promotion">
          <p class="box_promotion">
            <i class="fa fa-gift" style="font-size: 18px; margin-right: 5px;"> </i> QUÀ TẶNG/KHUYẾN MÃI
          </p>
          <ul style="padding-top: 25px; margin-left: 0;padding-left: 25px;">
            <p>
              ✅ Tặng Windows 11 bản quyền theo máy
              <br>
              ✅ Miễn phí cân màu màn hình công nghệ cao
              <br>
              ✅ Balo thời trang
              <br>
              ✅ Chuột không dây + Bàn di cao cấp
              <br>
              ✅ Tặng gói cài đặt, bảo dưỡng, vệ sinh máy trọn đời
              <br>
              ✅ Tặng Voucher giảm giá cho lần mua tiếp theo
            </p>
          </ul>
        
        <button type="submit" class="buy-now add-product" name="add_to_cart">Thêm vào giỏ hàng</button>
        <div>
          <input type="hidden" value="<?php echo $sp['id_sp']; ?>" name="id_sp">
          <input type="hidden" value="<?php echo $sp['ten_sp']; ?>" name="ten_sp">
          <input type="hidden" value="<?php echo $sp['hinh']; ?>" name="hinh">
          <input type="hidden" value="<?php echo $sp['gia_km']; ?>" name="gia_km">
          <input type="hidden" value="<?php echo $sp['mota']; ?>" name="mota">

        </div>
        </form>

        <span class="d-block text-13">
          Giao hàng tận nơi hoặc nhận ở cửa hàng
        </span>
      </div>
      <div class="endow">
        <div class="support-incentives">
          <h4 class="title">
            YÊN TÂM MUA SẮM TẠI Xcomputer
          </h4>
          <ul class="list-unstyled">
            <li><i class="fa-solid fa-star" style="color: #fcd23b;"></i> <span>Chất lượng sản phẩm là hàng đầu</span>
            </li>
            <li><i class="fa-solid fa-star" style="color: #fcd23b;"></i> <span>Dùng test máy 15 ngày đầu lỗi 1 đổi
                1</span></li>
            <li><i class="fa-solid fa-star" style="color: #fcd23b;"></i> <span>Hỗ trợ và hậu mãi sau bán hàng tốt
                nhất</span></li>
            <li><i class="fa-solid fa-star" style="color: #fcd23b;"></i> <span>Trả góp lãi suất 0% qua thẻ visa</span>
            </li>
            <li><i class="fa-solid fa-star" style="color: #fcd23b;"></i> <span>Giao hàng miễn phí toàn quốc nhanh
                nhất</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main-details">
    <div class="container1">
      <div class="row">
        <div class="col">
          <div class="big-white">
            <div class="title-tab">
              <h3>
                Đặc điểm nổi bật
              </h3>
            </div>
            <div class="main-content" style="font-size: 14px;">
              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>
                    <span style="color: #0000ff;">
                      <a style="color: #0000ff;" href="https://laptopaz.vn/tim?q=xps" target="_blank">Laptop Dell
                        XPS</a>
                    </span>&nbsp;15 9520 sẽ phù hợp với đối tượng nào?
                  </strong>
                </span>
                <br>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Dell XPS 15 9520 mẫu Laptop
                  Multimedia mới nhất đến từ nhà&nbsp;
                  <span style="color: #0000ff;">
                    <a style="color: #0000ff;" href="https://www.dell.com/en-vn" target="_blank">Dell</a>
                  </span> được thừa hưởng những điều tốt nhất từ “đàn anh” của mình -
                  <span style="color: #0000ff;">
                    <a style="color: #0000ff;" href="https://laptopaz.vn/tim?q=9510" target="_blank">XPS 9510</a>
                  </span>, nhưng năm nay với sự cải tiến đáng kể về mặt hiệu năng với sự ”góp” mặt của Intel CPU 12th
                  Gen, Dell XPS 15 9520 chắc chắn sẽ đem lại cho bạn những trải nghiệm tuyệt vời hơn thế.
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <img style="display: block; margin-left: auto; margin-right: auto;"
                    src="/media/product/2484_laptopaz_dell_xps_9520_1s.jpg" alt="" width="600">
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>Thiết kế hiện đại, sang trọng</strong>
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Ở&nbsp;
                  <span style="color: #0000ff;">
                    <a style="color: #0000ff;" href="https://laptopaz.vn/tim?q=dell" target="_blank">Dell</a>
                  </span> người dùng vẫn luôn thấy sự nhất quán trong lối thiết kế trong từng sản phẩm, nó không dễ bị
                  nhầm lẫn giữa các dòng Laptop khác trên thị trường mà vẫn luôn có lối thiết kế của riêng mình, và Dell
                  XPS 15 9520 cũng đã làm được điều đó. Vẫn làm bằng chất liệu Nhôm nguyên khối cùng với những đường cắt
                  Diamond tinh xảo đem lại cho ngoại hình của chiếc laptop sự chắc chắn và sang trọng. Khung máy được
                  gia cố bằng hợp kim Magnesium chắc chắn, với mặt trên được phủ một lớp carbon fiber đã quá quen thuộc
                  với các dòng XPS trước đây. Ngoài ra máy có cân nặng khoảng 1.92Kg khá nhẹ cho người dùng có thể mang
                  chiếc Laptop này đi muôn nơi.
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <img style="display: block; margin-left: auto; margin-right: auto;"
                    src="/media/product/2484_laptopaz_dell_xps_9520_6.jpg" alt="" width="600">
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>Màn hình hiển thị chất lượng tuyệt vời </strong>
                </span>
                <br>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Ở DELL XPS 15 9520 người dùng
                  có thể được trải nghiệm hơn những gì đã mong đợi từ trải nghiệm của bản XPS 9510: Chất lượng hiển thị
                  khá tốt. Ở phiên bản màn hình 4K(tùy cấu hình) cho độ sáng 500 nits và bao phủ 100% Adobe RGB, 94%
                  DCI-P3 cùng với công nghệ HDR với Dolby Vision giúp cho các điểm nổi bật sáng hơn tới 40 lần và màu
                  đen tối hơn đến 10 lần. Nếu bạn là người dùng làm việc thiên về bên nghệ thuật hoặc cần sự chính xác
                  màu gần như tuyệt đối thì phiên bản 4K chính là sự lựa chọn tuyệt vời.
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Dell đã thiết kế một Webcam
                  chỉ nhỏ chỉ 2,25mm trên một chiếc máy có 4 viền siêu mỏng, và chúng có ống kính tới 4 thành phần đã
                  mang lại video sắc nét ở tất cả các khu vực của khung hình, đặc biệt là trong điều kiện ánh sáng mờ,
                  giúp cải thiện độ nhiễu.
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <img style="display: block; margin-left: auto; margin-right: auto;"
                    src="/media/product/2484_laptopaz_dell_xps_9520_2.jpg" alt="" width="600">
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>Bàn phím và TouchPad</strong>
                </span>
                <br>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">TouchPad với công nghệ Window
                  Precision và được Dell phủ kính cho người dùn có cảm giác rê chuột, đa nhiệm hay tracking mượt mà và
                  chính xác không khác gì TrackPad trên MacBook Pro. Hành trình phím thiết kế ổn, lực phản hồi tốt đem
                  lại cảm nhận tốt khi gõ phím và gõ trong thời gian dài đối với người dùng làm việc văn phòng.
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <img style="display: block; margin-left: auto; margin-right: auto;"
                    src="/media/product/2484_laptopaz_dell_xps_9520_3.jpg" alt="" width="600">
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Về hiệu suất đồ hoạ, Dell XPS
                  15 9520 đi kèm với tuỳ chọn cấu hình GPU bao gồm Card đồ hoạ rời NVIDIA® GeForce RTX ™ 3050 (cho phiên
                  bản chip Intel Core i7). Đây là card đồ chuyên dụng thường được trang bị trên cho các dòng laptop
                  gaming hay đồ hoạ. Và với sức mạnh vượt trội, GPU cho khả năng chạy mượt các phần mềm đồ họa 3D nặng
                  hay các tựa game AAA mà không gặp bất cứ khó khăn gì.
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <img style="display: block; margin-left: auto; margin-right: auto;"
                    src="/media/product/2484_laptopaz_dell_xps_9520_5.jpg" alt="" width="600">
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>Cổng kết nối</strong>
                </span>
                <br>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Dell đã trang bị cho XPS 15
                  9520 hệ thống cổng kết nối khá đầy đủ, điều này giúp cho người dùng có cảm giác thuận tiện khi kết nối
                  với các thiết bị khác:
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">cổng Type-C hỗ trợ Thunderbolt
                  4,&nbsp;cổng USB 3.2 Gen 2 Type-C, jack 3,5 và khe thẻ SD vẫn được giữ lại. Việc giữ lại khe SD là một
                  điểm cộng lớn khi Dell XPS 9520 vốn được sinh ra dành cho đối tượng sử dụng là người làm sáng tạo nội
                  dung, hình ảnh.
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <img style="display: block; margin-left: auto; margin-right: auto;"
                    src="/media/product/2484_laptopaz_dell_xps_9520_4.jpg" alt="" width="600">
                </span>
              </p>

              <p>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>Tổng kết:&nbsp;</strong>
                </span>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Dell XPS 15 9520 có thể coi là
                  phiên bản nâng cấp hoàn toàn mới so với người tiền nhiệm. Không chỉ thay đổi trong thiết kế mà nó còn
                  mang đến hiệu suất vượt trội nhờ con chip thế hệ thứ 12 mới nhất, đem lại trải nghiệm vô cùng tuyệt
                  vời, xứng đáng với giá tiền mà bản thân nó sở hữu.
                </span>
              </p>

              <!-- <p>
                                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                                  <img style="display: block; margin-left: auto; margin-right: auto;" src="https://laptopaz.vn/media/lib/1078_nhDELLcheckincakhch.jpg" alt="" width="800">
                                </span>
                              </p> -->

              <p style="text-align: center;">
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>Địa chỉ mua bán Laptop uy tín tại Hà Nội và trên toàn quốc - Xcomputer
                    <br>
                    Cơ sở 1: Số 18 Ngõ 121 - Thái Hà - Đống Đa - Hà Nội
                  </strong>
                </span>

                <br>

                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>
                    Cơ sở 2: Số 56 Trần Phú - Hà Đông - Hà Nội
                  </strong>
                </span>
                <br>
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">
                  <strong>Liên hệ ngay: Hotline 0825.233.233&nbsp;</strong>
                </span>
              </p>

              <p style="text-align: center;">
                <span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; color: #0000ff;">
                  <a style="color: #0000ff;" href="https://laptopaz.vn/mua-hang-tu-xa.html">Chuyển hàng đi toàn quốc
                    nhận máy đúng như mô tả mới phải thanh toán xem chi tiết tại đây</a>
                </span>
              </p>

              <div style="width: 100%;display: flex;justify-content: center;">
                <a href="https://www.facebook.com/messages/t/110101228608585" target="_blank"
                  style="width: 180px;text-align: center;padding: 10px;text-transform: uppercase;background: #2b80dd;color: #fff;font-family: 'Roboto';font-weight: 700;border-radius: 10px;">Liên
                  hệ ngay với
                  <br>
                  nhân viên tư vấn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="technique">
          <div class="bg-white parameter">
            <div class="title-tab">
              <h3>Thông số kỹ thuật</h3>
            </div>
            <div class="pro-parameter">
              <div class="prodetail-spec-full" style="font-size: 11px;font-family: Times New Roman;">

                <p>
                  <span style="color: #0000ff; font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                    <strong>Thông số kỹ thuật Laptop Dell XPS&nbsp;9520</strong>
                  </span>
                </p>
                <table class="table table-striped table-bordered" style="height: 196px; float: left; width: 270px;">
                  <tbody>
                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>CPU</strong>
                        </span>
                      </td>

                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">Intel® Core™
                          i7-12700H</span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>RAM</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">16GB DDR5 Bus 4800
                          MHz</span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>Ổ cứng</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">SSD 512GB NVMe</span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>Card VGA</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">NVIDIA® GeForce RTX™
                          3050Ti, 4 GB GDDR6</span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>Màn hình</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">15,6 ", FHD +
                          (1920x1200), 60Hz, Không cảm ứng, Chống lóa, 500 nit, InfinityEdge</span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>Cổng giao tiếp</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">1 USB 3.2 Gen 2 Type-C™
                          (with DisplayPort and PowerDelivery) 2 Thunderbolt™ 4 (USB Type-C™) with DisplayPort and
                          PowerDelivery 1 3.5mm headphone/microphone combo jack
                          <br>
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>Trọng lượng</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">1.92 kg</span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>Pin</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">86Whr</span>
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>Hệ điều hành</strong>
                        </span>
                      </td>
                      <td scope="row">
                        <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">Windows 11 bản quyền
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
                <p style="text-align: left;">
                  <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">&nbsp;
                  </span>
                </p>
                <div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">
                  <span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">&nbsp;
                  </span>
                </div>

                <a href="javascript:;" data-fancybox="" data-src="#box_product-spec" class="view-full mt-2">Xem cấu hình
                  chi tiết</a>
              </div>
              <div id="box_product-spec" style="display: none">
                <div class="title-tab">
                  <h3>Thông số kỹ thuật</h3>
                </div>

                <p><span style="color: #0000ff; font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                    <strong>Thông số kỹ thuật Laptop Dell XPS&nbsp;9520</strong>
                  </span>
                </p>

                <table class="table table-striped table-bordered" style="height: 196px;float: left;" width="238">
                  <tbody>
                    <tr>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">
                          <strong>CPU</strong>
                        </span>
                      </td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">Intel®
                          Core™ i7-12700H</span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>RAM</strong></span>
                      </td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">16GB DDR5
                          Bus 4800 MHz</span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>Ổ
                            cứng</strong></span></td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">SSD 512GB
                          NVMe</span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>Card
                            VGA</strong></span></td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">NVIDIA®
                          GeForce RTX™ 3050Ti, 4 GB GDDR6</span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>Màn
                            hình</strong></span></td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">15,6 ",
                          FHD + (1920x1200), 60Hz, Không cảm ứng, Chống lóa, 500 nit, InfinityEdge</span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>Cổng giao
                            tiếp</strong></span></td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">1 USB 3.2
                          Gen 2 Type-C™ (with DisplayPort and PowerDelivery) 2 Thunderbolt™ 4 (USB Type-C™) with
                          DisplayPort and PowerDelivery 1 3.5mm headphone/microphone combo jack<br></span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>Trọng
                            lượng</strong></span></td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">1.92
                          kg</span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>Pin</strong></span>
                      </td>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">86Whr</span></td>
                    </tr>
                    <tr>
                      <td scope="row"><span
                          style="font-family: arial, helvetica, sans-serif; font-size: 8pt;"><strong>Hệ điều
                            hành</strong></span></td>
                      <td scope="row"><span style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">Windows
                          11 bản quyền</span></td>
                    </tr>
                  </tbody>
                </table>
                <p style="text-align: left;"><span
                    style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">&nbsp;</span></p>
                <div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;"><span
                    style="font-family: arial, helvetica, sans-serif; font-size: 8pt;">&nbsp;</span></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>