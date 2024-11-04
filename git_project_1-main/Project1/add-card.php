<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="add-card.css">
    <title>Documentt</title>
</head>
<body>
    <header>
        <div class="container">
            <div class="align-items-center justify-content-between d-flex">
                <a class="logo" href="index.php">
                    <img alt="Xcomputer.com chuyên laptop cũ, bán laptop cũ uy tín TP.HCM và toàn quốc" src="img/COMPUTER.png" class="img-fluid">
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
    <div class="content-card">
      <div class="container">
        <div class="row">
          <div class="item" itemprop itemtype="">
            <a href="/" itemprop="url">
              <span itemprop="title">
                Trang chủ
              </span>
            </a>
          </div>
          <div class="item">
            <a href="/" itemprop="url">
                <span itemprop="title">
                  Giỏ hàng
                </span>
              </a>
          </div>
        </div>
      </div>
    </div>
        <div class="container">
            <div class="main">
              <div class="content">
                <form method="post" enctype=""> 
                  <table cellpadding="5" border="1" bordercolor="#cccccc" style=" border-collapse: collapse; width: 100%; background: #fff;" id="tbl_list_card">
                  <tbody>
                        <tr style="background: #f7f7f7;
                         background: -moz-linear-gradient(top, #f7f7f7 0%, #ededed 98%);
                          background: -webkit-linear-gradient(top, #f7f7f7 0%,#ededed 98%);
                           background: linear-gradient(to bottom, #f7f7f7 0%,#ededed 98%);
                            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#ededed',GradientType=0 );
                             font-size:14px;">
                        <td style="hegit: 23px">STT</td>
                        <td style="width: 600">Tên sản phẩm</td>
                        <td>Giá</td>
                        <td>Số lượng</td>
                        <td>Tổng</td>
                        <td>Xóa</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="table-cell">
                      <input type="hidden" id="js_discount_vocher" value="0">
                      <input type="hidden" id="js_total_before_free_discount" value="0">
                      <span id="js_vocher_message"></span>
                    </td>
                    <td colspan="4" style="line: hight 22px; color: #555">
                      <b>
                        "Tổng cộng: "  
                        <span class="total-card-price">0</span>
                        "đ"
                      </b>
                      <br>
                      <b style="color: red; font-size: 16px">
                        "Thanh toán: "
                        <span>0</span>
                        "VND &nbsp;"
                      </b>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div class="clear space_10">

                </div>
                <div class="right">
                  <input type="button" class="btn ">
                </div>
                </form>
              </div>
            </div>
          </div>
</body>
</html>