-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 17, 2023 lúc 07:51 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shopcart`
--

CREATE TABLE `shopcart` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `shopcart`
--

INSERT INTO `shopcart` (`id`, `name`, `price`) VALUES
(1, 'sdfsdf', 'sdfsdfsd'),
(2, 'Xã hội', '100000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shops`
--

CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `shops`
--

INSERT INTO `shops` (`id`, `image`, `name`, `price`) VALUES
(1, 'Divine-Shop-NETFLIX-1-Tuan-69361.jpg', 'Tài Khoản Netflix Premium 1 tháng - Xem phim chất lượng 4k và Full HD\r\n', '89.000'),
(2, 'Divine-Shop-Tai-Khoan-Spotify-1-Thang-49689.jpg', 'Gói gia hạn Spotify Premium 01 năm\r\n', '299.000'),
(3, 'Divine-Shop-Nang-cap-Zoom-Pro-1-thang-80331.jpg', 'Nâng cấp Tài khoản Zoom Pro 1 tháng\r\n', '210.000'),
(4, 'Divine-shop-windows-10-pro-55555.jpg', 'Windows 10 Professional CD Key \r\n', '290.000'),
(5, 'Divine-Shop-YOUTUBE-NO-ADS-1-NAM-53447.jpg', 'Gia hạn YouTube Premium + YouTube Music (1 Năm)\r\n', '479.000'),
(6, 'Discord Nitro 1 thang-38313.jpg', 'Discord Nitro 3 tháng (Đăng kí lần đầu)\r\n', '165.000'),
(7, 'OpenAI - ChatGPT-37620.jpg', 'Tài khoản OpenAI - ChatGPT (Có sẵn 5$)\r\n', '99.000'),
(8, 'Divine-Shop-Grammarly-Premium-1-Nam-35103.jpg', 'Tài khoản Grammarly Premium 1 năm\r\n', '490.000');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `shopcart`
--
ALTER TABLE `shopcart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `shopcart`
--
ALTER TABLE `shopcart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
