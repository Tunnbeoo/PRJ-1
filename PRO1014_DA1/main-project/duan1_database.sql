-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2024 lúc 08:03 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `duan1_database`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_banner`
--

CREATE TABLE `tbl_banner` (
  `id` int(3) NOT NULL,
  `name` varchar(255) NOT NULL,
  `idsp` int(11) NOT NULL,
  `images` varchar(255) NOT NULL,
  `noi_dung` varchar(255) NOT NULL,
  `date_create` datetime NOT NULL,
  `date_end` datetime NOT NULL DEFAULT current_timestamp(),
  `info` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_banner`
--

INSERT INTO `tbl_banner` (`id`, `name`, `idsp`, `images`, `noi_dung`, `date_create`, `date_end`, `info`) VALUES
(20, 'Cây hoa tường vi\r\n', 1, 'hoatuongvi2.jpg,\r\nhoatuongvi3.jpg,\r\nhoatuongvi4.jpg,\r\nhoatuongvi5.jpg,\r\nhoatuongvi2.jpg,', 'Cây hoa tường vi có kích thước chưa lên chậu khoảng 80cm - 100cm. Tuy nhiên cây có rất nhiều loại kích thước cũng như màu hoa. Nếu quý khách hàng muốn mua loại kích thước nào có thể nhắn tin trực tiếp để được tư vấn, cũng như gửi hình cây thực tế\r\n', '2023-04-09 03:59:53', '2023-04-30 08:41:43', 'Đặc điểm của cây hoa tường vi\r\n<p>Tên khoa học: Lagerstroemia indica.</p>\r\n<p>Họ: Bằng lăng (Lythraceae).</p>\r\n<p>Nguồn gốc: Cây hoa tường vi có nguồn</p> gốc từ các vùng nhiệt đới và cận nhiệt đới của châu Á, đặc biệt là Trung Quốc và Nhật Bản.\r\n');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_binhluan`
--

CREATE TABLE `tbl_binhluan` (
  `ma_binhluan` int(10) NOT NULL,
  `noi_dung` varchar(255) NOT NULL,
  `ma_sanpham` int(11) NOT NULL,
  `ma_nguoidung` int(11) NOT NULL,
  `duyet` tinyint(4) DEFAULT 0,
  `ngay_binhluan` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_binhluan`
--

INSERT INTO `tbl_binhluan` (`ma_binhluan`, `noi_dung`, `ma_sanpham`, `ma_nguoidung`, `duyet`, `ngay_binhluan`) VALUES
(1, 'Hello World', 3, 46, 0, '2023-04-11 19:04:44'),
(2, 'Ôn áp quá chời', 2, 11, 0, '2023-04-11 21:04:55'),
(3, 'Tuyệt dời, hihi', 2, 11, 0, '2023-04-11 21:04:11'),
(4, 'Oh my god', 2, 11, 0, '2023-04-11 21:04:20'),
(5, '', 59, 11, 0, '2023-04-13 20:04:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_blog`
--

CREATE TABLE `tbl_blog` (
  `blog_id` int(9) NOT NULL,
  `blog_title` text NOT NULL,
  `noi_dung` text NOT NULL,
  `images` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL,
  `blogcate_id` int(3) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `duyet` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_blog`
--

INSERT INTO `tbl_blog` (`blog_id`, `blog_title`, `noi_dung`, `images`, `create_time`, `blogcate_id`, `tags`, `duyet`) VALUES
(1, 'Thông báo Messenger không có âm thanh trên Android, phải xử lý thế nào?', 'Tại sao Messenger không có âm thanh thông báo?\r\n<p>Bị nhỡ thông báo ứng dụng, không nhận được thông báo cuộc gọi, tin nhắn từ Messenger là sự cố mà bất kỳ Messenger-er nào cũng mắc phải. Nguyên nhân gây nên tình huống phiền phức này là bởi:</p>\r\n<ul>\r\n    <li>Đường truyền mạng không ổn định, mạng Wifi yếu, dữ liệu 3G/4G hết. </li>\r\n    <li>Đường truyền mạng không ổn định, mạng Wifi yếu, dữ liệu 3G/4G hết. </li>\r\n    <li>Chế độ thông báo tin nhắn, cuộc gọi trên ứng dụng Messenger bị tắt. </li>\r\n    <li>Điện thoại đang bật chế độ im lặng, chế độ không làm phiền.</li>\r\n    <li>Phiên bản hiện tại của Messenger đã cũ, không còn tương thích với điện thoại.</li>\r\n</ul>\r\n<h1>Cách sửa lỗi thông báo Messenger không có âm thanh trên điện thoại Android</h1>\r\n<h2>Kiểm tra kết nối mạng</h2>\r\n<p>Nếu bạn không nghe thấy chuông báo hoặc thậm chí không nhận được thông báo từ ứng dụng thì vấn đề có thể đến từ kết nối Internet của dế yêu. Bạn nên kiểm tra lại kết nối Wifi hoặc dữ liệu 3G/4G xem đã “cạn kiệt” chưa nhé. Lựa chọn một địa chỉ Wifi khác ít người truy cập hơn, nạp thêm dung lượng 3G/4G sẽ giúp quá trình sử dụng Messenger của bạn trơn tru, mượt mà hơn đấy!</p>\r\n<h2>Bật thông báo ứng dụng Messenger</h2>\r\n<p>Có thể vì một lý do nào đó, bạn đã vô tình tắt thông báo ứng dụng Messenger. Để kiểm tra và bật lại cài đặt thông báo, bạn chỉ cần thực hiện theo 2 bước sau:\r\nBước 1: Truy cập vào ứng dụng Messenger trên điện thoại > Nhấn vào biểu tượng avatar phía trên, bên trái màn hình. \r\nBước 2: Chọn Thông báo & âm thanh > Gạt thanh ngang sang phải để bật thông báo cho ứng dụng. </p>', 'ketnoimang.jpg,thumb-mess.jpg', '2023-03-15 14:13:38', 1, 'Điện Thoại', 1),
(2, 'OPPO Reno8 T 5G có trọng lượng khoảng bao nhiêu?', 'OPPO Reno8 T 5G\r\n<p>Reno8 T 5G trang bị màn hình cong 3D 120Hz đầu tiên trong phân khúc tầm giá của OPPO, cùng mặt lưng cong 3D, mang lại trải nghiệm từ thiết kế, đến khả năng hiển thị khá tốt.</p>\r\n<p>Cải thiện chạm nhầm cảm ứng thường gặp trên màn cong, màn hình Reno8 T 5G có độ cong 56 độ và chiều cao vòng là 1,9mm, cong nhẹ nhàng, cho cảm giác cầm trên tay thoải mái. Màn hình AMOLED 6,7 inch, tỷ lệ hiển thị 93% và viền dưới 2,32 mm mang lại trải nghiệm sống động và đắm chìm.</p>\r\n<p>Với tần số quét màn hình 120Hz và tốc độ lấy mẫu cảm ứng 1000Hz, người dùng có được một màn hình mượt mà. Khả năng hiển thị 1.07 tỷ màu, FHD+. Độ bền cũng được đảm bảo khi màn hình được trang bị kính DT-Star2 chịu lực gấp đôi, trải qua 23 bài kiểm tra độ bền ở tác động khác nhau, cùng 320 bài kiểm tra toàn diện và hơn 110 bài kiểm tra độ bền trong điều kiện khắc nghiệt.</p>\r\n<p>Dải viền camera trên Reno8 T 5G bao gồm mô-đun máy ảnh xếp theo chiều dọc thời thượng. OPPO cung cấp hai tuỳ chọn màu: Vàng và Đen Ánh Sao cả hai đều sử dụng thiết kế OPPO Glow tạo hiệu ứng ánh sáng và tăng khả năng chống vân tay. Kích thước máy mỏng trọng lượng khoảng 171 g và độ dày 7,7 mm.</p>\r\n<p>Reno8 T 5G được trang bị 8GB RAM với hai phiên bản ROM 128GB hoặc 256GB, đồng thời hỗ trợ thẻ nhớ lên đến 1TB. Người dùng có thể bổ sung 8GB RAM mở rộng, đảm bảo trải nghiệm và dung lượng lưu trữ thoải mái. Được hỗ trợ bởi Qualcomm Snapdragon 695 5G, Reno8 T 5G cung cấp khả năng xử lý tốt các nhu cầu sử dụng hàng ngày. Máy được trang bị Loa kép và Chế độ siêu âm lượng mang đến hiệu ứng âm thanh vòm được nâng cao.</p>\r\n<h2>OPPO Reno8 T 4G</h2>\r\n<p>Không kém cạnh, OPPO Reno8 T 4G cũng được trang bị camera chân dung 100 MP, đi kèm với Camera selfie 32MP và Camera macro 2MP với độ phóng đại 40x, cho trải nghiệm chụp ảnh chất lượng. Máy cũng được tích hợp loạt tính AI siêu nét, Chân dung Bokeh Flare, Selfie HDR, Làm đẹp AI và chụp nhanh…\r\nVẫn giữ phong cách thiết kế dòng Reno Series, OPPO giới thiệu hai phiên bản màu trên Reno8 T: Cam với thiết kế da sợi thuỷ tinh, và Đen sử dụng quy trình hoàn thiện Glow cho bề mặt lấp lánh.</p>\r\n<p>Viền đèn trên cụm camera sau cung cấp 5 thiết lập thông báo cá nhân hóa bằng màu sắc. Sở hữu kích thước mỏng nhẹ, phiên bản Đen Ánh Sao mỏng chỉ 7.80mm và nặng 180g, trong khi phiên bản Cam mỏng 7.85mm và nặng 183g. Trải nghiệm sử dụng tổng thể của Reno8 T, được trang bị viên pin 5000mAh đi kèm sạc nhanh SUPERVOOCTM 33W, cho khả năng sạc đầy trong trong 67 phút. Dung lượng với 8GB RAM và 256GB ROM, cùng dung lượng RAM mở rộng 8GB. OPPO đã tích hợp thêm thuật toán tối ưu hiệu năng.</p>\r\n<p>Mang đến trải nghiệm trên Reno8 T là màn hình AMOLED 6,4 inch với 90Hz, kèm loa kép và Chế độ siêu âm lượng giúp tăng âm lượng thêm 40%. Được cài ColorOS 13 mới, Reno8 T Series mang đến trải nghiệm Android mượt mà. Giờ đây, người dùng có thể điều khiển Spotify thông qua màn hình chờ không cần mở khóa điện thoại.</p>\r\n<p>Để năng cao bảo mật chế độ kiểm soát truy cập 5 lớp giúp người dùng kiểm soát chặt chẽ các quyền riêng tư trên Reno8 T 5G. Một trong số các tính năng mới là Pixel hoá tự động, có thể nhận diện tên và ảnh trong ảnh chụp tin nhắn, điện thoại đã được chứng nhận về độ bảo mật bởi các tổ chức ISO, TRUSTe và ePrivacy.</p>\r\n<p>Hy vọng các bạn đã có câu trả lời cho câu hỏi OPPO Reno8 T 5G có trọng lượng khoảng bao nhiêu? Ngoài ra bài viết cũng đã khái quát cho bạn thông tin khá chi tiết của dòng sản phẩm vừa mới được hãng OPPO công bố chính thức này. Hy vọng các bạn sẽ hài lòng với thông tin cung cấp của bài viết.</p>\r\n', 'thumb-blog2.jpg', '2023-03-15 19:47:28', 2, 'Tin Tức, Điện Thoại', 1),
(3, 'Cách chèn chữ vào ảnh trên iPhone cực nhanh, đơn giản, chi tiết', 'Bạn đang tìm kiếm cách viết chữ lên ảnh trên điện thoại iPhone nhưng chưa biết cách thực hiện. Bài viết dưới đây sẽ hướng dẫn cho các bạn cách chèn chữ vào ảnh trên iPhone cực nhanh, đơn giản, chi tiết.\r\n<h1>Cách chèn chữ vào ảnh trên iPhone</h1>\r\n<ul>\r\n<b>Hướng dẫn nhanh</b>\r\n<li>Mở ứng dụng Ảnh trên iPhone.</li>\r\n<li>Chọn ảnh mà bạn muốn viết chữ lên ảnh > Chọn Sửa.</li>\r\n<li>Nhấn vào biểu tượng 3 dấu chấm > Chọn Đánh dấu.</li>\r\n<li>Nhấn vào biểu tượng dấu cộng > Chọn Văn bản.</li>\r\n<li>Nhấn vào chữ Văn bản > Chọn Sửa.</li>\r\n<li>Tiến hành nhập nội dung mà bạn muốn viết chữ lên ảnh.</li>\r\n<li>Chọn Xong ở góc trên bên phải.</li>\r\n</ul>\r\n<p><b>Lưu ý: </b>Những thay đổi mà bạn thực hiện trên ảnh sẽ áp dụng với ảnh gốc mà không tạo ra file ảnh mới.</p>', 'thumb-chenchutreniphone.jpg', '2023-03-16 16:09:15', 3, 'Hướng Dẫn\r\nĐiện Thoại', 1),
(5, 'Sự lạc lõng của iPhone 14 Plus', 'Nhìn vào bản danh sách điện thoại thông minh bán chạy nhất năm 2022 vừa qua, trong khi iPhone 12 ra đời từ năm 2020 còn được xướng tên thì iPhone 14 Plus mới nhất đã không lọt nổi vào top 10.\r\n<h2>Sự lạc lõng của iPhone 14 Plus</h2>\r\n<p>Trên thực tế, bất kỳ điện thoại thông minh nào khác trong tầm giá 900 USD đều có nhiều công nghệ hơn iPhone 14 Plus. Kích thước không phải là vấn đề. Giá cả phải đi đôi với tính năng đáng giá. Và về cơ bản, Apple đang bán một chiếc điện thoại thông minh tầm trung với giá của một chiếc cao cấp.</p>\r\n<p>iPhone 14 Plus là một thiết bị hoàn toàn khác so với iPhone 14 Pro. Nó không có chip A16, không có camera chính 48 megapixel mới hay thậm chí là ống kính macro và không có Dynamic Island, không có màn hình 120Hz hoặc ống kính tele để chụp ảnh hay quay video bằng zoom quang học.</p>\r\n<p>Cuối cùng nhưng không kém phần quan trọng, vẻ ngoài của Plus cũng nhàm chán. Bên cạnh những thay đổi về phần cứng, Apple đã có quyết định đáng chú ý khi thay đổi phần tai thỏ trên iPhone 14 Pro theo dưới hình thái Dynamic Island. Ngược lại, cả iPhone 14 và 14 Plus vẫn chẳng khác gì dòng iPhone 13.</p>\r\n<p>Nếu ai đó muốn mua một chiếc iPhone mới và muốn tiết kiệm một số tiền, người đó có thể sẽ mua iPhone 14 thông thường hoặc thậm chí là iPhone 13. Và những người sẵn sàng trả tiền cho một chiếc điện thoại thông minh cao cấp có thể sẽ chi thêm 100 USD để mua iPhone 14 Pro chứ không lựa chọn iPhone 14 Plus.</p>\r\n<p>Cho dù bạn ghét hay yêu thích các sản phẩm của Apple, thì một sự thật không thể thay đổi là iPhone bán rất chạy. Tuy nhiên, khi buộc phải thanh toán hóa đơn hàng tháng hoặc bỏ ra số tiền tương tự để mua iPhone, bất kỳ ai trên thế giới cũng muốn sở hữu chiếc iPhone mới nhất và tuyệt vời nhất, nhưng với cái giá cũng hợp lý nhất.</p>\r\n<p>Thay thế chiếc mini bằng chiếc Plus và hy vọng chiếc sau sẽ bán chạy hơn, là một tính toán sai lầm của Apple. Lý do rất đơn giản: Chúng rất khác nhau.</p>\r\n<p>Mini nằm ở một thị trường ngách khác biệt so với Plus. Đó là một chiếc điện thoại nhỏ nhắn với hiệu năng cao.</p>\r\n<p>Kích thước của chiếc mini khiến nó trở nên độc nhất vô nhị không chỉ so với những chiếc iPhone khác mà còn trong toàn bộ thị trường điện thoại thông minh nói chung.</p>\r\n<p>Đơn giản là không có điện thoại thông minh nào có thông số kỹ thuật của iPhone 13 mini gói gọn trong hình hài nhỏ bé như vậy.</p>\r\n<p>Điều này khó xảy ra với iPhone 14 Plus. Hầu hết các điện thoại thông minh Android có kích thước bằng hoặc lớn hơn Plus đều có cấu hình vượt trội hơn nhiều. Chưa kể rằng Plus phải đối mặt với sự cạnh tranh từ chính Pro Max.</p>\r\n<p>Tóm lại, bản thân iPhone 14 Plus không phải là một chiếc điện thoại thông minh tồi, nhưng nó thất bại vì giá bán cao, nhu cầu thấp và lạc lõng trước những đối thủ có cái bóng quá lớn.</p>\r\n', 'thumb-blogip14plus.jpg', '2023-03-16 22:21:18', 2, 'Tin Tức \r\nĐiện Thoại', 1),
(6, 'Mẹo tìm iPhone bị mất qua số điện thoại nhanh chóng', 'iPhone đã và đang là dòng điện thoại được người tiêu dùng yêu thích nhất trên thị trường. Nhưng nhiều người mua iPhone đều lo lắng về việc điện thoại quá xịn nên dễ mất. Đừng lo lắng nữa vì nhà Táo đã trang bị rất nhiều cách để giúp bạn tìm lại iPhone. Cùng Blog Chăm Chỉ khám phá mẹo tìm iPhone bị mất qua số điện thoại trong bài viết dưới đây.\r\n<h2>iPhone bị mất làm sao tìm lại?</h2>\r\n<p>Apple đã trang bị rất nhiều phương pháp tìm lại iPhone cho các iFan trong trường hợp này. Nên bạn đừng quá lo lắng nếu chẳng may làm mất iPhone nhé. Sau đây Blog Chăm Chỉ sẽ bật mí một vài mẹo giúp bạn tìm lại dế cưng của mình.</p>\r\n<p>Một trong những tính năng tuyệt vời của nhà Táo đó là Find My iPhone. Đây được coi là một thám tử giúp bạn truy lùng tung tích của iPhone khi bị mất. Tính năng này cho phép bạn tìm địa điểm của iPhone và có thể xóa dữ liệu từ xa.</p>\r\n<h2>Tìm điện thoại iPhone bị mất qua định vị</h2>\r\n<p>Nếu tính năng Find My iPhone không hoạt động, bạn hãy sử dụng tính năng định vị trên iPhone để tìm thiết bị.</p>\r\n<p>Nếu bạn sử dụng tính năng tìm điện thoại iPhone bị mất qua định vị, có 2 cách như sau:</p>\r\n<h2>Định vị bằng iCloud trên điện thoại</h2>\r\n<p>Bước 1: Truy cập vào ứng dụng Tìm > Nhấn chọn Thiết bị đang cần tìm.</p>\r\n<p>Bước 2: Chọn 1 trong các Hình thức tìm kiếm.</p>\r\n<p>Hiện có các hình thức tìm kiếm sau:</p>\r\n<p><b>Phát âm thanh: </b>Tiếng chuông sẽ vang và rung lên trên thiết bị khoảng 1 đến 2 phút. Âm thanh tiếng chuông sẽ lớn dần đều.</p>\r\n<p><b>Chỉ đường: </b>Màn hình sẽ chuyển hướng đến Bản đồ và chỉ cho bạn đến vị trí của iPhone đã mất.</p>\r\n<p><b>Thông báo: </b>Nếu thiết bị bị mất kết nối mạng hoặc tắt nguồn, bạn có thể sử dụng hình thức này. Khi iPhone bị mất xác định được vị trí thì thông báo sẽ được gửi tới cho bạn.</p>\r\n<h2>Định vị bằng iCloud trên máy tính</h2>\r\n<p>Bước 1: Truy cập vào đường dẫn iCloud.com > Đăng nhập iCloud</p>\r\n<p>Bước 2: Nhấn chọn Tìm iPhone.</p>\r\n<p> Bước 3: Tiếp tục chọn Tất Cả Các Thiết bị > Nhấn chọn vào Thiết bị cần tìm.</p>\r\n<p>Sau đó màn hình sẽ xuất hiện vị trí của thiết bị đã mất và các hình thức tìm kiếm sau:</p>\r\n<p><b>Phát Âm: </b>Lúc này điện thoại sẽ có tiếng chuông vang lên (kể cả bạn đang bật chế độ rung).  </p>\r\n<p><b>Chế Độ Mất: </b>Với hình thức này, bạn cần nhập số điện thoại và để lại tin nhắn. Nếu có ai nhặt được iPhone của bạn sẽ thấy được thông tin liên lạc ở trên máy.  Nó sẽ cài đặt khóa màn hình cho bạn nếu thiết bị của bạn chưa được cài.</p>\r\n<p><b>Xóa iPhone: </b>Hình thức này sẽ xóa dữ liệu từ xa khi thiết bị bị mất có kết nối mạng. Nếu muốn bảo mật thông tin quan trọng thì bạn nên chọn hình thức này.</p>\r\n<h2>Tìm điện thoại iPhone bị mất qua số điện thoại</h2>\r\n<p>Nếu bạn không thể tìm lại chiếc iPhone của mình bằng 2 cách trên thì hãy sử dụng cách tìm điện thoại iPhone bị mất qua số điện thoại. Lúc này, bạn cần liên hệ với nhà mạng của mình để tìm lại điện thoại.</p>\r\n<h2>Những lưu ý cần biết khi tìm iPhone bị mất</h2>\r\n<p>Nếu sử dụng tính năng Find My iPhone thì hãy chắc chắn rằng tính năng này đã được kích hoạt ở iPhone bị mất.</p>\r\n<p>Nếu sử dụng tính năng định vị trên iPhone, hãy chắc chắn rằng tính năng này đã được kích hoạt và iCloud đã được cấp quyền truy cập vị trí.</p>\r\n<p>Nếu sử dụng cách tìm iPhone bị mất qua số điện thoại, hãy soạn sẵn những thông tin cần thiết như số điện thoại và IMEI của điện thoại bạn để đọc cho nhà mạng.</p>\r\n<p>Trên đây là tất tần tật những thông tin về mẹo tìm iPhone bị mất qua số điện thoại nhanh chóng. Blog Chăm Chỉ đã cung cấp cho bạn cách tìm điện thoại iphone bị mất qua định vị và tìm điện thoại iphone bị mất qua số điện thoại. Vậy nên nếu ai hỏi bạn iphone bị mất làm sao tìm lại thì hãy chia sẻ bài viết này cho họ ngay nhé. Chúc bạn tìm lại Táo cưng của mình thành công!</p>', 'thumb-blogmeoiphone.jpg', '2023-03-16 22:31:24', 3, 'Hướng Dẫn\r\nĐiện Thoại\r\nIphone', 1),
(8, 'Đánh giá Iphone 14 Pro Max – Gần 1.600 USD có gì?', 'Ra mắt từ hồi đầu tháng 9, cho đến nay, Iphone 14 vẫn chưa ngừng “nóng sốt”. Đặc biệt được mệnh danh là một trong những điện thoại xa xỉ nhất hiện nay, với mức giá cao nhất lên tới gần 1.600 USD thì “ông lớn” Apple đã trang bị cho Iphone 14 Pro Max những gì? Hãy cùng điểm lại những nổi bật của chiếc Iphone 14 Pro Max để xem liệu chúng có xứng đáng với giá tiền này không nhé!\r\n<h2>Đánh giá thiết kế của Iphone 14 Pro Max</h2>\r\n<p>Không hổ danh là chiếc flagship mới nhất, Iphone 14 Pro Max được nhà sản xuất dành cho một thiết kế vô cùng sang trọng và đẳng cấp.</p>\r\n<p>Viền ngoài của máy sử dụng chất liệu thép không gỉ cao cấp, góc cạnh vuông vức nhưng thanh mảnh và mặt lưng bằng kính bảo vệ Ceramic Shield sang trọng. Iphone 14 Pro Max mang lại sự thoải mái khi sử dụng nhờ khả năng chống bụi/nước IP68, ít bị trầy xước và bám vân tay.</p>\r\n<p>Ngoài 3 phiên bản màu cơ bản: trắng bạc, đen, vàng gold thì màu tím Deep Purple thực sự đã tạo nên mới cơn sốt rần rần trong lòng các iFans.</p>\r\n<p>Mách bạn một mẹo nhỏ là thay vì dùng ốp thì chúng ta có thể dán ppf iPhone 14 pro max trong suốt để có thể trải nghiệm chân thân thật nhất của thiết kế trị giá bốn chục củ khoai này. Đặc biệt là đối với chủ nhân của Iphone 14 Pro Max phiên bản màu tím Deep Purple thì đây là 1 cách phù hợp để vừa bảo vệ và vừa “khoe” máy. Lưu ý lựa chọn dán tại các cơ sở uy tín như Cellphones, Azskin,…</p>\r\n<h2>Đánh giá màn hình Iphone 14 Pro Max</h2>\r\n<p>Có thể nói màn hình 6.7 inch của Iphone 14 Pro Max là dòng đứng đầu trên thị trường smartphone hiện nay. </p>\r\n<p>Màn hình có tấm nền độ phân giải OLED Super Retina XDR sắc nét, độ sáng 2.000 nits, tần số quét lên tới 120Hz cho chuyển động mượt mà. Người dùng hoàn toàn có thể bị đắm chìm với các ứng dụng giải trí, xem phim hay gaming chân thực nhất. </p>\r\n<h2>Đánh giá camera Iphone 14 Pro Max</h2>\r\n<p>Người tiêu dùng chính thức bị đổ gục trước mẫu điện thoại mới nhất này của nhà “táo khuyết” trước sự nâng cấp độ phân giải camera từ 12 MP lên 48 MP, mang lại những hình ảnh và thước phim chân thực, sống động hơn gấp 4 lần so với phiên bản trước.</p>\r\n<p>Dù chụp đêm, chụp zoom hay chụp toàn cảnh,… thì hình ảnh cũng không hề bị giảm chất lượng đi chút nào. Tính năng tự động lấy nét của camera trước mang đến những bức ảnh selfie xuất thần.</p>\r\n<h2>Đánh giá hiệu năng của Iphone 14 Pro Max</h2>\r\n<p>Vi xử lý A16 Bionic với con chip LPDDR5X cực mạnh chính là điểm sáng mang lại hiệu năng sử dụng mạnh mẽ cho Iphone 14 Pro Max.</p>\r\n<p>Chip mới có gần 16 tỷ bóng bán dẫn, 6 lõi CPU, 5 lõi GPU, ISP nâng cao mang đến hiệu suất mạnh hơn 40%. Ngoài ra thiết bị còn có khả năng tiết kiệm pin hiệu quả, xử lý hoạt động máy siêu nhanh và phản hồi ngay lập tức mọi tác vụ so với vi xử lý A15 Bionic với con chip LPDDR4X (5nm) trang bị trên iPhone 13 Pro Max.</p>\r\n<p>Do đó nên dù vẫn còn giữ nguyên mức RAM 6 GB ở iphone dòng cũ thì hiệu năng của Iphone 14 Pro Max vẫn được đánh giá cực đỉnh và vượt xa các đối thủ trong ngành.</p>\r\n<h2>Đánh giá dung lượng pin Iphone 14 Pro Max</h2>\r\n<p>Phải nói rằng Iphone 14 Pro Max đã được nâng cấp trang bị bộ pin cực “trâu” với dung lượng 4.323mAh.</p>\r\n<p>Cụ thể, với một bộ pin đầy, bạn có thể cày phim liên tục 29 giờ mà không hề bị gián đoạn phải dừng lại để đi sạc pin. Bên cạnh đó, máy được tích hợp sạc nhanh 20W giúp giảm thời gian sạc đi khá nhiều.</p>\r\n<h2>Dynamic Island – Sự thay đổi bất ngờ và ấn tượng</h2>\r\n<p>Sự xuất hiện của Dynamic Island sau buổi ra mắt thực sự đã khiến người tiêu dùng và đặc biệt là các iFans đang trông ngóng phải mắt chữ O miệng chữ A sau khi đã lỡ tin rằng tai thỏ sẽ trở thành viên thuốc.</p>\r\n<p>Đóng vai trò như một chiếc remote, Dynamic Island mang lại sự tiện dụng khi sử dụng, cung cấp quyền truy cập vào thông tin/ứng dụng bất kể mọi lúc.</p>\r\n<p>Không chỉ thế, người dùng có thể khám phá thêm rất nhiều tính năng thú vị từ “hòn đảo năng động” này nữa đó, tại sao không tự mình trải nghiệm nhỉ?</p>\r\n<p>Với những đánh giá khái quát trên, có thể thấy ông lớn Apple quả thực chưa bao giờ làm các iFan phải thất vọng. IPhone 14 Series công nhận rất đáng để người đầu tư và trải nghiệm.</p>', 'thumb-tintuciphone14.jpg', '2023-03-16 22:43:49', 2, 'Tin Tức\r\nĐiện Thoại \r\nIphone', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_blog_cate`
--

CREATE TABLE `tbl_blog_cate` (
  `id` int(3) NOT NULL,
  `blog_catename` varchar(255) NOT NULL,
  `hinh_anh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_blog_cate`
--

INSERT INTO `tbl_blog_cate` (`id`, `blog_catename`, `hinh_anh`) VALUES
(1, 'Thủ thuật', 'thuthuat.jpg'),
(2, 'Tin tức điện thoại', 'tintucdienthoai.jpg'),
(3, 'Hướng dẫn', 'huong-dan.jpeg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_blog_comment`
--

CREATE TABLE `tbl_blog_comment` (
  `id_bl` int(11) NOT NULL,
  `ma_kh` int(10) NOT NULL,
  `id_blog` int(3) NOT NULL,
  `noi_dungbl` text NOT NULL,
  `ngay_bl` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_blog_comment`
--

INSERT INTO `tbl_blog_comment` (`id_bl`, `ma_kh`, `id_blog`, `noi_dungbl`, `ngay_bl`) VALUES
(10, 35, 8, '123456789', '0000-00-00 00:00:00'),
(12, 35, 8, 'hayy', '0000-00-00 00:00:00'),
(13, 35, 2, 'bài viết rất ý nghĩa', '0000-00-00 00:00:00'),
(14, 35, 2, 'bài viết hay', '0000-00-00 00:00:00'),
(15, 35, 3, 'hay lắm', '0000-00-00 00:00:00'),
(26, 36, 8, 'hay lắm\r\n', '0000-00-00 00:00:00'),
(35, 35, 1, 'hay', '2023-04-07 19:04:26'),
(36, 11, 6, 'Goood To See', '2023-04-12 08:04:21'),
(37, 52, 5, 'hi', '2024-10-22 22:10:13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_coupon`
--

CREATE TABLE `tbl_coupon` (
  `id_coupon` int(3) NOT NULL,
  `coupon_code` varchar(25) NOT NULL,
  `discount_percent` double(5,2) NOT NULL,
  `min_value` double(10,2) NOT NULL DEFAULT 5000000.00,
  `maximum_use` int(3) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_coupon`
--

INSERT INTO `tbl_coupon` (`id_coupon`, `coupon_code`, `discount_percent`, `min_value`, `maximum_use`, `date_start`, `date_end`) VALUES
(2, 'THEPHONER304_15', 19.00, 5000000.00, 99, '2023-03-30 09:35:31', '2023-05-01 14:35:31'),
(3, 'SALEOF_10', 10.00, 4000000.00, 10, '2023-03-30 11:15:03', '2023-04-30 16:15:04'),
(4, 'SALEOFF_15', 15.00, 5000000.00, 99, '2023-03-30 11:44:06', '2023-04-04 16:44:06'),
(5, 'SALEOFF_20', 20.00, 8000000.00, 8, '2023-03-31 04:36:43', '2023-04-19 09:36:43'),
(11, 'SALEOFF_25', 11.00, 50000000.00, 122, '2023-03-31 21:06:00', '2023-04-09 20:09:00'),
(15, 'sale2024', 10.00, 1000000.00, 9, '2024-10-22 20:11:00', '2024-10-31 20:11:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_danhgiasp`
--

CREATE TABLE `tbl_danhgiasp` (
  `id_review` int(9) NOT NULL,
  `iduser` int(10) NOT NULL,
  `idsanpham` int(11) NOT NULL,
  `images_review` text NOT NULL,
  `noidung` text NOT NULL,
  `rating_star` float(2,1) NOT NULL,
  `date_create` datetime NOT NULL,
  `iddonhang` int(4) NOT NULL,
  `trangthai_review` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 - chưa bình luận, 1 - Đã bình luận'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_danhgiasp`
--

INSERT INTO `tbl_danhgiasp` (`id_review`, `iduser`, `idsanpham`, `images_review`, `noidung`, `rating_star`, `date_create`, `iddonhang`, `trangthai_review`) VALUES
(1, 11, 3, '', 'Sản phẩm đẹp chất lượng tốt', 4.0, '2023-03-28 15:42:50', 63, 1),
(2, 11, 3, '', 'Điện thoại nhìn rất ngầu không uổng công đã đặt hàng và chờ đợi, cảm ơn shop, love you nhiều nhiều ạ.', 5.0, '2023-03-28 15:49:06', 62, 1),
(3, 11, 54, '', 'Chất lượng sản phẩm cao lắm', 5.0, '2023-03-29 10:42:32', 62, 1),
(4, 11, 52, '', 'Chất lượng đến từ nhà Iphone là không thể bàn cãi', 5.0, '2023-03-29 10:47:39', 61, 1),
(5, 11, 54, '', 'Đẹp không thể tưởng tượng được, Mình đã mua lần 2 cho bạn bè sài thử và không thể tin là nó rất ổn nhé. \nMua ủng hộ sho nhé mọi người <3', 5.0, '2023-03-29 11:04:50', 61, 1),
(6, 11, 2, '', 'Oppo Chính hàng quá đã', 5.0, '2023-03-29 11:15:10', 59, 1),
(7, 11, 12, '', 'Oppo Find X3 đúng là tuyệt', 4.0, '2023-03-29 13:04:48', 59, 1),
(8, 11, 73, '', 'Samsung Galaxy A73 (5G) thật là đẹp và đặc trưng cho user', 4.0, '2023-03-29 14:04:52', 59, 1),
(9, 11, 52, '', 'I Phone Đẹp không thể tưởng tượng', 5.0, '2023-03-29 14:09:02', 44, 1),
(10, 11, 53, '', 'I phone 12 pro sài quá phê ^^^', 4.0, '2023-03-29 14:15:05', 44, 1),
(11, 11, 2, '', 'Woww Điện thoại này phải mua nhé mọi người', 4.0, '2023-03-29 14:36:33', 38, 1),
(12, 11, 2, '', 'A16k Oppo này không thể chê một lời nào luôn !!!!\nSố một', 4.0, '2023-03-29 19:22:34', 39, 1),
(13, 11, 5, '', 'A16k Oppo này không thể chê một lời nào luôn !!!!\nSố một', 4.0, '2023-03-29 19:22:34', 38, 1),
(14, 11, 2, 'huong-dan.jpeg,tintucdienthoai.jpg,thuthuat.jpg', 'Điện thoại đẹp giá tốt', 5.0, '2023-04-01 16:02:53', 75, 1),
(15, 11, 3, '', 'Quá đẹp không thể tưởng tượng được luôn', 4.0, '2023-04-01 16:22:27', 73, 1),
(16, 11, 1, '', 'Ok Tốt', 5.0, '2023-04-13 16:09:48', 37, 1),
(17, 11, 17, '', 'Good', 5.0, '2023-04-13 16:32:43', 48, 1),
(18, 51, 53, '', 'Chuẩn không tì vết', 5.0, '2023-04-13 19:59:35', 103, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_danhmuc`
--

CREATE TABLE `tbl_danhmuc` (
  `ma_danhmuc` int(11) NOT NULL,
  `ten_danhmuc` varchar(50) NOT NULL,
  `hinh_anh` varchar(255) NOT NULL,
  `mo_ta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_danhmuc`
--

INSERT INTO `tbl_danhmuc` (`ma_danhmuc`, `ten_danhmuc`, `hinh_anh`, `mo_ta`) VALUES
(1, 'Cây Cảnh Phong Thủy', 'caycanhsenda.jpg', 'Danh mục Cây Cảnh Phong Thủy'),
(2, 'Cây Cảnh Trong Nhà', 'caytrucnhatvang2.jpg', 'Danh mục Cây Cảnh Trong Nhà\r\n'),
(3, 'Cây Cảnh Để Bàn', 'huyetdu1.jpg', 'Danh mục Cây Cảnh Để Bàn\r\n'),
(4, 'Cây Cảnh Văn Phòng', 'caymonstera4.jpg', 'Danh mục Cây Cảnh Văn Phòng'),
(5, 'Cây Cảnh Loại To', 'hoatuongvi5.jpg', 'Danh mục Cây Cảnh Loại To'),
(6, 'Cây Cảnh Sen Đá', 'senda5.jpg', 'Danh mục Cây Cảnh Sen Đá');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_danhmucphu`
--

CREATE TABLE `tbl_danhmucphu` (
  `id` int(3) NOT NULL,
  `iddm` int(9) NOT NULL,
  `ten_danhmucphu` varchar(255) NOT NULL,
  `mo_ta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_danhmucphu`
--

INSERT INTO `tbl_danhmucphu` (`id`, `iddm`, `ten_danhmucphu`, `mo_ta`) VALUES
(1, 1, 'Cây Cảnh Phong Thủy', ''),
(2, 2, 'Cây Cảnh Trong Nhà', ''),
(3, 3, 'Cây Cảnh Để Bàn', ''),
(4, 4, 'Cây Cảnh Văn Phòng', ''),
(5, 5, 'Cây Cảnh loại To', ''),
(6, 6, 'Cây Cảnh Sen Đá', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_feedback`
--

CREATE TABLE `tbl_feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `content` varchar(250) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_feedback`
--

INSERT INTO `tbl_feedback` (`id`, `name`, `email`, `phone`, `title`, `content`, `date_create`) VALUES
(1, 'Trần Nhật Sang', 'nhatsang0101@gmail.com', '0937988510', 'KHOng', 'KHông có gì', '2023-04-13 20:40:00'),
(2, 'Lê Văn Luyện', 'sangtnps20227@fpt.edu.vn', '0909129236', 'Gớm máu', 'Có tiền không ?', '2023-04-13 21:16:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_nguoidung`
--

CREATE TABLE `tbl_nguoidung` (
  `id` int(10) NOT NULL,
  `mat_khau` varchar(50) NOT NULL,
  `ho_ten` varchar(50) NOT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `shipping_id` int(9) NOT NULL,
  `sodienthoai` varchar(11) NOT NULL,
  `kich_hoat` tinyint(1) NOT NULL DEFAULT 1,
  `hinh_anh` varchar(255) DEFAULT 'avatar-user-default.jpg',
  `email` varchar(50) NOT NULL,
  `vai_tro` tinyint(1) NOT NULL DEFAULT 3,
  `congty` varchar(50) DEFAULT NULL,
  `default_payment` varchar(15) DEFAULT 'codpayment',
  `about_me` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_nguoidung`
--

INSERT INTO `tbl_nguoidung` (`id`, `mat_khau`, `ho_ten`, `diachi`, `shipping_id`, `sodienthoai`, `kich_hoat`, `hinh_anh`, `email`, `vai_tro`, `congty`, `default_payment`, `about_me`) VALUES
(11, 'a66abb5684c45962d887564f08346e8d', 'Quản trị viên', '19/7c kp Đông Tác', 1, '0937988510', 1, 'avatar_it.png', 'admin@gmail.com', 1, 'FPT polytechnic', 'vnpaypayment', 'Nothing IMpossible'),
(18, '5c4de0f09520cb4ed088a35ff5746320', 'Nguyen Khoa Dev', '19/7c', 2, '0937988510', 1, 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', 'nhatsang0103@gmail.com', 1, NULL, 'codpayment', NULL),
(31, '1f32aa4c9a1d2ea010adcf2348166a04', 'Minh Đan', 'Quan 3, TPHCM', 7, '0988542654', 1, 'minhdan-img.png', 'dan11102003net@gmail.com', 3, NULL, 'codpayment', NULL),
(34, '1f32aa4c9a1d2ea010adcf2348166a04', 'hoang trung', 'Quan 2, TPHCM', 10, '0256877241', 1, 'hoang-trung-avatar.jpg', 'hoangtrung@gmail.com', 3, NULL, 'codpayment', NULL),
(35, '1f32aa4c9a1d2ea010adcf2348166a04', 'Lam Phoi', 'Quan 1, TPHCM', 11, '0989756244', 1, 'lam-phoi-avatar.jpg', 'lamphoi02@gmail.com', 3, NULL, 'codpayment', NULL),
(36, 'e655834059c57c038e12961e16fca2b3', 'Duyên', 'fsdfsdfsdfsd', 12, '0932432432', 1, 'christopher-campbell-rDEOVtE7vOs-unsplash.jpg', 'phoi1@gmail.com', 2, NULL, 'codpayment', NULL),
(37, '2e99bf4e42962410038bc6fa4ce40d97', 'Nguyễn Thị Nam', 'PMQT', 13, '0385766431', 1, 'nguyen-thi-nam-avatar.jpg', 'nguyennam@gmail.com', 3, NULL, 'codpayment', NULL),
(38, 'f4cc399f0effd13c888e310ea2cf5399', 'Sang Tran Dev', 'Yen Bai', 0, '0937988512', 1, 'paul-schaferh.jpg', 'nhatsang0103@gmail.com', 3, 'FPT polytechnic', 'codpayment', 'No thing special'),
(44, 'aec4c5d18273e7508640d9154f53e962', 'Nguyễn Minh Đan', 'fdsfksdjflkds', 0, '0937988510', 1, 'minhdan-img.png', 'dannnmps25450@fpt.edu.vn', 2, NULL, 'codpayment', NULL),
(45, 'edbbd29c9296c096c2c0a72e44bb2035', 'Nguyễn Văn Tèo', 'Bình Định', 0, '0909123456', 0, 'angelika-agibalova-HmFUXQaScPY-unsplash.jpg', 'intelsport22@gmail.com', 3, NULL, 'codpayment', NULL),
(46, 'edbbd29c9296c096c2c0a72e44bb2035', 'SangDev4', 'dfsdfds', 0, '0937988510', 1, 'Anh Bong Da SVD.jpg', 'sangtnps20227@fpt.edu.vn', 3, 'FPT POLY', 'codpayment', NULL),
(47, 'a59faf11f443d5cbee1c1119c463e543', 'David Tran', 'Quan 5, TPHCM', 0, '0754224111', 1, 'david-vo.jpg', 'admin@trannhatsang.com', 3, NULL, 'codpayment', NULL),
(48, 'edbbd29c9296c096c2c0a72e44bb2035', 'Hà Thị Loan', NULL, 0, '', 1, 'avatar-user-default.jpg', 'rosisport910@gmail.com', 3, NULL, 'codpayment', NULL),
(49, '5c4de0f09520cb4ed088a35ff5746320', 'Lê văn tám', 'HCM', 0, '0909129344', 1, 'angelika-agibalova-HmFUXQaScPY-unsplash.jpg', 'vantam@gmail.com', 2, NULL, 'codpayment', NULL),
(50, '32eeb4caa88b14fe821d790cb9556842', 'trungnguyen212900@gmail.com', NULL, 0, '', 1, 'avatar-user-default.jpg', 'trungnguyen212900@gmail.com', 3, NULL, 'codpayment', NULL),
(51, 'edbbd29c9296c096c2c0a72e44bb2035', 'lienhe@trannhatsang.com', NULL, 0, '', 1, 'avatar-user-default.jpg', 'khachhang@gmail.com', 3, NULL, 'codpayment', NULL),
(52, 'a66abb5684c45962d887564f08346e8d', 'Nguyen A ', 'Hà Nội', 0, '0909999999', 0, '1', 'customer@gmail.com', 3, 'avatar_it.png', 'momopayment', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` int(4) NOT NULL,
  `madonhang` varchar(30) NOT NULL,
  `tongdonhang` double(10,0) NOT NULL,
  `shipping_fee` double(10,2) NOT NULL DEFAULT 0.00,
  `vat_fee` double(10,2) NOT NULL DEFAULT 0.00,
  `pttt` varchar(100) NOT NULL,
  `iduser` int(4) NOT NULL,
  `name` varchar(30) NOT NULL,
  `dienThoai` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `address` varchar(255) NOT NULL,
  `ghichu` text DEFAULT NULL,
  `timeorder` datetime NOT NULL,
  `trangthai` int(2) DEFAULT 1,
  `thanhtoan` tinyint(1) NOT NULL,
  `coupon_code` varchar(255) NOT NULL,
  `reason_destroy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_order`
--

INSERT INTO `tbl_order` (`id`, `madonhang`, `tongdonhang`, `shipping_fee`, `vat_fee`, `pttt`, `iduser`, `name`, `dienThoai`, `email`, `address`, `ghichu`, `timeorder`, `trangthai`, `thanhtoan`, `coupon_code`, `reason_destroy`) VALUES
(34, 'THEPHONERSTORE4016544', 109747000, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'nhatsang', '', '2023-03-01 10:49:06', 6, 0, '', NULL),
(35, 'THEPHONERSTORE4178322', 76750000, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'nhatsang', 'Hihi', '2023-02-17 10:48:58', 4, 1, '', NULL),
(37, 'THEPHONERSTORE5665740', 73143350, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c', 'Khong co gi', '2023-02-10 00:00:00', 4, 0, '', NULL),
(38, 'THEPHONERSTORE635432', 63469270, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Sang', '+1 (426) 2', 'qaso@mailinator.com', 'In reiciendis placea', 'Quis anim ut ipsum q', '2023-02-02 10:46:53', 4, 1, '', NULL),
(39, 'THEPHONERSTORE8042153', 28888100, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Nhật Sang', '+1 (958) 7', 'mugyfinisy@mailinator.com', 'Debitis pariatur Vo', 'In distinctio Tempo', '2023-03-18 00:00:00', 4, 1, '', NULL),
(40, 'THEPHONERSTORE3410929', 21582000, 0.00, 0.00, 'Thanh toán khi nhận hàng', 35, 'lamphoi', '0565001856', 'lamphoi02@gmail.com', '1a196 đường Trần Phú Nối Dài Xuân Thanh Long Khánh Đồng Nai', 'ship nhanh cho mình nha shop', '2023-03-09 10:45:39', 4, 1, '', NULL),
(41, 'THEPHONERSTORE552813', 20898100, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'nhatsang', 'goi can than', '2023-01-12 00:00:00', 3, 1, '', NULL),
(42, 'THEPHONERSTORE4708439', 26590500, 0.00, 0.00, 'Thanh toán khi nhận hàng', 37, 'Nguyễn Thị Nam', '0866732171', 'nguyennam@gmail.com', 'Công viên phàn mềm quang trung', '', '2023-01-17 00:00:01', 4, 1, '', NULL),
(43, 'THEPHONERSTORE4344696', 50321500, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Sang Trần', '+1 (433) 7', 'lide@mailinator.com', 'Mollit nulla amet l', 'Exercitation enim cu', '2023-03-13 00:00:00', 4, 1, '', NULL),
(44, 'THEPHONERSTORE7595310', 32281000, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'NSang', '+1 (675) 9', 'welepix@mailinator.com', 'Ratione corporis non', 'Quibusdam vel eos s', '2023-03-14 10:44:07', 4, 1, '', NULL),
(45, 'THEPHONERSTORE4629778', 18439050, 0.00, 0.00, '', 11, 'TNSang', '', 'vikuxil@mailinator.com', 'In culpa qui labori', 'Facere repellendus ', '2023-02-01 00:00:00', 1, 1, '', NULL),
(46, 'THEPHONERSTORE9329905', 44212000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'SangTN', '+1 (249) 3', 'cupojumyf@mailinator.com', 'Tenetur mollitia err', 'Asperiores inventore', '2023-01-09 20:58:12', 3, 1, '', NULL),
(47, 'THEPHONERSTORE628078', 12753000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'SangFPT', '+1 (842) 6', 'muqikuceh@mailinator.com', 'Nulla ut eius non ve', 'Okie VNpay', '2023-01-23 00:00:00', 6, 1, '', NULL),
(48, 'THEPHONERSTORE7562348', 12753000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'SangSang', '+1 (671) 7', 'fiha@mailinator.com', 'Provident cupiditat', 'Vel est aut itaque d', '2023-02-11 00:00:00', 4, 1, '', NULL),
(50, 'THEPHONERSTORE4728114', 18342000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'SangDev', '+1 (846) 7', 'buna@mailinator.com', 'Laborum Nostrud min', 'Ex consequatur Temp', '2023-02-13 21:03:17', 3, 1, '', NULL),
(51, 'THEPHONERSTORE2523927', 32031050, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Sang123', '+1 (828) 6', 'wonikata@mailinator.com', 'Porro reiciendis bea', 'Deserunt voluptate q', '2023-02-01 00:00:00', 2, 1, '', NULL),
(52, 'THEPHONERSTORE738238', 18781000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'BC Sang', '+1 (774) 7', 'mycuvuj@mailinator.com', 'Aut voluptate et et ', 'Mollitia placeat in', '2023-01-02 00:00:00', 1, 1, '', NULL),
(54, 'THEPHONERSTORE7735804', 8811000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Tran nhat sang', '+1 (211) 6', 'xolyzyqed@mailinator.com', 'Molestiae minus volu', 'Sunt dolor quam qua', '2023-01-05 00:00:00', 1, 1, '', NULL),
(55, 'THEPHONERSTORE7413038', 10440500, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Sang', '+1 (385) 6', 'lusocerak@mailinator.com', 'Ut reprehenderit re', 'Ipsum quisquam mole', '2023-01-06 00:00:00', 2, 1, '', NULL),
(56, 'THEPHONERSTORE4161485', 5510800, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Sang block', '+1 (948) 7', 'docylek@mailinator.com', 'Ullamco provident a', 'Fugiat nisi culpa ', '2023-01-07 00:00:00', 6, 1, '', NULL),
(58, 'THEPHONERSTORE5742023', 9810500, 0.00, 0.00, 'Thanh toán VNpay', 11, 'SangChain', '+1 (299) 9', 'hutefucex@mailinator.com', 'Fuga In praesentium', 'Est doloribus lauda', '2023-03-25 08:03:14', 1, 1, '', NULL),
(59, 'THEPHONERSTORE7862485', 44452000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'Di An, Binh Duong 23', 'Thanh toán tối ưu', '2023-03-25 08:23:37', 4, 1, '', NULL),
(60, 'THEPHONERSTORE658476', 71175550, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'Di An, Binh Duong 23', 'Cẩn thận nhé', '2023-03-26 11:37:42', 6, 1, '', NULL),
(61, 'THEPHONERSTORE8568716', 28481000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'Di An, Binh Duong 23', 'Đặt hàng oke', '2023-03-26 01:54:22', 4, 1, '', NULL),
(62, 'THEPHONERSTORE9805268', 27151000, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'Di An, Binh Duong 23', 'Cam on', '2023-03-27 01:10:21', 4, 1, '', NULL),
(63, 'THEPHONERSTORE2626293', 33421000, 0.00, 0.00, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', 'Di An, Binh Duong 23', '123', '2023-03-27 02:04:39', 4, 1, '', NULL),
(64, 'THEPHONERSTORE9484947', 18552145, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'Cẩn thận nhé', '2023-03-28 13:54:02', 1, 0, '', NULL),
(66, 'THEPHONERSTORE5043682', 28688305, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', '', '2023-03-28 14:35:14', 2, 0, '', NULL),
(67, 'THEPHONERSTORE4639571', 50425058, 0.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', '', '2023-03-28 14:49:38', 1, 0, '', NULL),
(68, 'THEPHONERSTORE6646341', 6342350, 52350.00, 0.00, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'Hihi', '2023-03-28 15:00:48', 2, 1, '', NULL),
(70, 'THEPHONERSTORE3967719', 26181553, 151053.00, 0.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', '', '2023-03-28 15:02:41', 4, 1, '', NULL),
(71, 'THEPHONERSTORE106605', 56809430, 303430.00, 0.00, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'Hàng dễ vỡ giao hàng cẩn thận', '2023-03-28 15:17:00', 6, 1, '', 'KHong thichs'),
(74, 'THEPHONERSTORE9511207', 8599901, 59692.00, 781809.20, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'Check out!!!!', '2023-03-28 15:42:24', 4, 1, '', NULL),
(76, 'THEPHONERSTORE6865290', 22389293, 144403.00, 2484490.30, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c kp Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', '', '2023-03-30 16:12:35', 5, 0, 'THEPHONER304_15', NULL),
(77, 'THEPHONERSTORE7086402', 8711515, 64105.00, 870510.50, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c kp Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'hàng dễ vỡ giao hàng cẩn thận', '2023-03-30 16:36:18', 4, 1, 'SALEOF_10', NULL),
(81, 'THEPHONERSTORE178214', 53169748, 287835.00, 5367483.50, 'Thanh toán VNpay', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c kp Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'Good', '2023-04-01 15:19:07', 5, 1, 'SALEOFF_25', NULL),
(86, 'THEPHONERSTORE9433925', 24435591, 197965.00, 2681096.50, 'Thanh toán VNpay', 46, 'Trần Nhật Sang\nPS20227', '0937988510', 'sangtnps20227@fpt.edu.vn', 'dfsdfsd, , Quận Huyện, Tỉnh - Thành', 'dsfsdfdsfds', '2023-04-06 13:57:10', 6, 1, 'THEPHONER304_15', NULL),
(89, 'THEPHONERSTORE3026054', 32962226, 213660.00, 2996566.00, 'Thanh toán khi nhận hàng', 46, 'SangDev4', '0937988510', 'sangtnps20227@fpt.edu.vn', 'Đông Tân, Xã Hòa Minh, Huyện Tuy Phong, Bình Thuận', 'adfsdfsdf', '2023-04-09 10:23:02', 5, 0, '', NULL),
(90, 'THEPHONERSTORE4082235', 23155335, 169305.00, 2105030.50, 'Thanh toán VNpay', 46, 'SangDev4', '0937988510', 'sangtnps20227@fpt.edu.vn', 'fsdfsd, Xã Muội Nọi, Huyện Thuận Châu, Sơn La', 'fdsfsdfsd', '2023-04-09 10:23:55', 5, 1, '', NULL),
(91, 'THEPHONERSTORE1392870', 14133019, 128499.00, 1284819.90, 'Thanh toán khi nhận hàng', 45, 'Nguyễn Văn Tèo', '0909123456', 'intelsport22@gmail.com', 'dfsdfdsf, Xã Chiềng Sại, Huyện Bắc Yên, Sơn La', 'dsfasdfdsfds', '2023-04-09 10:27:49', 4, 0, '', NULL),
(92, 'THEPHONERSTORE638549', 13188701, 124228.00, 1198972.80, 'Thanh toán khi nhận hàng', 45, 'Nguyễn Văn Tèo', '0909123456', 'intelsport22@gmail.com', 'dsfsdfs, Xã Chiềng Đông, Huyện Tuần Giáo, Điện Biên', 'dfsdfds', '2023-04-09 10:28:47', 4, 1, '', NULL),
(93, 'THEPHONERSTORE242113', 671116765, 3056150.00, 61010615.00, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'dsadsadas', '2023-04-09 14:31:43', 1, 0, '', NULL),
(94, 'THEPHONERSTORE7811798', 122205282, 573511.00, 11109571.10, 'Thanh toán khi nhận hàng', 11, 'Trần Nhật Sang', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'fdsfdsfdsfds', '2023-04-09 15:02:03', 6, 0, '', NULL),
(95, 'THEPHONERSTORE1283327', 12339365, 76605.00, 1121760.50, 'Thanh toán khi nhận hàng', 11, 'Nguyễn Văn A', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'fdsfsdf', '2023-04-09 15:18:03', 5, 0, '', NULL),
(96, 'THEPHONERSTORE8491890', 11564963, 73103.00, 1051360.30, 'Thanh toán VNpay', 11, 'Nguyễn Văn A', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'fdsfsdfsdf', '2023-04-10 14:45:56', 3, 1, '', NULL),
(97, 'THEPHONERSTORE110726', 33832496, 173815.00, 3075681.50, 'Thanh toán VNpay', 11, 'Nguyễn Văn A', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'HIhi', '2023-04-11 08:23:24', 5, 1, '', NULL),
(98, 'THEPHONERSTORE3149585', 52967044, 260358.00, 4815185.80, 'Thanh toán khi nhận hàng', 11, 'Nguyễn Văn A', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'Cẩn thận nhé', '2023-04-11 08:28:48', 6, 0, '', NULL),
(99, 'THEPHONERSTORE5326908', 150804899, 702863.00, 13709536.30, 'Thanh toán VNpay', 11, 'Nguyễn Văn A', '0909999999', 'ABC@gmail.com', '19/7c Đông Tác, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương', 'HIhi', '2023-04-12 09:20:07', 6, 1, '', 'Thêm sản phẩm'),
(100, 'THEPHONERSTORE5197336', 18542758, 126553.00, 1685705.30, 'Thanh toán khi nhận hàng', 11, 'Nguyễn Văn A', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Xã Vinh Quang, Huyện Tiên Lãng, Hải Phòng', 'fsdfsdf', '2023-04-12 11:31:44', 6, 0, '', 'Chưa đủ tiền'),
(101, 'THEPHONERSTORE621193', 31532935, 185305.00, 2866630.50, 'Thanh toán khi nhận hàng', 11, 'Nguyễn Văn A', '0937988510', 'nhatsang0101@gmail.com', '19/7c Đông Tác, Xã Vinh Quang, Huyện Tiên Lãng, Hải Phòng', 'fsdfdsfds', '2023-04-12 11:32:26', 6, 0, '', 'Đổi sản phẩm'),
(102, 'THEPHONERSTORE4111999', 24888135, 188305.00, 2486930.50, 'Thanh toán khi nhận hàng', 51, 'Trần Khoa', '0909129034', 'lienhe@trannhatsang.com', 'Phường Tân Hiệp, Xã Sơn Hải, Huyện Bảo Thắng, Lào Cai', 'HIHI', '2023-04-13 19:49:58', 6, 0, 'SALEOF_10 ', 'KHông thích thế thôi'),
(103, 'THEPHONERSTORE1027136', 27356235, 188305.00, 2486930.50, 'Thanh toán khi nhận hàng', 51, 'Trần Khoa', '0909123452', 'lienhe@trannhatsang.com', 'Phường Tân Hiệp, Xã Sơn Hải, Huyện Bảo Thắng, Lào Cai', 'Bán hàng giá rẻ thôi', '2023-04-13 19:51:32', 4, 1, '', NULL),
(104, 'THEPHONERSTORE6939651', 20690984, 178758.00, 2295025.80, 'Thanh toán VNpay', 51, 'Trần Khoa', '0123456789', 'lienhe@trannhatsang.com', 'Phường Tân Hiệp, Xã Sơn Hải, Huyện Bảo Thắng, Lào Cai', 'ahihi', '2023-04-13 19:55:12', 6, 1, 'SALEOFF_20 ', 'Mắc quá'),
(105, 'THEPHONERSTORE3306427', 7990000, 0.00, 0.00, 'Thanh toán khi nhận hàng', 52, 'Trần Khoa', '0123456789', 'customer@gmail.comv', 'xx, Thị trấn Trần Văn Thời, Huyện Trần Văn Thời, Cà Mau', 'xxx', '2024-10-22 20:03:38', 2, 0, '', NULL),
(106, 'THEPHONERSTORE6802051', 7811280, 0.00, 0.00, 'Thanh toán khi nhận hàng', 52, 'Khoa Nguyen', '0909999999', 'customer@gmail.com', 'Hẻm 51 0909999999, Phường Hưng Phú, Quận Cái Răng, Cần Thơ', 'Liên hệ giao hàng 0909999999', '2024-10-22 22:23:19', 2, 0, 'sale2024', NULL),
(107, 'THEPHONERSTORE1095033', 10449050, 0.00, 0.00, 'Thanh toán khi nhận hàng', 52, 'Nguyen A ', '0909999999', 'customer@gmail.com', 'Hẻm 51, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ', 'đóng gói', '2024-11-28 23:17:05', 1, 0, '', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_order_detail`
--

CREATE TABLE `tbl_order_detail` (
  `id` int(4) NOT NULL,
  `idsanpham` int(4) NOT NULL,
  `iddonhang` int(4) NOT NULL,
  `soluong` int(11) NOT NULL DEFAULT 1,
  `dongia` double(10,0) NOT NULL DEFAULT 0,
  `tensp` varchar(100) DEFAULT NULL,
  `hinhanh` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_order_detail`
--

INSERT INTO `tbl_order_detail` (`id`, `idsanpham`, `iddonhang`, `soluong`, `dongia`, `tensp`, `hinhanh`) VALUES
(4, 1, 31, 3, 10999000, 'Điện thoại OPPO Reno8 T 5G 256GB', 'thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(5, 2, 31, 3, 17590000, 'Điện thoại OPPO Reno8 Z 5G', 'thumb-photo_2022-08-05_09-40-15.jpg'),
(6, 4, 31, 2, 11990000, 'Điện thoại OPPO Reno7 Pro 5G', 'thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(7, 1, 32, 3, 10999000, 'Điện thoại OPPO Reno8 T 5G 256GB', 'thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(8, 2, 32, 3, 17590000, 'Điện thoại OPPO Reno8 Z 5G', 'thumb-photo_2022-08-05_09-40-15.jpg'),
(9, 4, 32, 2, 11990000, 'Điện thoại OPPO Reno7 Pro 5G', 'thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(13, 1, 34, 3, 10999000, 'Điện thoại OPPO Reno8 T 5G 256GB', 'thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(14, 2, 34, 3, 17590000, 'Điện thoại OPPO Reno8 Z 5G', 'thumb-photo_2022-08-05_09-40-15.jpg'),
(15, 4, 34, 2, 11990000, 'Điện thoại OPPO Reno7 Pro 5G', 'thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(16, 2, 35, 3, 17590000, 'Điện thoại OPPO Reno8 Z 5G', 'thumb-photo_2022-08-05_09-40-15.jpg'),
(17, 4, 35, 2, 11990000, 'Điện thoại OPPO Reno7 Pro 5G', 'thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(18, 1, 36, 3, 10999000, 'Điện thoại OPPO Reno8 T 5G 256GB', 'thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(19, 2, 36, 3, 17590000, 'Điện thoại OPPO Reno8 Z 5G', 'thumb-photo_2022-08-05_09-40-15.jpg'),
(20, 4, 36, 2, 11990000, 'Điện thoại OPPO Reno7 Pro 5G', 'thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(21, 2, 36, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(22, 1, 37, 7, 10449050, 'Điện thoại OPPO Reno8 T 5G 256GB', '../uploads/thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(23, 1, 38, 1, 10449050, 'Điện thoại OPPO Reno8 T 5G 256GB', '../uploads/thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(24, 2, 38, 5, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(25, 4, 38, 1, 10791000, 'Điện thoại OPPO Reno7 Pro 5G', '../uploads/thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(26, 97, 38, 1, 20, 'Samsung Galaxy Z Fold3 5G 256GB ', '../uploads/thumb-anhchinh16.jpg'),
(27, 5, 38, 1, 2279200, 'Điện thoại OPPO A16K', '../uploads/thumb-oppo a 16k.jpg'),
(29, 2, 39, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(30, 4, 40, 2, 10791000, 'Điện thoại OPPO Reno7 Pro 5G', '../uploads/thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(31, 1, 41, 2, 10449050, 'Điện thoại OPPO Reno8 T 5G 256GB', '../uploads/thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(32, 44, 42, 1, 26590500, 'iPhone 14 Pro Max ', '../uploads/thumb-iphone14prm-1.jpg'),
(33, 53, 43, 1, 14240500, 'iPhone 12 Pro ', '../uploads/thumb-iphone12pro-1.jpg'),
(34, 52, 43, 2, 18040500, 'iPhone 12 Pro Max', '../uploads/thumb-iphone12prm-2.jpg'),
(35, 52, 44, 1, 18040500, 'iPhone 12 Pro Max', '../uploads/thumb-iphone12prm-2.jpg'),
(36, 53, 44, 1, 14240500, 'iPhone 12 Pro ', '../uploads/thumb-iphone12pro-1.jpg'),
(37, 2, 45, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(38, 1, 45, 1, 10449050, 'Điện thoại OPPO Reno8 T 5G 256GB', '../uploads/thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(39, 4, 46, 1, 10791000, 'Điện thoại OPPO Reno7 Pro 5G', '../uploads/thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(40, 3, 46, 2, 16710500, 'Điện thoại OPPO Reno8 Pro 5G', '../uploads/thumb-oppo_reno8_pro_1_.jpg'),
(41, 17, 47, 1, 3231000, 'Xiaomi Redmi 10C', '../uploads/thumb-xiaomi-redmi-10c.jpeg'),
(42, 18, 47, 1, 3951000, 'Xiaomi Redmi Note 11', '../uploads/thumb-xiaomi-redmi-note-11.jpeg'),
(43, 19, 47, 1, 5571000, 'Xiaomi Redmi Note 11 Pro', '../uploads/thumb-xiaomi-redmi-note-11-pro.jpeg'),
(44, 17, 48, 1, 3231000, 'Xiaomi Redmi 10C', '../uploads/thumb-xiaomi-redmi-10c.jpeg'),
(45, 18, 48, 1, 3951000, 'Xiaomi Redmi Note 11', '../uploads/thumb-xiaomi-redmi-note-11.jpeg'),
(46, 19, 48, 1, 5571000, 'Xiaomi Redmi Note 11 Pro', '../uploads/thumb-xiaomi-redmi-note-11-pro.jpeg'),
(47, 23, 50, 1, 8091000, 'Xiaomi 11T 5G', '../uploads/thumb-xiaomi-11t-xanh-duong.jpeg'),
(48, 22, 50, 1, 10251000, 'Xiaomi 12T 5G', '../uploads/thumb-xiaomi-12t-glr-den.jpeg'),
(49, 1, 51, 1, 10449050, 'Điện thoại OPPO Reno8 T 5G 256GB', '../uploads/thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(50, 4, 51, 2, 10791000, 'Điện thoại OPPO Reno7 Pro 5G', '../uploads/thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(51, 2, 52, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(52, 4, 52, 1, 10791000, 'Điện thoại OPPO Reno7 Pro 5G', '../uploads/thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(53, 20, 54, 1, 5121000, 'Xiaomi Redmi Note 11S', '../uploads/thumb-xiaomi-redmi-note-11s.jpeg'),
(54, 21, 54, 1, 3690000, 'Xiaomi Redmi 10', '../uploads/thumb-xiaomi-redmi-10-2022-xanh.jpeg'),
(55, 54, 55, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(56, 6, 56, 1, 5510800, 'Điện thoại OPPO A96 ', '../uploads/thumb-a96-navigation-pink-v1.png'),
(57, 11, 58, 2, 3200000, 'Điện thoại OPPO A17K', '../uploads/thumb-oppo a17k dien thoai thong minh.png'),
(58, 67, 58, 1, 3410500, 'Samsung Galaxy A04s', '../uploads/thumb-anhchinh1.jpg'),
(59, 2, 59, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(60, 73, 59, 2, 9775500, 'Samsung Galaxy A73 (5G)', '../uploads/thumb-anhchinh7.jpg'),
(61, 12, 59, 1, 16911000, 'OPPO Find X3 Pro 5G', '../uploads/thumb-oppo-find-x3-pro-5g-3_2.jpg'),
(62, 1, 60, 1, 10449050, 'Điện thoại OPPO Reno8 T 5G 256GB', '../uploads/thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(63, 2, 60, 5, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(64, 70, 60, 3, 6925500, 'Samsung Galaxy A23 (4GB 128GB)', '../uploads/thumb-anhchinh4.jpg'),
(65, 52, 61, 1, 18040500, 'iPhone 12 Pro Max', '../uploads/thumb-iphone12prm-2.jpg'),
(66, 54, 61, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(67, 3, 62, 1, 16710500, 'Điện thoại OPPO Reno8 Pro 5G', '../uploads/thumb-oppo_reno8_pro_1_.jpg'),
(68, 54, 62, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(69, 3, 63, 2, 16710500, 'Điện thoại OPPO Reno8 Pro 5G', '../uploads/thumb-oppo_reno8_pro_1_.jpg'),
(70, 2, 64, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(71, 1, 64, 1, 10449050, 'Điện thoại OPPO Reno8 T 5G 256GB', '../uploads/thumb-oppo-reno8t-vang1-thumb-600x600.jpg'),
(72, 54, 66, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(73, 52, 66, 1, 18040500, 'iPhone 12 Pro Max', '../uploads/thumb-iphone12prm-2.jpg'),
(74, 3, 67, 3, 16710500, 'Điện thoại OPPO Reno8 Pro 5G', '../uploads/thumb-oppo_reno8_pro_1_.jpg'),
(76, 7, 68, 1, 6290000, 'Điện thoại OPPO A77s', '../uploads/thumb-combo_a77s-_en_2.jpg'),
(77, 2, 70, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(78, 52, 70, 1, 18040500, 'iPhone 12 Pro Max', '../uploads/thumb-iphone12prm-2.jpg'),
(79, 80, 71, 1, 36090500, 'Samsung Galaxy Z Fold 4', '../uploads/thumb-anhchinh15.jpg'),
(80, 81, 71, 1, 20415500, 'Samsung Galaxy Z Fold3 5G 256GB ', '../uploads/thumb-anhchinh16.jpg'),
(81, 3, 73, 1, 16710500, 'Điện thoại OPPO Reno8 Pro 5G', '../uploads/thumb-oppo_reno8_pro_1_.jpg'),
(82, 4, 73, 1, 10791000, 'Điện thoại OPPO Reno7 Pro 5G', '../uploads/thumb-oppo reno 7 t_i_xu_ng_42__3.png'),
(83, 11, 74, 1, 3200000, 'Điện thoại OPPO A17K', '../uploads/thumb-oppo a17k dien thoai thong minh.png'),
(84, 5, 74, 2, 2279200, 'Điện thoại OPPO A16K', '../uploads/thumb-oppo a 16k.jpg'),
(85, 2, 75, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(86, 3, 75, 1, 16710500, 'Điện thoại OPPO Reno8 Pro 5G', '../uploads/thumb-oppo_reno8_pro_1_.jpg'),
(87, 3, 76, 1, 16710500, 'Điện thoại OPPO Reno8 Pro 5G', '../uploads/thumb-oppo_reno8_pro_1_.jpg'),
(88, 2, 76, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(89, 8, 77, 1, 4851000, 'Điện thoại OPPO A76', '../uploads/thumb-combo_a76_-_black.jpg'),
(90, 10, 77, 1, 3790000, 'Điện thoại OPPO A17', '../uploads/thumb-oppo-a-17b1ppr0nazrpqahyt.jpg'),
(97, 11, 81, 2, 3200000, 'Điện thoại OPPO A17K', '../uploads/thumb-oppo a17k dien thoai thong minh.png'),
(98, 68, 81, 1, 3315500, 'Samsung Galaxy A13 (4G 128GB) ', '../uploads/thumb-anhchinh2.jpg'),
(99, 69, 81, 1, 4740500, 'Samsung Galaxy A14 ', '../uploads/thumb-anhchinh3.png'),
(100, 75, 81, 1, 31340500, 'Samsung Galaxy Note 20 Ultra 5G', '../uploads/thumb-anhchinh9.jpg'),
(101, 59, 81, 1, 7590500, 'iPhone XS Max', '../uploads/thumb-iphonexsm.jpg'),
(102, 2, 89, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(103, 8, 89, 1, 4851000, 'Điện thoại OPPO A76', '../uploads/thumb-combo_a76_-_black.jpg'),
(104, 12, 89, 1, 16911000, 'OPPO Find X3 Pro 5G', '../uploads/thumb-oppo-find-x3-pro-5g-3_2.jpg'),
(105, 57, 90, 1, 9490500, 'iPhone 11 Pro ', '../uploads/thumb-iphone11pro1.png'),
(106, 56, 90, 1, 11390500, 'iPhone 11 Pro Max', '../uploads/thumb-iphone11prm1.png'),
(107, 5, 91, 1, 2279200, 'Điện thoại OPPO A16K', '../uploads/thumb-oppo a 16k.jpg'),
(108, 54, 91, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(109, 76, 92, 1, 11865500, 'Samsung Galaxy S21 FE 8GB 128GB ', '../uploads/thumb-anhchinh10.png'),
(110, 6, 93, 95, 5510800, 'Điện thoại OPPO A96 ', '../uploads/thumb-a96-navigation-pink-v1.png'),
(111, 54, 93, 8, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(112, 52, 94, 6, 18040500, 'iPhone 12 Pro Max', '../uploads/thumb-iphone12prm-2.jpg'),
(113, 5, 94, 1, 2279200, 'Điện thoại OPPO A16K', '../uploads/thumb-oppo a 16k.jpg'),
(114, 7, 95, 1, 6290000, 'Điện thoại OPPO A77s', '../uploads/thumb-combo_a77s-_en_2.jpg'),
(115, 8, 95, 1, 4851000, 'Điện thoại OPPO A76', '../uploads/thumb-combo_a76_-_black.jpg'),
(116, 54, 96, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(117, 54, 97, 2, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(118, 8, 97, 2, 4851000, 'Điện thoại OPPO A76', '../uploads/thumb-combo_a76_-_black.jpg'),
(119, 7, 98, 1, 6290000, 'Điện thoại OPPO A77s', '../uploads/thumb-combo_a77s-_en_2.jpg'),
(120, 45, 98, 1, 24690500, 'iPhone 14 Pro ', '../uploads/thumb-iphone14pr-1.jpg'),
(121, 12, 98, 1, 16911000, 'OPPO Find X3 Pro 5G', '../uploads/thumb-oppo-find-x3-pro-5g-3_2.jpg'),
(122, 45, 99, 4, 24690500, 'iPhone 14 Pro ', '../uploads/thumb-iphone14pr-1.jpg'),
(123, 7, 99, 1, 6290000, 'Điện thoại OPPO A77s', '../uploads/thumb-combo_a77s-_en_2.jpg'),
(124, 75, 99, 1, 31340500, 'Samsung Galaxy Note 20 Ultra 5G', '../uploads/thumb-anhchinh9.jpg'),
(125, 7, 100, 1, 6290000, 'Điện thoại OPPO A77s', '../uploads/thumb-combo_a77s-_en_2.jpg'),
(126, 54, 100, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(127, 54, 101, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(128, 52, 101, 1, 18040500, 'iPhone 12 Pro Max', '../uploads/thumb-iphone12prm-2.jpg'),
(129, 53, 102, 1, 14240500, 'iPhone 12 Pro ', '../uploads/thumb-iphone12pro-1.jpg'),
(130, 54, 102, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(131, 53, 103, 1, 14240500, 'iPhone 12 Pro ', '../uploads/thumb-iphone12pro-1.jpg'),
(132, 54, 103, 1, 10440500, 'iPhone 12 Mini', '../uploads/thumb-iphone12mini1.jpg'),
(133, 59, 104, 3, 7590500, 'iPhone XS Max', '../uploads/thumb-iphonexsm.jpg'),
(134, 2, 105, 1, 7990000, 'Điện thoại OPPO Reno8 Z 5G', '../uploads/thumb-photo_2022-08-05_09-40-15.jpg'),
(135, 11, 106, 2, 3200000, 'Điện thoại OPPO A17K', '../uploads/thumb-oppo a17k dien thoai thong minh.png'),
(136, 5, 106, 1, 2279200, 'Điện thoại OPPO A16K', '../uploads/thumb-oppo a 16k.jpg'),
(137, 1, 107, 1, 10449050, 'Cây hoa tường vi', '../uploads/thumb-tuongvi1.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_reply_blog_comments`
--

CREATE TABLE `tbl_reply_blog_comments` (
  `id` int(9) NOT NULL,
  `id_user` int(9) NOT NULL,
  `id_blog_comment` int(9) NOT NULL,
  `content` varchar(255) NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_reply_comments_product`
--

CREATE TABLE `tbl_reply_comments_product` (
  `id` int(9) NOT NULL,
  `iduser` int(11) NOT NULL,
  `id_comment` int(9) NOT NULL,
  `content` int(11) NOT NULL,
  `date_modified` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_reply_reviews`
--

CREATE TABLE `tbl_reply_reviews` (
  `id_reply` int(9) NOT NULL,
  `id_user` int(9) NOT NULL,
  `id_review` int(9) NOT NULL,
  `content` varchar(255) NOT NULL,
  `date_modified` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_reply_reviews`
--

INSERT INTO `tbl_reply_reviews` (`id_reply`, `id_user`, `id_review`, `content`, `date_modified`) VALUES
(1, 44, 2, 'Cám ơn bạn đã ủng hộ shop ạ', '2023-04-09 10:31:51'),
(2, 44, 11, 'Cám ơn bạn đã ủng hộ shop, chúc bạn mạnh giỏi hihi', '2023-04-09 16:01:30'),
(3, 44, 15, 'Thank you so much.', '2023-04-09 10:33:49'),
(4, 44, 4, 'Shop cảm ơn nhé', '2023-04-09 16:01:20'),
(5, 11, 10, 'Yeah. Cám ơn bạn. Hihi', '2023-04-11 10:44:07');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_sanpham`
--

CREATE TABLE `tbl_sanpham` (
  `masanpham` int(11) NOT NULL,
  `tensp` varchar(60) NOT NULL,
  `don_gia` double(11,2) NOT NULL DEFAULT 0.00,
  `ton_kho` int(3) NOT NULL DEFAULT 100,
  `images` text NOT NULL,
  `giam_gia` double(10,2) NOT NULL DEFAULT 0.00,
  `dac_biet` tinyint(1) NOT NULL DEFAULT 0,
  `so_luot_xem` int(11) NOT NULL DEFAULT 0,
  `ngay_nhap` datetime NOT NULL,
  `date_modified` datetime NOT NULL DEFAULT current_timestamp(),
  `mo_ta` text NOT NULL,
  `ma_danhmuc` int(11) NOT NULL,
  `id_dmphu` int(3) NOT NULL,
  `information` text NOT NULL,
  `promote` tinyint(1) NOT NULL DEFAULT 0,
  `danhgia` float(1,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_sanpham`
--

INSERT INTO `tbl_sanpham` (`masanpham`, `tensp`, `don_gia`, `ton_kho`, `images`, `giam_gia`, `dac_biet`, `so_luot_xem`, `ngay_nhap`, `date_modified`, `mo_ta`, `ma_danhmuc`, `id_dmphu`, `information`, `promote`, `danhgia`) VALUES
(1, 'Cây hoa tường vi', 10999000.00, 9, 'thumb-tuongvi1.jpg,\r\ntuongvi2.jpg,\r\ntuongvi3.jpg,\r\ntuongvi4.jpg,\r\ntuongvi5.jpg', 5.00, 1, 21, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây hoa tường vi có kích thước chưa lên chậu khoảng 80cm - 100cm. Tuy nhiên cây có rất nhiều loại kích thước cũng như màu hoa. Nếu quý khách hàng muốn mua loại kích thước nào có thể nhắn tin trực tiếp để được tư vấn, cũng như gửi hình cây thực tế\r\n', 1, 1, 'Cây hoa tường vi còn được gọi là bằng lăng hoa tường vi, là một loài cây hoa đẹp với vẻ ngoài mộc mạc nhưng không kém phần duyên dáng. Với những chùm hoa nhỏ xinh, nở rộ vào mùa hè. Tường vi mang đến một vẻ đẹp dịu dàng, thanh thoát, gắn liền với sự tinh khiết và tình yêu bền chặt. Cùng tìm hiểu về đặc điểm, cách trồng, chăm sóc và ý nghĩa của loài hoa này.\r\n\r\nĐặc điểm của cây hoa tường vi\r\nTên khoa học: Lagerstroemia indica.\r\nHọ: Bằng lăng (Lythraceae).\r\nNguồn gốc: Cây hoa tường vi có nguồn gốc từ các vùng nhiệt đới và cận nhiệt đới của châu Á, đặc biệt là Trung Quốc và Nhật Bản.', 3, 0.0),
(2, 'Cây Hoa Giấy', 7990000.00, 59, 'thumb-hoagiay1.jpg,hoagiay2.jpg,hoagiay3.jpg,\r\nhoagiay4.jpg,hoagiay5.jpg', 0.00, 0, 19, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao khoảng 60-80cm khi chưa lên chậu. Ngoài ra còn rất nhiều loại khác nhau kể cả về kích thước , lẫn màu hoa. Nên quý khách có thể liên hệ để chọn loại ưa thích và phù hợp.\r\n', 1, 1, 'Hoa giấy hay còn gọi là cây bông giấy, là một trong những loài cây cảnh phổ biến nhất tại Việt Nam và trên thế giới. Với vẻ đẹp giản dị, hoa giấy không chỉ mang lại một không gian sống tươi mới mà còn thể hiện ý nghĩa phong thủy sâu sắc. Loài cây này dễ trồng, dễ chăm sóc và có khả năng chịu hạn tốt, rất thích hợp với điều kiện khí hậu nhiệt đới.\r\n\r\n', 0, 0.0),
(3, 'Cây Huyết Dụ', 17590000.00, 88, 'thumb-huyetdu1.jpg,\r\nhuyetdu2.jpg,\r\nhuyetdu3.jpg,\r\nhuyetdu4.jpg,\r\nhuyetdu5.jpg,', 5.00, 0, 14, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '<p>Từ xa xưa, người ta đã tin rằng cây Huyết Dụ có khả năng xua đuổi tà ma và mang lại may mắn. Câu chuyện về một vị tướng bị thương nặng đã được cứu sống nhờ lá cây Huyết Dụ vẫn còn được lưu truyền đến ngày nay. Với những chiếc lá đỏ tía rực rỡ như ngọn lửa, cây Huyết Dụ không chỉ là một loài cây cảnh đẹp mắt mà còn là một vị thuốc quý trong y học cổ truyền. Hãy cùng khám phá những điều thú vị về loài cây thần kỳ này.</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>', 1, 1, '<p>Đặc điểm hình thái và nguồn gốc cây huyết dụ\r\nCây Huyết Dụ, với tên khoa học Cordyline fruticosa, thuộc họ Măng Tây (Asparagaceae). Loài cây này có nguồn gốc từ vùng Đông Nam Á, đặc biệt là các quốc gia như Việt Nam, Thái Lan, Indonesia. Tại Việt Nam, cây mọc hoang và được trồng phổ biến ở nhiều vùng miền.\r\nThân: Thân cây thường mọc thành bụi, cao khoảng 1-2m, có nhiều đốt.\r\nLá: Lá đơn, mọc so le, hình mác hoặc hình mũi giáo, dài 20-50cm, rộng 5-10cm. Đặc điểm nổi bật là lá có màu đỏ tía hoặc đỏ tươi, đôi khi có mặt trên màu xanh lục. Màu sắc rực rỡ này đến từ các sắc tố anthocyanin, có tác dụng chống oxy hóa mạnh.\r\nHoa: Cụm hoa mọc ở đầu cành, hoa nhỏ, màu trắng hoặc hồng nhạt, mang đến vẻ đẹp dịu dàng cho cây.\r\nQuả cây huyết dụ\r\nQuả cây huyết dụ\r\nQuả: Quả mọng, hình cầu, khi chín có màu đỏ, chứa nhiều hạt nhỏ.</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>', 1, 0.0),
(4, 'Cây Cau Nga Mi', 11990000.00, 78, 'thumb-caungami1.jpg,\r\ncaungami2.jpg,\r\ncaungami3.jpg,\r\ncaungami4.jpg,\r\ncaungami5.jpg,', 10.00, 0, 7, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao lộ thân từ 50cm - 3m. Giá cây sẽ phụ thuộc vào độ cao. Giá được tính theo mét thoát thân. Cây phù hợp để nơi nhiều ánh sáng như ban công, sảnh, sân vườn.\r\n', 1, 1, 'Cây cau nga mi hay còn gọi chà là cảnh, với tên khoa học Phoenix roebelenii. Là một trong những loài cây cảnh được yêu thích hiện nay. Xuất xứ từ các khu rừng nhiệt đới ẩm ướt ở Đông Nam Á, cây đã chinh phục trái tim của những người yêu cây cảnh bởi vẻ đẹp thanh lịch, sang trọng và khả năng thanh lọc không khí tuyệt vời. Với chiều cao khiêm tốn và dáng vẻ uyển chuyển, cây trở thành điểm nhấn độc đáo cho mọi không gian sống.', 0, 0.0),
(5, 'Cây Hạnh Phúc Gốc To', 2590000.00, 94, 'thumb-hanhphucgocto1.jpg,\r\nhanhphucgocto2.jpg,\r\nhanhphucgocto3.jpg,\r\nhanhphucgocto4.jpg,', 12.00, 0, 6, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu giao động từ 1m6 cho đến gần 3m. Tán lá không quá dày rất phù hợp để trong nhà, văn phòng và làm quà tặng khai trương, nhà mới, đối tác...\r\n', 1, 1, 'Cây hạnh phúc gốc to còn được gọi với tên khoa học là Radermachera sinica, là một loại cây cảnh phổ biến được ưa chuộng bởi vẻ đẹp sang trọng, ý nghĩa may mắn và khả năng thanh lọc không khí hiệu quả.', 0, 0.0),
(6, 'Cây Trúc Nhật Vàng', 5990000.00, 0, 'thumb-trucnhatvang1.jpg,\r\ntrucnhatvang2.jpg,\r\ntrucnhatvang3.jpg', 8.00, 0, 5, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây hiện tại chỉ có dòng để bàn cao khoảng 40cm cả chậu, tán rộng khoảng 35cm. Phù hợp làm cây để bàn, trang trí không gian nội thất, quán cà phê...\r\n', 1, 1, 'Cây trúc nhật vàng (tên khoa học: Dracaena surculosa punctulata) là một loại cây cảnh rất được ưa chuộng bởi vẻ đẹp độc đáo và nhiều ý nghĩa phong thủy tốt đẹp. Với tán lá xanh mướt điểm xuyết những đốm vàng rực rỡ, cây mang đến sức sống mới cho không gian, đồng thời giúp thanh lọc không khí và mang lại may mắn cho gia chủ.', 0, 0.0),
(7, 'Sen Đá Casio', 6290000.00, 98, 'thumb-senda1.jpg', 0.00, 0, 4, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có kích thước từ 6-9cm. Cây sen đá casio là một dòng sen đá mới nên còn khá hiếm. Rất phù hợp cho những anh chị sưu tầm.\r\n', 1, 1, 'Cây sen đá Casio là một trong những dòng mới, hiện tại ở Việt Nam cũng chưa có nhiều. Cây mang một vẻ đẹp mới lạ sắc nét. Cây phù hợp để ngoài ban công, cửa sổ, quán cà phê. Những nơi có nhiều ánh nắng, gió nhưng che được mưa. Cây lên màu đẹp khi thời tiết lạnh. Nhiệt độ chênh lệch giữa ngày và đêm.', 0, 0.0),
(8, 'Chậu Sen Đá Vát', 5390000.00, 98, 'thumb-sendavatgom1.jpg,sendavatgom1.jpg,sendavatgom2.jpg,sendavatgom3.jpg', 10.00, 0, 5, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Chậu sen đá vát có kích thước chậu 11x11 tùy theo trồng cây cao hay rộng mà chậu sẽ có chiều cao tương ứng. Trung bình chiều cao tổng thể khoảng 15cm, rộng 15cm. Chậu cây nên để nơi thoáng có nhiều ánh sáng. Ví dụ như ban công, của sổ, vườn có mái che mưa...\r\n', 1, 1, 'Thay vì những chậu cây sen đá đơn giản thì việc phối các cây vào chung một chậu sẽ đem đến được nhiều sự mới lạ. Đặc biệt chậu sen đá vát còn được trồng cây từ gần đáy bình lên, khiến chậu sen đá trở lên đẹp và cuốn hút hơn rất nhiều. Chậu phù hợp làm quà tặng sinh nhật, quà valentine, tặng dịp lễ…', 0, 0.0),
(9, 'Cây Hoa Dẻ Vàng', 4290000.00, 100, 'thumb-hoadevang.jpg,hoadevang1.jpg,,hoadevang2.jpg,hoadevang3.jpg,', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao khoảng 150cm trồng trong bầu vải, đã có hoa sẵn. Cây phù hợp làm cây bóng mát, công trình, cây cảnh trồng trước của, trong vườn lấy hương thơm.\r\n', 1, 1, 'Nếu bạn đang cần tìm một loại cây sống lâu năm, có hoa thơm, an toàn và ít rụng lá để trồng trong vườn, trước cổng, hoặc ở sân nhà, biệt thự. Thì cây hoa dẻ vàng là một trong những lựa chọn tuyệt vời mà bạn nên cân nhắc.', 0, 0.0),
(10, 'Cây Monstera Albo', 3790000.00, 99, 'thumb-monstera.jpg,monstera1.jpg,monstera2.jpg', 0.00, 0, 2, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Monstera Albo được bán có số lượng 2 - 3 lá độ rộng của lá từ 10 - 18cm. Chiều cao chậu từ 25-30cm. Rất phù hợp để trang trí các góc nhỏ ấn tượng\r\n', 1, 1, 'Cây Monstera Albo là một trong những loại cây đột biến, được nước ngoài rất là ưa chuộng vì khả năng có thể sống được trong môi trường trong nhà. Với màu sắc lá bắt mắt khiến cho không gian trở lên nổi bật và ấn tượng.\r\n\r\nTrước đây có những cây có gen đẹp giá lên đến vài chục triệu đồng một node. Tuy nhiên theo thời gian số lượng cây đã được nhân giống dần ra khiến giá cây đã giảm khá nhiều nhưng vẫn thuộc dòng cây nội thất cao cấp. Cây phù hợp để trang trí các không gian nội thất, quán cà phê, phòng khách…', 0, 0.0),
(11, 'Cây Kim Ngân Đơn Thân Lớn', 3200000.00, 94, 'thumb-kimngandonlon.jpg,kimnganlon1.jpg,kimnganlon2.jpg,kimnganlon3.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu là 1m4 rất phù hợp để ở những góc không quá to nhưng vẫn giữ được nét sang trọng cho căn phòng. Cây phù hợp để tặng khai trương, để phòng khách, kệ tivi, quầy thu ngân...\r\n', 1, 1, 'Cây Kim Ngân đơn thân lớn tượng trưng cho sự phát triển vững trãi và chắc chắn. Ngoài ra cây còn có ý nghĩa phong thủy mang đến tiền bạc và sự may mắn cho gia chủ.\r\n\r\nCây Kim Ngân hay còn gọi là Money Tree. Sở dị cây có tên gọi đó vì ở một số nước gỗ của cây được sử dụng làm giấy in tiền.', 0, 0.0),
(12, 'Cây Kim Ngân Củ To', 18790000.00, 98, 'thumb-kimngancuto.jpg,kimngancuto1.jpg,kimngancuto2.jpg,kimngancuto3.jpg', 10.00, 0, 5, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu 1m3 - 1m5 đường kính chậu là 40cm. Phù hợp để phòng sếp, đại sảnh, phòng khách, tặng sếp, tặng tân gia, trang trí các không gian sang trọng và cao cấp.\r\n', 1, 1, 'Bạn đang tìm kiếm một cây dễ sống để được trong nhà, dạng thân gỗ, xanh tốt quanh năm. Nhưng nó phải độc lạ, hoàng tráng để xứng tầm với không gian thì cây Kim Ngân củ to là một sự lựa chọn hoàn hảo.\r\n\r\nCây Kim Ngân củ to tượng trưng cho sự vững trãi, hiên ngang. Cây có ý nghĩa phong thủy mang đến tiền bạc và sự may mắn cho gia chủ.\r\n\r\nCây có chiều cao khoảng 130cm – 150cm. Phù hợp để phòng sếp, đại sảnh, phòng khách, tặng sếp, tặng tân gia, trang trí các không gian sang trọng và cao cấp.', 0, 0.0),
(13, 'Cây Hạnh Phúc Dáng Tree To', 11990000.00, 100, 'thumb-hanhphuctree.jpg,hanhphuctree1.jpg,hanhphuctree2.jpg,hanhphuctree3.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Có chiều cao cả chậu là 1m8, tán rộng khoảng 65cm. Phù hợp để trang trí nội thất cho các không gian lớn, như đại sảnh, văn phòng chung, phòng khách, phòng sếp, quà tặng khai trương, tân gia....\r\n', 1, 1, 'Cây Hạnh Phúc dáng Tree to được nhiều người chọn mua, để tặng sếp hoặc đặt ở những văn phòng lớn, phòng khách lớn, tặng khai trương, tân gia. Với ý nghĩa mang đến hạnh phúc và sự phát triển vững bền.\r\n\r\nCây có thân to cứng cáp và vững trãi. Dáng tree là dáng có thân cây thẳng và phía bên trên của cây sẽ là tán lá tròn đều. Cây thường có chiều cao cả chậu là 1m8 – 1m9. Cây thuộc dạng thân gỗ xanh tốt quanh năm, không rụng lá. Cây càng chăm càng đẹp.\r\n\r\nCây sống tốt trong môi trường văn phòng, lẫn ngoài trời. Cây thuộc hành mộc tuy nhiên cây có tên hạnh phúc nên phù hợp tất cả với các mệnh mang đến cho gia chủ hạnh phúc. Đối với gia chủ mệnh hỏa và mộc thì sẽ thuận lợi hơn, làm ăn may mắn giúp sự nghiệp và tiền bạc phát triển.', 0, 0.0),
(14, 'Cây Phú Quý để bàn', 18990000.00, 100, 'thumb-phuquy.jpg,phuquy1.jpg,phuquy2.jpg,phuquy3.jpg', 10.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu chỉ từ 30-35cm. Màu chủ đảo của cây là xanh và đỏ nổi bật giúp mang lại không gian thư giãn, sang trọng.\r\n', 1, 1, 'Cây Phú Quý để bàn có kích thước nhỏ gọn, chiều cao cả chậu chỉ khoảng 30-35cm rất phù hợp để bàn làm việc, bàn uống nước, các không gian nhỏ như vách tủ, kệ sách, kệ tivi…\r\n\r\nNgoài tác dụng làm cây trang trí vì màu sắc khá nổi bật. Cây còn có tác dụng lọc sạch không khí, giảm bớt khói bụi, hấp thụ chất hữu cơ dễ bay hơi gây bệnh. Cây có ý nghĩa phong thủy mang đến cho gia chủ sự may mắn, giàu sang và phú quý cho gia chủ đúng với tên gọi của loại cây này.', 0, 0.0),
(17, 'Cây Bàng Nhật', 3590000.00, 98, 'thumb-bangnhat.jpg,\r\nbangnhat1.jpg,\r\nbangnhat2.jpg,\r\nbangnhat3.jpg', 10.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao 1m phù hợp để decor sân vườn, quán cà phê, ban công, hiên nhà. Cây ưa nơi nhiều ánh sáng, dễ sống và chăm sóc.\r\n', 2, 2, 'Bạn đang có một góc xinh xắn và thơ mộng? Và bạn đang muốn thêm 1 loại cây cảnh gì đó để cho góc càng thêm chill hơn nữa? Thì cây Bàng Nhật là một sự lựa chọn tuyệt vời cho không gian ban công, quán cà phê, góc nhỏ sân vườn. Với những chiếc lá nhỏ màu xanh, trắng và hồng nó sẽ khiến bạn thốt lên thật tuyệt đẹp.\r\n\r\n', 0, 0.0),
(18, 'Cây Đuôi Công Vân Vàng', 4390000.00, 98, 'thumb-congvanvang.jpg,\r\ncongvanvang1.jpg,\r\ncongvanvang2.jpg,\r\ncongvanvang3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu 55cm phù hợp để làm cây quà tặng, cây khai trương, để kệ tivi, bàn uống uống, ban công, trang trí quán cà phê, cây trang trí nội thất...\r\n', 2, 2, 'Trong 400 loại cây đuôi công hay họ Calathea có một dòng có vân vàng hay gọi là sọc vàng. Màu vàng nhìn rất nổi bật khác hẳn và nổi trội hơn các dòng đuôi công khác. Nó được đặt cái tên là cây Đuôi Công vân vàng hay Calathea golden mosaic.\r\n\r\nCây có chiều cao 55cm vì thế rất hợp làm cây tặng khai trương các quán nhỏ, để quán cà phê, ban công, các góc nhỏ chill chill, kệ tivi…', 0, 0.0),
(19, 'Cây Hạnh Phúc 2 Tầng', 6190000.00, 98, 'thumb-hanhphuctang.jpg,\r\nhanhphuctang1.jpg,\r\nhanhphuctang2.jpg,\r\nhanhphuctang3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao 1m5 cả chậu phù hợp làm cây để văn phòng, tặng tân gia, khai trương, để trước cửa nhà, cây nội thất, cây trang trí phòng khách...\r\n', 2, 2, 'Số 2 biểu tượng yêu thương, che chở, bảo ban và dạy dỗ. Ngoài ra nó còn thể hiện tính tuyệt đối, bên lâu và trường tồn hay người ta còn gọi số 2 nghĩa là mãi. Chính vì thế mà cây Hạnh Phúc 2 tầng được nhiều người lựa chọn với ý nghĩa phong thủy mang đến cho gia chủ một tình yêu, che chở, mãi mãi và bền lâu.\r\n\r\nCây sống tốt trong môi trường văn phòng, lẫn ngoài trời. Cây thuộc hành mộc tuy nhiên cây có tên hạnh phúc nên phù hợp tất cả với các mệnh mang đến cho gia chủ hạnh phúc. Đối với gia chủ mệnh hỏa và mộc thì sẽ thuận lợi hơn, làm ăn may mắn giúp sự nghiệp và tiền bạc phát triển.', 0, 0.0),
(20, 'Cây Hạnh Phúc cao 80cm', 5690000.00, 99, 'thumb-hanhphuccao80.jpg,\r\nhanhphuccao1.jpg,\r\nhanhphuccao2.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây hạnh phúc 80cm phù hợp để cho các quán, cửa hàng, ban công hoặc những nơi có không gian không quá rộng nếu để cây to thì chật và cây nhỏ thì lại bé. Ngoài ra cây còn phù hợp trong lễ cưới.\r\n', 2, 2, 'Phong tục cắt bánh trong lễ cưới, dần dần được thay thế bằng cách cùng nhau tưới cây. Loại cây thường được chọn trong lễ cưới là cây Hạnh Phúc. Với ý nghĩa cùng nhau vun vén để cuộc sống của 2 vợ chồng ngày càng hạnh phúc, sung túc, mạnh khỏe và thành công trong cuộc sống.\r\n\r\n', 0, 0.0),
(21, 'Cây Nhất Mạt Hương', 4100000.00, 99, 'thumb-caymathuong.jpg,mathuong1.jpg,mathuong2.jpg,mathuong3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao khoảng 25 - 30cm cả chậu, phù hợp làm cây để ban công, hiên nhà. Với mùi thơm của cây giúp gia chủ sản khoái và lấy lại cân bằng.\r\n', 2, 2, 'Cây Nhất Mạt Hương hay còn có tên gọi khác là cây Sen Đá Lá Thơm. Sở dĩ cây có tên như vậy vì cây có chứa tinh dầu thơm trong lá và thân. Khi bạn chạm nhẹ vào cây sẽ tỏa ra mùi hương thơm dễ chịu giống mùi bạc hà. Trong phong thủy cây mang ý nghĩa giúp giữ tài chính, giúp gia chủ chi tiêu hợp lý. Ngoài ra cây còn tác dụng đuổi côn trùng và muỗi.\r\n\r\n', 0, 0.0),
(22, 'Cây Kim Ngân Thủy Sinh Lớn', 11390000.00, 99, 'thumb-nganthuysinh.jpg,nganthuysinh1.jpg,nganthuysinh2.jpg,nganthuysinh3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cả cả bình thủy tinh khoảng 45 -50cm, đường kính gốc từ 10 - 11cm. Cây phù hợp để bàn giám đốc, tặng khai trương, tân gia, bàn tiếp khách lớn....\r\n', 2, 2, 'Cây thủy sinh đã và đang được rất nhiều người ưa chuộng và lựa chọn vì dễ sống, dễ chăm sóc và sạch sẽ. Trong số đó loại cây thủy sinh được nhiều người mua nhất là cây Kim Ngân. Cây Kim Ngân thủy sinh lớn mang ý nghĩa phong thủy giúp gia chủ có nhiều tiền bạc. Cây phù hợp làm cây để phòng giám đốc, cây tặng tân gia, khai trương…\r\n\r\n', 0, 0.0),
(23, 'Cây Hạnh Phúc Thủy Sinh', 8990000.00, 99, 'thumb-hanhphucthuysinh.jpg,\r\nhanhphucthuysinh1.jpg,\r\nhanhphucthuysinh2.jpg,\r\nhanhphucthuysinh3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả bình khoảng 30cm rất phù hợp để bàn làm việc, sạch sẽ và dễ chăm sóc. Cây phù hợp làm quà tặng, cây để bàn, cây phong thủy.\r\n', 2, 2, 'Cây Hạnh Phúc thủy sinh để bàn đang rất được ưa chuộng vì cây thuộc dòng thân gỗ rất dễ sống, lá cây xanh tốt quanh năm. Cây chỉ cần đổ nước khi hết, giúp bàn làm việc không gian nhỏ của bạn luôn xanh nhưng rất sạch sẽ.\r\n\r\nCây có chiều cao chỉ tầm khoảng 30 cm tính cả bình thủy sinh rất nhỏ gọn, phù hợp để bàn làm việc, các góc nhỏ, kệ sách, bàn ăn, bàn uống nước, quà tặng sinh nhật…', 0, 0.0),
(24, 'Cây Lưỡi Hổ Mix', 750000.00, 100, 'thumbluoiho.jpg,\r\nluoiho1.jpg,\r\nluoiho2.jpg', 10.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu 1m phù hợp để tặng khai trương, tân gia, cây văn phòng, cây trong nhà với ý nghĩa xua đuổi tà ma, phú quý và mang đến may mắn cho gia chủ\r\n', 2, 2, 'Nếu bạn đang tìm một loại cây cảnh trang trí cho văn phòng vừa tốt cho sức khỏe, lọc khí tốt, an toàn và đẹp thì cây Lưỡi Hổ Mix là một lựa chọn tuyệt vời. Cây mang ý nghĩa trừ tà, xua đuổi ma quỹ, chống lại sự bỏ bùa, mang đến may mắn cho gia chủ.\r\n\r\nChậu cây bao gồm: Cây Lưỡi Hổ , Phú Quý, Ngọc Ngân và Hạt Dưa một sự kết hợp tuyệt vời giữa sự cứng cáp (Lưỡi Hổ) mềm mại tươi tốt (Phú Quý, Ngọc Ngân) uyển chuyển (Hạt Dưa). Chậu có chiều cao khoảng 1m rất phù hợp làm quà tặng khai trương, cây để văn phòng, sảnh, phòng khách, tặng tân gia…', 0, 0.0),
(25, 'Cây Lưỡi Hổ Đại', 11690000.00, 100, 'thumb-luoihodai1.jpg,\r\nluoihodai1.jpg,\r\nluoihodai2.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu hơn 1m. Nếu bạn đang tìm 1 loại cây để cho không gian lớn nhưng không muốn nó chiếm nhiều diện tích, quá lòe xòe và tốt cho sức khỏe thì cây Lưỡi Hổ Đại là một sự lựa chọn tuyệt vời\r\n', 2, 2, 'Nhiều văn phòng, nhà, và cửa hàng lựa chọn cây Lưỡi Hổ đại làm cây trang trí, phong thủy. Vì cây nằm trong top 10 những cây cảnh có khả năng giải độc khí tốt nhất trong nhà. Cây mọc thẳng nên không chiếm diện tích, hơn nữa cây rất dễ sống và chăm sóc. Cây mang ý nghĩa trừ tà, xua đuổi ma quỹ, chống lại sự bỏ bùa, mang đến may mắn cho gia chủ\r\n\r\nTheo một số nghiên cứu thì cây lưỡi hổ to là loài có tác dụng thanh lọc không khí, hấp thụ chất gây ô nhiễm, cải thiện không gian sống, cây Lưỡi Hổ đại hấp thụ tốt độc tố gây ung thư như nitrogen oxide và formaldehyde. Không những thế, cây sử dụng axit crassulacean quá trình trao đổi chất, hấp thụ carbon dioxide và giải phóng khí oxi vào ban đêm (quá trình quang hợp CAM). Đây là loài cây phù hợp trồng trong phòng ngủ, giúp tăng cường lượng oxy vào ban đêm, giúp bạn có một giấc ngủ sâu, tỉnh táo và sảng khoái khi thức dậy', 0, 0.0),
(26, 'Cây Phát Tài Núi 3 Thân', 7090000.00, 100, 'thumb-phattainui.jpg,\r\nphattainui1.jpg,\r\nphattainui2.jpg,\r\nphattainui3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu 100 - 110cm. Phù hợp để trong nhà, ngoài hiên. Cây chịu được khô hạn ưa ánh sáng. Phù hợp làm cây nội thất, văn phòng, cây tặng khai trương, tân gia...\r\n', 2, 2, 'Nếu bạn đang tìm kiếm một loại cây nội thất hoặc cây văn phòng có chiều cao khoảng 1m, giá thành hợp lý, đẹp mắt và mang lại phong thủy tốt thì cây Phát Tài Núi 3 thân, còn được gọi là cây Đại Lộc, chắc chắn là một sự lựa chọn tuyệt vời. Cây này thuộc mệnh Mộc, rất hợp phong thủy với những người mang mệnh Mộc, Hỏa và Thủy. Cây có khả năng chịu hạn tốt, ít phải chăm sóc và có thể sống trong nhà cũng như ngoài trời, mang lại may mắn và tài lộc cho gia chủ.\r\n\r\n', 0, 0.0),
(27, 'Cây Phát Tài 5 thân cao 1m4', 3790000.00, 100, 'thumb-phattainuithancao1m4.jpg,\r\nphattainuithancao1m4_1.jpg,\r\nphattainuithancao1m4_2.jpg,\r\nphattainuithancao1m4_3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Chậu có chiều rộng 30cm và chiều cao của cả cây và chậu là 140cm. Phù hợp đặt làm cây xanh, cây phong thủy cho các không gian không quá rộng. Làm quà khai tương, tân gia cực ý nghĩa.\r\n', 3, 3, 'Cây Phát Tài 5 thân cao 1m4 có lá màu xanh xòe rộng đi kèm với các gân màu vàng. Lá xanh tốt quanh năm. Cây thường ra hoa vào gần tết. Chậu cây gồm 5 thân trong phong thủy có ý nghĩa là sức khỏe, cây mang ý nghĩa phát tài. Khi gia chủ sở hữu cây sẽ vừa có sức khỏe và tiền tài. Cây có tán gọn không quá cao rất phù hợp với không gian vừa phải, các cửa hàng có diện tích hạn chế, quà tặng khai trương, tân gia ý nghĩa.\r\n\r\n', 0, 0.0),
(28, 'Cây Phát Tài 5 thân cao 1m6', 6990000.00, 100, 'thumb-phattainuithancao1m6.jpg,\r\nphattainuithancao1m6_1.jpg,\r\nphattainuithancao1m6_2.jpg,\r\nphattainuithancao1m6_3.jpg', 10.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Phát Tài 5 thân có chiều cao 1m6 tùy vào độ phát triển lá mà có thể cao hơn nữa, phù hợp để các góc lớn của văn phòng, phòng khách rộng. Cây thường được tặng làm quà, tân gia, khai trương cửa hàng...\r\n', 3, 3, 'Cây Phát Tài 5 thân cao 1m6 có lá màu xanh xòe rộng đi kèm với các gân màu vàng. Lá xanh tốt quanh năm. Cây thường ra hoa vào gần tết. Chậu cây gồm 5 thân trong phong thủy có ý nghĩa là sức khỏe, cây mang ý nghĩa phát tài. Khi gia chủ sở hữu cây sẽ vừa có sức khỏe và tiền tài. Phù hợp làm quà tặng khai trương, tân gia, cây để phòng khách, phòng giám đốc, sảnh khách sạn, quầy lễ tân lớn.\r\n\r\n', 0, 0.0),
(29, 'Cây Phát Tài 1 gốc to', 6790000.00, 100, 'thumb-phattai1goc.jpg,\r\nphattai1goc1.jpg,\r\nphattai1goc2.jpg,\r\nphattai1goc3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu 1m7 gốc to có 3 đến 5 thân hoặc 7 mỗi thân thường có 2 - 3 ngọn lá. Cây phù hợp để phòng giám đốc, không gian lớn, phòng khách rộng, tặng khai trương và tân gia.\r\n', 3, 3, 'Cây Phát Tài 1 Gốc To cây có chiều cao trung bình từ 1m6 – 2m2, hay còn gọi là Thiết Mộc Lan. Là một trong những loại cây cảnh nội thất được ưa chuộng nhất hiện nay. Không chỉ bởi vẻ đẹp sang trọng, thanh lịch, mà cây còn mang ý nghĩa phong thủy vô cùng tốt lành, tượng trưng cho sự may mắn, tài lộc và thịnh vượng.\r\n\r\n', 0, 0.0),
(30, 'Cây Bàng Cẩm Thạch Lá Tim', 5990000.00, 100, 'thumb-bangcamthanhtim.jpg,\r\nbancamthachtim1.jpg,\r\nbancamthachtim2.jpg,\r\nbancamthachtim3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Với chiều cao khoảng 70cm, lá có hình trái tim xanh viền lá và mặt lá phía sau có màu vàng kem. Cây thích hợp để trang trí nhà, decor quán cà phê, các góc nhỏ để chụp hình thư giãn.\r\n', 4, 4, 'Thuộc dòng cây thân gỗ sống lâu năm. Cây bàng cẩm thạch lá tim ấn tượng với những chiếc lá viền vàng kem và hình trái tim xanh. Cây hợp phong thủy với người mệnh kim và thổ. Phù hợp trồng ở quán cà phê, cạnh cửa sổ, ngoài trời, ban công…\r\n\r\n', 0, 0.0),
(31, 'Cây Trúc Nhật', 7590000.00, 100, 'thumb-trucnhat.jpg,\r\ntrucnhat1.jpg,\r\ntrucnhat2.jpg,trucnhat3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Trúc Nhật với thân hình mềm mại. Cây mang ý nghĩa phong thủy gặp dữ hóa lành, thăng tiến trong công việc và sự nghiệp nên được tặng trong các dịp như khai trương, sinh nhật hay thăng quan tiến chức.\r\n', 4, 4, 'Cây Trúc Nhật được biết đến là loại cây cảnh không chỉ giúp loại bỏ khí độc, điều hòa không khí, trang trí ngôi nhà mà còn là cây xanh phong thủy được nhiều người yêu thích và lựa chọn. Cùng tìm hiểu đặc điểm cũng như cách chăm sóc loại cây này và xem mệnh của bạn có hợp Cây Trúc Nhật không nhé.\r\n\r\n', 0, 0.0),
(32, 'Cây Trầu Bà Thanh Xuân', 7290000.00, 100, 'thumb-traubathanhxuan.jpg,\r\ntraubathanhxuan1.jpg,\r\ntraubathanhxuan2.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Trầu Bà Thanh Xuân còn có tên gọi khác như Trầu Bà Tay Phật. Thuộc loại thực vật họ Ráy có thân thảo, mọc thành bụi nhỏ. Chiều cao trung bình của cây khoảng 70cm. khi trưởng thành có thể đạt kích thước lên tới 1,5m. Khác với những hình dạng lá thông thường, lá của Trầu Bà Thanh xuân có hình dạng rất độc đáo. Lá cây bản to, xẻ nhánh thuỳ sâu giống như chân vịt, bẹ lá ôm sát vào thân và có màu xanh sẫm. Giống với đa số các cây họ Ráy, hoa của loại cây này có hình mo nhỏ mập mạp.', 4, 4, 'Tên Thường gọi: Trầu Bà Thanh Xuân\r\n\r\nTên gọi khác: Cây trầu bà tay phật, cây trầu bà chân vịt, cây trầu bà cánh phượng hoặc cây trầu bà khía.\r\n\r\nTên tiếng Anh: Leaf Philodendron\r\n\r\nTên khoa học: Philodendron bipinnatifidum hoặc Philodendron selloumSplit.\r\n\r\nHọ (familia): Araceae – Ráy\r\n\r\nNguồn gốc xuất xứ: Salomol', 0, 0.0),
(33, 'Cây Trầu Bà Đế Vương', 349000.00, 100, 'thumb-traubadevuong.jpg\r\ntraubadevuong1.jpg,\r\ntraubadevuong2.jpg,\r\ntraubadevuong3.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao từ 80-90cm độ rộng tán khoảng 80cm. Rất phù hợp với không gian rộng nhưng độ cao từ sàn đến trần thấp. Cây phù hợp tặng khai trương, tân gia, cây cảnh trong nhà, văn phòng...\r\n', 4, 4, 'Trầu Bà Đế Vương là một loài thực vật có hoa thuộc họ Ráy (Araceae), có nguồn gốc từ đảo Salomol. Loài này được Schott ex Endl miêu tả khoa học đầu tiên năm 1837.\r\n\r\nỞ Việt Nam, bởi ý nghĩa vương giả và khí chất mạnh mẽ nên rất được ưa chuộng và trồng phổ biến. Cây này thuộc giống cây thân thảo mọc thành bụi, khi lớn thân cây có dạng cột.\r\n\r\n', 0, 0.0),
(34, 'Cây Mini Monstera', 25900.00, 100, 'thumb-minimonstera.jpg,\r\nminimonstera1.jpg,\r\nminimonstera2.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Mini Monstera khá nổi bật với những chiếc lá xanh đậm và khuyết. Cây không cần chậu quá to chính vì thế cây rất phù hợp để trang trí những góc nhỏ trong nhà, quán cà phê, quà tặng...\r\n', 4, 4, 'Có lẽ trong thời gian vừa qua không chỉ những người ở giới chơi cây, mà những người bình thường cũng biết đến Monstera hay còn gọi là Trầu Bà Nam Mỹ với cây đột biến lên hàng tỷ đồng. Kèm theo cơn sốt nhiều người cũng muốn sở hữu Monstera vì nó thực sự đẹp và rất đặc sắc, tuy nhiên cây cần không gian lớn. Nếu bạn thích nhưng không có nhiều không gian có thể tham khảo dòng Mini Monstera này.\r\n\r\n', 0, 0.0),
(35, 'Cây Đế Vương Hoàng Kim', 0.00, 100, 'thumb-devuong1.jpg,\r\ndevuong1.jpg,\r\ndevuong2.jpg', 159000.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Đế Vương Hoàng Kim là một trong những loại cây cảnh được yêu thích nhất hiện nay bởi vẻ đẹp mới mẻ. Đây cũng là cây phong thủy được ưa chuộng, phù hợp cho mệnh kim và mệnh thủy. Đế vương hoàng kim mang ý nghĩa hanh thông, thăng tiến.\r\n', 4, 4, 'Đế Vương Hoàng Kim là một giống cây trồng mới được du nhập vào Việt Nam gần đây, được người sành chơi tìm kiếm sưu tầm, thưởng lãm. Để tìm mua được đã khó việc chọn được cây ban đầu khỏe mạnh từ ban đầu còn khó hơn. Bài viết sau đây sẽ cung cấp đầy đủ thông tin, giải pháp tốt nhất trong việc lựa chọn, trồng và chăm sóc (mẹo chọn cây khỏe đẹp ở phần cuối).\r\n\r\n', 0, 0.0),
(36, 'Cây Tróc Bạc Thủy Sinh', 129000.00, 100, 'thumb-trocbac.jpg,\r\ntrocbac1.jpg,\r\ntrocbac2.jpg,\r\ntrocbac3.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Khá nổi bật với sự pha trộn đặc sắc của lá giữa mà trắng và màu xanh. Cây đặc biệt dễ chăm sóc có thể thích nghi với mọi môi trường, rất phù hợp với người thích cây mà lười chăm sóc.\r\n', 4, 4, 'Bạn sẽ dễ dàng bắt gặp cây Tróc Bạc hay còn gọi là cây Muống Nhật, Trầu Bà Trắng ở đường hay ở những công trình của tòa nhà và văn phòng. Cây cực kỳ dễ sống và không phải chăm sóc nhiều có thể chịu hạn và chịu ẩm tốt. Đối với cây Tróc Bạc Thủy Sinh khi được đưa vào làm cây cảnh để bàn thì phiến lá sẽ nhỏ hơn và độ tinh tế sẽ cao hơn so với những cây trồng công trình. Cây có thể sống được cả trong những môi trường ẩm ướt, thiếu sáng, nên chính vì thấy nó thường chọn làm cây để bàn, trang trí nhà, trang trí chỗ bồn rửa tay, nhà tắm…\r\n\r\n\r\n', 0, 0.0),
(37, 'Cây Vạn Lộc Thủy Sinh', 199000.00, 100, 'thumb-vanloc.jpg,\r\nvanloc1.jpg,\r\nvanloc2.jpg,\r\nvanloc3.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Với sắc lá đỏ và sống tốt trong điều kiện thiếu sáng, cây Vạn Lộc thủy sinh cực kỳ phù hợp và cây nội thất, cây trang trí, làm quà tặng và cây phong thủy cho mệnh hỏa và thổ.\r\n', 4, 4, 'Đa phần cây cảnh có màu xanh hoặc màu trắng thuộc màu trung tính và ít sức hút nhưng cây Vạn Lộc thủy sinh lại có màu nóng và cực kỳ nổi bật trong tất cả cây cảnh, xét về cái đẹp và sự đặc sắc thì khó loại cây để bàn nào có thể vượt qua được Vạn Lộc. Cây có thể sống được trong môi trường văn phòng, ánh sáng yếu nên rất phù hợp làm cây cảnh để bàn, cây trang trí nội thất, quán cà phê, quà tặng.\r\n\r\n', 0, 0.0),
(38, 'Cây Sao Sáng Thủy Sinh', 0.00, 100, 'thumb-saosang1.jpg,\r\nsaosang1.jpg,\r\nsaosang2.jpg,saosang3.jpg', 399000.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Nhờ đặc điểm dễ chăm sóc, không cần ánh nắng nhiều, tán lá nổi bật nên cây Sao Sáng phù hợp làm cây trang trí nội thất, cây phong thủy và làm quà tặng.\r\n', 4, 4, 'Cây Sao Sáng thủy sinh được biết đến nhờ sự nổi bật ở phiến lá bên trong có sắc trắng và bên ngoài có màu xanh đậm, dựa vào đặc điểm này mà người Việt Nam đặt cho nó cái tên là cây Sao Sáng. Cây có sắc trắng đại diện mệnh kim, nên nó rất phù hợp làm cây phong thủy cho người mệnh Thủy và mệnh Kim.\r\n\r\n', 0, 0.0),
(39, 'Cây Trầu Bà Lá Lỗ', 249000.00, 100, 'thumb-traubalo.jpgm\r\ntraubalo1.jpg,\r\ntraubalo2.jpg,\r\ntraubalo3.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Trầu Bà Lá Lỗ có lá rất đặc biệt mà không giống với loại cây nào. Chính vì thế cây thường được chọn để tạo sự nổi bật và đặc sắc như trang trí nội thất, văn phòng, quà tặng, người chơi hệ lá...\r\n', 4, 4, 'Monstera obliqua var.expilata là tên khoa học của cây, hay ở Việt Nam còn được đặt 1 số tên như Cây Trầu Bà Lá Lỗ, Trầu Bà Cửa Sổ. Cây có hình dạng lá rất đặc biệt mà không dòng cây nào giống. Nên thường được chọn làm cây trang trí nội thất, cây chơi lá, quà tặng.\r\n\r\n', 0, 0.0),
(40, 'Cây Kim Ngân Thủy Sinh Gốc To', 200000.00, 100, 'thumb-Cay-kim-ngan-thuy-sinh-goc-to-1.jpg,\r\nCay-kim-ngan-thuy-sinh-goc-to-2.jpg,\r\nCay-kim-ngan-thuy-sinh-goc-to-3.jpg,\r\nCay-kim-ngan-thuy-sinh-goc-to-4.jpg\r\n', 0.00, 0, 3, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(41, 'Cây Bàng Nhật', 150000.00, 100, 'thumb-cay-bang-nhat-1.jpg,\r\ncay-bang-nhat-2.jpg,\r\ncay-bang-nhat-3.jpg,\r\ncay-bang-nhat-4.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(42, 'Cây Cau Nga Mi', 99000.00, 100, 'thumb-cay-cau-nga-mi-dep-1.jpg,\r\ncay-cau-nga-mi-dep-2.jpg,\r\ncay-cau-nga-mi-dep-3.jpg,\r\ncay-cau-nga-mi-dep-4.jpg\r\n', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(44, 'Cây Hạnh Phúc Gốc To Để Văn Phòng', 90000.00, 100, 'thumb-cay-hanh-phuc-goc-to-de-van-phong-1.jpg,\r\ncay-hanh-phuc-goc-to-de-van-phong-2.jpg,\r\ncay-hanh-phuc-goc-to-de-van-phong-3.jpg,\r\ncay-hanh-phuc-goc-to-de-van-phong-4.jpg\r\n', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(45, 'Cây Hoa Giấy Trong Hiên Nhà', 500000.00, 100, 'thumb-cay-hoa-giay-trong-hien-nha-1.jpg,\r\ncay-hoa-giay-trong-hien-nha-2.jpg,\r\ncay-hoa-giay-trong-hien-nha-3.jpg,\r\ncay-hoa-giay-trong-hien-nha-4.jpg\r\n', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(46, 'Cây Hoa Tường Vi Trắng', 100000.00, 100, 'thumb-cay-hoa-tuong-vi-trang-1.jpg,\r\ncay-hoa-tuong-vi-trang-2.jpg,\r\ncay-hoa-tuong-vi-trang-3.jpg,\r\ncay-hoa-tuong-vi-trang-4.jpg\r\n', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(47, 'Cây Kim Ngân Đơn Thân Lớn', 160000.00, 100, 'thumb-cay-kim-ngan-don-than-lon-1.jpg,\r\ncay-kim-ngan-don-than-lon-2.jpg,\r\ncay-kim-ngan-don-than-lon-3.jpg,\r\ncay-kim-ngan-don-than-lon-4.jpg\r\n', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(48, 'Cây Kim Ngân Thủy Sinh To', 300000.00, 100, 'thumb-Cay-kim-ngan-thuy-sinh-to-1.jpg,\r\nCay-kim-ngan-thuy-sinh-to-2.jpg,\r\nCay-kim-ngan-thuy-sinh-to-3.jpg,\r\nCay-kim-ngan-thuy-sinh-to-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(49, 'Cây Lọc Vừng Mùa Thu', 300000.00, 100, 'thumb-cay-loc-vung-mua-thu-1.jpg,\r\ncay-loc-vung-mua-thu-2.jpg,\r\ncay-loc-vung-mua-thu-3.jpg,\r\ncay-loc-vung-mua-thu-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(50, 'Cây Nguyệt Quế', 100000.00, 100, 'thumb-cay-nguyet-que-1.jpg,\r\ncay-nguyet-que-2.jpg,\r\ncay-nguyet-que-3.jpg,\r\ncay-nguyet-que-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(51, 'Cây Phát Tài Núi 3 Thân', 500000.00, 100, 'thumb-cay-phat-tai-nui-3-than-1.jpg,\r\ncay-phat-tai-nui-3-than-2.jpg,\r\ncay-phat-tai-nui-3-than-3.jpg,\r\ncay-phat-tai-nui-3-than-1.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(52, 'Cây Trầu Bà Thanh Xuân', 350000.00, 100, 'thumb-cay-trau-ba-thanh-xuan-dep-1.jpg,\r\ncay-trau-ba-thanh-xuan-dep-2.jpg,\r\ncay-trau-ba-thanh-xuan-dep-3.jpg,\r\ncay-trau-ba-thanh-xuan-dep-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(53, 'Cây Xoài Công Trình ', 250000.00, 100, 'thumb-cay-xoai-cong-trinh-giam-u-1.jpg,\r\ncay-xoai-cong-trinh-giam-u-2.jpg,\r\ncay-xoai-cong-trinh-giam-u-3.jpg,\r\ncay-xoai-cong-trinh-giam-u-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(54, 'Cây Đuôi Công Vân Vàng', 400000.00, 100, 'thumb-duoi-cong-van-vang-dep-2.jpg,\r\nduoi-cong-van-vang-dep-2.jpg,\r\nduoi-cong-van-vang-dep-3.jpg,\r\nduoi-cong-van-vang-dep-4.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 5, '', 0, 0.0),
(55, 'Cây Thiết Mộc Lan Đẹp', 250000.00, 100, 'thumb-thiet-moc-lan-dep-1.jpg,\r\nthiet-moc-lan-dep-2.jpg,\r\nthiet-moc-lan-dep-3.jpg,\r\nthiet-moc-lan-dep-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 5, 4, '', 0, 0.0),
(56, 'Sen Đá Cánh Bườm Bạc', 50000.00, 100, 'thumb-canh-buom-bac-1.jpg,\r\ncanh-buom-bac-2.jpg,\r\ncanh-buom-bac-3.jpg,\r\ncanh-buom-bac-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(57, 'Sen Đá Bánh Bao', 100000.00, 100, 'thumb-cay-sen-da-banh-bao-1.jpg,\ncay-sen-da-banh-bao-2.jpg,\ncay-sen-da-banh-bao-3.jpg,\ncay-sen-da-banh-bao-4jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(58, 'Sen Đá Cúc Tím', 40000.00, 100, 'thumb-cay-sen-da-cuc-tim-1.jpg,\r\ncay-sen-da-cuc-tim-2.jpg,\r\ncay-sen-da-cuc-tim-3.jpg,\r\ncay-sen-da-cuc-tim-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(59, 'Sen Đá Kim Cương', 200000.00, 100, 'thumb-cay-sen-da-kim-cuong-1.jpg,\r\ncay-sen-da-kim-cuong-2.jpg,\r\ncay-sen-da-kim-cuong-3.jpg,\r\ncay-sen-da-kim-cuong-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(60, 'Sen Đá Kim Cương Tím', 99000.00, 100, 'thumb-cay-sen-da-kim-cuong-tim-1.jpg,\r\ncay-sen-da-kim-cuong-tim-2.jpg,\r\ncay-sen-da-kim-cuong-tim-3.jpg,\r\ncay-sen-da-kim-cuong-tim-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(61, 'Sen Đá Liên Đài Hồng', 80000.00, 100, 'thumb-cay-sen-da-lien-dai-hong-1.jpg,\r\ncay-sen-da-lien-dai-hong-2.jpg,\r\ncay-sen-da-lien-dai-hong-3.jpg,\r\ncay-sen-da-lien-dai-hong-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(62, 'Sen Đá Nuda', 150000.00, 100, 'thumb-cay-sen-da-nuda-1.jpg,\r\ncay-sen-da-nuda-2.jpg,\r\ncay-sen-da-nuda-3.jpg,\r\ncay-sen-da-nuda-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(63, 'Sen Đá Sedum', 50000.00, 100, 'thumb-cay-sen-da-sedum-long-1.jpg,\r\ncay-sen-da-sedum-long-2.jpg,,\r\ncay-sen-da-sedum-long-3.jpg,\r\ncay-sen-da-sedum-long-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(64, 'Sen Đá Vát', 90000.00, 100, 'thumb-chau-sen-da-vat-1.jpg,\r\nchau-sen-da-vat-2.jpg,\r\nchau-sen-da-vat-3.jpg,\r\nchau-sen-da-vat-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(65, 'Sen Đá Bắp Cải Tím', 50000.00, 100, 'thumb-sen-da-bap-cai-tim-dep-1.jpg,\r\nsen-da-bap-cai-tim-dep-3.jpg,\r\nsen-da-bap-cai-tim-dep-3.jpg,\r\nsen-da-bap-cai-tim-dep-4.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(66, 'Sen Đá Giva', 30000.00, 100, 'thumb-sen-da-giva-1.jpg,\r\nsen-da-giva-1.jpg,\r\nsen-da-giva-1.jpg,', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
(67, 'Cây Kim Ngân Thủy Sinh', 350000.00, 100, 'thumb-Cay-kim-ngan-thuy-sinh-goc-to-1.jpg,\r\nCay-kim-ngan-thuy-sinh-goc-to-2.jpg,\r\nCay-kim-ngan-thuy-sinh-goc-to-3.jpg,\r\nCay-kim-ngan-thuy-sinh-goc-to-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(68, 'Cây Monstera Albo', 1500000.00, 100, 'thumb-cay-monstera-albo-1.jpg,\r\ncay-monstera-albo-2.jpg,\r\ncay-monstera-albo-3.jpg,\r\ncay-monstera-albo-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(69, 'Cây Nhất Mạt Hương', 300000.00, 100, 'thumb-cay-nhat-mat-huong-1.jpg,\r\ncay-nhat-mat-huong-2.jpg,\r\ncay-nhat-mat-huong-3.jpg,\r\ncay-nhat-mat-huong-4.jpg,', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(70, 'Cây Phú Quý Để Bàn', 150000.00, 100, 'thumb-cay-phu-quy-de-ban-1.jpg,\r\ncay-phu-quy-de-ban-2.jpg,\r\ncay-phu-quy-de-ban-3.jpg,\r\ncay-phu-quy-de-ban-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(71, 'Cây Trúc Nhật Vàng', 200000.00, 100, 'thumb-cay-truc-nhat-vang-1.jpg,\r\ncay-truc-nhat-vang-2.jpg,\r\ncay-truc-nhat-vang-3.jpg,\r\ncay-truc-nhat-vang-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(72, 'Cây Đuôi Công Vân Vàng', 450000.00, 100, 'thumb-duoi-cong-van-vang-dep-1.jpg,\r\nduoi-cong-van-vang-dep-2.jpg,\r\nduoi-cong-van-vang-dep-3.jpg,\r\nduoi-cong-van-vang-dep-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(73, 'Cây Bàng Singapore Nhiều Nhánh Cao', 490000.00, 100, 'thumb-cay-bang-singapore-nhieu-nhanh-cao-1m5-1.jpg,\r\ncay-bang-singapore-nhieu-nhanh-cao-1m5-2.jpg,\r\ncay-bang-singapore-nhieu-nhanh-cao-1m5-3.jpg,\r\ncay-bang-singapore-nhieu-nhanh-cao-1m5-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(74, 'Cây Kim Ngân Đơn Thân To', 590000.00, 100, 'thumb-cay-kim-ngan-don-than-to-1.jpg,\r\ncay-kim-ngan-don-than-to-2.jpg,\r\ncay-kim-ngan-don-than-to-3.jpg,\r\ncay-kim-ngan-don-than-to-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(75, 'Cây Kim Ngân Xoắn 3 Thân', 250000.00, 100, 'thumb-cay-kim-ngan-xoan-ba-than-1.jpg,\r\ncay-kim-ngan-xoan-ba-than-2.jpg,\r\ncay-kim-ngan-xoan-ba-than-3.jpg,\r\ncay-kim-ngan-xoan-ba-than-4.jpg,', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(76, 'Cây Phát Tài Núi', 250000.00, 100, 'thumb-cay-phat-tai-nui-dai-loc-1.jpg,\r\ncay-phat-tai-nui-dai-loc-2.jpg,\r\ncay-phat-tai-nui-dai-loc-3.jpg,\r\ncay-phat-tai-nui-dai-loc-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(77, 'Cây Quất Nhỏ', 199000.00, 100, 'thumb-cay-quat-nho-1.jpg,\r\ncay-quat-nho-2.jpg,\r\ncay-quat-nho-3.jpg,\r\ncay-quat-nho-4.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(78, 'Cây Thủy Tùng', 100000.00, 100, 'thumb-cay-thuy-tung-1.jpg,\r\ncay-thuy-tung-2.jpg,\r\ncay-thuy-tung-3.jpg,\r\ncay-thuy-tung-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(79, 'Cây Trầu Bà Lá Lỗ', 599000.00, 100, 'thumb-cay-trau-ba-la-lo-1.jpg,\r\ncay-trau-ba-la-lo-2.jpg,\r\ncay-trau-ba-la-lo-3.jpg,\r\ncay-trau-ba-la-lo-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0),
(80, 'Cây Kim Tiền Đẹp', 895000.00, 100, 'thumb-chau-cay-kim-tien-dep-mix-1.jpg,\r\nchau-cay-kim-tien-dep-mix-2.jpg,\r\nchau-cay-kim-tien-dep-mix-3.jpg,\r\nchau-cay-kim-tien-dep-mix-4.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 4, 4, '', 0, 0.0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_shipping`
--

CREATE TABLE `tbl_shipping` (
  `id_shipping` int(9) NOT NULL,
  `id_user` int(3) NOT NULL,
  `province_id` int(2) NOT NULL,
  `district_id` int(5) NOT NULL,
  `ward_id` int(7) NOT NULL,
  `detail_address` varchar(255) NOT NULL,
  `shipping_type` varchar(20) NOT NULL DEFAULT 'GHN'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_shipping`
--

INSERT INTO `tbl_shipping` (`id_shipping`, `id_user`, `province_id`, `district_id`, `ward_id`, `detail_address`, `shipping_type`) VALUES
(1, 11, 205, 1540, 440507, '19/7c Đông Tác', 'GHN'),
(2, 38, 263, 2039, 130714, 'Long thành', 'GHN'),
(3, 46, 0, 0, 0, '', 'GHN'),
(4, 51, 269, 2073, 80411, 'Phường Tân Hiệp', 'GHN'),
(5, 52, 220, 1572, 550110, 'Hẻm 51', 'GHN');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_slider`
--

CREATE TABLE `tbl_slider` (
  `id_slider` int(11) NOT NULL,
  `title_slider` varchar(255) NOT NULL,
  `img_slider` varchar(255) NOT NULL,
  `content_slider` text NOT NULL,
  `date_slider` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_slider`
--

INSERT INTO `tbl_slider` (`id_slider`, `title_slider`, `img_slider`, `content_slider`, `date_slider`) VALUES
(3, 'Cây Cảnh giá tốt tại cửa hàng', 'Banner-Slider.jpg', '<div>\r\n<div>Xgarden Store với nhiều loại cây cảnh, từ các quốc gia, với các phân khúc giá phù hợp cho nhiều đổi tượng khách hàng, ghé thăm cửa hàng của chúng tôi để nhận nhiều ưu đãi hấp dẫn!</div>\r\n</div>', '2023-04-08 16:36:18'),
(4, 'Cây Cảnh giá tốt tại cửa hàng', 'banner2.jpg', '<div>\r\n<div>Xgarden Store với nhiều loại cây cảnh, từ các quốc gia, với các phân khúc giá phù hợp cho nhiều đổi tượng khách hàng, ghé thăm cửa hàng của chúng tôi để nhận nhiều ưu đãi hấp dẫn!</div>\r\n</div>', '2023-04-08 16:57:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_vnpay`
--

CREATE TABLE `tbl_vnpay` (
  `id_vnpay` int(9) NOT NULL,
  `order_id` int(4) NOT NULL,
  `amount` int(11) NOT NULL,
  `bankcode` varchar(10) NOT NULL,
  `banktransno` int(10) NOT NULL,
  `cardtype` varchar(10) NOT NULL,
  `orderinfo` varchar(255) NOT NULL,
  `paydate` datetime NOT NULL,
  `tmncode` varchar(10) NOT NULL,
  `transaction_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_vnpay`
--

INSERT INTO `tbl_vnpay` (`id_vnpay`, `order_id`, `amount`, `bankcode`, `banktransno`, `cardtype`, `orderinfo`, `paydate`, `tmncode`, `transaction_no`) VALUES
(4, 46, 2147483647, 'NCB', 0, 'ATM', 'Asperiores inventore', '2023-03-25 16:30:17', 'ED75PCEI', 13976487),
(5, 47, 1275300000, 'NCB', 0, 'ATM', 'Okie VNpay', '2023-03-25 16:37:43', 'ED75PCEI', 13976491),
(6, 48, 1275300000, 'NCB', 0, 'ATM', 'Vel est aut itaque d', '2023-03-25 17:05:20', 'ED75PCEI', 13976495),
(9, 51, 2147483647, 'NCB', 0, 'ATM', 'Deserunt voluptate q', '2023-03-25 19:34:24', 'ED75PCEI', 13976513),
(10, 52, 1878100000, 'NCB', 0, 'ATM', 'Mollitia placeat in', '2023-03-25 19:37:38', 'ED75PCEI', 13976515),
(12, 54, 881100000, 'NCB', 0, 'ATM', 'Sunt dolor quam qua', '2023-03-25 19:40:19', 'ED75PCEI', 13976517),
(13, 55, 1044050000, 'NCB', 0, 'ATM', 'Ipsum quisquam mole', '2023-03-25 19:41:40', 'ED75PCEI', 13976518),
(14, 56, 551080000, 'NCB', 0, 'ATM', 'Fugiat nisi culpa ', '2023-03-25 19:43:03', 'ED75PCEI', 13976520),
(15, 58, 981050000, 'NCB', 0, 'ATM', 'Est doloribus lauda', '2023-03-25 20:03:29', 'ED75PCEI', 13976522),
(16, 59, 2147483647, 'NCB', 0, 'ATM', 'Thanh toán tối ưu', '2023-03-25 20:23:56', 'ED75PCEI', 13976525),
(17, 60, 2147483647, 'NCB', 0, 'ATM', 'Cẩn thận nhé', '2023-03-26 11:38:28', 'ED75PCEI', 13976581),
(18, 61, 2147483647, 'NCB', 0, 'ATM', 'Đặt hàng oke', '2023-03-26 13:55:47', 'ED75PCEI', 13976599),
(19, 63, 2147483647, 'NCB', 0, 'ATM', '123', '2023-03-27 14:05:04', 'ED75PCEI', 13977097),
(20, 68, 634235000, 'NCB', 0, 'ATM', 'Hihi', '2023-03-28 15:01:19', 'ED75PCEI', 13978081),
(22, 71, 2147483647, 'NCB', 0, 'ATM', 'Hàng dễ vỡ giao hàng cẩn thận', '2023-03-28 15:17:20', 'ED75PCEI', 13978105),
(25, 77, 871151500, 'NCB', 0, 'ATM', 'hàng dễ vỡ giao hàng cẩn thận', '2023-03-30 16:37:51', 'ED75PCEI', 13979867),
(27, 81, 2147483647, 'NCB', 0, 'ATM', 'Good', '2023-04-01 15:20:08', 'ED75PCEI', 13980915),
(29, 90, 2147483647, 'NCB', 0, 'ATM', 'fdsfsdfsd', '2023-04-09 10:24:55', 'ED75PCEI', 13986022),
(30, 96, 1156496300, 'NCB', 0, 'ATM', 'fdsfsdfsdf', '2023-04-10 14:46:18', 'ED75PCEI', 13986666),
(31, 97, 2147483647, 'NCB', 0, 'ATM', 'HIhi', '2023-04-11 08:27:07', 'ED75PCEI', 13987110),
(32, 99, 2147483647, 'NCB', 0, 'ATM', 'HIhi', '2023-04-12 09:21:06', 'ED75PCEI', 13988253),
(33, 104, 2069098300, 'NCB', 0, 'ATM', 'ahihi', '2023-04-13 19:56:34', 'ED75PCEI', 13990019);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_banner`
--
ALTER TABLE `tbl_banner`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_binhluan`
--
ALTER TABLE `tbl_binhluan`
  ADD PRIMARY KEY (`ma_binhluan`);

--
-- Chỉ mục cho bảng `tbl_blog`
--
ALTER TABLE `tbl_blog`
  ADD PRIMARY KEY (`blog_id`),
  ADD KEY `fk_blogcate_blog` (`blogcate_id`);

--
-- Chỉ mục cho bảng `tbl_blog_cate`
--
ALTER TABLE `tbl_blog_cate`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_blog_comment`
--
ALTER TABLE `tbl_blog_comment`
  ADD PRIMARY KEY (`id_bl`);

--
-- Chỉ mục cho bảng `tbl_coupon`
--
ALTER TABLE `tbl_coupon`
  ADD PRIMARY KEY (`id_coupon`);

--
-- Chỉ mục cho bảng `tbl_danhgiasp`
--
ALTER TABLE `tbl_danhgiasp`
  ADD PRIMARY KEY (`id_review`);

--
-- Chỉ mục cho bảng `tbl_danhmuc`
--
ALTER TABLE `tbl_danhmuc`
  ADD PRIMARY KEY (`ma_danhmuc`);

--
-- Chỉ mục cho bảng `tbl_danhmucphu`
--
ALTER TABLE `tbl_danhmucphu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_dmphu_dmchinh` (`iddm`);

--
-- Chỉ mục cho bảng `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_nguoidung`
--
ALTER TABLE `tbl_nguoidung`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_nguoidung` (`iduser`);

--
-- Chỉ mục cho bảng `tbl_order_detail`
--
ALTER TABLE `tbl_order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_reply_blog_comments`
--
ALTER TABLE `tbl_reply_blog_comments`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_reply_comments_product`
--
ALTER TABLE `tbl_reply_comments_product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_reply_reviews`
--
ALTER TABLE `tbl_reply_reviews`
  ADD PRIMARY KEY (`id_reply`);

--
-- Chỉ mục cho bảng `tbl_sanpham`
--
ALTER TABLE `tbl_sanpham`
  ADD PRIMARY KEY (`masanpham`);

--
-- Chỉ mục cho bảng `tbl_shipping`
--
ALTER TABLE `tbl_shipping`
  ADD PRIMARY KEY (`id_shipping`),
  ADD KEY `fk_shipping_nguoidung` (`id_user`);

--
-- Chỉ mục cho bảng `tbl_slider`
--
ALTER TABLE `tbl_slider`
  ADD PRIMARY KEY (`id_slider`);

--
-- Chỉ mục cho bảng `tbl_vnpay`
--
ALTER TABLE `tbl_vnpay`
  ADD PRIMARY KEY (`id_vnpay`),
  ADD KEY `fk_vnpay_order` (`order_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_banner`
--
ALTER TABLE `tbl_banner`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `tbl_binhluan`
--
ALTER TABLE `tbl_binhluan`
  MODIFY `ma_binhluan` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `tbl_blog`
--
ALTER TABLE `tbl_blog`
  MODIFY `blog_id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `tbl_blog_cate`
--
ALTER TABLE `tbl_blog_cate`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `tbl_blog_comment`
--
ALTER TABLE `tbl_blog_comment`
  MODIFY `id_bl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT cho bảng `tbl_coupon`
--
ALTER TABLE `tbl_coupon`
  MODIFY `id_coupon` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `tbl_danhgiasp`
--
ALTER TABLE `tbl_danhgiasp`
  MODIFY `id_review` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `tbl_danhmuc`
--
ALTER TABLE `tbl_danhmuc`
  MODIFY `ma_danhmuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT cho bảng `tbl_danhmucphu`
--
ALTER TABLE `tbl_danhmucphu`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT cho bảng `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tbl_nguoidung`
--
ALTER TABLE `tbl_nguoidung`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT cho bảng `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT cho bảng `tbl_order_detail`
--
ALTER TABLE `tbl_order_detail`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT cho bảng `tbl_reply_blog_comments`
--
ALTER TABLE `tbl_reply_blog_comments`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_reply_comments_product`
--
ALTER TABLE `tbl_reply_comments_product`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_reply_reviews`
--
ALTER TABLE `tbl_reply_reviews`
  MODIFY `id_reply` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `tbl_sanpham`
--
ALTER TABLE `tbl_sanpham`
  MODIFY `masanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT cho bảng `tbl_shipping`
--
ALTER TABLE `tbl_shipping`
  MODIFY `id_shipping` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `tbl_vnpay`
--
ALTER TABLE `tbl_vnpay`
  MODIFY `id_vnpay` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tbl_blog`
--
ALTER TABLE `tbl_blog`
  ADD CONSTRAINT `fk_blogcate_blog` FOREIGN KEY (`blogcate_id`) REFERENCES `tbl_blog_cate` (`id`);

--
-- Các ràng buộc cho bảng `tbl_danhmucphu`
--
ALTER TABLE `tbl_danhmucphu`
  ADD CONSTRAINT `fk_dmphu_dmchinh` FOREIGN KEY (`iddm`) REFERENCES `tbl_danhmuc` (`ma_danhmuc`);

--
-- Các ràng buộc cho bảng `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD CONSTRAINT `fk_order_nguoidung` FOREIGN KEY (`iduser`) REFERENCES `tbl_nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `tbl_shipping`
--
ALTER TABLE `tbl_shipping`
  ADD CONSTRAINT `fk_shipping_nguoidung` FOREIGN KEY (`id_user`) REFERENCES `tbl_nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `tbl_vnpay`
--
ALTER TABLE `tbl_vnpay`
  ADD CONSTRAINT `fk_vnpay_order` FOREIGN KEY (`order_id`) REFERENCES `tbl_order` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
