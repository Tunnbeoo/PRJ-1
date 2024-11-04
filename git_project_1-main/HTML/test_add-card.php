<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Project1/index.css">
    <link rel="stylesheet" href="/Project1/add-card.css">
    <title>Document</title>
</head>
<body>
<main>
        <style>
          .radio-label.current {
              font-weight: bold;
              color: #ff8f00;
          }
          .cart-left{
            width: 685px;
            float:left;
          }
          .cart-right{
            width: 490px;
            float:right;
          }
          .box-cart{
            border:solid 1px #ccc;
            margin-bottom:15px;
          }
          .content-box-cart{
            padding:10px;
          }  
          .pay-content {
              background: #ff8f00;
              color: #fff;
              padding: 10px;
          }
          .title-box-cart{
            line-height:34px;
            padding:0 10px;
            font-weight:bold;
            font-size:15px;/* Permalink - use to edit and share this gradient:http://colorzilla.com/gradient-editor/#f7f7f7+0,ededed+98 */
            background:#f7f7f7;/* Old browsers */
            background:-moz-linear-gradient(top, #f7f7f7 0%, #ededed 98%);/* FF3.6-15 */
            background:-webkit-linear-gradient(top, #f7f7f7 0%,#ededed 98%);/* Chrome10-25,Safari5.1-6 */
            background:linear-gradient(to bottom, #f7f7f7 0%,#ededed 98%);/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#ededed',GradientType=0 );/* IE6-9 */
            border-bottom:solid 1px #ccc;}
          .box-cart select{
              width:184px;
            }
          .box-cart .inputText
            {width:435px;
              margin-bottom:10px;
            }
          .gradient-title{
            background:#f7f7f7;/* Old browsers */
            background:-moz-linear-gradient(top, #f7f7f7 0%, #ededed 98%);/* FF3.6-15 */
            background:-webkit-linear-gradient(top, #f7f7f7 0%,#ededed 98%);/* Chrome10-25,Safari5.1-6 */
            background:linear-gradient(to bottom, #f7f7f7 0%,#ededed 98%);/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#ededed',GradientType=0 );/* IE6-9 */
            }
            .space10{
              height:10px; 
              clear:both;
            }
            .btn{
              border:none;
              cursor:pointer;
              padding:6px 15px;
              border-radius:3px;
              -moz-border-radius:3px;
              -webkit-border-radius:3px;
              display: inline-block;
              font-size: 14px;
            }
            .clear{
              clear:both;
            }
            .unit-detail-amount-control {
              position: relative;
              width: 126px;
              height: 32px;
              line-height: 32px;
              zoom:1;
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
                  outline:none;
              }

              .unit-detail-amount-control a:hover {
                  background: #ddd;
              }
          </style>
    <header>
        <div class="container">
            <div class="align-items-center justify-content-between d-flex">
                <a class="logo" href="index.php">
                    <img alt="laptopaz.com chuyên laptop cũ, bán laptop cũ uy tín Hà Nội và toàn quốc" src="/Project1/img/COMPUTER.png" class="img-fluid">
                </a>
    
                <div class="search-form">
                    <!-- form search -->
                    <form id="frm-search" name="search" action="/tim">
                        <button type="submit" id="sbutton"><i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                        <input type="text" placeholder="Bạn muốn tìm sản phẩm gì?" value="" name="q" id="stext" autocomplete="off">
                    </form>
                    <div class="autocomplete-suggestions">
                        <div class="suggest-container"></div>
                    </div>
                    <!-- end form search -->
                </div>
    
                <div class="box-hotline d-flex align-items-center flex-column" style="margin-top: 12px;line-height: 25px;font-weight: bold;">
                    <p class="m-0 red text-18 text-uppercase">
                      <i class="fa fa-phone mr-2 text-20" aria-hidden="true"></i>Hotline</p>
                    <p class="font-weight-bold hotline text-20 text-bold m-0"> 0825 233 233 </p>
                </div>
    
                <div class="align-items-center cart d-flex flex-column mt25 position-relative">
                    <i class="fa fa-shopping-cart text-24 red" aria-hidden="true"></i>
                    <a href="add-card.php" class="text-16"> Giỏ hàng </a>
                    <span class="cart-quantity-counter" id="count_shopping_cart_store">0</span>
                </div>
            </div>
        </div>
    
        <div class="menu" id="menu">
            <div class="container">
                <div class="d-flex position-relative menu-list">
                    <div class="item js-hover-menu" data-id="42">                   
                        <span class="icon_root transition">
                            <img src="/media/category/cb_e90d157ceaa8bd152905d6b420c3bd29.png" alt=""></span>                   
                        <a href="/laptop-moi.html" class="root">LAPTOP MỚI</a>
                        <div class="sub_nav">
                          <div class="sub_filter">
                            <div class="list-unstyled sub_list-attr list_2col m-0 p-0 d-flex flex-wrap"> 
                                <div class="danhmuc-2">
                                  <a href="/laptop-dell-moi.html" title="Laptop Dell Mới" class="title-danhmuc-2">Laptop Dell Mới</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-alienware.html" title="Dell Alienware">Dell Alienware</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-inspiron.html" title="Dell Inspiron">Dell Inspiron</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-precision.html" title="Dell Precision">Dell Precision</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-latitude.html" title="Dell Latitude">Dell Latitude</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/Project1/dell-xps.html" title="Dell XPS">Dell XPS</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-g-seri.html" title="Dell G-Seri">Dell G-Seri</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-vostro.html" title="Dell Vostro">Dell Vostro</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-lenovo-moi.html" title="Laptop Lenovo Mới" class="title-danhmuc-2">Laptop Lenovo Mới</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-ideapad.html" title="Lenovo Ideapad">Lenovo Ideapad</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-legion.html" title="Lenovo Legion">Lenovo Legion</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-thinkbook.html" title="Lenovo ThinkBook">Lenovo ThinkBook</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-thinkpad.html" title="Lenovo Thinkpad">Lenovo Thinkpad</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-yoga.html" title="Lenovo Yoga">Lenovo Yoga</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-acer-moi-100.html" title="Laptop Acer Mới" class="title-danhmuc-2">Laptop Acer Mới</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-aspire.html" title="Acer Aspire">Acer Aspire</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-predator.html" title="Acer Predator">Acer Predator</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-nitro.html" title="Acer Nitro">Acer Nitro</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-swift.html" title="Acer Swift">Acer Swift</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-spin.html" title="Acer Spin">Acer Spin</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-hp-moi.html" title="Laptop HP Mới" class="title-danhmuc-2">Laptop HP Mới</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-elitebook.html" title="HP Elitebook">HP Elitebook</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-omen.html" title="HP Omen">HP Omen</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-spectre.html" title="HP Spectre">HP Spectre</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-envy.html" title="HP Envy">HP Envy</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-pavilion.html" title="HP Pavilion">HP Pavilion</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-zbook.html" title="HP Zbook">HP Zbook</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-probook.html" title="HP Probook">HP Probook</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-asus-moi.html" title="Laptop Asus Mới" class="title-danhmuc-2">Laptop Asus Mới</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-tuf.html" title="Asus Tuf">Asus Tuf</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-vivobook.html" title="Asus VivoBook">Asus VivoBook</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-zenbook.html" title="Asus ZenBook">Asus ZenBook</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-rog.html" title="Asus Rog">Asus Rog</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-msi-moi.html" title="Laptop MSI Mới" class="title-danhmuc-2">Laptop MSI Mới</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/msi-g-seri.html" title="MSI G-Seri">MSI G-Seri</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/msi-modern.html" title="MSI Modern">MSI Modern</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/msi-bravo.html" title="MSI Bravo">MSI Bravo</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-samsung-moi.html" title="Laptop Samsung mới" class="title-danhmuc-2">Laptop Samsung mới</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                  </div>
                                  </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="item js-hover-menu" data-id="148">
                        
                        <span class="icon_root transition"><img src="/media/category/cb_a082973a5a2d85d0c1e0b02d39dfa1ca.png" alt=""></span>
                        
                        <a href="/surface.html" class="root">SURFACE</a>
                        <div class="sub_nav">
                          <div class="sub_filter">
                            <div class="list-unstyled sub_list-attr list_2col m-0 p-0 d-flex flex-wrap">
                                <div class="danhmuc-2">
                                  <a href="/surface-laptop.html" title="Surface Laptop" class="title-danhmuc-2">Surface Laptop</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-laptop-3.html" title="Surface Laptop 3">Surface Laptop 3</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-laptop-4.html" title="Surface Laptop 4">Surface Laptop 4</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-laptop-go.html" title="Surface Laptop Go">Surface Laptop Go</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-laptop-studio.html" title="Surface Laptop Studio">Surface Laptop Studio</a>
    
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/surface-pro.html" title="Surface Pro" class="title-danhmuc-2">Surface Pro</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-pro-6.html" title="Surface Pro 6">Surface Pro 6</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-pro-7.html" title="Surface Pro 7">Surface Pro 7</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-pro-8.html" title="Surface Pro 8">Surface Pro 8</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-pro-x.html" title="Surface Pro X">Surface Pro X</a>
    
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/surface-go.html" title="Surface Go" class="title-danhmuc-2">Surface Go</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                   
                                    
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-go-2.html" title="Surface Go 2">Surface Go 2</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-go-3.html" title="Surface Go 3">Surface Go 3</a>
    
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/surface-book.html" title="Surface Book" class="title-danhmuc-2">Surface Book</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-book-2.html" title="Surface Book 2">Surface Book 2</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-book-3.html" title="Surface Book 3">Surface Book 3</a>
    
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/surface-duo.html" title="Surface Duo" class="title-danhmuc-2">Surface Duo</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                   
                                    
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/surface-duo-2.html" title="Surface Duo 2">Surface Duo 2</a>
    
                                    </div>
                                  </div>
                                  </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="item js-hover-menu" data-id="1">
                        <span class="icon_root transition"><img src="/media/category/cb_4d485476e07e02638e8e2133cdf8f56d.png" alt=""></span>
                        <a href="/laptop-like-new.html" class="root">LAPTOP LIKE NEW</a>
                        <div class="sub_nav">
                          <div class="sub_filter">
                            <div class="list-unstyled sub_list-attr list_2col m-0 p-0 d-flex flex-wrap">
                                <div class="danhmuc-2">
                                  <a href="/laptop-dell-like-new.html" title="Laptop Dell Like new" class="title-danhmuc-2">Laptop Dell Like new</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-alienware-like-new.html" title="Dell Alienware Like new">Dell Alienware Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-g-seri-like-new.html" title="Dell G-Seri Like new">Dell G-Seri Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-inspiron-like-new.html" title="Dell Inspiron Like new">Dell Inspiron Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-latitude-like-new.html" title="Dell Latitude Like new">Dell Latitude Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-precision-like-new.html" title="Dell Precision Like new">Dell Precision Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-xps-like-new.html" title="Dell XPS Like new">Dell XPS Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/dell-vostro-like-new.html" title="Dell Vostro Like new">Dell Vostro Like new</a>
    
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-hp-like-new.html" title="Laptop HP Like new" class="title-danhmuc-2">Laptop HP Like new</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                   
                                    
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-elitebook-like-new.html" title="HP Elitebook Like new">HP Elitebook Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-envy-like-new.html" title="HP Envy Like new">HP Envy Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-omen-like-new.html" title="HP Omen Like new">HP Omen Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-spectre-like-new.html" title="HP Spectre Like new">HP Spectre Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-zbook-like-new.html" title="HP Zbook Like new">HP Zbook Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-pavilion-like-new.html" title="HP Pavilion Like new">HP Pavilion Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-probook-like-new.html" title="HP Probook Like new">HP Probook Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/hp-notebook-like-new.html" title="HP Notebook Like new">HP Notebook Like new</a>
    
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-lenovo-like-new.html" title="Laptop Lenovo Like new" class="title-danhmuc-2">Laptop Lenovo Like new</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                   
                                    
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-ideapad-like-new.html" title="Lenovo Ideapad Like new">Lenovo Ideapad Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-legion-like-new.html" title="Lenovo Legion Like new">Lenovo Legion Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-thinkbook-like-new.html" title="Lenovo ThinkBook Like new">Lenovo ThinkBook Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-thinkpad-like-new.html" title="Lenovo Thinkpad Like new">Lenovo Thinkpad Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/lenovo-yoga-like-new.html" title="Lenovo Yoga Like new">Lenovo Yoga Like new</a>
    
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-acer-like-new.html" title="Laptop Acer Like new" class="title-danhmuc-2">Laptop Acer Like new</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-aspire-like-new.html" title="Acer Aspire Like new">Acer Aspire Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-nitro-like-new.html" title="Acer Nitro Like new">Acer Nitro Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-predator-like-new.html" title="Acer Predator Like new">Acer Predator Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-spin-like-new.html" title="Acer Spin Like new">Acer Spin Like new</a>
    
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/acer-swift-like-new.html" title="Acer Swift Like new">Acer Swift Like new</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-asus-like-new.html" title="Laptop Asus Like new" class="title-danhmuc-2">Laptop Asus Like new</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-rog-like-new.html" title="Asus Rog Like new">Asus Rog Like new</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-zenbook-like-new.html" title="Asus ZenBook Like new">Asus ZenBook Like new</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-vivobook-like-new.html" title="Asus VivoBook Like new">Asus VivoBook Like new</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/asus-tuf-like-new.html" title="Asus Tuf Like new">Asus Tuf Like new</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-msi-like-new.html" title="Laptop MSI Like new" class="title-danhmuc-2">Laptop MSI Like new</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">                            
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/msi-bravo-like-new.html" title="MSI Bravo Like new">MSI Bravo Like new</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/msi-g-seri-like-new.html" title="MSI G-Seri Like new">MSI G-Seri Like new</a>
                                    </div>
                                    <div class="d-flex align-items item-3"><!--<i class="fa fa-angle-double-right" style="padding-right:3px;"></i>-->
                                      <a href="/msi-modern-like-new.html" title="MSI Modern Like new">MSI Modern Like new</a>
                                    </div>
                                  </div>
                                  </div>
                                <div class="danhmuc-2">
                                  <a href="/laptop-samsung-like-new.html" title="Laptop Samsung Like new" class="title-danhmuc-2">Laptop Samsung Like new</a>
                                  <div class="danhmuc-3 d-flex flex-wrap">
                                  </div>
                                  </div>
                            </div>
                        </div>
                        </div>
                    </div>
                      <div class="item js-hover-menu">
                        <span class="icon_root transition"><img src="https://laptopaz.vn/media/lib/hot-sale.png" alt=""></span>
                        <a href="/tin-khuyen-mai.html" class="root">KHUYẾN MÃI</a>
                   </div>
                  <div class="item js-hover-menu">
                        <span class="icon_root transition"><img src="https://laptopaz.vn/media/lib/tr-gp.png" alt=""></span>
                        <a href="/huong-dan-tra-gop.html" class="root">TRẢ GÓP</a>
                   </div>
                </div>
            </div>
        </div>
    </header>



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
      <section id="main">
        <div class="container">
          <div id="content">
            <form method="post" enctype="multipart/form-data" action="/send-cart" onsubmit="return check_field()">
                <table cellpadding="5" border="1" bordercolor="#CCCCCC" style="border-collapse:collapse; width:100%; background:#fff;" id="tbl_list_cart">
                  <tbody>
                    <tr style="background: #f7f7f7;
                        background: -moz-linear-gradient(top, #f7f7f7 0%, #ededed 98%);
                        background: -webkit-linear-gradient(top, #f7f7f7 0%,#ededed 98%);
                        background: linear-gradient(to bottom, #f7f7f7 0%,#ededed 98%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#ededed',GradientType=0 );
                        font-size:14px;">
                        <td style="height:23px;">STT</td>
                        <td width="600">Tên sản phẩm</td>
                        <td>Giá</td>
                        <td>Số lượng</td> 
                        <td>Tổng</td>
                        <td>Xóa</td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <div style="">
                            <input type="hidden" id="js-discount-voucher" value="0">
                            <input type="hidden" id="js-total-before-fee-discount" value="0">
                            <span id="js-voucher-message"></span>
                        </div>
                      </td>
                      <td colspan="4" style="line-height:22px; color:#555">
                          <b>Tổng cộng :<span class="total-cart-price">0</span> đ</b>
                          <br>
                          <b style="color:red; font-size:16px;">Thanh toán : <span class="sub1 total-cart-payment" id="total_value" style="color: red; font-weight: bold;" data-gtm-vis-recent-on-screen10926496_41="239" data-gtm-vis-first-on-screen10926496_41="239" data-gtm-vis-total-visible-time10926496_41="100" data-gtm-vis-has-fired10926496_41="1">0</span> VND &nbsp; </b>

                      </td>
                    </tr>
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
                            <textarea name="user_info[note]" id="ship_to_note" style="margin: 0px;width: 100%;height: 87px;box-sizing: border-box; padding: 5px;"></textarea>
                          </div>
                        </div>

                      <div class="box-cart">
                        <div class="title-box-cart">3. Chọn phương thức thanh toán</div>
                          <div class="content-box-cart">
                            <table>
                              <tbody>
                                      <tr>
                                          <td valign="top"><input id="pay_0_input" name="pay_method" value="1" type="radio" onchange="show('pay_0')" checked=""></td>
                                          <td>
                                            <label class="radio-label" for="pay_0_input" style="padding-left:0;" id="label_pay_0">Thanh toán tại cửa hàng</label>
                                            
                                            <div class="boxContent pay-content" id="pay_0">Nhận hàng và thanh toán tiền tại cửa hàng Laptop AZ:
                                            <br>-CS1: Số 18, ngõ 121, Thái Hà, Đống Đa, Hà Nội
                                            <br>-CS2: Số 56 Trần Phú, Hà Đông, Hà Nội</div>
                                          </td>
                                      </tr>
                                
                                      <tr>
                                        <td valign="top">
                                          <input id="pay_1_input" name="pay_method" value="2" type="radio" onchange="show('pay_1')">
                                        </td>
                                        <td>
                                          <label class="radio-label" for="pay_1_input" style="padding-left:0;" id="label_pay_1">Thanh toán khi nhận hàng (COD)</label>
                                            <div class="boxContent pay-content" id="pay_1" style="display:none;">Trả tiền mặt khi giao hàng
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
                                          <label class="radio-label" for="pay_2_input" style="padding-left:0;" id="label_pay_2">Thanh toán bằng chuyển khoản ngân hàng</label>
                                          
                                          <div class="boxContent pay-content" id="pay_2" style="display:none;">Thực hiện thanh toán vào tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung đơn đặt hàng thành công. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
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
                                          <label class="radio-label" for="pay_3_input" style="padding-left:0;" id="label_pay_3">Thanh toán trả góp</label>
                                          
                                          <div class="boxContent pay-content" id="pay_3" style="display:none;">Hỗ trợ trả góp qua thẻ tín dụng Visa, Master, JCB.
                                            <br>
                                          </div>          
                                        </td>
                                      </tr>
                              </tbody>
                            </table>
                          </div>
                      </div>

                        <div class="product-actions-single">
                            <button type="submit" id="btn-submit" class="action-button green" style="color: #fff;text-transform: uppercase;font-weight: bold;background: #ff8f00;border: solid 1px #d27a0a;padding: 11px 40px;display: block;margin: 10px auto;border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;cursor: pointer;">Gửi đơn hàng</button>
                            <input type="hidden" name="send_order" value="yes">
                        </div>
                    </div>
            </form>
                    <p>&nbsp;</p>
                                  <script src="/template/t2021/script/jquery.js"></script>
                                  <script>
                                        function show(id) {
                                          $(".pay-content").hide();
                                          $("#"+id).show();
                                          $(".radio-label").removeClass("current");
                                          $("#label_"+id).addClass("current");
                                        }

                                      function open_tax_form(check_box_id, tax_form_id){
                                        var chk = document.getElementById(check_box_id).checked;
                                        if(chk){
                                            document.getElementById(tax_form_id).style.display = "block";
                                        }else{
                                            document.getElementById(tax_form_id).style.display = "none";
                                          }
                                        }

                                      function fill_ship_info(){
                                        document.getElementById('ship_to_name').value = document.getElementById('buyer_name').value;
                                        document.getElementById('ship_to_tel').value = document.getElementById('buyer_tel').value;
                                        document.getElementById('ship_to_address').value = document.getElementById('buyer_address').value;
                                      }

                                  </script>
                                  <style>
                                      label:before{content:''; display:none;}
                                  </style>
                                  <script type="text/javascript">

                                      function removeAllPro(){
                                          var r = confirm("Bạn muốn xóa toàn bộ sản phẩm trong giỏ hàng?");
                                          if(r==true){
                                              hura_erase_cookie("shopping_cart_store");
                                              location.href="/cart";
                                          }
                                      }
                                  </script>


                <div class="clear"></div>
          </div><!--content-->
        </div>
      </section>


  </main>