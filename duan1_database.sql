-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 06, 2024 lúc 07:13 PM
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
(1, 'Nên tưới cây bằng nước máy hay nước đun sôi để nguội?\r\n', 'Vì sao lại lựa chọn hai loại nước này? Vì nếu bạn ở thành phố và văn phòng thì thường chỉ có hai lựa chọn này là tiện nhất. Cả nước máy và nước đun sôi đều có những ưu và nhược điểm riêng khi dùng để tưới cây. Dưới đây là một số so sánh để bạn có thể đưa ra lựa chọn phù hợp nhất:\r\n\r\nnên tưới nước máy hay nước đun sôi để nguội\r\nNên tưới nước đun sôi để nguội hoặc nước máy để 1-2 ngày\r\n\r\n\r\nNước máy hay nước đun sôi tốt hơn cho cây\r\nTrong 2 loại nước thì nước đun sôi để nguội được xem là lựa chọn tốt hơn cho cây. Vì đã loại bỏ được phần lớn clo. Tuy nhiên nếu bạn muốn tiết kiệm thời gian, có thể dùng nước máy lắng khoảng 1-2 ngày rồi tưới cho cây.\r\n\r\nNước máy\r\nƯu điểm:\r\nTiện lợi, dễ dàng sử dụng.\r\nCó sẵn trong mọi nhà.\r\nNhược điểm:\r\nChứa clo: Clo được thêm vào nước máy để diệt khuẩn, nhưng lại có thể gây hại cho rễ cây, làm chậm quá trình phát triển của cây.\r\nCác chất hóa học khác: Ngoài clo, nước máy còn có thể chứa các chất hóa học khác như flo, kim loại nặng,… ảnh hưởng đến chất lượng đất và cây trồng.\r\nNước đun sôi để nguội\r\nƯu điểm:\r\nLoại bỏ clo: Quá trình đun sôi giúp loại bỏ phần lớn clo có trong nước, giảm thiểu tác hại đến cây.\r\nAn toàn: Nước đun sôi để nguội thường được xem là an toàn hơn cho cây trồng.\r\nNhược điểm:\r\nMất thời gian: Quá trình đun sôi và để nguội nước khá tốn thời gian.\r\nMất các khoáng chất: Đun sôi có thể làm mất đi một số khoáng chất có lợi cho cây.\r\nNhững loại nước tưới cây tốt nhất\r\nKhi chăm sóc cây cảnh, việc chọn đúng loại nước để tưới cây là rất quan trọng để đảm bảo cây phát triển khỏe mạnh. Dưới đây là một số loại nước tưới cây tốt nhất:\r\n\r\n1. Nước mưa\r\nĐây là nguồn nước tự nhiên và tốt nhất cho cây trồng vì nó không chứa chất hóa học như clo hay fluoride, thường có trong nước máy. Nước mưa còn có độ pH trung tính, rất lý tưởng cho cây cảnh. Tuy nhiên ở một số khu vực ô nhiễm, nước mưa có thể chứa chất độc hại cần lưu ý.\r\n\r\n2. Nước gạo\r\nNước vo gạo chứa nhiều dưỡng chất như vitamin B và khoáng chất, rất tốt cho cây cảnh. Bạn có thể dùng nước vo gạo để tưới cây khoảng 1-2 lần/tuần.\r\n\r\n3. Nước giếng\r\nNước giếng là nguồn nước ngầm tự nhiên, thường không chứa hóa chất và rất phù hợp để tưới cây. Tuy nhiên, bạn cần kiểm tra độ pH và hàm lượng khoáng chất trong nước giếng để đảm bảo nó phù hợp với cây trồng của bạn.\r\n\r\n4. Nước trà loãng\r\nTrà loãng chứa nhiều chất chống oxy hóa và một lượng nhỏ caffeine, có thể kích thích sự phát triển của cây. Tuy nhiên, chỉ nên dùng trà không đường và không sữa để tránh làm hỏng đất và rễ cây.\r\n\r\n5. Nước từ vỏ trứng\r\nNước ngâm vỏ trứng là nguồn canxi tự nhiên giúp cây cứng cáp và phát triển rễ khỏe mạnh. Bạn chỉ cần ngâm vỏ trứng trong nước vài ngày rồi dùng nước này để tưới cây.\r\n\r\n6. Nước từ bể cá\r\nNước trong bể cá chứa nhiều chất dinh dưỡng từ phân cá và thức ăn dư thừa, là nguồn nước tự nhiên rất tốt cho cây trồng. Tuy nhiên, bạn cần đảm bảo nước không quá bẩn hoặc chứa nhiều chất hóa học để tránh làm hại cây.\r\n\r\n7. Nước lên men từ trái cây\r\nBạn có thể sử dụng nước lên men từ trái cây như chuối, cam, hoặc táo để tưới cây. Nước lên men này chứa nhiều enzyme và dưỡng chất, giúp cây hấp thụ dinh dưỡng dễ dàng hơn.\r\n\r\n8. Nước từ các loại rau củ\r\nKhi luộc rau củ, bạn có thể giữ lại nước luộc để nguội và dùng tưới cây. Nước này chứa nhiều vitamin và khoáng chất có lợi, giúp cây phát triển tốt hơn.\r\n\r\nMột số lưu ý khi tưới cây\r\nThời điểm tưới: Nên tưới cây vào sáng sớm hoặc chiều mát để tránh nước bốc hơi nhanh và giảm thiểu sự tác động của ánh nắng mặt trời lên cây.\r\nLượng nước: Tưới đủ ẩm cho đất, không nên tưới quá nhiều hoặc quá ít.\r\nCách tưới: Tưới trực tiếp vào gốc cây, để tránh làm ướt lá và tạo điều kiện cho nấm bệnh phát triển.\r\nKết luận:\r\n\r\nViệc lựa chọn loại nước tưới cây phụ thuộc vào nhiều yếu tố như loại cây, điều kiện thời tiết, và sự tiện lợi của người trồng. Tuy nhiên, nếu có điều kiện, bạn nên ưu tiên sử dụng nước đun sôi để nguội hoặc nước mưa để đảm bảo sức khỏe cho cây trồng.', 'thumb-chamsoc.jpg', '2024-11-29 02:48:35', 1, 'tưới cây', 1),
(2, '8 yếu tố giúp cây trồng trong nhà luôn xanh tốt\r\n', 'Trong thời đại hiện nay, cây trồng trong nhà không chỉ để trang trí mà còn mang lại nhiều lợi ích cho sức khỏe và tinh thần của con người. Tuy nhiên, để cây trồng trong nhà luôn xanh tốt và phát triển khỏe mạnh, chúng ta cần chú ý đến nhiều yếu tố khác nhau. Bài viết này sẽ giúp bạn hiểu rõ hơn về các yếu tố quan trọng và cách chăm sóc cây trồng trong nhà một cách hiệu quả.\r\n\r\ncác yếu tố giúp cây trồng trong nhà xanh tốt\r\n\r\n8 yếu tố giúp cây trồng trong nhà luôn xanh tốt\r\nNếu bạn có thể đảm bảo được 8 yếu tố này thì cây của bạn sẽ luôn xanh tốt và phát triển mạnh mẽ.\r\n\r\n1. Ánh sáng\r\nÁnh sáng là yếu tố quan trọng hàng đầu đối với sự phát triển của cây trồng. Mỗi loại cây có nhu cầu ánh sáng khác nhau, từ ánh sáng trực tiếp đến ánh sáng gián tiếp hay ánh sáng yếu. Việc hiểu rõ nhu cầu ánh sáng của từng loại cây giúp bạn đặt chúng ở vị trí phù hợp trong nhà.\r\n\r\nVí dụ, các loại cây như cây lưỡi hổ, cây kim tiền, và cây dương xỉ thường ưa thích ánh sáng gián tiếp và có thể sống tốt trong điều kiện ánh sáng yếu. Ngược lại, những cây như cây xương rồng, cây bàng Singapore, và cây lô hội cần ánh sáng trực tiếp để phát triển tốt.\r\n\r\nMột số mẹo để cung cấp đủ ánh sáng cho cây trồng trong nhà bao gồm:\r\n\r\nĐặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên.\r\nSử dụng rèm cửa để điều chỉnh mức độ ánh sáng trực tiếp.\r\nSử dụng đèn LED chuyên dụng cho cây trồng nếu nhà bạn không có đủ ánh sáng tự nhiên.\r\n2. Nước\r\nCung cấp nước đúng cách là yếu tố then chốt giúp cây trồng phát triển khỏe mạnh. Mỗi loại cây có nhu cầu nước khác nhau, và việc tưới nước không đúng cách có thể gây hại cho cây. Để xác định khi nào cần tưới nước, bạn có thể kiểm tra độ ẩm của đất bằng cách chọc ngón tay vào đất khoảng 2-3 cm. Nếu đất còn ẩm, bạn không cần tưới thêm nước. Ngược lại, nếu đất khô, đó là lúc bạn cần tưới nước cho cây.\r\n\r\nMột số lưu ý khi tưới nước cho cây trồng trong nhà:\r\n\r\nSử dụng nước ở nhiệt độ phòng để tránh sốc nhiệt cho cây.\r\nĐảm bảo chậu cây có lỗ thoát nước để tránh ngập úng.\r\nTưới nước đều khắp bề mặt đất để đảm bảo rễ cây hấp thụ đủ nước.\r\n3. Độ ẩm\r\nĐộ ẩm không khí cũng ảnh hưởng lớn đến sự phát triển của cây trồng trong nhà. Đa số cây trồng trong nhà ưa thích môi trường ẩm. Để duy trì độ ẩm cần thiết, bạn có thể sử dụng máy tạo độ ẩm hoặc phun sương nhẹ lên lá cây hàng ngày. Đặc biệt, vào mùa đông khi không khí trong nhà thường khô hơn, việc duy trì độ ẩm trở nên quan trọng hơn bao giờ hết.\r\n\r\n4. Nhiệt độ\r\nNhiệt độ lý tưởng cho cây trồng trong nhà thường dao động từ 18-24 độ C. Tuy nhiên, mỗi loại cây có thể chịu được nhiệt độ khác nhau. Ví dụ, các loại cây nhiệt đới như cây trầu bà, cây dương xỉ, và cây lan ý thường ưa thích nhiệt độ trung bình, trong khi các loại cây xương rồng và cây sen đá có thể chịu được nhiệt độ thấp hơn. Tránh đặt cây gần các thiết bị tỏa nhiệt như máy điều hòa, lò sưởi, hoặc cửa sổ có ánh nắng mặt trời trực tiếp chiếu vào, vì nhiệt độ thay đổi đột ngột có thể gây sốc cho cây.\r\n\r\n5. Dinh dưỡng\r\nCây trồng trong nhà cần dinh dưỡng để phát triển khỏe mạnh. Việc bón phân đều đặn giúp cây có đủ dưỡng chất cần thiết. Bạn nên chọn loại phân bón phù hợp với từng loại cây và tuân theo hướng dẫn sử dụng để tránh bón quá nhiều gây hại cho cây. Thường xuyên kiểm tra lá cây để phát hiện sớm các dấu hiệu thiếu dinh dưỡng như lá vàng, lá khô, hoặc cây còi cọc.\r\n\r\nMột số loại phân bón phổ biến cho cây trồng trong nhà:\r\n\r\nPhân bón hữu cơ: Cung cấp dinh dưỡng tự nhiên và an toàn cho cây.\r\nPhân bón hóa học: Dễ sử dụng và hiệu quả nhanh chóng, nhưng cần tuân theo hướng dẫn sử dụng cẩn thận.\r\nPhân bón lỏng: Dễ dàng hấp thụ qua rễ và lá cây.\r\n6. Đất\r\nĐất là môi trường sống và cung cấp dinh dưỡng cho cây trồng. Sử dụng loại đất phù hợp với từng loại cây để đảm bảo cây có môi trường sinh trưởng tốt nhất. Đất cần có khả năng thoát nước tốt và giàu dinh dưỡng. Bạn có thể mua các loại đất chuyên dụng cho cây trồng trong nhà từ các cửa hàng cây cảnh hoặc tự pha trộn đất bằng các thành phần như đất thịt, phân trùn quế, và cát.\r\n\r\n7. Cắt tỉa và chăm sóc\r\nCắt tỉa và chăm sóc định kỳ giúp cây luôn tươi tốt và tránh được các vấn đề về bệnh tật hay sâu bệnh. Hãy thường xuyên kiểm tra cây để phát hiện sớm các dấu hiệu bệnh tật như lá vàng, lá khô, hay cây còi cọc. Loại bỏ các lá và cành bị hư hại để cây tập trung dinh dưỡng vào các phần khỏe mạnh. Ngoài ra, bạn cũng nên lau lá cây định kỳ để loại bỏ bụi bẩn, giúp cây hấp thụ ánh sáng tốt hơn.\r\n\r\n8. Chọn cây phù hợp\r\nMỗi loại cây cảnh đều có yêu cầu chăm sóc khác nhau. Việc chọn cây phù hợp với điều kiện ánh sáng, nhiệt độ, và độ ẩm trong nhà của bạn là yếu tố quan trọng giúp cây phát triển tốt nhất. Dưới đây là một số loại cây phổ biến và dễ chăm sóc cho người mới bắt đầu:\r\n\r\nCây lưỡi hổ (Sansevieria): Cây này chịu được ánh sáng yếu và không cần tưới nước thường xuyên.\r\nCây kim tiền (Zamioculcas zamiifolia): Cây này cũng ưa ánh sáng gián tiếp và dễ chăm sóc.\r\nCây dương xỉ (Nephrolepis exaltata): Cây này thích môi trường ẩm và ánh sáng gián tiếp.\r\nCây xương rồng (Cactaceae): Cây này cần ánh sáng trực tiếp và ít nước.\r\nCây bàng Singapore (Ficus lyrata): Cây này ưa ánh sáng trực tiếp và nhiệt độ trung bình.\r\nKết luận\r\nChăm sóc cây trồng trong nhà là một quá trình đòi hỏi sự kiên nhẫn và hiểu biết về nhu cầu của từng loại cây. Bằng cách chú ý đến các yếu tố như ánh sáng, nước, độ ẩm, nhiệt độ, dinh dưỡng, đất, và chăm sóc định kỳ, bạn sẽ giúp cây trồng trong nhà luôn xanh tốt và phát triển khỏe mạnh. Không chỉ làm đẹp không gian sống, cây trồng còn mang lại nhiều lợi ích cho sức khỏe và tinh thần, giúp bạn cảm thấy thoải mái và thư giãn hơn trong cuộc sống hàng ngày.', 'thumb-tuoicay.jpg', '2024-11-29 02:49:31', 1, 'chăm sóc', 1),
(3, 'Chăm sóc cây thủy sinh\r\n', 'Chăm sóc cây thủy sinh\r\nCây thủy sinh có 2 loại một là loại sống dưới nước ở mặt đáy thường là một số loại rêu, tảo…Loại 2 là loại chỉ có phần rễ được tiếp xúc với nước thường được áp dụng để trồng thủy canh, các loại cây cảnh văn phòng, trong nhà. Thì trong bài viết này Web Cây Cảnh xin chia sẻ về cách chăm sóc các loại cây cảnh văn phòng, trong nhà thủy sinh.\r\n\r\nCách chăm sóc cây thủy sinh\r\nƯu điểm của cây thủy sinh là sạch sẽ và không mất công chăm sóc nhiều. Chúng ta chỉ cần chú ý vào thời điểm ban đầu, thời điểm mà cây thay đổi môi trường sống.\r\n\r\nNơi đặt cây thủy sinh\r\nNên đặt cây ở nơi thoáng gió, dưới ánh điện hoặc có ánh nắng nhẹ buổi sáng sớm và chiều muộn. Tránh để cây dưới nắng gắt, nơi có hơi nóng tỏa ra như ở cục nóng điều hòa, sau cpu máy tính…Vị trí đặt cây khá quan trọng trong việc chăm sóc cây thủy sinh mà bạn cần lưu ý\r\n\r\nNước\r\nBạn cần để ý nước của cây thủy sinh, nhất là thời gian ban đầu nếu nước có mùi thì bạn cần thay nước luôn và loại bỏ rễ thối. Nếu bạn không có thời gian để ý thì thời điểm ban đầu cứ 1 tuần bạn thay nước một lần.\r\n\r\nKhi thay nước nên đổ nước đi, đổ nước lại nhiều lần để tạo không khí trong nước, cây sẽ phát triển rễ tốt hơn\r\n\r\nDưỡng chất\r\nBạn cần thêm dung dịch thủy canh vào hàng tuần để giúp cây có đủ chất dinh dưỡng, sao cho PPM( nồng độ dung dịch dinh dưỡng ) trong nước trong khoảng từ 600 -1000 ppm là được. PH dao động từ 5,5 – 6,5.\r\n\r\nLưu ý:\r\n\r\n– Không để cây thủy sinh cửa sổ nắng vì cây thường trong bình thủy sinh, nắng gắt cộng với chiếu qua kính và bình thủy tinh làm môi trường nước nóng lên dễ làm chết cây.\r\n\r\n– Không để nước trong bình đục và có mùi lạ, cần thay nước ngay khi thấy hiện tượng\r\n\r\n– Nên đổ nước ngập rễ không đổ ngập thân cây, vì chỉ có rễ mới hút nước, phần thân cây không hút được nước', 'thumb-chamsoc.jpg', '2024-11-29 02:52:05', 3, 'thủy sinh', 1),
(5, 'Chăm sóc cây thủy sinh\r\n', 'Chăm sóc cây thủy sinh\r\nCây thủy sinh có 2 loại một là loại sống dưới nước ở mặt đáy thường là một số loại rêu, tảo…Loại 2 là loại chỉ có phần rễ được tiếp xúc với nước thường được áp dụng để trồng thủy canh, các loại cây cảnh văn phòng, trong nhà. Thì trong bài viết này Web Cây Cảnh xin chia sẻ về cách chăm sóc các loại cây cảnh văn phòng, trong nhà thủy sinh.\r\n\r\nCách chăm sóc cây thủy sinh\r\nƯu điểm của cây thủy sinh là sạch sẽ và không mất công chăm sóc nhiều. Chúng ta chỉ cần chú ý vào thời điểm ban đầu, thời điểm mà cây thay đổi môi trường sống.\r\n\r\nNơi đặt cây thủy sinh\r\nNên đặt cây ở nơi thoáng gió, dưới ánh điện hoặc có ánh nắng nhẹ buổi sáng sớm và chiều muộn. Tránh để cây dưới nắng gắt, nơi có hơi nóng tỏa ra như ở cục nóng điều hòa, sau cpu máy tính…Vị trí đặt cây khá quan trọng trong việc chăm sóc cây thủy sinh mà bạn cần lưu ý\r\n\r\nNước\r\nBạn cần để ý nước của cây thủy sinh, nhất là thời gian ban đầu nếu nước có mùi thì bạn cần thay nước luôn và loại bỏ rễ thối. Nếu bạn không có thời gian để ý thì thời điểm ban đầu cứ 1 tuần bạn thay nước một lần.\r\n\r\nKhi thay nước nên đổ nước đi, đổ nước lại nhiều lần để tạo không khí trong nước, cây sẽ phát triển rễ tốt hơn\r\n\r\nDưỡng chất\r\nBạn cần thêm dung dịch thủy canh vào hàng tuần để giúp cây có đủ chất dinh dưỡng, sao cho PPM( nồng độ dung dịch dinh dưỡng ) trong nước trong khoảng từ 600 -1000 ppm là được. PH dao động từ 5,5 – 6,5.\r\n\r\nLưu ý:\r\n\r\n– Không để cây thủy sinh cửa sổ nắng vì cây thường trong bình thủy sinh, nắng gắt cộng với chiếu qua kính và bình thủy tinh làm môi trường nước nóng lên dễ làm chết cây.\r\n\r\n– Không để nước trong bình đục và có mùi lạ, cần thay nước ngay khi thấy hiện tượng\r\n\r\n– Nên đổ nước ngập rễ không đổ ngập thân cây, vì chỉ có rễ mới hút nước, phần thân cây không hút được nước', 'thumb-chamsoc.jpg', '2024-11-29 02:52:25', 2, 'thủy sinh', 1),
(6, '10 loại cây trừ tà trong tháng cô hồn\r\n', 'Tháng cô hồn, hay tháng 7 âm lịch, là thời điểm mà nhiều người quan niệm là cửa địa ngục mở, các vong linh trở về dương thế. Để bảo vệ gia đình và xua đuổi tà khí, nhiều người tìm đến các  10 loại cây được cho là có khả năng trừ tà.\r\nNhững điều biết về tháng cô hồn\r\nTháng cô hồn năm 2024 rơi vào tháng 7 âm lịch, kéo dài từ ngày 4/8/2024 đến ngày 2/9/2024\r\nNguồn Gốc và Ý Nghĩa\r\nNguồn gốc: Tín ngưỡng này có nguồn gốc từ Đạo giáo Trung Quốc, sau đó được truyền bá rộng rãi sang các nước láng giềng.\r\nÝ nghĩa: Tháng cô hồn là dịp để con người thể hiện lòng thành kính đối với tổ tiên, cầu siêu cho những linh hồn không nơi nương tựa. Đồng thời, đây cũng là thời gian để mọi người nhắc nhở nhau sống tốt, làm việc thiện để tránh những điều xui xẻo.\r\nNhững Điều Kiêng Kỵ\r\nTrong tháng cô hồn, người ta thường kiêng kỵ một số việc như:\r\n\r\nĐi chơi đêm: Người ta tin rằng, vào ban đêm, các vong hồn sẽ hoạt động mạnh hơn, vì vậy nên hạn chế ra ngoài vào thời điểm này.\r\nĐi qua nghĩa địa: Nghĩa địa được xem là nơi cư ngụ của các vong hồn, nên việc đi qua vào ban đêm là điều không nên.\r\nGiặt giũ vào ban đêm: Tiếng nước chảy vào ban đêm có thể thu hút các vong hồn.\r\nĐi bơi lội: Nước được xem là nơi trú ngụ của các sinh vật siêu nhiên.\r\nMang đồ lót màu đỏ: Màu đỏ được cho là màu sắc thu hút ma quỷ.\r\nNhững Việc Nên Làm\r\nCúng bái: Cúng bái tổ tiên và các vong hồn là việc làm cần thiết trong tháng cô hồn.\r\nLàm việc thiện: Thực hiện các hành động tốt như bố thí, làm từ thiện để tích đức.\r\nSống tốt: Sống lương thiện, tránh làm điều ác để không bị các vong hồn quấy nhiễu.\r\nVì sao người ta tin vào cây trừ tà?\r\nTín ngưỡng dân gian: Quan niệm về cây trừ tà xuất phát từ tín ngưỡng dân gian, dựa trên những quan sát về hình dáng, đặc tính của cây và sự liên tưởng đến các yếu tố tâm linh.\r\nPhong thủy: Trong phong thủy, cây xanh đóng vai trò quan trọng trong việc cân bằng âm dương, thu hút năng lượng tích cực và xua đuổi tà khí.\r\nYếu tố tâm lý: Việc trồng cây mang lại cảm giác an tâm, yên bình và giúp con người cảm thấy được bảo vệ.\r\nTổng hợp 10 loại cây trừ tà trong tháng cô hồn\r\nTín ngưỡng về cây trừ tà là một phần không thể thiếu trong văn hóa dân gian Việt Nam, đặc biệt là trong những dịp như tháng cô hồn. Người ta tin rằng, một số loại cây có khả năng xua đuổi tà khí, mang lại may mắn và bình an cho gia đình. Dưới đây là thông tin chi tiết về một số loại cây phổ biến:\r\n\r\n1. Cây Lưỡi Hổ\r\nCây lưỡi hổ phong thủy\r\nCây lưỡi hổ được đánh giá trừ tà rất tốt\r\n\r\nĐặc điểm: Lá dài, cứng, vươn thẳng lên trên, có khả năng thanh lọc không khí rất tốt.\r\nÝ nghĩa phong thủy: Biểu tượng cho sự mạnh mẽ, kiên cường, giúp xua đuổi tà khí, bảo vệ ngôi nhà.\r\nVị trí đặt: Thích hợp đặt ở những nơi có nhiều góc cạnh, giúp cân bằng năng lượng âm dương.\r\n2. Cây Trúc\r\ncây trúc quân tử\r\nCây trúc trồng hàng rào, ban công để trừ tà\r\n\r\nĐặc điểm: Thân thẳng, mọc thành bụi, tượng trưng cho sự thanh cao, ngay thẳng.\r\nÝ nghĩa phong thủy: Mang lại may mắn, tài lộc, giúp xua đuổi tà khí, tạo cảm giác bình yên.\r\nVị trí đặt: Trồng trước nhà hoặc trong vườn, tạo thành hàng rào bảo vệ.\r\n3. Cây Xương Rồng\r\nchậu trồng cây mini\r\nXương rồng gai góc được làm vật trừ tà từ xưa\r\n\r\nĐặc điểm: Thân có gai nhọn, khả năng chịu hạn tốt.\r\nÝ nghĩa phong thủy: Biểu tượng cho sự kiên cường, mạnh mẽ, giúp xua đuổi tà ma, bảo vệ ngôi nhà.\r\nVị trí đặt: Thường đặt ở cửa sổ, ban công để ngăn chặn tà khí từ bên ngoài xâm nhập.\r\n4. Cây Ngải Cứu\r\nĐặc điểm: Có mùi thơm đặc trưng, thường được dùng làm thuốc.\r\nÝ nghĩa phong thủy: Được xem là loại cây có khả năng trừ tà, xua đuổi tà khí rất mạnh.\r\nCách sử dụng: Có thể trồng cây hoặc treo bó ngải cứu khô trước cửa nhà.\r\n5. Cây Cau\r\nCây cau nga mi đẹp\r\nCây cau trồng trước cửa để trừ tà\r\n\r\nĐặc điểm: Thân thẳng, lá dài, thường được trồng trước nhà.\r\nÝ nghĩa phong thủy: Tượng trưng cho sự thanh cao, ngay thẳng, mang lại may mắn và tài lộc.\r\nVị trí đặt: Trồng trước cửa nhà hoặc trong sân vườn.\r\n6. Cây Hoa Hòe\r\nĐặc điểm: Hoa có màu trắng hoặc vàng nhạt, thơm dịu.\r\nÝ nghĩa phong thủy: Biểu tượng cho sự thuần khiết, trong sáng, giúp xua đuổi tà khí và mang lại bình yên.\r\nVị trí đặt: Trồng trong vườn hoặc ban công.\r\n7. Cây Thiết Mộc Lan\r\ncây thiết mộc lan\r\nCây thiết mộc lan vừa trừ tà vừa mang lại may mắn\r\n\r\nĐặc điểm: Lá xanh bóng, thân cây cứng cáp.\r\nÝ nghĩa phong thủy: Hút tài lộc, may mắn, giúp xua đuổi tà khí, mang lại sự thịnh vượng.\r\nVị trí đặt: Thường được đặt ở phòng khách hoặc phòng làm việc.\r\n8. Cây Kim Tiền\r\ncây kim tiền giao cho nhà riêng\r\nNgoài ý nghĩa mang lại may mắn kim tiền trừ tà cũng rất tốt\r\n\r\nĐặc điểm: Lá tròn, xếp chồng lên nhau như những đồng tiền.\r\nÝ nghĩa phong thủy: Mang lại tài lộc, may mắn, giúp gia chủ làm ăn phát đạt.\r\nVị trí đặt: Đặt ở bàn làm việc, quầy thu ngân hoặc cửa hàng.\r\n9. Cây Vạn Niên Thanh\r\ncây vạn niên thanh cho người tuổi thìn\r\nCây vạn niên thanh giúp mang lại bình an, xua đuổi tà khí\r\n\r\nĐặc điểm: Lá xanh bóng, hình bầu dục.\r\nÝ nghĩa phong thủy: Mang lại sự may mắn, bình an, giúp thanh lọc không khí.\r\nVị trí đặt: Đặt ở phòng khách, phòng ngủ hoặc bàn làm việc.\r\n10. Cây Sung\r\nĐặc điểm: Quả sung tròn trịa, tượng trưng cho sự sung túc, đầy đủ.\r\nÝ nghĩa phong thủy: Mang lại may mắn, tài lộc, giúp gia chủ làm ăn phát đạt.\r\nVị trí đặt: Trồng trước nhà hoặc trong sân vườn.\r\nLưu ý:\r\n\r\nVị trí đặt cây: Mỗi loại cây có những yêu cầu khác nhau về ánh sáng, nhiệt độ và độ ẩm.\r\nKích thước: Chọn cây phù hợp với không gian sống.\r\nÝ nghĩa phong thủy: Kết hợp cây với các yếu tố phong thủy khác để tạo ra một không gian hài hòa.\r\nChăm sóc: Cây cần được chăm sóc đúng cách để phát triển tốt và mang lại hiệu quả.\r\nNgoài 10 loại cây trên, còn rất nhiều loại khác được cho là cây có khả năng trừ tà. Việc lựa chọn loại cây nào phụ thuộc vào sở thích và quan niệm của mỗi người.', 'thumb-truta.jpg', '2024-11-29 02:53:40', 1, 'trừ tà', 1),
(8, 'Vì sao cây cảnh trong nhà bị vàng và nâu đầu lá\r\n', 'Cây cảnh trong nhà không chỉ làm đẹp không gian sống mà còn giúp thanh lọc không khí và tạo cảm giác thư thái. Tuy nhiên, một vấn đề thường gặp phải khi chăm sóc cây cảnh là tình trạng lá bị vàng và đầu lá màu nâu. Hiểu rõ nguyên nhân và cách khắc phục sẽ giúp cây cảnh luôn xanh tốt và phát triển mạnh mẽ.\r\n\r\nCây cảnh trong nhà bị vàng và nâu đầu lá\r\n\r\n\r\nNguyên nhân cây cảnh trong nhà bị vàng lá\r\nLà một trong những nguyên nhân thường gặp của cây cảnh trong nhà. Thường nếu cây đang bị gặp vấn đề thì sẽ không chỉ vàng lá, mà còn kèm theo các biểu hiện khác đi cùng. Nếu cây vàng lá mà vẫn xanh tốt, chỉ vàng những lá già thì đó là hiện tượng sinh trưởng bình thường.\r\n\r\nThiếu nước\r\nTriệu chứng của việc thiếu nước là lá cây trở nên mềm và vàng úa, đôi khi cả cây có thể héo rũ. Để khắc phục, hãy kiểm tra độ ẩm của đất và đảm bảo cây được tưới nước đều đặn, nhưng tránh để đất bị ngập úng.\r\n\r\nbiểu hiện của cây thiếu nước và dư nước\r\nBiểu hiện của cây thiếu nước và dư nước\r\n\r\nThừa nước\r\nNgược lại, nếu cây bị thừa nước, lá sẽ chuyển màu vàng nhưng vẫn giữ được độ cứng và có thể xuất hiện các đốm nâu. Biện pháp phòng ngừa là kiểm tra độ thoát nước của chậu và điều chỉnh lượng nước tưới phù hợp.\r\n\r\nThiếu dinh dưỡng\r\nCây cần nhiều loại dưỡng chất để phát triển, như nitơ, phốt pho, và kali. Khi thiếu các chất này, lá cây sẽ chuyển màu vàng từ dưới lên. Giải pháp là bổ sung phân bón hợp lý và định kỳ kiểm tra chất lượng đất.\r\nThường khi thiếu dưỡng chất thì cây còi, cây yếu nhưng vẫn sống. Nếu cây bạn có hiện tượng như vậy thì nên nhờ người có kinh nghiệm để kiểm tra cụ thể thiếu chất gì?\r\n\r\nNguyên nhân cây cảnh trong nhà bị nâu đầu lá\r\nLà hiện tượng khá phổ biến đối với cây để trong nhà. Nếu không tìm hiểu và khắc phục sớm thì cây dễ bị xấu, lụi dần và phải bỏ đi.\r\n\r\nMôi trường không phù hợp\r\nĐây là một trong những nguyên nhân thường gặp dẫn đến cây bị cháy và nâu đầu lá. Môi trường nóng, độ ẩm thấp khiến cây bị khô. Để xác định vấn đề này cần có máy đo độ ẩm và cảm quan khi ở môi trường này da của chúng ta thường khô.\r\nKhắc phục: Điều chỉnh độ ẩm bằng cách dùng máy phun sương hoặc chuyển cây ra nơi có độ ẩm cao hơn.\r\n\r\nÁnh sáng quá mạnh\r\nÁnh sáng mặt trời trực tiếp có thể làm cháy đầu lá, khiến lá trở nên khô và nâu ở phần đầu. Để khắc phục, hãy đặt cây ở nơi có ánh sáng gián tiếp hoặc sử dụng rèm che bớt ánh sáng.\r\n\r\nSử dụng phân bón không đúng cách\r\nSử dụng quá nhiều phân bón hoặc phân bón không phù hợp có thể gây cháy đầu lá. Hãy tuân theo hướng dẫn sử dụng phân bón và tránh bón quá nhiều.\r\n\r\nCách chăm sóc cây cảnh trong nhà đúng cách\r\nĐể cây luôn xanh tốt ta cần chú ý đến những vấn đề chính sau:\r\n\r\nTưới nước đúng cách\r\nTưới nước đúng cách là yếu tố quan trọng nhất. Lượng nước cần thiết phụ thuộc vào loại cây và điều kiện môi trường. Thông thường, hãy tưới khi đất khô bề mặt và tránh để nước đọng lại trong chậu.\r\n\r\nCung cấp ánh sáng hợp lý\r\nĐặt cây ở vị trí có ánh sáng gián tiếp hoặc sử dụng đèn LED chiếu sáng nếu không có đủ ánh sáng tự nhiên. Mỗi loại cây cần một mức độ ánh sáng khác nhau, hãy tìm hiểu để biết vị trí đặt cây phù hợp.\r\n\r\nDinh dưỡng và phân bón\r\nSử dụng phân bón hợp lý giúp cây phát triển mạnh mẽ. Lựa chọn loại phân bón phù hợp với loại cây và tuân thủ lịch trình bón phân đều đặn để đảm bảo cây nhận đủ dưỡng chất cần thiết.\r\n\r\nĐộ ẩm\r\nĐộ ẩm thích hợp với đa số cây cảnh thường từ 50 – 70%, tùy một số dòng lá có thể ưa độ ẩm cao hơn 1 chút khoảng 10%.\r\n\r\nCác loại cây cảnh trong dễ chăm sóc\r\nViệc lựa chọn cây cảnh phù hợp với điều kiện môi trường cũng là vấn đề cốt lõi giúp cây sống và phát triển tốt. Dưới đây là một số gợi ý.\r\n\r\nCây kim ngân\r\nLà một trong những cây phong thủy hàng đầu với cây dạng thân gỗ, cây có thể chịu hạn tốt, yêu cầu ánh sáng không cao. Đặt cây nơi có ánh sáng gián tiếp hoặc dưới ánh đèn, chú ý chỉ tưới nước khi đất khô hẳn.\r\n\r\nCây lưỡi hổ\r\nCây có đặc điểm lá cứng và chịu hạn tốt, là lựa chọn tuyệt vời cho những người mới bắt đầu chăm sóc cây cảnh. Đặt cây ở nơi có ánh sáng gián tiếp và tưới nước khi đất khô.\r\n\r\nCây kim tiền\r\nCây không chỉ mang lại may mắn phong thủy mà còn rất dễ chăm sóc. Cây ưa sáng nhưng không chịu được ánh sáng trực tiếp, hãy tưới nước khi đất khô và tránh để cây bị ngập nước.\r\n\r\nCây phú quý\r\nCây có ý nghĩa phong thủy mang lại tài lộc và thịnh vượng. Đặt cây ở nơi có ánh sáng gián tiếp, tưới nước đều đặn và bón phân hợp lý để cây luôn xanh tốt.\r\n\r\nMột số cây hỏi thường gặp khi chăm cây cảnh trong nhà\r\nNgoài ra là một số cây hỏi thường gặp khi chăm sóc cây trong nhà.\r\n\r\nTại sao cây cảnh trong nhà lại quan trọng?\r\n\r\nCây cảnh giúp thanh lọc không khí, làm đẹp không gian sống và tạo cảm giác thư thái. Hơn nữa cây cũng gần như là một chiếc máy, giúp báo hiệu cho chúng ta không gian sống có tốt hay không?\r\n\r\nLàm thế nào để biết cây cảnh cần nước?\r\n\r\nKiểm tra độ ẩm của đất, nếu đất khô bề mặt thì cần tưới nước. Thường cây thiếu nước sẽ có biểu hiện lá mềm và rũ.\r\n\r\nBao lâu nên bón phân cho cây cảnh?\r\n\r\nTùy thuộc vào loại cây và loại phân bón, thông thường nên bón phân mỗi 4-6 tuần.\r\n\r\nLàm thế nào để biết cây cảnh bị thiếu dinh dưỡng?\r\n\r\nLá cây chuyển màu vàng và cây phát triển chậm là dấu hiệu thiếu dinh dưỡng.\r\n\r\nCó nên cắt tỉa lá bị vàng hay cháy không?\r\n\r\nCó, cắt tỉa lá bị vàng hoặc cháy sẽ giúp cây tập trung năng lượng để phát triển các phần khỏe mạnh khác.\r\n\r\nKết luận\r\n\r\nHiểu rõ nguyên nhân và cách khắc phục tình trạng cây cảnh trong nhà bị vàng và nâu đầu lá giúp bạn chăm sóc cây cảnh tốt hơn. Từ việc điều chỉnh lượng nước, ánh sáng đến việc bổ sung dinh dưỡng, tất cả đều đóng vai trò quan trọng. Hãy chăm sóc cây đúng cách để không gian sống của bạn luôn xanh tươi và tràn đầy năng lượng.', 'thumb-lavang.jpg', '2024-11-29 02:53:59', 1, 'lá vàng\r\nnâu đầu lá', 1);

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
(1, 'chăm sóc', 'tuoicay.jpg'),
(2, 'cách chăm sóc cây cảnh văn phòng', 'chamsoc.jpg'),
(3, 'cách chăm sóc cây cảnh thủy sinh', 'chamsoc1.jpg');

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_danhgiasp`
--

CREATE TABLE `tbl_danhgiasp` (
  `id_review` int(9) NOT NULL,
  `iduser` int(10) NOT NULL,
  `idsanpham` int(4) NOT NULL,
  `images_review` text NOT NULL,
  `noidung` text NOT NULL,
  `rating_star` float(2,1) NOT NULL,
  `date_create` datetime NOT NULL,
  `iddonhang` int(4) NOT NULL,
  `trangthai_review` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 - chưa bình luận, 1 - Đã bình luận'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
(1, 'Cây Cảnh Phong Thủy', 'sendavatgom1.jpg', 'Danh mục Cây Cảnh Phong Thủy'),
(2, 'Cây Cảnh Trong Nhà', 'trucnhatvang2.jpg', 'Danh mục Cây Cảnh Trong Nhà\r\n'),
(3, 'Cây Cảnh Để Bàn', 'huyetdu2.jpg', 'Danh mục Cây Cảnh Để Bàn\r\n'),
(4, 'Cây Cảnh Văn Phòng', 'monstera1.jpg', 'Danh mục Cây Cảnh Văn Phòng'),
(5, 'Cây Cảnh Loại To', 'tuongvi5.jpg', 'Danh mục Cây Cảnh Loại To'),
(6, 'Cây Cảnh Sen Đá', 'sen-da-bap-cai-tim-dep-4.jpg', 'Danh mục Cây Cảnh Sen Đá'),
(69, 'Cây Xương rồng', 'bangnhat2.jpg', 'Danh Mục Cây Xương Rồng');

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
(6, 6, 'Cây Cảnh Sen Đá', ''),
(52, 69, 'Cây Xương rồng', '');

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
(11, 'a66abb5684c45962d887564f08346e8d', 'Admin', '19/7c kp Đông Tác', 1, '0919059992', 1, 'avatar_it.png', 'admin@gmail.com', 1, 'FPT polytechnic', 'vnpaypayment', 'Nothing IMpossible'),
(52, 'a66abb5684c45962d887564f08346e8d', 'Tunnn', 'TP.HCM', 0, '0909999999', 0, '1', 'customer@gmail.com', 3, 'avatar_it.png', 'momopayment', NULL);

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
(108, 'Xgarden4968651', 7990000, 0.00, 0.00, 'Thanh toán khi nhận hàng', 52, 'Tunnn', '0909999999', 'customer@gmail.com', 'tây yên, Xã Tây Yên, Huyện An Biên, Kiên Giang', 'tây yên', '2024-12-04 08:42:27', 1, 0, '', NULL);

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
(0, 2, 108, 1, 7990000, 'Cây Hoa Giấy', '../uploads/thumb-hoagiay1.jpg');

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
(1, 'Cây hoa tường vi', 10999000.00, 9, 'thumb-tuongvi1.jpg,\r\ntuongvi2.jpg,\r\ntuongvi3.jpg,\r\ntuongvi4.jpg,\r\ntuongvi5.jpg', 5.00, 1, 25, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây hoa tường vi có kích thước chưa lên chậu khoảng 80cm - 100cm. Tuy nhiên cây có rất nhiều loại kích thước cũng như màu hoa. Nếu quý khách hàng muốn mua loại kích thước nào có thể nhắn tin trực tiếp để được tư vấn, cũng như gửi hình cây thực tế\r\n', 1, 1, 'Cây hoa tường vi còn được gọi là bằng lăng hoa tường vi, là một loài cây hoa đẹp với vẻ ngoài mộc mạc nhưng không kém phần duyên dáng. Với những chùm hoa nhỏ xinh, nở rộ vào mùa hè. Tường vi mang đến một vẻ đẹp dịu dàng, thanh thoát, gắn liền với sự tinh khiết và tình yêu bền chặt. Cùng tìm hiểu về đặc điểm, cách trồng, chăm sóc và ý nghĩa của loài hoa này.\r\n\r\nĐặc điểm của cây hoa tường vi\r\nTên khoa học: Lagerstroemia indica.\r\nHọ: Bằng lăng (Lythraceae).\r\nNguồn gốc: Cây hoa tường vi có nguồn gốc từ các vùng nhiệt đới và cận nhiệt đới của châu Á, đặc biệt là Trung Quốc và Nhật Bản.', 3, 0.0),
(2, 'Cây Hoa Giấy', 7990000.00, 58, 'thumb-hoagiay1.jpg,hoagiay2.jpg,hoagiay3.jpg,\r\nhoagiay4.jpg,hoagiay5.jpg', 0.00, 0, 20, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao khoảng 60-80cm khi chưa lên chậu. Ngoài ra còn rất nhiều loại khác nhau kể cả về kích thước , lẫn màu hoa. Nên quý khách có thể liên hệ để chọn loại ưa thích và phù hợp.\r\n', 1, 1, 'Hoa giấy hay còn gọi là cây bông giấy, là một trong những loài cây cảnh phổ biến nhất tại Việt Nam và trên thế giới. Với vẻ đẹp giản dị, hoa giấy không chỉ mang lại một không gian sống tươi mới mà còn thể hiện ý nghĩa phong thủy sâu sắc. Loài cây này dễ trồng, dễ chăm sóc và có khả năng chịu hạn tốt, rất thích hợp với điều kiện khí hậu nhiệt đới.\r\n\r\n', 0, 0.0),
(3, 'Cây Huyết Dụ', 17590000.00, 88, 'thumb-huyetdu1.jpg,\r\nhuyetdu2.jpg,\r\nhuyetdu3.jpg,\r\nhuyetdu4.jpg,\r\nhuyetdu5.jpg,', 5.00, 0, 14, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '<p>Từ xa xưa, người ta đã tin rằng cây Huyết Dụ có khả năng xua đuổi tà ma và mang lại may mắn. Câu chuyện về một vị tướng bị thương nặng đã được cứu sống nhờ lá cây Huyết Dụ vẫn còn được lưu truyền đến ngày nay. Với những chiếc lá đỏ tía rực rỡ như ngọn lửa, cây Huyết Dụ không chỉ là một loài cây cảnh đẹp mắt mà còn là một vị thuốc quý trong y học cổ truyền. Hãy cùng khám phá những điều thú vị về loài cây thần kỳ này.</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>', 1, 1, '<p>Đặc điểm hình thái và nguồn gốc cây huyết dụ\r\nCây Huyết Dụ, với tên khoa học Cordyline fruticosa, thuộc họ Măng Tây (Asparagaceae). Loài cây này có nguồn gốc từ vùng Đông Nam Á, đặc biệt là các quốc gia như Việt Nam, Thái Lan, Indonesia. Tại Việt Nam, cây mọc hoang và được trồng phổ biến ở nhiều vùng miền.\r\nThân: Thân cây thường mọc thành bụi, cao khoảng 1-2m, có nhiều đốt.\r\nLá: Lá đơn, mọc so le, hình mác hoặc hình mũi giáo, dài 20-50cm, rộng 5-10cm. Đặc điểm nổi bật là lá có màu đỏ tía hoặc đỏ tươi, đôi khi có mặt trên màu xanh lục. Màu sắc rực rỡ này đến từ các sắc tố anthocyanin, có tác dụng chống oxy hóa mạnh.\r\nHoa: Cụm hoa mọc ở đầu cành, hoa nhỏ, màu trắng hoặc hồng nhạt, mang đến vẻ đẹp dịu dàng cho cây.\r\nQuả cây huyết dụ\r\nQuả cây huyết dụ\r\nQuả: Quả mọng, hình cầu, khi chín có màu đỏ, chứa nhiều hạt nhỏ.</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>', 1, 0.0),
(4, 'Cây Cau Nga Mi', 11990000.00, 78, 'thumb-caungami1.jpg,\r\ncaungami2.jpg,\r\ncaungami3.jpg,\r\ncaungami4.jpg,\r\ncaungami5.jpg,', 10.00, 0, 7, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao lộ thân từ 50cm - 3m. Giá cây sẽ phụ thuộc vào độ cao. Giá được tính theo mét thoát thân. Cây phù hợp để nơi nhiều ánh sáng như ban công, sảnh, sân vườn.\r\n', 1, 1, 'Cây cau nga mi hay còn gọi chà là cảnh, với tên khoa học Phoenix roebelenii. Là một trong những loài cây cảnh được yêu thích hiện nay. Xuất xứ từ các khu rừng nhiệt đới ẩm ướt ở Đông Nam Á, cây đã chinh phục trái tim của những người yêu cây cảnh bởi vẻ đẹp thanh lịch, sang trọng và khả năng thanh lọc không khí tuyệt vời. Với chiều cao khiêm tốn và dáng vẻ uyển chuyển, cây trở thành điểm nhấn độc đáo cho mọi không gian sống.', 0, 0.0),
(5, 'Cây Hạnh Phúc Gốc To', 2590000.00, 94, 'thumb-hanhphucgocto1.jpg,\r\nhanhphucgocto2.jpg,\r\nhanhphucgocto3.jpg,\r\nhanhphucgocto4.jpg,', 12.00, 0, 6, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu giao động từ 1m6 cho đến gần 3m. Tán lá không quá dày rất phù hợp để trong nhà, văn phòng và làm quà tặng khai trương, nhà mới, đối tác...\r\n', 1, 1, 'Cây hạnh phúc gốc to còn được gọi với tên khoa học là Radermachera sinica, là một loại cây cảnh phổ biến được ưa chuộng bởi vẻ đẹp sang trọng, ý nghĩa may mắn và khả năng thanh lọc không khí hiệu quả.', 0, 0.0),
(6, 'Cây Trúc Nhật Vàng', 5990000.00, 0, 'thumb-trucnhatvang1.jpg,\r\ntrucnhatvang2.jpg,\r\ntrucnhatvang3.jpg', 8.00, 0, 5, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây hiện tại chỉ có dòng để bàn cao khoảng 40cm cả chậu, tán rộng khoảng 35cm. Phù hợp làm cây để bàn, trang trí không gian nội thất, quán cà phê...\r\n', 1, 1, 'Cây trúc nhật vàng (tên khoa học: Dracaena surculosa punctulata) là một loại cây cảnh rất được ưa chuộng bởi vẻ đẹp độc đáo và nhiều ý nghĩa phong thủy tốt đẹp. Với tán lá xanh mướt điểm xuyết những đốm vàng rực rỡ, cây mang đến sức sống mới cho không gian, đồng thời giúp thanh lọc không khí và mang lại may mắn cho gia chủ.', 0, 0.0),
(7, 'Sen Đá Casio', 6290000.00, 98, 'thumb-senda1.jpg', 0.00, 0, 4, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có kích thước từ 6-9cm. Cây sen đá casio là một dòng sen đá mới nên còn khá hiếm. Rất phù hợp cho những anh chị sưu tầm.\r\n', 1, 1, 'Cây sen đá Casio là một trong những dòng mới, hiện tại ở Việt Nam cũng chưa có nhiều. Cây mang một vẻ đẹp mới lạ sắc nét. Cây phù hợp để ngoài ban công, cửa sổ, quán cà phê. Những nơi có nhiều ánh nắng, gió nhưng che được mưa. Cây lên màu đẹp khi thời tiết lạnh. Nhiệt độ chênh lệch giữa ngày và đêm.', 0, 0.0),
(8, 'Chậu Sen Đá Vát', 5390000.00, 98, 'thumb-sendavatgom1.jpg,sendavatgom1.jpg,sendavatgom2.jpg,sendavatgom3.jpg', 10.00, 0, 5, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Chậu sen đá vát có kích thước chậu 11x11 tùy theo trồng cây cao hay rộng mà chậu sẽ có chiều cao tương ứng. Trung bình chiều cao tổng thể khoảng 15cm, rộng 15cm. Chậu cây nên để nơi thoáng có nhiều ánh sáng. Ví dụ như ban công, của sổ, vườn có mái che mưa...\r\n', 1, 1, 'Thay vì những chậu cây sen đá đơn giản thì việc phối các cây vào chung một chậu sẽ đem đến được nhiều sự mới lạ. Đặc biệt chậu sen đá vát còn được trồng cây từ gần đáy bình lên, khiến chậu sen đá trở lên đẹp và cuốn hút hơn rất nhiều. Chậu phù hợp làm quà tặng sinh nhật, quà valentine, tặng dịp lễ…', 0, 0.0),
(9, 'Cây Hoa Dẻ Vàng', 4290000.00, 100, 'thumb-hoadevang.jpg,hoadevang1.jpg,,hoadevang2.jpg,hoadevang3.jpg,', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao khoảng 150cm trồng trong bầu vải, đã có hoa sẵn. Cây phù hợp làm cây bóng mát, công trình, cây cảnh trồng trước của, trong vườn lấy hương thơm.\r\n', 1, 1, 'Nếu bạn đang cần tìm một loại cây sống lâu năm, có hoa thơm, an toàn và ít rụng lá để trồng trong vườn, trước cổng, hoặc ở sân nhà, biệt thự. Thì cây hoa dẻ vàng là một trong những lựa chọn tuyệt vời mà bạn nên cân nhắc.', 0, 0.0),
(10, 'Cây Monstera Albo', 3790000.00, 99, 'thumb-monstera.jpg,monstera1.jpg,monstera2.jpg', 0.00, 0, 3, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Monstera Albo được bán có số lượng 2 - 3 lá độ rộng của lá từ 10 - 18cm. Chiều cao chậu từ 25-30cm. Rất phù hợp để trang trí các góc nhỏ ấn tượng\r\n', 1, 1, 'Cây Monstera Albo là một trong những loại cây đột biến, được nước ngoài rất là ưa chuộng vì khả năng có thể sống được trong môi trường trong nhà. Với màu sắc lá bắt mắt khiến cho không gian trở lên nổi bật và ấn tượng.\r\n\r\nTrước đây có những cây có gen đẹp giá lên đến vài chục triệu đồng một node. Tuy nhiên theo thời gian số lượng cây đã được nhân giống dần ra khiến giá cây đã giảm khá nhiều nhưng vẫn thuộc dòng cây nội thất cao cấp. Cây phù hợp để trang trí các không gian nội thất, quán cà phê, phòng khách…', 0, 0.0),
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
(27, 'Cây Phát Tài 5 thân cao 1m4', 3790000.00, 100, 'thumb-phattainuithancao1m4.jpg,\r\nphattainuithancao1m4_1.jpg,\r\nphattainuithancao1m4_2.jpg,\r\nphattainuithancao1m4_3.jpg', 10.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Chậu có chiều rộng 30cm và chiều cao của cả cây và chậu là 140cm. Phù hợp đặt làm cây xanh, cây phong thủy cho các không gian không quá rộng. Làm quà khai tương, tân gia cực ý nghĩa.\r\n', 3, 3, 'Cây Phát Tài 5 thân cao 1m4 có lá màu xanh xòe rộng đi kèm với các gân màu vàng. Lá xanh tốt quanh năm. Cây thường ra hoa vào gần tết. Chậu cây gồm 5 thân trong phong thủy có ý nghĩa là sức khỏe, cây mang ý nghĩa phát tài. Khi gia chủ sở hữu cây sẽ vừa có sức khỏe và tiền tài. Cây có tán gọn không quá cao rất phù hợp với không gian vừa phải, các cửa hàng có diện tích hạn chế, quà tặng khai trương, tân gia ý nghĩa.\r\n\r\n', 0, 0.0),
(28, 'Cây Phát Tài 5 thân cao 1m6', 6990000.00, 100, 'thumb-phattainuithancao1m6.jpg,\r\nphattainuithancao1m6_1.jpg,\r\nphattainuithancao1m6_2.jpg,\r\nphattainuithancao1m6_3.jpg', 10.00, 0, 2, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Phát Tài 5 thân có chiều cao 1m6 tùy vào độ phát triển lá mà có thể cao hơn nữa, phù hợp để các góc lớn của văn phòng, phòng khách rộng. Cây thường được tặng làm quà, tân gia, khai trương cửa hàng...\r\n', 3, 3, 'Cây Phát Tài 5 thân cao 1m6 có lá màu xanh xòe rộng đi kèm với các gân màu vàng. Lá xanh tốt quanh năm. Cây thường ra hoa vào gần tết. Chậu cây gồm 5 thân trong phong thủy có ý nghĩa là sức khỏe, cây mang ý nghĩa phát tài. Khi gia chủ sở hữu cây sẽ vừa có sức khỏe và tiền tài. Phù hợp làm quà tặng khai trương, tân gia, cây để phòng khách, phòng giám đốc, sảnh khách sạn, quầy lễ tân lớn.\r\n\r\n', 0, 0.0),
(29, 'Cây Phát Tài 1 gốc to', 6790000.00, 100, 'thumb-phattai1goc.jpg,\r\nphattai1goc1.jpg,\r\nphattai1goc2.jpg,\r\nphattai1goc3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao cả chậu 1m7 gốc to có 3 đến 5 thân hoặc 7 mỗi thân thường có 2 - 3 ngọn lá. Cây phù hợp để phòng giám đốc, không gian lớn, phòng khách rộng, tặng khai trương và tân gia.\r\n', 3, 3, 'Cây Phát Tài 1 Gốc To cây có chiều cao trung bình từ 1m6 – 2m2, hay còn gọi là Thiết Mộc Lan. Là một trong những loại cây cảnh nội thất được ưa chuộng nhất hiện nay. Không chỉ bởi vẻ đẹp sang trọng, thanh lịch, mà cây còn mang ý nghĩa phong thủy vô cùng tốt lành, tượng trưng cho sự may mắn, tài lộc và thịnh vượng.\r\n\r\n', 0, 0.0),
(31, 'Cây Trúc Nhật', 7590000.00, 100, 'thumb-trucnhat.jpg,\r\ntrucnhat1.jpg,\r\ntrucnhat2.jpg,trucnhat3.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Trúc Nhật với thân hình mềm mại. Cây mang ý nghĩa phong thủy gặp dữ hóa lành, thăng tiến trong công việc và sự nghiệp nên được tặng trong các dịp như khai trương, sinh nhật hay thăng quan tiến chức.\r\n', 4, 4, 'Cây Trúc Nhật được biết đến là loại cây cảnh không chỉ giúp loại bỏ khí độc, điều hòa không khí, trang trí ngôi nhà mà còn là cây xanh phong thủy được nhiều người yêu thích và lựa chọn. Cùng tìm hiểu đặc điểm cũng như cách chăm sóc loại cây này và xem mệnh của bạn có hợp Cây Trúc Nhật không nhé.\r\n\r\n', 0, 0.0),
(32, 'Cây Trầu Bà Thanh Xuân', 7290000.00, 100, 'thumb-traubathanhxuan.jpg,\r\ntraubathanhxuan1.jpg,\r\ntraubathanhxuan2.jpg', 10.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Trầu Bà Thanh Xuân còn có tên gọi khác như Trầu Bà Tay Phật. Thuộc loại thực vật họ Ráy có thân thảo, mọc thành bụi nhỏ. Chiều cao trung bình của cây khoảng 70cm. khi trưởng thành có thể đạt kích thước lên tới 1,5m. Khác với những hình dạng lá thông thường, lá của Trầu Bà Thanh xuân có hình dạng rất độc đáo. Lá cây bản to, xẻ nhánh thuỳ sâu giống như chân vịt, bẹ lá ôm sát vào thân và có màu xanh sẫm. Giống với đa số các cây họ Ráy, hoa của loại cây này có hình mo nhỏ mập mạp.', 4, 4, 'Tên Thường gọi: Trầu Bà Thanh Xuân\r\n\r\nTên gọi khác: Cây trầu bà tay phật, cây trầu bà chân vịt, cây trầu bà cánh phượng hoặc cây trầu bà khía.\r\n\r\nTên tiếng Anh: Leaf Philodendron\r\n\r\nTên khoa học: Philodendron bipinnatifidum hoặc Philodendron selloumSplit.\r\n\r\nHọ (familia): Araceae – Ráy\r\n\r\nNguồn gốc xuất xứ: Salomol', 0, 0.0),
(33, 'Cây Trầu Bà Đế Vương', 349000.00, 100, 'thumb-traubadevuong.jpg,\r\ntraubadevuong1.jpg,\r\ntraubadevuong2.jpg,\r\ntraubadevuong3.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây có chiều cao từ 80-90cm độ rộng tán khoảng 80cm. Rất phù hợp với không gian rộng nhưng độ cao từ sàn đến trần thấp. Cây phù hợp tặng khai trương, tân gia, cây cảnh trong nhà, văn phòng...\r\n', 4, 4, 'Trầu Bà Đế Vương là một loài thực vật có hoa thuộc họ Ráy (Araceae), có nguồn gốc từ đảo Salomol. Loài này được Schott ex Endl miêu tả khoa học đầu tiên năm 1837.\r\n\r\nỞ Việt Nam, bởi ý nghĩa vương giả và khí chất mạnh mẽ nên rất được ưa chuộng và trồng phổ biến. Cây này thuộc giống cây thân thảo mọc thành bụi, khi lớn thân cây có dạng cột.\r\n\r\n', 0, 0.0),
(34, 'Cây Mini Monstera', 25900.00, 100, 'thumb-minimonstera.jpg,\r\nminimonstera1.jpg,\r\nminimonstera2.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Mini Monstera khá nổi bật với những chiếc lá xanh đậm và khuyết. Cây không cần chậu quá to chính vì thế cây rất phù hợp để trang trí những góc nhỏ trong nhà, quán cà phê, quà tặng...\r\n', 4, 4, 'Có lẽ trong thời gian vừa qua không chỉ những người ở giới chơi cây, mà những người bình thường cũng biết đến Monstera hay còn gọi là Trầu Bà Nam Mỹ với cây đột biến lên hàng tỷ đồng. Kèm theo cơn sốt nhiều người cũng muốn sở hữu Monstera vì nó thực sự đẹp và rất đặc sắc, tuy nhiên cây cần không gian lớn. Nếu bạn thích nhưng không có nhiều không gian có thể tham khảo dòng Mini Monstera này.\r\n\r\n', 0, 0.0),
(35, 'Cây Đế Vương Hoàng Kim', 1500000.00, 100, 'thumb-devuong1.jpg,\r\ndevuong1.jpg,\r\ndevuong2.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Đế Vương Hoàng Kim là một trong những loại cây cảnh được yêu thích nhất hiện nay bởi vẻ đẹp mới mẻ. Đây cũng là cây phong thủy được ưa chuộng, phù hợp cho mệnh kim và mệnh thủy. Đế vương hoàng kim mang ý nghĩa hanh thông, thăng tiến.\r\n', 4, 4, 'Đế Vương Hoàng Kim là một giống cây trồng mới được du nhập vào Việt Nam gần đây, được người sành chơi tìm kiếm sưu tầm, thưởng lãm. Để tìm mua được đã khó việc chọn được cây ban đầu khỏe mạnh từ ban đầu còn khó hơn. Bài viết sau đây sẽ cung cấp đầy đủ thông tin, giải pháp tốt nhất trong việc lựa chọn, trồng và chăm sóc (mẹo chọn cây khỏe đẹp ở phần cuối).\r\n\r\n', 0, 0.0),
(36, 'Cây Tróc Bạc Thủy Sinh', 129000.00, 100, 'thumb-trocbac.jpg,\r\ntrocbac1.jpg,\r\ntrocbac2.jpg,\r\ntrocbac3.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Khá nổi bật với sự pha trộn đặc sắc của lá giữa mà trắng và màu xanh. Cây đặc biệt dễ chăm sóc có thể thích nghi với mọi môi trường, rất phù hợp với người thích cây mà lười chăm sóc.\r\n', 4, 4, 'Bạn sẽ dễ dàng bắt gặp cây Tróc Bạc hay còn gọi là cây Muống Nhật, Trầu Bà Trắng ở đường hay ở những công trình của tòa nhà và văn phòng. Cây cực kỳ dễ sống và không phải chăm sóc nhiều có thể chịu hạn và chịu ẩm tốt. Đối với cây Tróc Bạc Thủy Sinh khi được đưa vào làm cây cảnh để bàn thì phiến lá sẽ nhỏ hơn và độ tinh tế sẽ cao hơn so với những cây trồng công trình. Cây có thể sống được cả trong những môi trường ẩm ướt, thiếu sáng, nên chính vì thấy nó thường chọn làm cây để bàn, trang trí nhà, trang trí chỗ bồn rửa tay, nhà tắm…\r\n\r\n\r\n', 0, 0.0),
(37, 'Cây Vạn Lộc Thủy Sinh', 199000.00, 100, 'thumb-vanloc.jpg,\r\nvanloc1.jpg,\r\nvanloc2.jpg,\r\nvanloc3.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Với sắc lá đỏ và sống tốt trong điều kiện thiếu sáng, cây Vạn Lộc thủy sinh cực kỳ phù hợp và cây nội thất, cây trang trí, làm quà tặng và cây phong thủy cho mệnh hỏa và thổ.\r\n', 4, 4, 'Đa phần cây cảnh có màu xanh hoặc màu trắng thuộc màu trung tính và ít sức hút nhưng cây Vạn Lộc thủy sinh lại có màu nóng và cực kỳ nổi bật trong tất cả cây cảnh, xét về cái đẹp và sự đặc sắc thì khó loại cây để bàn nào có thể vượt qua được Vạn Lộc. Cây có thể sống được trong môi trường văn phòng, ánh sáng yếu nên rất phù hợp làm cây cảnh để bàn, cây trang trí nội thất, quán cà phê, quà tặng.\r\n\r\n', 0, 0.0),
(38, 'Cây Sao Sáng Thủy Sinh', 500000.00, 100, 'thumb-saosang1.jpg,\r\nsaosang1.jpg,\r\nsaosang2.jpg,saosang3.jpg', 0.00, 0, 0, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Nhờ đặc điểm dễ chăm sóc, không cần ánh nắng nhiều, tán lá nổi bật nên cây Sao Sáng phù hợp làm cây trang trí nội thất, cây phong thủy và làm quà tặng.\r\n', 4, 4, 'Cây Sao Sáng thủy sinh được biết đến nhờ sự nổi bật ở phiến lá bên trong có sắc trắng và bên ngoài có màu xanh đậm, dựa vào đặc điểm này mà người Việt Nam đặt cho nó cái tên là cây Sao Sáng. Cây có sắc trắng đại diện mệnh kim, nên nó rất phù hợp làm cây phong thủy cho người mệnh Thủy và mệnh Kim.\r\n\r\n', 0, 0.0),
(39, 'Cây Trầu Bà Lá Lỗ', 249000.00, 100, 'thumb-traubalo.jpg,\r\ntraubalo1.jpg,\r\ntraubalo2.jpg,\r\ntraubalo3.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', 'Cây Trầu Bà Lá Lỗ có lá rất đặc biệt mà không giống với loại cây nào. Chính vì thế cây thường được chọn để tạo sự nổi bật và đặc sắc như trang trí nội thất, văn phòng, quà tặng, người chơi hệ lá...\r\n', 4, 4, 'Monstera obliqua var.expilata là tên khoa học của cây, hay ở Việt Nam còn được đặt 1 số tên như Cây Trầu Bà Lá Lỗ, Trầu Bà Cửa Sổ. Cây có hình dạng lá rất đặc biệt mà không dòng cây nào giống. Nên thường được chọn làm cây trang trí nội thất, cây chơi lá, quà tặng.\r\n\r\n', 0, 0.0),
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
(59, 'Sen Đá Kim Cương', 200000.00, 100, 'thumb-cay-sen-da-kim-cuong-1.jpg,\r\ncay-sen-da-kim-cuong-2.jpg,\r\ncay-sen-da-kim-cuong-3.jpg,\r\ncay-sen-da-kim-cuong-4.jpg', 0.00, 0, 1, '2024-11-29 20:50:54', '2024-11-29 01:48:35', '', 6, 6, '', 0, 0.0),
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
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_banner_sanpham` (`idsp`);

--
-- Chỉ mục cho bảng `tbl_binhluan`
--
ALTER TABLE `tbl_binhluan`
  ADD PRIMARY KEY (`ma_binhluan`),
  ADD KEY `FK_binhLuan_maSp` (`ma_sanpham`),
  ADD KEY `FK_binhluan_nguoiDung` (`ma_nguoidung`);

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
  ADD PRIMARY KEY (`id_bl`),
  ADD KEY `fk_blogComment_blog` (`id_blog`),
  ADD KEY `fk_blogComment_user` (`ma_kh`);

--
-- Chỉ mục cho bảng `tbl_coupon`
--
ALTER TABLE `tbl_coupon`
  ADD PRIMARY KEY (`id_coupon`);

--
-- Chỉ mục cho bảng `tbl_danhgiasp`
--
ALTER TABLE `tbl_danhgiasp`
  ADD PRIMARY KEY (`id_review`),
  ADD KEY `fk_danhgiasp_sp` (`idsanpham`),
  ADD KEY `fk_danhgiasp_nguoidung` (`iduser`);

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
  ADD KEY `fk_order_detail_sanpham` (`idsanpham`),
  ADD KEY `fk_order_detail_order` (`iddonhang`);

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
  ADD PRIMARY KEY (`masanpham`),
  ADD KEY `fk_sanpham_danhmuc` (`ma_danhmuc`),
  ADD KEY `fk_sanpham_dmphu` (`id_dmphu`);

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
  MODIFY `ma_danhmuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `tbl_danhmucphu`
--
ALTER TABLE `tbl_danhmucphu`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

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
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

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
  MODIFY `masanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

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
-- Các ràng buộc cho bảng `tbl_banner`
--
ALTER TABLE `tbl_banner`
  ADD CONSTRAINT `fk_banner_sanpham` FOREIGN KEY (`idsp`) REFERENCES `tbl_sanpham` (`masanpham`);

--
-- Các ràng buộc cho bảng `tbl_binhluan`
--
ALTER TABLE `tbl_binhluan`
  ADD CONSTRAINT `FK_binhLuan_maSp` FOREIGN KEY (`ma_sanpham`) REFERENCES `tbl_sanpham` (`masanpham`),
  ADD CONSTRAINT `FK_binhluan_nguoiDung` FOREIGN KEY (`ma_nguoidung`) REFERENCES `tbl_nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `tbl_blog`
--
ALTER TABLE `tbl_blog`
  ADD CONSTRAINT `fk_blogcate_blog` FOREIGN KEY (`blogcate_id`) REFERENCES `tbl_blog_cate` (`id`);

--
-- Các ràng buộc cho bảng `tbl_blog_comment`
--
ALTER TABLE `tbl_blog_comment`
  ADD CONSTRAINT `fk_blogComment_blog` FOREIGN KEY (`id_blog`) REFERENCES `tbl_blog` (`blog_id`),
  ADD CONSTRAINT `fk_blogComment_user` FOREIGN KEY (`ma_kh`) REFERENCES `tbl_nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `tbl_danhgiasp`
--
ALTER TABLE `tbl_danhgiasp`
  ADD CONSTRAINT `fk_danhgiasp_nguoidung` FOREIGN KEY (`iduser`) REFERENCES `tbl_nguoidung` (`id`),
  ADD CONSTRAINT `fk_danhgiasp_sp` FOREIGN KEY (`idsanpham`) REFERENCES `tbl_sanpham` (`masanpham`);

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
-- Các ràng buộc cho bảng `tbl_order_detail`
--
ALTER TABLE `tbl_order_detail`
  ADD CONSTRAINT `fk_order_detail_order` FOREIGN KEY (`iddonhang`) REFERENCES `tbl_order` (`id`),
  ADD CONSTRAINT `fk_order_detail_sanpham` FOREIGN KEY (`idsanpham`) REFERENCES `tbl_sanpham` (`masanpham`);

--
-- Các ràng buộc cho bảng `tbl_sanpham`
--
ALTER TABLE `tbl_sanpham`
  ADD CONSTRAINT `fk_sanpham_danhmuc` FOREIGN KEY (`ma_danhmuc`) REFERENCES `tbl_danhmuc` (`ma_danhmuc`),
  ADD CONSTRAINT `fk_sanpham_dmphu` FOREIGN KEY (`id_dmphu`) REFERENCES `tbl_danhmucphu` (`id`);

--
-- Các ràng buộc cho bảng `tbl_shipping`
--
ALTER TABLE `tbl_shipping`
  ADD CONSTRAINT `fk_shipping_nguoidung` FOREIGN KEY (`id_user`) REFERENCES `tbl_nguoidung` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
