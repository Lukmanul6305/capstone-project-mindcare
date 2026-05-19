-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 14, 2026 at 05:58 AM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_mindcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_authentications`
--

CREATE TABLE `tb_authentications` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `token` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_authentications`
--

INSERT INTO `tb_authentications` (`id`, `user_id`, `token`, `createdAt`) VALUES
(1, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA0OTIzNSwiZXhwIjoxNzc4MTM1NjM1fQ.Zx5F4XurYShq07dEfOnM2Fyoyzf1EVHVw4TaQSI_5Aw', '2026-05-06 13:33:55'),
(2, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA0OTI5OSwiZXhwIjoxNzc4MTM1Njk5fQ.anxZBMI9nM9aYJTwRS0angwB45EUouyH7zVzSeyej28', '2026-05-06 13:34:59'),
(3, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA1ODczMiwiZXhwIjoxNzc4MTQ1MTMyfQ.d8gNI2UBSgLmrOeb2HQl64OOFHUt6jBOetxEOWAVZ-I', '2026-05-06 16:12:12'),
(4, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA1ODg0OSwiZXhwIjoxNzc4MTQ1MjQ5fQ.ErrshGajuOFfJk34WQANpyXgiRd-Z5nV-c-qRgIGA1Q', '2026-05-06 16:14:09'),
(5, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA1OTQyNiwiZXhwIjoxNzc4MTQ1ODI2fQ.jBwGwcy3ieagXKpfI1sik8fIgp3FhEBRofScWStf8fY', '2026-05-06 16:23:46'),
(6, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA2MzYxOSwiZXhwIjoxNzc4MTUwMDE5fQ.L1qViVx6JMF7i1ZLd94j9LZpzZWlcoyt2uVkn72gFx8', '2026-05-06 17:33:39'),
(7, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA2MzY0NCwiZXhwIjoxNzc4MTUwMDQ0fQ.lEaIGlihqaJ9rxeJp-3XCxyE2hrmyYa3lL0dQsXq0Cg', '2026-05-06 17:34:04'),
(8, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODA2NTA0NywiZXhwIjoxNzc4MTUxNDQ3fQ.5KjPgbDK5u9v3OGEEHMozM1NwubVY9uQBW1MT510IPk', '2026-05-06 17:57:27'),
(9, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODEzOTgxNywiZXhwIjoxNzc4MjI2MjE3fQ.bPlUIhwu7Qxzm1SzKR0yWvkvaQunzupzugrCKruPpHE', '2026-05-07 14:43:37'),
(10, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODEzOTk2NSwiZXhwIjoxNzc4MjI2MzY1fQ.cXWZ1Pfn5P8fjm0IcMM7UgaFrFkQWhbemgKZMCu6PdI', '2026-05-07 14:46:05'),
(11, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODE1NjUyOSwiZXhwIjoxNzc4MjQyOTI5fQ.-Mb3vU1TsXOjnG6RtbjOyYJoz6xzqToMfc4B4-H38KE', '2026-05-07 19:22:09'),
(12, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJsdWttYW4iLCJlbWFpbCI6Imx1a21hbjEyM0BleGFtcGxlLmNvbSIsImlhdCI6MTc3ODE1NjYwNSwiZXhwIjoxNzc4MjQzMDA1fQ.Nj1-OOYytTE9EkH2vzTPigTlEAEMPYu0Bagn85-Ne-o', '2026-05-07 19:23:25'),
(13, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJpYXQiOjE3NzgxNTczMTQsImV4cCI6MTc3ODI0MzcxNH0.D44RmgbVfPGt8Ul5Wh4j-Yo3BFykixIiS-YDmGMbS24', '2026-05-07 19:35:14'),
(14, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJpYXQiOjE3NzgxNTgxODIsImV4cCI6MTc3ODI0NDU4Mn0.V_w5sISF7UGiddp7Q0artQxQsa-0SrKJfpBU4JmQ0rE', '2026-05-07 19:49:42'),
(15, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJpYXQiOjE3NzgxNTgzODksImV4cCI6MTc3ODI0NDc4OX0.OwIwpZMsJj0PiLtADAkU9aifxpcoeaEUHcXuvsrWl40', '2026-05-07 19:53:09'),
(16, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJpYXQiOjE3NzgxNTgzOTMsImV4cCI6MTc3ODI0NDc5M30.AIvguEqtWEE6DrChbhwUWv4O4D4Tvbdb6zPT4gRdJTE', '2026-05-07 19:53:13'),
(17, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJpYXQiOjE3NzgyMjUyMDIsImV4cCI6MTc3ODMxMTYwMn0.ePlxHgy1IHkvYSpDMurrXl_WeGK0laNNqsogGr9a_iQ', '2026-05-08 14:26:42'),
(18, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODI1MTkxMiwiZXhwIjoxNzc4MzM4MzEyfQ.pjoCr1OrFo2U6_VF4RDwp6zLECsKIj40MeBinLnEggk', '2026-05-08 21:51:52'),
(19, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMwMjU2MiwiZXhwIjoxNzc4Mzg4OTYyfQ.xKYCIrGorutguPiBN6jQqJ9NwBV8lcpwOKM6GlJsnKs', '2026-05-09 11:56:02'),
(20, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMwODQ2MSwiZXhwIjoxNzc4Mzk0ODYxfQ.4EOEMfqnP9BBOFf_rPpwzPZoDyV8m7EgZ9AwkduICHY', '2026-05-09 13:34:21'),
(21, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMwODQ3OCwiZXhwIjoxNzc4Mzk0ODc4fQ.6CcgKpBHF9Am8GsuavRoREfS4Mjr9eiWR5toX__9dDQ', '2026-05-09 13:34:38'),
(22, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMwOTA5MywiZXhwIjoxNzc4Mzk1NDkzfQ.mFZthmvsfcDYVey71hfKcymlktDhmYFIYpNvWfa_i44', '2026-05-09 13:44:53'),
(23, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMxMDA3NCwiZXhwIjoxNzc4Mzk2NDc0fQ.uzB-F-0PoMAxlv6sJ5OqncjaDf7SoTMwtFfFPsM3r6M', '2026-05-09 14:01:14'),
(24, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMxMDIyNCwiZXhwIjoxNzc4Mzk2NjI0fQ.jD7k3-M6P7nCcuCFQ7FVTfCuKj2BsA0gVHQJPLpy3O4', '2026-05-09 14:03:44'),
(25, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMxMDkyMywiZXhwIjoxNzc4Mzk3MzIzfQ.A3KoV0t6em_OTclhmsAEcYbvIf-KhmMwgsH8600Dbuo', '2026-05-09 14:15:23'),
(29, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODQwNDIyMiwiZXhwIjoxNzc4NDkwNjIyfQ.oV7WmxR5eETehelXPUypGx4BQr0viopo2qS1Awmk1kg', '2026-05-10 16:10:22'),
(31, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODQwNTExNSwiZXhwIjoxNzc4NDkxNTE1fQ.gDIBgn6CJLLeD0t10fw7SobgvPCzMg1fSN6g6bcIFw8', '2026-05-10 16:25:15'),
(32, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODQwNjA2MSwiZXhwIjoxNzc4NDkyNDYxfQ.QFnd61oWfpcIMJdflgc9zL2lPF-5pF5oBbrfd70U52s', '2026-05-10 16:41:01'),
(33, 11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJuYW1lIjoia2FjYW1hdGEiLCJlbWFpbCI6Imx1a21hbnVsaGFraW02MzA1QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc4NDA2NjE5LCJleHAiOjE3Nzg0OTMwMTl9.2lGnT9lsLjBNNA2_wp_neHu74UHK8dZ6ICWVCJZDrog', '2026-05-10 16:50:19'),
(34, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODU5MzIwMCwiZXhwIjoxNzc4Njc5NjAwfQ.JlY1UVB5_icALiX5ydzIUjYqUWytCkNFHEj10aZEmDE', '2026-05-12 20:40:00'),
(35, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODY1ODMwNCwiZXhwIjoxNzc4NzQ0NzA0fQ.DbLDkPAJL9n2CcOyadDiv470_DNNGOvEI95NPQTEy3Y', '2026-05-13 14:45:04'),
(36, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODcyOTQzNywiZXhwIjoxNzc4ODE1ODM3fQ.C-tOU4avMe1kpwoaDz5Yz80cGkq8Ne8uC-6INR39_BU', '2026-05-14 10:30:37'),
(37, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiTHVrbWFuMTIzIiwiZW1haWwiOiJsdWtsdWsxMkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc3ODcyOTQ1MywiZXhwIjoxNzc4ODE1ODUzfQ.EYbvGx7gyhn5ecM6yDTdquzeKtwb0mI4VPwKwvq6c8w', '2026-05-14 10:30:53'),
(38, 13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJuYW1lIjoiTHVrbWFubWFuMTIzIiwiZW1haWwiOiJsdWttYW5tYW4xMjNAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3Nzg3Mjk0OTQsImV4cCI6MTc3ODgxNTg5NH0.z1S3PF_BOWe2cINybZ1rn-IHXIu6WdiO72juhBNGQxo', '2026-05-14 10:31:34'),
(39, 13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJuYW1lIjoiTHVrbWFubWFuMTIzIiwiZW1haWwiOiJsdWttYW5tYW4xMjNAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3Nzg3Mjk1MDYsImV4cCI6MTc3ODgxNTkwNn0.0MqUdHYiToFtjgxQQUBkiW9-mwUVmRo_NBVfxdvWAXQ', '2026-05-14 10:31:46');

-- --------------------------------------------------------

--
-- Table structure for table `tb_journal`
--

CREATE TABLE `tb_journal` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `durasi` tinyint NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_journal`
--

INSERT INTO `tb_journal` (`id`, `user_id`, `judul`, `deskripsi`, `durasi`, `createdAt`, `updatedAt`) VALUES
(1, 9, 'kerjaan', 'saya cape kerjaan banyak banget tapi gaji kecil abnget kwkwkw hahaha', 0, '2026-05-06 17:57:55', '2026-05-06 17:57:55'),
(2, 9, 'kerjaan', 'saya cape kerjaan banyak banget tapi gaji kecil abnget kwkwkw hahaha', 0, '2026-05-06 18:03:34', '2026-05-06 18:03:34'),
(3, 9, 'kerjaan', 'saya cape kerjaan banyak banget tapi gaji kecil abnget kwkwkw hahaha', 0, '2026-05-06 18:03:44', '2026-05-06 18:03:44'),
(4, 9, 'kerjaan', 'saya cape kerjaan banyak banget tapi gaji kecil abnget kwkwkw hahaha', 0, '2026-05-06 18:03:52', '2026-05-06 18:03:52'),
(5, 9, 'kerjaan', 'saya cape kerjaan banyak banget tapi gaji kecil abnget kwkwkw hahaha', 0, '2026-05-06 18:05:43', '2026-05-06 18:05:43'),
(6, 9, 'kerjaan', 'saya cape kerjaan banyak banget tapi gaji kecil abnget kwkwkw hahaha', 0, '2026-05-06 18:06:55', '2026-05-06 18:06:55'),
(7, 9, 'terbaruu wkwkkw', 'mudahkan semua urusan', 0, '2026-05-07 19:30:12', '2026-05-07 19:30:12'),
(8, 10, 'terbaruu wkwkkw', 'mudahkan semua urusan', 0, '2026-05-07 19:53:49', '2026-05-07 19:53:49'),
(9, 10, 'jurnal 123', 'mudahkan semua urusan', 0, '2026-05-08 14:28:06', '2026-05-08 14:28:06'),
(11, 10, 'jurnal 123', 'mudahkan semua urusan', 120, '2026-05-10 16:18:59', '2026-05-10 16:18:59'),
(12, 10, 'dear kami', 'indonesia negara hukum tapi info loker', 23, '2026-05-10 16:24:42', '2026-05-10 16:24:42'),
(13, 10, 'cape tugas', 'tugas banyak banget', 11, '2026-05-12 20:42:35', '2026-05-12 20:42:35');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kuesioner_hasil`
--

CREATE TABLE `tb_kuesioner_hasil` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `umur` tinyint NOT NULL,
  `pekerjaan` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'mahasiswa, karyawan, wirausaha',
  `tingkat_stres` tinyint NOT NULL COMMENT '1-5',
  `durasi_stres` tinyint NOT NULL COMMENT 'dalam minggu',
  `penyebab_stres` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'akademik, pekerjaan, hubungan, finansial',
  `kualitas_tidur` tinyint NOT NULL COMMENT '1-5',
  `waktu_luang` smallint NOT NULL COMMENT 'dalam menit',
  `mood` tinyint DEFAULT NULL COMMENT '0-4',
  `aktivitas_fisik` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'sering, jarang',
  `preferensi_olahraga` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ya, tidak',
  `preferensi_membaca` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ya, tidak',
  `preferensi_journaling` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ya, tidak',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_kuesioner_hasil`
--

INSERT INTO `tb_kuesioner_hasil` (`id`, `user_id`, `umur`, `pekerjaan`, `tingkat_stres`, `durasi_stres`, `penyebab_stres`, `kualitas_tidur`, `waktu_luang`, `mood`, `aktivitas_fisik`, `preferensi_olahraga`, `preferensi_membaca`, `preferensi_journaling`, `createdAt`) VALUES
(1, 10, 22, 'mahasiswa', 4, 3, 'akademik', 2, 90, 2, 'jarang', 'tidak', 'ya', 'ya', '2026-05-08 21:55:13'),
(2, 10, 22, 'mahasiswa', 4, 3, 'akademik', 2, 90, 2, 'jarang', 'tidak', 'ya', 'ya', '2026-05-08 22:02:19'),
(3, 10, 22, 'mahasiswa', 4, 3, 'akademik', 2, 90, 2, 'jarang', 'tidak', 'ya', 'ya', '2026-05-08 22:06:47'),
(4, 10, 20, 'mahasiswa', 4, 3, 'akademik', 4, 120, 4, 'sering', 'ya', 'ya', 'tidak', '2026-05-08 22:10:38'),
(5, 10, 40, 'mahasiswa', 4, 3, 'akademik', 4, 120, 4, 'sering', 'tidak', 'ya', 'tidak', '2026-05-09 11:58:22'),
(6, 10, 18, 'mahasiswa', 4, 3, 'akademik', 4, 120, 4, 'sering', 'ya', 'tidak', 'tidak', '2026-05-09 14:16:14'),
(7, 10, 18, 'mahasiswa', 4, 3, 'akademik', 4, 120, 4, 'sering', 'ya', 'ya', 'tidak', '2026-05-09 14:17:01'),
(8, 10, 19, 'mahasiswa', 4, 3, 'akademik', 4, 120, 4, 'sering', 'ya', 'ya', 'tidak', '2026-05-09 14:18:16'),
(9, 10, 19, 'mahasiswa', 4, 3, 'akademik', 4, 120, 4, 'sering', 'ya', 'ya', 'tidak', '2026-05-09 14:20:23'),
(10, 10, 19, 'mahasiswa', 4, 3, 'akademik', 4, 120, 4, 'sering', 'ya', 'ya', 'tidak', '2026-05-09 15:05:12'),
(11, 10, 19, 'mahasiswa', 2, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 15:07:47'),
(12, 10, 19, 'mahasiswa', 2, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 15:09:14'),
(13, 10, 50, 'mahasiswa', 2, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 15:11:41'),
(14, 10, 30, 'mahasiswa', 2, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 15:25:41'),
(15, 10, 30, 'mahasiswa', 2, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:03:24'),
(16, 10, 32, 'mahasiswa', 2, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:09:47'),
(17, 10, 32, 'mahasiswa', 2, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:14:08'),
(18, 10, 24, 'mahasiswa', 4, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:16:50'),
(19, 10, 24, 'mahasiswa', 4, 1, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:19:41'),
(20, 10, 24, 'mahasiswa', 4, 2, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:26:26'),
(21, 10, 24, 'mahasiswa', 4, 2, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:31:52'),
(22, 10, 24, 'mahasiswa', 4, 2, 'akademik', 4, 120, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:37:26'),
(23, 10, 27, 'mahasiswa', 5, 2, 'akademik', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:41:15'),
(24, 10, 22, 'mahasiswa', 1, 2, 'akademik', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:42:37'),
(25, 10, 22, 'mahasiswa', 1, 2, 'akademik', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:46:53'),
(26, 10, 22, 'mahasiswa', 1, 2, 'akademik', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:49:26'),
(27, 10, 22, 'mahasiswa', 1, 2, 'akademik', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 16:56:51'),
(28, 10, 22, 'mahasiswa', 1, 2, 'akademik', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 17:05:50'),
(29, 10, 26, 'karyawan', 4, 4, 'hubungan', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 17:11:47'),
(30, 10, 26, 'karyawan', 4, 4, 'hubungan', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 17:15:35'),
(31, 10, 26, 'karyawan', 4, 4, 'hubungan', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 17:23:20'),
(32, 10, 30, 'karyawan', 3, 4, 'hubungan', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-09 17:25:03'),
(33, 10, 30, 'karyawan', 3, 4, 'hubungan', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-10 16:29:34'),
(34, 10, 21, 'karyawan', 3, 90, 'hubungan', 4, 90, 2, 'jarang', 'tidak', 'ya', 'ya', '2026-05-10 16:38:38'),
(35, 10, 17, 'pelajar', 3, 14, 'hubungan', 2, 300, 2, 'sering', 'ya', 'tidak', 'tidak', '2026-05-10 16:42:37'),
(36, 10, 30, 'mahasiswa', 3, 4, 'hubungan', 4, 90, 3, 'jarang', 'tidak', 'ya', 'tidak', '2026-05-10 16:43:41'),
(37, 11, 50, 'mahasiswa', 3, 3, 'hubungan', 4, 50, 2, 'jarang', 'tidak', 'tidak', 'tidak', '2026-05-10 16:55:21'),
(38, 11, 17, 'mahasiswa', 3, 6, 'pekerjaan', 3, 80, 1, 'jarang', 'tidak', 'tidak', 'ya', '2026-05-10 17:03:53'),
(39, 10, 20, 'mahasiswa', 2, 4, 'akademik', 2, 120, 2, 'jarang', 'tidak', 'ya', 'ya', '2026-05-12 20:41:42');

-- --------------------------------------------------------

--
-- Table structure for table `tb_olahraga`
--

CREATE TABLE `tb_olahraga` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `jenis` enum('lari','jalan','sepeda') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'lari, jalan dan sepeda',
  `jarak_km` decimal(5,2) NOT NULL COMMENT 'jarak dalam kilometer',
  `durasi_menit` smallint NOT NULL COMMENT 'durasi dalam menit',
  `rute_maps` text COLLATE utf8mb4_unicode_ci COMMENT 'data koordinat rute JSON',
  `tanggal` date NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_rekomendasi_aktivitas`
--

CREATE TABLE `tb_rekomendasi_aktivitas` (
  `id` int NOT NULL,
  `sesi_id` int NOT NULL,
  `is_utama` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1 = rekomendasi_utama, 0 = alternatif',
  `aktivitas` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'journaling, membaca, olahraga',
  `confidence` decimal(5,3) NOT NULL COMMENT '0.000 - 1.000',
  `durasi` smallint NOT NULL COMMENT 'dalam menit',
  `detail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'jogging ringan, menulis perasaan harian, dst'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_rekomendasi_aktivitas`
--

INSERT INTO `tb_rekomendasi_aktivitas` (`id`, `sesi_id`, `is_utama`, `aktivitas`, `confidence`, `durasi`, `detail`) VALUES
(1, 1, 1, 'membaca', 0.960, 25, 'buku self-improvement atau relaksasi'),
(2, 2, 1, 'olahraga', 1.000, 30, 'jogging ringan atau senam ringan'),
(3, 3, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(4, 4, 1, 'olahraga', 1.000, 30, 'jogging ringan atau senam ringan'),
(5, 5, 1, 'olahraga', 1.000, 30, 'jogging ringan atau senam ringan'),
(6, 6, 1, 'olahraga', 1.000, 30, 'jogging ringan atau senam ringan'),
(7, 7, 1, 'olahraga', 1.000, 30, 'jogging ringan atau senam ringan'),
(8, 8, 1, 'olahraga', 1.000, 30, 'jogging ringan atau senam ringan'),
(9, 9, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(10, 10, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(11, 11, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(12, 12, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(13, 13, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(14, 14, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(15, 15, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(16, 16, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(17, 17, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(18, 18, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(19, 19, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(20, 20, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(21, 21, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(22, 22, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(23, 23, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(24, 24, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(25, 25, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(26, 26, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(27, 27, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(28, 28, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(29, 29, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(30, 30, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(31, 31, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(32, 32, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(33, 33, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(34, 34, 1, 'membaca', 1.000, 25, 'buku self-improvement atau relaksasi'),
(35, 35, 1, 'olahraga', 0.960, 30, 'jogging ringan atau senam ringan'),
(36, 36, 1, 'journaling', 1.000, 20, 'menulis perasaan dan refleksi harian'),
(37, 37, 1, 'membaca', 0.950, 25, 'buku self-improvement atau relaksasi'),
(38, 37, 0, 'journaling', 0.050, 20, 'menulis perasaan dan refleksi harian');

-- --------------------------------------------------------

--
-- Table structure for table `tb_rekomendasi_buku`
--

CREATE TABLE `tb_rekomendasi_buku` (
  `id` int NOT NULL,
  `aktivitas_id` int NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `penulis` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kategori` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_rekomendasi_buku`
--

INSERT INTO `tb_rekomendasi_buku` (`id`, `aktivitas_id`, `judul`, `penulis`, `kategori`, `thumbnail`, `deskripsi`) VALUES
(1, 1, 'The Stress-Proof Brain', 'Melanie Greenberg', 'Self Help, Mental Health', 'https://books.google.com/thumbnail/stress_proof.jpg', 'Master your emotional response to stress using mindfulness, neuroscience, and CBT....'),
(2, 1, 'Burnout: The Secret to Unlocking the Stress Cycle', 'Emily Nagoski', 'Self Help, Psychology, Health', 'https://books.google.com/thumbnail/burnout.jpg', 'Science-based strategies to complete the stress cycle and prevent burnout....'),
(3, 1, 'Feeling Good: The New Mood Therapy', 'David D. Burns', 'Psychology, Self Help', 'https://books.google.com/thumbnail/feeling_good.jpg', 'Evidence-based cognitive therapy techniques to defeat depression and feel good again....'),
(4, 3, 'Feeling Good: The New Mood Therapy', 'David D. Burns', 'Psychology, Self Help', 'https://books.google.com/thumbnail/feeling_good.jpg', 'Evidence-based cognitive therapy techniques to defeat depression and feel good again....'),
(5, 3, 'Maybe You Should Talk to Someone', 'Lori Gottlieb', 'Psychology, Memoir, Self Help', 'https://images.gr-assets.com/maybe_talk.jpg', 'A therapist, her therapist, and our lives revealed — humanizing therapy....'),
(6, 3, 'The Anxiety and Worry Workbook', 'Clark & Beck', 'Self Help, Psychology', 'https://books.google.com/thumbnail/anxiety_workbook.jpg', 'Practical CBT-based strategies to overcome anxiety and excessive worry in daily life....'),
(7, 9, 'Mindfulness for Beginners', 'Jon Kabat-Zinn', 'Mindfulness, Self Help', 'https://books.google.com/thumbnail/mindfulness_beginners.jpg', 'Introduction to mindfulness meditation to reduce stress and cultivate awareness....'),
(8, 9, 'Studying Smart', 'Diana Scharf Hunt', 'Study Skills, Academic, Education', 'https://images.gr-assets.com/studying_smart.jpg', 'Time-tested strategies for improving study habits and academic performance....'),
(9, 9, 'Ikigai: The Japanese Secret', 'Héctor García', 'Self Help, Philosophy, Mindfulness', 'https://images.gr-assets.com/ikigai.jpg', 'Finding your reason for being — Japanese wisdom for a long, happy life....'),
(10, 10, 'Mindfulness for Beginners', 'Jon Kabat-Zinn', 'Mindfulness, Self Help', 'http://books.google.com/books/content?id=JEWfCgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Introduction to mindfulness meditation to reduce stress and cultivate awareness....'),
(11, 10, 'The Gifts of Imperfection', 'Brené Brown', 'Self Help, Psychology', 'http://books.google.com/books/content?id=cDgaLgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Let go of who you think you should be and embrace who you are through vulnerability....'),
(12, 10, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'http://books.google.com/books/content?id=WwAiBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(13, 11, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'http://books.google.com/books/content?id=WwAiBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(14, 11, 'Studying Smart', 'Diana Scharf Hunt', 'Study Skills, Academic, Education', 'http://books.google.com/books/content?id=SmUFAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Time-tested strategies for improving study habits and academic performance....'),
(15, 11, 'Ikigai: The Japanese Secret', 'Héctor García', 'Self Help, Philosophy, Mindfulness', 'http://books.google.com/books/content?id=YBT1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Finding your reason for being — Japanese wisdom for a long, happy life....'),
(16, 12, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'https://via.placeholder.com/300x450?text=No+Cover', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(17, 12, 'Mans Search for Meaning', 'Viktor E. Frankl', 'Psychology, Philosophy, Self Help', 'https://via.placeholder.com/300x450?text=No+Cover', 'Finding purpose and meaning even in the most extreme suffering....'),
(18, 12, 'Ikigai: The Japanese Secret', 'Héctor García', 'Self Help, Philosophy, Mindfulness', 'https://via.placeholder.com/300x450?text=No+Cover', 'Finding your reason for being — Japanese wisdom for a long, happy life....'),
(19, 13, 'The Four Agreements', 'Don Miguel Ruiz', 'Self Help, Spirituality, Philosophy', 'https://books.google.com/books/content?id=hzVxiw2DiOsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'The incredible New York Times and international bestselling guide to true happiness. “This book by don Miguel Ruiz, simple yet so powerful, has made a tremendous difference in how I think and act in every encounter.”—Oprah Winfrey In The Four Agreements, a perennial bestseller published in dozens of languages worldwide, don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, The Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love. “Don Miguel Ruiz’s book is a roadmap to enlightenment and freedom.”—Deepak Chopra, Author, The Seven Spiritual Laws of Success “An inspiring book with many great lessons.”—Wayne Dyer, Author, Real Magic “In the tradition of Castaneda, Ruiz distills essential Toltec wisdom, expressing with clarity and impeccability what it means for men and women to live as peaceful warriors in the modern world.”—Dan Millman, Author, Way of the Peaceful Warrior'),
(20, 13, 'The War of Art', 'Steven Pressfield', 'Self Help, Career, Creativity', 'https://books.google.com/books/content?id=sR3hAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'What keeps so many of us from doing what we long to do? Why is there a naysayer within? How can we avoid the roadblocks of any creative endeavor—be it starting up a dream business venture, writing a novel, or painting a masterpiece? The War of Art identifies the enemy that every one of us must face, outlines a battle plan to conquer this internal foe, then pinpoints just how to achieve the greatest success. The War of Art emphasizes the resolve needed to recognize and overcome the obstacles of ambition and then effectively shows how to reach the highest level of creative discipline. Think of it as tough love . . . for yourself.'),
(21, 13, 'Ikigai: The Japanese Secret', 'Héctor García', 'Self Help, Philosophy, Mindfulness', 'https://via.placeholder.com/300x450?text=No+Cover', 'Finding your reason for being — Japanese wisdom for a long, happy life....'),
(22, 14, 'Mindfulness for Beginners', 'Jon Kabat-Zinn', 'Mindfulness, Self Help', 'https://covers.openlibrary.org/b/isbn/9781604077537-L.jpg', 'An Invitation to the Practice of Mindfulness We may long for wholeness, suggests Jon Kabat-Zinn, but the truth is that it is already here and already ours. The practice of mindfulness holds the possibility of not just a fleeting sense of contentment, but a true embracing of a deeper unity that envelops and permeates our lives. With Mindfulness for Beginners you are invited to learn how to transform your relationship to the way you think, feel, love, work, and play—and thereby awaken to and embody more completely who you really are. Here, the teacher, scientist, and clinician who first demonstrated the benefits of mindfulness within mainstream Western medicine offers a book that you can use in three unique ways: as a collection of reflections and practices to be opened and explored at random; as an illuminating and engaging start-to-finish read; or as an unfolding \"lesson-a-day\" primer on mindfulness practice. Beginning and advanced meditators alike will discover in these pages a valuable distillation of the key attitudes and essential practices that Jon Kabat-Zinn has found most useful with his students, including: Why heartfulness is synonymous with true mindfulnessThe value of coming back to our bodies and to our senses over and over againHow our thoughts \"self-liberate\" when touched by awarenessMoving beyond our \"story\" into direct experienceStabilizing our attention and presence amidst daily activitiesThe three poisons that cause suffering—and their antidotesHow mindfulness heals, even after the factReclaiming our wholeness, and more. The prescription for living a more mindful life seems simple enough: return your awareness again and again to whatever is going on. But if you\'ve tried it, you know that here is where all the questions and challenges really begin. Mindfulness for Beginners provides welcome answers, insights, and instruction to help us make that shift, moment by moment, into a more spacious, clear, reliable, and loving connection with ourselves and the world. Includes digital access to five guided mindfulness meditations by Jon Kabat-Zinn, selected from the audio program that inspired this book.'),
(23, 14, 'The Gifts of Imperfection', 'Brené Brown', 'Self Help, Psychology', 'https://covers.openlibrary.org/b/isbn/9781592859894-L.jpg', 'NEW YORK TIMES BESTSELLER • This tenth-anniversary edition of the game-changing #1 New York Times bestseller features a new foreword and new tools to make the work your own. For over a decade, Brené Brown has found a special place in our hearts as a gifted mapmaker and a fellow traveler. She is both a social scientist and a kitchen-table friend whom you can always count on to tell the truth, make you laugh, and, on occasion, cry with you. And what’s now become a movement all started with The Gifts of Imperfection, which has sold more than two million copies in thirty-five different languages across the globe. What transforms this book from words on a page to effective daily practices are the ten guideposts to wholehearted living. The guideposts not only help us understand the practices that will allow us to change our lives and families, they also walk us through the unattainable and sabotaging expectations that get in the way. Brené writes, “This book is an invitation to join a wholehearted revolution. A small, quiet, grassroots movement that starts with each of us saying, ‘My story matters because I matter.’ Revolution might sound a little dramatic, but in this world, choosing authenticity and worthiness is an absolute act of resistance.”'),
(24, 14, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'https://covers.openlibrary.org/b/isbn/9781458727381-L.jpg', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(25, 15, 'Ikigai: The Japanese Secret', 'Héctor García', 'Self Help, Philosophy, Mindfulness', 'https://books.google.com/books/content?id=4UCnDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'INTERNATIONAL BESTSELLER • 2 MILLION+ COPIES SOLD WORLDWIDE “Workers looking for more fulfilling positions should start by identifying their ikigai.” ―Business Insider “One of the unintended—yet positive—consequences of the [pandemic] is that it is forcing people to reevaluate their jobs, careers, and lives. Use this time wisely, find your personal ikigai, and live your best life.” ―Forbes Find your ikigai (pronounced ee-key-guy) to live longer and bring more meaning and joy to all your days. “Only staying active will make you want to live a hundred years.” —Japanese proverb According to the Japanese, everyone has an ikigai—a reason for living. And according to the residents of the Japanese village with the world’s longest-living people, finding it is the key to a happier and longer life. Having a strong sense of ikigai—where what you love, what you’re good at, what you can get paid for, and what the world needs all overlap—means that each day is infused with meaning. It’s the reason we get up in the morning. It’s also the reason many Japanese never really retire (in fact there’s no word in Japanese that means retire in the sense it does in English): They remain active and work at what they enjoy, because they’ve found a real purpose in life—the happiness of always being busy. In researching this book, the authors interviewed the residents of the Japanese village with the highest percentage of 100-year-olds—one of the world’s Blue Zones. Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work, how they foster collaboration and community, and—their best-kept secret—how they find the ikigai that brings satisfaction to their lives. And it provides practical tools to help you discover your own ikigai. Because who doesn’t want to find happiness in every day? What’s your ikigai?'),
(26, 15, 'The Gifts of Imperfection', 'Brené Brown', 'Self Help, Psychology', 'https://books.google.com/books/content?id=0kPXDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'NEW YORK TIMES BESTSELLER • This tenth-anniversary edition of the game-changing #1 New York Times bestseller features a new foreword and new tools to make the work your own. For over a decade, Brené Brown has found a special place in our hearts as a gifted mapmaker and a fellow traveler. She is both a social scientist and a kitchen-table friend whom you can always count on to tell the truth, make you laugh, and, on occasion, cry with you. And what’s now become a movement all started with The Gifts of Imperfection, which has sold more than two million copies in thirty-five different languages across the globe. What transforms this book from words on a page to effective daily practices are the ten guideposts to wholehearted living. The guideposts not only help us understand the practices that will allow us to change our lives and families, they also walk us through the unattainable and sabotaging expectations that get in the way. Brené writes, “This book is an invitation to join a wholehearted revolution. A small, quiet, grassroots movement that starts with each of us saying, ‘My story matters because I matter.’ Revolution might sound a little dramatic, but in this world, choosing authenticity and worthiness is an absolute act of resistance.”'),
(27, 15, 'The War of Art', 'Steven Pressfield', 'Self Help, Career, Creativity', 'https://books.google.com/books/content?id=sR3hAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'What keeps so many of us from doing what we long to do? Why is there a naysayer within? How can we avoid the roadblocks of any creative endeavor—be it starting up a dream business venture, writing a novel, or painting a masterpiece? The War of Art identifies the enemy that every one of us must face, outlines a battle plan to conquer this internal foe, then pinpoints just how to achieve the greatest success. The War of Art emphasizes the resolve needed to recognize and overcome the obstacles of ambition and then effectively shows how to reach the highest level of creative discipline. Think of it as tough love . . . for yourself.'),
(28, 16, 'Burnout: The Secret to Unlocking the Stress Cycle', 'Emily Nagoski', 'Self Help, Psychology, Health', 'https://books.google.com/books/content?id=ZjiREAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'NEW YORK TIMES BESTSELLER • “This book is a gift! I’ve been practicing their strategies, and it’s a total game-changer.”—Brené Brown, PhD, author of the #1 New York Times bestseller Dare to Lead This groundbreaking book explains why women experience burnout differently than men—and provides a simple, science-based plan to help women minimize stress, manage emotions, and live a more joyful life. Burnout. Many women in America have experienced it. What’s expected of women and what it’s really like to be a woman in today’s world are two very different things—and women exhaust themselves trying to close the gap between them. How can you “love your body” when every magazine cover has ten diet tips for becoming “your best self”? How do you “lean in” at work when you’re already operating at 110 percent and aren’t recognized for it? How can you live happily and healthily in a sexist world that is constantly telling you you’re too fat, too needy, too noisy, and too selfish? Sisters Emily Nagoski, PhD, and Amelia Nagoski, DMA, are here to help end the cycle of feeling overwhelmed and exhausted. Instead of asking us to ignore the very real obstacles and societal pressures that stand between women and well-being, they explain with compassion and optimism what we’re up against—and show us how to fight back. In these pages you’ll learn • what you can do to complete the biological stress cycle—and return your body to a state of relaxation • how to manage the “monitor” in your brain that regulates the emotion of frustration • how the Bikini Industrial Complex makes it difficult for women to love their bodies—and how to defend yourself against it • why rest, human connection, and befriending your inner critic are keys to recovering and preventing burnout With the help of eye-opening science, prescriptive advice, and helpful worksheets and exercises, all women will find something transformative in these pages—and will be empowered to create positive change. Emily and Amelia aren’t here to preach the broad platitudes of expensive self-care or insist that we strive for the impossible goal of “having it all.” Instead, they tell us that we are enough, just as we are—and that wellness, true wellness, is within our reach. NAMED ONE OF THE BEST BOOKS OF THE YEAR BY BOOKRIOT “Burnout is the gold standard of self-help books, delivering cutting-edge science with energy, empathy, and wit. The authors know exactly what’s going on inside your frazzled brain and body, and exactly what you can do to fix it. . . . Truly life-changing.”—Sarah Knight, New York Times bestselling author of Calm the F*ck Down'),
(29, 16, 'Maybe You Should Talk to Someone', 'Lori Gottlieb', 'Psychology, Memoir, Self Help', 'https://books.google.com/books/content?id=ATKQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\"From a New York Timesbest-selling writer, psychotherapist, and advice columnist, a brilliant and surprising new book that takes us behind the scenes of a therapist\'s world--where her patients are in crisis (and so is she)\"--'),
(30, 16, 'Lost Connections', 'Johann Hari', 'Psychology, Mental Health, Self Help', 'https://books.google.com/books/content?id=L0MIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'THE INTERNATIONAL BESTSELLER: A radically new way of thinking about depression and anxiety \'A book that could actually make us happy\' SIMON AMSTELL \'This amazing book will change your life\' ELTON JOHN \'One of the most important texts of recent years\' BRITISH JOURNAL OF GENERAL PRACTICE \'Brilliant, stimulating, radical\' MATT HAIG \'The more people read this book, the better off the world will be\' NAOMI KLEIN \'Wonderful\' HILLARY CLINTON \'Eye-opening\' GUARDIAN \'Brilliant for anyone wanting a better understanding of mental health\' ZOE BALL \'A game-changer\' DAVINA MCCALL \'Extraordinary\' DR MAX PEMBERTON Depression and anxiety are now at epidemic levels. Why? Across the world, scientists have uncovered evidence for nine different causes. Some are in our biology, but most are in the way we are living today. Lost Connections offers a radical new way of thinking about this crisis. It shows that once we understand the real causes, we can begin to turn to pioneering new solutions – ones that offer real hope.'),
(31, 17, 'Burnout: The Secret to Unlocking the Stress Cycle', 'Emily Nagoski', 'Self Help, Psychology, Health', 'https://books.google.com/books/content?id=kZ9KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\'This book is a gift! I\'ve been practicing their strategies, and it\'s a total game-changer.\' Brené Brown, PhD, author of the #1 New York Times bestseller DARE TO LEAD This groundbreaking book explains why women experience burnout differently than men - and provides a simple, science-based plan to help women minimize stress, manage emotions and live a more joyful life. The gap between what it\'s really like to be a woman and what people expect women to be is a primary cause of burnout, because we exhaust ourselves trying to close the space between the two. How can you \'love your body\' when everything around you tells you you\'re inadequate? How do you \'lean in\' at work when you\'re already giving 110% and aren\'t recognized for it? How can you live happily and healthily in a world that is constantly telling you you\'re too fat, too needy, too noisy and too selfish? Sisters Emily Nagoski, Ph.D., the bestselling author of Come as You Are, and Amelia Nagoski, DMA, are here to help end the cycle of overwhelm and exhaustion, and confront the obstacles that stand between women and well-being. With insights from the latest science, prescriptive advice, and helpful worksheets and exercises, Burnout reveals: * what you can do to complete the biological stress cycle - and return your body to a state of relaxation. * how to manage the \'monitor\' in your brain that regulates the emotion of frustration. * how the Bikini Industrial Complex makes it difficult for women to love their bodies - and how to fight back. * why rest, human connection, and befriending your inner critic are key to recovering from and preventing burnout. Eye-opening, compassionate and optimistic, Burnout will completely transform the way we think about and manage stress, empowering women to thrive under pressure and enjoy meaningful yet balanced lives. All women will find something transformative in these pages - and be empowered to create positive and lasting change.'),
(32, 17, 'The Stress-Proof Brain', 'Melanie Greenberg', 'Self Help, Mental Health', 'https://books.google.com/books/content?id=bRDyDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'We can’t avoid the things that stress us out, but we can change how we respond to them. In this breakthrough book, a clinical psychologist and neuroscience expert offers an original and comprehensive approach to help readers harness the power of positive emotions and overcome stress for good. The unique mindfulness exercises in this book provide a recipe for resilience, empowering readers to master their emotional response to stress, overcome negative thinking, and create a more tolerant, stress-proof brain.'),
(33, 17, 'Maybe You Should Talk to Someone', 'Lori Gottlieb', 'Psychology, Memoir, Self Help', 'https://books.google.com/books/content?id=ATKQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\"From a New York Timesbest-selling writer, psychotherapist, and advice columnist, a brilliant and surprising new book that takes us behind the scenes of a therapist\'s world--where her patients are in crisis (and so is she)\"--'),
(34, 18, 'The Body Keeps the Score', 'Bessel van der Kolk', 'Psychology, Health, Self Help', 'https://books.google.com/books/content?id=3Q3UAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '#1 New York Times bestseller “Essential reading for anyone interested in understanding and treating traumatic stress and the scope of its impact on society.” —Alexander McFarlane, Director of the Centre for Traumatic Stress Studies A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing in this New York Times bestseller Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity. Based on Dr. van der Kolk’s own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.'),
(35, 18, 'Maybe You Should Talk to Someone', 'Lori Gottlieb', 'Psychology, Memoir, Self Help', 'https://books.google.com/books/content?id=ATKQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\"From a New York Timesbest-selling writer, psychotherapist, and advice columnist, a brilliant and surprising new book that takes us behind the scenes of a therapist\'s world--where her patients are in crisis (and so is she)\"--'),
(36, 18, 'The Anxiety and Worry Workbook', 'Clark & Beck', 'Self Help, Psychology', 'https://books.google.com/books/content?id=vhSwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'If you are seeking lasting relief from out-of-control anxiety, this is the book for you. It is grounded in cognitive behavior therapy (CBT), the proven treatment approach developed and tested over decades by pioneering clinician-researcher Aaron T. Beck. Now Dr. Beck and fellow expert David A. Clark put the tools and techniques of CBT at your fingertips in this compassionate guide. Carefully crafted worksheets (additional copies can be downloaded and printed as needed), exercises, and examples reflect the authors\' wealth of experience. Learn practical strategies for identifying anxiety triggers, challenging the thoughts and beliefs that lead to distress, safely facing feared situations, and truly loosening anxiety\'s grip--one manageable step at a time. Updated throughout, the second edition includes evaluation exercises that help you get to know your anxiety; up-to-date information about panic attacks, social anxiety, and other topics; additional graphics; and new troubleshooting tips and tools for success. Mental health professionals, see also the state-of-the-art clinical reference Exposure Therapy for Anxiety, Second Edition, by Jonathan S. Abramowitz, Brett J. Deacon, and Stephen P. H. Whiteside.'),
(37, 19, 'Burnout: The Secret to Unlocking the Stress Cycle', 'Emily Nagoski', 'Self Help, Psychology, Health', 'https://books.google.com/books/content?id=kZ9KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\'This book is a gift! I\'ve been practicing their strategies, and it\'s a total game-changer.\' Brené Brown, PhD, author of the #1 New York Times bestseller DARE TO LEAD This groundbreaking book explains why women experience burnout differently than men - and provides a simple, science-based plan to help women minimize stress, manage emotions and live a more joyful life. The gap between what it\'s really like to be a woman and what people expect women to be is a primary cause of burnout, because we exhaust ourselves trying to close the space between the two. How can you \'love your body\' when everything around you tells you you\'re inadequate? How do you \'lean in\' at work when you\'re already giving 110% and aren\'t recognized for it? How can you live happily and healthily in a world that is constantly telling you you\'re too fat, too needy, too noisy and too selfish? Sisters Emily Nagoski, Ph.D., the bestselling author of Come as You Are, and Amelia Nagoski, DMA, are here to help end the cycle of overwhelm and exhaustion, and confront the obstacles that stand between women and well-being. With insights from the latest science, prescriptive advice, and helpful worksheets and exercises, Burnout reveals: * what you can do to complete the biological stress cycle - and return your body to a state of relaxation. * how to manage the \'monitor\' in your brain that regulates the emotion of frustration. * how the Bikini Industrial Complex makes it difficult for women to love their bodies - and how to fight back. * why rest, human connection, and befriending your inner critic are key to recovering from and preventing burnout. Eye-opening, compassionate and optimistic, Burnout will completely transform the way we think about and manage stress, empowering women to thrive under pressure and enjoy meaningful yet balanced lives. All women will find something transformative in these pages - and be empowered to create positive and lasting change.'),
(38, 19, 'The Anxiety and Worry Workbook', 'Clark & Beck', 'Self Help, Psychology', 'https://books.google.com/books/content?id=vhSwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'If you are seeking lasting relief from out-of-control anxiety, this is the book for you. It is grounded in cognitive behavior therapy (CBT), the proven treatment approach developed and tested over decades by pioneering clinician-researcher Aaron T. Beck. Now Dr. Beck and fellow expert David A. Clark put the tools and techniques of CBT at your fingertips in this compassionate guide. Carefully crafted worksheets (additional copies can be downloaded and printed as needed), exercises, and examples reflect the authors\' wealth of experience. Learn practical strategies for identifying anxiety triggers, challenging the thoughts and beliefs that lead to distress, safely facing feared situations, and truly loosening anxiety\'s grip--one manageable step at a time. Updated throughout, the second edition includes evaluation exercises that help you get to know your anxiety; up-to-date information about panic attacks, social anxiety, and other topics; additional graphics; and new troubleshooting tips and tools for success. Mental health professionals, see also the state-of-the-art clinical reference Exposure Therapy for Anxiety, Second Edition, by Jonathan S. Abramowitz, Brett J. Deacon, and Stephen P. H. Whiteside.'),
(39, 19, 'The Stress-Proof Brain', 'Melanie Greenberg', 'Self Help, Mental Health', 'https://books.google.com/books/content?id=bRDyDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'We can’t avoid the things that stress us out, but we can change how we respond to them. In this breakthrough book, a clinical psychologist and neuroscience expert offers an original and comprehensive approach to help readers harness the power of positive emotions and overcome stress for good. The unique mindfulness exercises in this book provide a recipe for resilience, empowering readers to master their emotional response to stress, overcome negative thinking, and create a more tolerant, stress-proof brain.'),
(40, 20, 'Burnout: The Secret to Unlocking the Stress Cycle', 'Emily Nagoski', 'Self Help, Psychology, Health', 'https://books.google.com/books/content?id=kZ9KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\'This book is a gift! I\'ve been practicing their strategies, and it\'s a total game-changer.\' Brené Brown, PhD, author of the #1 New York Times bestseller DARE TO LEAD This groundbreaking book explains why women experience burnout differently than men - and provides a simple, science-based plan to help women minimize stress, manage emotions and live a more joyful life. The gap between what it\'s really like to be a woman and what people expect women to be is a primary cause of burnout, because we exhaust ourselves trying to close the space between the two. How can you \'love your body\' when everything around you tells you you\'re inadequate? How do you \'lean in\' at work when you\'re already giving 110% and aren\'t recognized for it? How can you live happily and healthily in a world that is constantly telling you you\'re too fat, too needy, too noisy and too selfish? Sisters Emily Nagoski, Ph.D., the bestselling author of Come as You Are, and Amelia Nagoski, DMA, are here to help end the cycle of overwhelm and exhaustion, and confront the obstacles that stand between women and well-being. With insights from the latest science, prescriptive advice, and helpful worksheets and exercises, Burnout reveals: * what you can do to complete the biological stress cycle - and return your body to a state of relaxation. * how to manage the \'monitor\' in your brain that regulates the emotion of frustration. * how the Bikini Industrial Complex makes it difficult for women to love their bodies - and how to fight back. * why rest, human connection, and befriending your inner critic are key to recovering from and preventing burnout. Eye-opening, compassionate and optimistic, Burnout will completely transform the way we think about and manage stress, empowering women to thrive under pressure and enjoy meaningful yet balanced lives. All women will find something transformative in these pages - and be empowered to create positive and lasting change.'),
(41, 20, 'The Body Keeps the Score', 'Bessel van der Kolk', 'Psychology, Health, Self Help', 'https://books.google.com/books/content?id=3Q3UAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '#1 New York Times bestseller “Essential reading for anyone interested in understanding and treating traumatic stress and the scope of its impact on society.” —Alexander McFarlane, Director of the Centre for Traumatic Stress Studies A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing in this New York Times bestseller Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity. Based on Dr. van der Kolk’s own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.'),
(42, 20, 'The Anxiety and Worry Workbook', 'Clark & Beck', 'Self Help, Psychology', 'https://books.google.com/books/content?id=vhSwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'If you are seeking lasting relief from out-of-control anxiety, this is the book for you. It is grounded in cognitive behavior therapy (CBT), the proven treatment approach developed and tested over decades by pioneering clinician-researcher Aaron T. Beck. Now Dr. Beck and fellow expert David A. Clark put the tools and techniques of CBT at your fingertips in this compassionate guide. Carefully crafted worksheets (additional copies can be downloaded and printed as needed), exercises, and examples reflect the authors\' wealth of experience. Learn practical strategies for identifying anxiety triggers, challenging the thoughts and beliefs that lead to distress, safely facing feared situations, and truly loosening anxiety\'s grip--one manageable step at a time. Updated throughout, the second edition includes evaluation exercises that help you get to know your anxiety; up-to-date information about panic attacks, social anxiety, and other topics; additional graphics; and new troubleshooting tips and tools for success. Mental health professionals, see also the state-of-the-art clinical reference Exposure Therapy for Anxiety, Second Edition, by Jonathan S. Abramowitz, Brett J. Deacon, and Stephen P. H. Whiteside.'),
(43, 21, 'The Body Keeps the Score', 'Bessel van der Kolk', 'Psychology, Health, Self Help', 'https://books.google.com/books/content?id=3Q3UAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '#1 New York Times bestseller “Essential reading for anyone interested in understanding and treating traumatic stress and the scope of its impact on society.” —Alexander McFarlane, Director of the Centre for Traumatic Stress Studies A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing in this New York Times bestseller Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity. Based on Dr. van der Kolk’s own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.'),
(44, 21, 'Lost Connections', 'Johann Hari', 'Psychology, Mental Health, Self Help', 'https://books.google.com/books/content?id=L0MIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'THE INTERNATIONAL BESTSELLER: A radically new way of thinking about depression and anxiety \'A book that could actually make us happy\' SIMON AMSTELL \'This amazing book will change your life\' ELTON JOHN \'One of the most important texts of recent years\' BRITISH JOURNAL OF GENERAL PRACTICE \'Brilliant, stimulating, radical\' MATT HAIG \'The more people read this book, the better off the world will be\' NAOMI KLEIN \'Wonderful\' HILLARY CLINTON \'Eye-opening\' GUARDIAN \'Brilliant for anyone wanting a better understanding of mental health\' ZOE BALL \'A game-changer\' DAVINA MCCALL \'Extraordinary\' DR MAX PEMBERTON Depression and anxiety are now at epidemic levels. Why? Across the world, scientists have uncovered evidence for nine different causes. Some are in our biology, but most are in the way we are living today. Lost Connections offers a radical new way of thinking about this crisis. It shows that once we understand the real causes, we can begin to turn to pioneering new solutions – ones that offer real hope.'),
(45, 21, 'Maybe You Should Talk to Someone', 'Lori Gottlieb', 'Psychology, Memoir, Self Help', 'https://via.placeholder.com/300x450?text=No+Cover', 'A therapist, her therapist, and our lives revealed — humanizing therapy....'),
(46, 22, 'Studying Smart', 'Diana Scharf Hunt', 'Study Skills, Academic, Education', 'https://books.google.com/books/content?id=AXbuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Time-tested strategies for improving study habits and academic performance....'),
(47, 22, 'Mans Search for Meaning', 'Viktor E. Frankl', 'Psychology, Philosophy, Self Help', 'https://books.google.com/books/content?id=8SERAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Psychiatrist Viktor Frankl\'s memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Between 1942 and 1945 Frankl labored in four different camps, including Auschwitz, while his parents, brother, and pregnant wife perished. Based on his own experience and the experiences of others he treated later in his practice, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. Frankl\'s theory-known as logotherapy, from the Greek word logos (\"meaning\")-holds that our primary drive in life is not pleasure, as Freud maintained, but the discovery and pursuit of what we personally find meaningful. At the time of Frankl\'s death in 1997, Man\'s Search for Meaning had sold more than 10 million copies in twenty-four languages. A 1991 reader survey for the Library of Congress that asked readers to name a \"book that made a difference in your life\" found Man\'s Search for Meaning among the ten most influential books in America.'),
(48, 22, 'Mindfulness for Beginners', 'Jon Kabat-Zinn', 'Mindfulness, Self Help', 'https://books.google.com/books/content?id=yFSzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'An Invitation to the Practice of Mindfulness We may long for wholeness, suggests Jon Kabat-Zinn, but the truth is that it is already here and already ours. The practice of mindfulness holds the possibility of not just a fleeting sense of contentment, but a true embracing of a deeper unity that envelops and permeates our lives. With Mindfulness for Beginners you are invited to learn how to transform your relationship to the way you think, feel, love, work, and play—and thereby awaken to and embody more completely who you really are. Here, the teacher, scientist, and clinician who first demonstrated the benefits of mindfulness within mainstream Western medicine offers a book that you can use in three unique ways: as a collection of reflections and practices to be opened and explored at random; as an illuminating and engaging start-to-finish read; or as an unfolding “lesson-a-day” primer on mindfulness practice. Beginning and advanced meditators alike will discover in these pages a valuable distillation of the key attitudes and essential practices that Jon Kabat-Zinn has found most useful with his students, including: Why heartfulness is synonymous with true mindfulnessThe value of coming back to our bodies and to our senses over and over againHow our thoughts “self-liberate” when touched by awarenessMoving beyond our “story” into direct experienceStabilizing our attention and presence amidst daily activitiesThe three poisons that cause suffering—and their antidotesHow mindfulness heals, even after the factReclaiming our wholeness, and more. The prescription for living a more mindful life seems simple enough: return your awareness again and again to whatever is going on. But if you’ve tried it, you know that here is where all the questions and challenges really begin. Mindfulness for Beginners provides welcome answers, insights, and instruction to help us make that shift, moment by moment, into a more spacious, clear, reliable, and loving connection with ourselves and the world. Includes digital access to five guided mindfulness meditations by Jon Kabat-Zinn, selected from the audio program that inspired this book.'),
(49, 23, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'https://books.google.com/books/content?id=QEc3xfvzUdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(50, 23, 'Mindfulness for Beginners', 'Jon Kabat-Zinn', 'Mindfulness, Self Help', 'https://via.placeholder.com/300x450?text=No+Cover', 'Introduction to mindfulness meditation to reduce stress and cultivate awareness....'),
(51, 23, 'Studying Smart', 'Diana Scharf Hunt', 'Study Skills, Academic, Education', 'https://books.google.com/books/content?id=AXbuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Time-tested strategies for improving study habits and academic performance....'),
(52, 24, 'Studying Smart', 'Diana Scharf Hunt', 'Study Skills, Academic, Education', 'https://books.google.com/books/content?id=AXbuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Time-tested strategies for improving study habits and academic performance....'),
(53, 24, 'The Four Agreements', 'Don Miguel Ruiz', 'Self Help, Spirituality, Philosophy', 'https://books.google.com/books/content?id=hzVxiw2DiOsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'The incredible New York Times and international bestselling guide to true happiness. “This book by don Miguel Ruiz, simple yet so powerful, has made a tremendous difference in how I think and act in every encounter.”—Oprah Winfrey In The Four Agreements, a perennial bestseller published in dozens of languages worldwide, don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, The Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love. “Don Miguel Ruiz’s book is a roadmap to enlightenment and freedom.”—Deepak Chopra, Author, The Seven Spiritual Laws of Success “An inspiring book with many great lessons.”—Wayne Dyer, Author, Real Magic “In the tradition of Castaneda, Ruiz distills essential Toltec wisdom, expressing with clarity and impeccability what it means for men and women to live as peaceful warriors in the modern world.”—Dan Millman, Author, Way of the Peaceful Warrior'),
(54, 24, 'Mindfulness for Beginners', 'Jon Kabat-Zinn', 'Mindfulness, Self Help', 'https://books.google.com/books/content?id=tEOwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'An Invitation to the Practice of Mindfulness We may long for wholeness, suggests Jon Kabat-Zinn, but the truth is that it is already here and already ours. The practice of mindfulness holds the possibility of not just a fleeting sense of contentment, but a true embracing of a deeper unity that envelops and permeates our lives. With Mindfulness for Beginners you are invited to learn how to transform your relationship to the way you think, feel, love, work, and play—and thereby awaken to and embody more completely who you really are. Here, the teacher, scientist, and clinician who first demonstrated the benefits of mindfulness within mainstream Western medicine offers a book that you can use in three unique ways: as a collection of reflections and practices to be opened and explored at random; as an illuminating and engaging start-to-finish read; or as an unfolding \"lesson-a-day\" primer on mindfulness practice. Beginning and advanced meditators alike will discover in these pages a valuable distillation of the key attitudes and essential practices that Jon Kabat-Zinn has found most useful with his students, including: Why heartfulness is synonymous with true mindfulnessThe value of coming back to our bodies and to our senses over and over againHow our thoughts \"self-liberate\" when touched by awarenessMoving beyond our \"story\" into direct experienceStabilizing our attention and presence amidst daily activitiesThe three poisons that cause suffering—and their antidotesHow mindfulness heals, even after the factReclaiming our wholeness, and more. The prescription for living a more mindful life seems simple enough: return your awareness again and again to whatever is going on. But if you\'ve tried it, you know that here is where all the questions and challenges really begin. Mindfulness for Beginners provides welcome answers, insights, and instruction to help us make that shift, moment by moment, into a more spacious, clear, reliable, and loving connection with ourselves and the world. Includes digital access to five guided mindfulness meditations by Jon Kabat-Zinn, selected from the audio program that inspired this book.'),
(55, 25, 'The Gifts of Imperfection', 'Brené Brown', 'Self Help, Psychology', 'https://books.google.com/books/content?id=0kPXDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'NEW YORK TIMES BESTSELLER • This tenth-anniversary edition of the game-changing #1 New York Times bestseller features a new foreword and new tools to make the work your own. For over a decade, Brené Brown has found a special place in our hearts as a gifted mapmaker and a fellow traveler. She is both a social scientist and a kitchen-table friend whom you can always count on to tell the truth, make you laugh, and, on occasion, cry with you. And what’s now become a movement all started with The Gifts of Imperfection, which has sold more than two million copies in thirty-five different languages across the globe. What transforms this book from words on a page to effective daily practices are the ten guideposts to wholehearted living. The guideposts not only help us understand the practices that will allow us to change our lives and families, they also walk us through the unattainable and sabotaging expectations that get in the way. Brené writes, “This book is an invitation to join a wholehearted revolution. A small, quiet, grassroots movement that starts with each of us saying, ‘My story matters because I matter.’ Revolution might sound a little dramatic, but in this world, choosing authenticity and worthiness is an absolute act of resistance.”');
INSERT INTO `tb_rekomendasi_buku` (`id`, `aktivitas_id`, `judul`, `penulis`, `kategori`, `thumbnail`, `deskripsi`) VALUES
(56, 25, 'The Four Agreements', 'Don Miguel Ruiz', 'Self Help, Spirituality, Philosophy', 'https://books.google.com/books/content?id=hzVxiw2DiOsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'The incredible New York Times and international bestselling guide to true happiness. “This book by don Miguel Ruiz, simple yet so powerful, has made a tremendous difference in how I think and act in every encounter.”—Oprah Winfrey In The Four Agreements, a perennial bestseller published in dozens of languages worldwide, don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, The Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love. “Don Miguel Ruiz’s book is a roadmap to enlightenment and freedom.”—Deepak Chopra, Author, The Seven Spiritual Laws of Success “An inspiring book with many great lessons.”—Wayne Dyer, Author, Real Magic “In the tradition of Castaneda, Ruiz distills essential Toltec wisdom, expressing with clarity and impeccability what it means for men and women to live as peaceful warriors in the modern world.”—Dan Millman, Author, Way of the Peaceful Warrior'),
(57, 25, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'https://via.placeholder.com/300x450?text=No+Cover', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(58, 26, 'The Gifts of Imperfection', 'Brené Brown', 'Self Help, Psychology', 'https://books.google.com/books/content?id=0kPXDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'NEW YORK TIMES BESTSELLER • This tenth-anniversary edition of the game-changing #1 New York Times bestseller features a new foreword and new tools to make the work your own. For over a decade, Brené Brown has found a special place in our hearts as a gifted mapmaker and a fellow traveler. She is both a social scientist and a kitchen-table friend whom you can always count on to tell the truth, make you laugh, and, on occasion, cry with you. And what’s now become a movement all started with The Gifts of Imperfection, which has sold more than two million copies in thirty-five different languages across the globe. What transforms this book from words on a page to effective daily practices are the ten guideposts to wholehearted living. The guideposts not only help us understand the practices that will allow us to change our lives and families, they also walk us through the unattainable and sabotaging expectations that get in the way. Brené writes, “This book is an invitation to join a wholehearted revolution. A small, quiet, grassroots movement that starts with each of us saying, ‘My story matters because I matter.’ Revolution might sound a little dramatic, but in this world, choosing authenticity and worthiness is an absolute act of resistance.”'),
(59, 26, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'https://books.google.com/books/content?id=QEc3xfvzUdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(60, 26, 'Ikigai: The Japanese Secret', 'Héctor García', 'Self Help, Philosophy, Mindfulness', 'https://books.google.com/books/content?id=4UCnDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'INTERNATIONAL BESTSELLER • 2 MILLION+ COPIES SOLD WORLDWIDE “Workers looking for more fulfilling positions should start by identifying their ikigai.” ―Business Insider “One of the unintended—yet positive—consequences of the [pandemic] is that it is forcing people to reevaluate their jobs, careers, and lives. Use this time wisely, find your personal ikigai, and live your best life.” ―Forbes Find your ikigai (pronounced ee-key-guy) to live longer and bring more meaning and joy to all your days. “Only staying active will make you want to live a hundred years.” —Japanese proverb According to the Japanese, everyone has an ikigai—a reason for living. And according to the residents of the Japanese village with the world’s longest-living people, finding it is the key to a happier and longer life. Having a strong sense of ikigai—where what you love, what you’re good at, what you can get paid for, and what the world needs all overlap—means that each day is infused with meaning. It’s the reason we get up in the morning. It’s also the reason many Japanese never really retire (in fact there’s no word in Japanese that means retire in the sense it does in English): They remain active and work at what they enjoy, because they’ve found a real purpose in life—the happiness of always being busy. In researching this book, the authors interviewed the residents of the Japanese village with the highest percentage of 100-year-olds—one of the world’s Blue Zones. Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work, how they foster collaboration and community, and—their best-kept secret—how they find the ikigai that brings satisfaction to their lives. And it provides practical tools to help you discover your own ikigai. Because who doesn’t want to find happiness in every day? What’s your ikigai?'),
(61, 27, 'Burnout: The Secret to Unlocking the Stress Cycle', 'Emily Nagoski', 'Self Help, Psychology, Health', 'https://books.google.com/books/content?id=kZ9KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\'This book is a gift! I\'ve been practicing their strategies, and it\'s a total game-changer.\' Brené Brown, PhD, author of the #1 New York Times bestseller DARE TO LEAD This groundbreaking book explains why women experience burnout differently than men - and provides a simple, science-based plan to help women minimize stress, manage emotions and live a more joyful life. The gap between what it\'s really like to be a woman and what people expect women to be is a primary cause of burnout, because we exhaust ourselves trying to close the space between the two. How can you \'love your body\' when everything around you tells you you\'re inadequate? How do you \'lean in\' at work when you\'re already giving 110% and aren\'t recognized for it? How can you live happily and healthily in a world that is constantly telling you you\'re too fat, too needy, too noisy and too selfish? Sisters Emily Nagoski, Ph.D., the bestselling author of Come as You Are, and Amelia Nagoski, DMA, are here to help end the cycle of overwhelm and exhaustion, and confront the obstacles that stand between women and well-being. With insights from the latest science, prescriptive advice, and helpful worksheets and exercises, Burnout reveals: * what you can do to complete the biological stress cycle - and return your body to a state of relaxation. * how to manage the \'monitor\' in your brain that regulates the emotion of frustration. * how the Bikini Industrial Complex makes it difficult for women to love their bodies - and how to fight back. * why rest, human connection, and befriending your inner critic are key to recovering from and preventing burnout. Eye-opening, compassionate and optimistic, Burnout will completely transform the way we think about and manage stress, empowering women to thrive under pressure and enjoy meaningful yet balanced lives. All women will find something transformative in these pages - and be empowered to create positive and lasting change.'),
(62, 27, 'Feeling Good: The New Mood Therapy', 'David D. Burns', 'Psychology, Self Help', 'https://books.google.com/books/content?id=M_ZgSQItwX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'National Bestseller – More than five million copies sold worldwide! From renowned psychiatrist Dr. David D. Burns, the revolutionary volume that popularized Dr. Aaron T. Beck’s cognitive behavioral therapy (CBT) and has helped millions combat feelings of depression and develop greater self-esteem. Anxiety and depression are the most common mental illnesses in the world, affecting 18% of the U.S. population every year. But for many, the path to recovery seems daunting, endless, or completely out of reach. The good news is that anxiety, guilt, pessimism, procrastination, low self-esteem, and other \"black holes\" of depression can be alleviated. In Feeling Good, eminent psychiatrist, David D. Burns, M.D., outlines the remarkable, scientifically proven techniques that will immediately lift your spirits and help you develop a positive outlook on life, enabling you to: Nip negative feelings in the bud Recognize what causes your mood swings Deal with guilt Handle hostility and criticism Overcome addiction to love and approval Build self-esteem Feel good every day This groundbreaking, life-changing book has helped millions overcome negative thoughts and discover joy in their daily lives. You owe it to yourself to FEEL GOOD! \"I would personally evaluate David Burns\' Feeling Good as one of the most significant books to come out of the last third of the Twentieth Century.\"—Dr. David F. Maas, Professor of English, Ambassador University'),
(63, 27, 'The Body Keeps the Score', 'Bessel van der Kolk', 'Psychology, Health, Self Help', 'https://books.google.com/books/content?id=3Q3UAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '#1 New York Times bestseller “Essential reading for anyone interested in understanding and treating traumatic stress and the scope of its impact on society.” —Alexander McFarlane, Director of the Centre for Traumatic Stress Studies A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing in this New York Times bestseller Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity. Based on Dr. van der Kolk’s own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.'),
(64, 28, 'The Stress-Proof Brain', 'Melanie Greenberg', 'Self Help, Mental Health', 'https://books.google.com/books/content?id=bRDyDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'We can’t avoid the things that stress us out, but we can change how we respond to them. In this breakthrough book, a clinical psychologist and neuroscience expert offers an original and comprehensive approach to help readers harness the power of positive emotions and overcome stress for good. The unique mindfulness exercises in this book provide a recipe for resilience, empowering readers to master their emotional response to stress, overcome negative thinking, and create a more tolerant, stress-proof brain.'),
(65, 28, 'Maybe You Should Talk to Someone', 'Lori Gottlieb', 'Psychology, Memoir, Self Help', 'https://books.google.com/books/content?id=ATKQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\"From a New York Timesbest-selling writer, psychotherapist, and advice columnist, a brilliant and surprising new book that takes us behind the scenes of a therapist\'s world--where her patients are in crisis (and so is she)\"--'),
(66, 28, 'Burnout: The Secret to Unlocking the Stress Cycle', 'Emily Nagoski', 'Self Help, Psychology, Health', 'https://books.google.com/books/content?id=kZ9KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\'This book is a gift! I\'ve been practicing their strategies, and it\'s a total game-changer.\' Brené Brown, PhD, author of the #1 New York Times bestseller DARE TO LEAD This groundbreaking book explains why women experience burnout differently than men - and provides a simple, science-based plan to help women minimize stress, manage emotions and live a more joyful life. The gap between what it\'s really like to be a woman and what people expect women to be is a primary cause of burnout, because we exhaust ourselves trying to close the space between the two. How can you \'love your body\' when everything around you tells you you\'re inadequate? How do you \'lean in\' at work when you\'re already giving 110% and aren\'t recognized for it? How can you live happily and healthily in a world that is constantly telling you you\'re too fat, too needy, too noisy and too selfish? Sisters Emily Nagoski, Ph.D., the bestselling author of Come as You Are, and Amelia Nagoski, DMA, are here to help end the cycle of overwhelm and exhaustion, and confront the obstacles that stand between women and well-being. With insights from the latest science, prescriptive advice, and helpful worksheets and exercises, Burnout reveals: * what you can do to complete the biological stress cycle - and return your body to a state of relaxation. * how to manage the \'monitor\' in your brain that regulates the emotion of frustration. * how the Bikini Industrial Complex makes it difficult for women to love their bodies - and how to fight back. * why rest, human connection, and befriending your inner critic are key to recovering from and preventing burnout. Eye-opening, compassionate and optimistic, Burnout will completely transform the way we think about and manage stress, empowering women to thrive under pressure and enjoy meaningful yet balanced lives. All women will find something transformative in these pages - and be empowered to create positive and lasting change.'),
(67, 29, 'When Panic Attacks', 'David D. Burns', 'Psychology, Self Help', 'https://books.google.com/books/content?id=XX0VFH7TXvoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'The truth is that you can defeat your fears. The author of the four-million-copy bestselling Feeling Good offers 40+ simple, effective CBT-based techniques to overcome every conceivable kind of anxiety—without medication. “Few truly great books on psychotherapy have been published, and this is one of them.”—Albert Ellis, Ph.D., founder of the Albert Ellis Institute and bestselling author of A Guide to Rational Living We all know what it’s like to feel anxious, worried, or panicky. What you may not realize is that these fears are almost never based on reality. When you’re anxious, you’re actually fooling yourself, telling yourself things that simply aren’t true. See if you can recognize yourself in any of these distortions: All-or-Nothing Thinking: “My mind will go blank when I give my presentation at work, and everyone will think I’m an idiot.” Fortune Telling: “I just know I’ll freeze up and blow it when I take my test.” Mind Reading: “Everyone at this party can see how nervous I am.” Magnification: “Flying is so dangerous. I think this plane is going to crash!” Should Statements: “I shouldn’t be so anxious and insecure. Other people don’t feel this way.” Self-Blame: “What’s wrong with me? I’m such a loser!” Mental Filter: “Why can’t I get anything done? My life seems like one long procrastination.” Using techniques from cognitive behavioral therapy (CBT), which focuses on practical, solution-based methods for understanding and overcoming negative thoughts and emotions, When Panic Attacks gives you the ammunition to quickly defeat every conceivable kind of anxiety, such as chronic worrying, shyness, public speaking anxiety, test anxiety, and phobias, without lengthy therapy or prescription drugs. With forty fast-acting techniques that have been shown to be more effective than medications, When Panic Attacks is an indispensable handbook for anyone who’s worried sick and sick of worrying.'),
(68, 29, 'Lost Connections', 'Johann Hari', 'Psychology, Mental Health, Self Help', 'https://books.google.com/books/content?id=L0MIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'THE INTERNATIONAL BESTSELLER: A radically new way of thinking about depression and anxiety \'A book that could actually make us happy\' SIMON AMSTELL \'This amazing book will change your life\' ELTON JOHN \'One of the most important texts of recent years\' BRITISH JOURNAL OF GENERAL PRACTICE \'Brilliant, stimulating, radical\' MATT HAIG \'The more people read this book, the better off the world will be\' NAOMI KLEIN \'Wonderful\' HILLARY CLINTON \'Eye-opening\' GUARDIAN \'Brilliant for anyone wanting a better understanding of mental health\' ZOE BALL \'A game-changer\' DAVINA MCCALL \'Extraordinary\' DR MAX PEMBERTON Depression and anxiety are now at epidemic levels. Why? Across the world, scientists have uncovered evidence for nine different causes. Some are in our biology, but most are in the way we are living today. Lost Connections offers a radical new way of thinking about this crisis. It shows that once we understand the real causes, we can begin to turn to pioneering new solutions – ones that offer real hope.'),
(69, 29, 'The Anxiety and Worry Workbook', 'Clark & Beck', 'Self Help, Psychology', 'https://books.google.com/books/content?id=vhSwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'If you are seeking lasting relief from out-of-control anxiety, this is the book for you. It is grounded in cognitive behavior therapy (CBT), the proven treatment approach developed and tested over decades by pioneering clinician-researcher Aaron T. Beck. Now Dr. Beck and fellow expert David A. Clark put the tools and techniques of CBT at your fingertips in this compassionate guide. Carefully crafted worksheets (additional copies can be downloaded and printed as needed), exercises, and examples reflect the authors\' wealth of experience. Learn practical strategies for identifying anxiety triggers, challenging the thoughts and beliefs that lead to distress, safely facing feared situations, and truly loosening anxiety\'s grip--one manageable step at a time. Updated throughout, the second edition includes evaluation exercises that help you get to know your anxiety; up-to-date information about panic attacks, social anxiety, and other topics; additional graphics; and new troubleshooting tips and tools for success. Mental health professionals, see also the state-of-the-art clinical reference Exposure Therapy for Anxiety, Second Edition, by Jonathan S. Abramowitz, Brett J. Deacon, and Stephen P. H. Whiteside.'),
(70, 30, 'Social: Why Our Brains Are Wired to Connect', 'Matthew Lieberman', 'Psychology, Social, Neuroscience', 'https://books.google.com/books/content?id=7ZOJAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Being social is as fundamental to our survival as our ability to navigate the world through vision and reason. In this book, Matthew Lieberman draws on the latest research in the newly emerging field of social cognitive neuroscience to show that social interaction has moulded the evolution of our brains: we are wired to be social.'),
(71, 30, 'Nonviolent Communication', 'Marshall B. Rosenberg', 'Self Help, Relationships, Communication', 'https://books.google.com/books/content?id=A3qACgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '5,000,000 COPIES SOLD WORLDWIDE • TRANSLATED IN MORE THAN 35 LANGUAGES What is Violent Communication? If \"violent\" means acting in ways that result in hurt or harm, then much of how we communicate—judging others, bullying, having racial bias, blaming, finger pointing, discriminating, speaking without listening, criticizing others or ourselves, name-calling, reacting when angry, using political rhetoric, being defensive or judging who\'s \"good/bad\" or what\'s \"right/wrong\" with people—could indeed be called \"violent communication.\" What is Nonviolent Communication? Nonviolent Communication is the integration of four things: • Consciousness: a set of principles that support living a life of compassion, collaboration, courage, and authenticity • Language: understanding how words contribute to connection or distance • Communication: knowing how to ask for what we want, how to hear others even in disagreement, and how to move toward solutions that work for all • Means of influence: sharing \"power with others\" rather than using \"power over others\" Nonviolent Communication serves our desire to do three things: • Increase our ability to live with choice, meaning, and connection • Connect empathically with self and others to have more satisfying relationships • Sharing of resources so everyone is able to benefit'),
(72, 30, 'How to Win Friends and Influence People', 'Dale Carnegie', 'Self Help, Social, Relationships', 'https://books.google.com/books/content?id=1rW-QpIAs8UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Updated in 2022 for today’s readers, Dale Carnegie’s timeless bestseller How to Win Friends and Influence People is a classic that has improved and transformed the professional and personal and lives of millions. One of the best-known motivational guides in history, Dale Carnegie’s groundbreaking book has sold tens of millions of copies, been translated into almost every known language, and has helped countless people succeed. Originally published during the depths of the Great Depression—and equally valuable during booming economies or hard times—Carnegie’s rock-solid, time-tested advice has carried countless people up the ladder of success in their professional and personal lives. How to Win Friends and Influence People teaches you: -How to communicate effectively -How to make people like you -How to increase your ability to get things done -How to get others to see your side -How to become a more effective leader -How to successfully navigate almost any social situation -And so much more! Achieve your maximum potential with this updated version of a classic—a must-read for the 21st century.'),
(73, 31, 'Boundaries', 'Henry Cloud & John Townsend', 'Self Help, Relationships, Psychology', 'https://books.google.com/books/content?id=RGg6aI79vgIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Having clear boundaries is essential to a healthy, balanced lifestyle. A boundary is a personal property line that marks those things for which we are responsible. In other words, boundaries define who we are and who we are not. Boundaries impact all areas of our lives: Physical boundaries help us determine who may touch us and under what circumstances -- Mental boundaries give us the freedom to have our own thoughts and opinions -- Emotional boundaries help us to deal with our own emotions and disengage from the harmful, manipulative emotions of others -- Spiritual boundaries help us to distinguish God\'s will from our own and give us renewed awe for our Creator -- Often, Christians focus so much on being loving and unselfish that they forget their own limits and limitations. When confronted with their lack of boundaries, they ask: - Can I set limits and still be a loving person? - What are legitimate boundaries? - What if someone is upset or hurt by my boundaries? - How do I answer someone who wants my time, love, energy, or money? - Aren\'t boundaries selfish? - Why do I feel guilty or afraid when I consider setting boundaries? Dr. Henry Cloud and Dr. John Townsend offer biblically-based answers to these and other tough questions, showing us how to set healthy boundaries with our parents, spouses, children, friends, co-workers, and even ourselves.'),
(74, 31, 'The Subtle Art of Not Giving a F*ck', 'Mark Manson', 'Self Help, Social, Psychology', 'https://books.google.com/books/content?id=W8bJ0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'A counterintuitive approach to living a good life by choosing what truly matters....'),
(75, 31, 'The Loneliness Cure', 'Kory Floyd', 'Psychology, Social, Self Help', 'https://books.google.com/books/content?id=i2dsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\"A guide intended to help readers become less lonely\"--'),
(76, 32, 'How to Win Friends and Influence People', 'Dale Carnegie', 'Self Help, Social, Relationships', 'https://books.google.com/books/content?id=hCf-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Do you feel stuck in life, not knowing how to make it more successful? Do you wish to become more popular? Are you craving to earn more? Do you wish to expand your horizon, earn new clients and win people over with your ideas? How to Win Friends and Influence People is a well-researched and comprehensive guide that will help you through these everyday problems and make success look easier. You can learn to expand your social circle, polish your skill set, find ways to put forward your thoughts more clearly, and build mental strength to counter all hurdles that you may come across on the path to success. Having helped millions of readers from the world over achieve their goals, the clearly listed techniques and principles will be the answers to all your questions.'),
(77, 32, 'Boundaries', 'Henry Cloud & John Townsend', 'Self Help, Relationships, Psychology', 'https://books.google.com/books/content?id=RGg6aI79vgIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Having clear boundaries is essential to a healthy, balanced lifestyle. A boundary is a personal property line that marks those things for which we are responsible. In other words, boundaries define who we are and who we are not. Boundaries impact all areas of our lives: Physical boundaries help us determine who may touch us and under what circumstances -- Mental boundaries give us the freedom to have our own thoughts and opinions -- Emotional boundaries help us to deal with our own emotions and disengage from the harmful, manipulative emotions of others -- Spiritual boundaries help us to distinguish God\'s will from our own and give us renewed awe for our Creator -- Often, Christians focus so much on being loving and unselfish that they forget their own limits and limitations. When confronted with their lack of boundaries, they ask: - Can I set limits and still be a loving person? - What are legitimate boundaries? - What if someone is upset or hurt by my boundaries? - How do I answer someone who wants my time, love, energy, or money? - Aren\'t boundaries selfish? - Why do I feel guilty or afraid when I consider setting boundaries? Dr. Henry Cloud and Dr. John Townsend offer biblically-based answers to these and other tough questions, showing us how to set healthy boundaries with our parents, spouses, children, friends, co-workers, and even ourselves.'),
(78, 32, 'Nonviolent Communication', 'Marshall B. Rosenberg', 'Self Help, Relationships, Communication', 'https://books.google.com/books/content?id=A3qACgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '5,000,000 COPIES SOLD WORLDWIDE • TRANSLATED IN MORE THAN 35 LANGUAGES What is Violent Communication? If \"violent\" means acting in ways that result in hurt or harm, then much of how we communicate—judging others, bullying, having racial bias, blaming, finger pointing, discriminating, speaking without listening, criticizing others or ourselves, name-calling, reacting when angry, using political rhetoric, being defensive or judging who\'s \"good/bad\" or what\'s \"right/wrong\" with people—could indeed be called \"violent communication.\" What is Nonviolent Communication? Nonviolent Communication is the integration of four things: • Consciousness: a set of principles that support living a life of compassion, collaboration, courage, and authenticity • Language: understanding how words contribute to connection or distance • Communication: knowing how to ask for what we want, how to hear others even in disagreement, and how to move toward solutions that work for all • Means of influence: sharing \"power with others\" rather than using \"power over others\" Nonviolent Communication serves our desire to do three things: • Increase our ability to live with choice, meaning, and connection • Connect empathically with self and others to have more satisfying relationships • Sharing of resources so everyone is able to benefit'),
(79, 33, 'Social: Why Our Brains Are Wired to Connect', 'Matthew Lieberman', 'Psychology, Social, Neuroscience', 'https://books.google.com/books/content?id=7ZOJAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Being social is as fundamental to our survival as our ability to navigate the world through vision and reason. In this book, Matthew Lieberman draws on the latest research in the newly emerging field of social cognitive neuroscience to show that social interaction has moulded the evolution of our brains: we are wired to be social.'),
(80, 33, 'The Relationship Cure', 'John Gottman', 'Psychology, Relationships, Self Help', 'https://books.google.com/books/content?id=TBQcDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'From the country’s foremost relationship expert and New York Times bestselling author Dr. John M. Gottman comes a powerful, simple five-step program, based on twenty years of innovative research, for greatly improving all of the relationships in your life—with spouses and lovers, children, siblings, and even your colleagues at work. Gottman provides the tools you need to make your relationships thrive. In The Relationship Cure, Dr. Gottman: - Reveals the key elements of healthy relationships, emphasizing the importance of what he calls “emotional connection” - Introduces the powerful new concept of the emotional “bid,” the fundamental unit of emotional connection - Provides remarkably empowering tools for improving the way you bid for emotional connection and how you respond to others’ bids - And more! Packed with fascinating questionnaires and exercises developed in his therapy, The Relationship Cure offers a simple but profound program that will fundamentally transform the quality of all of the relationships in your life.'),
(81, 33, 'The Loneliness Cure', 'Kory Floyd', 'Psychology, Social, Self Help', 'https://books.google.com/books/content?id=i2dsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\"A guide intended to help readers become less lonely\"--'),
(82, 34, 'The Subtle Art of Not Giving a F*ck', 'Mark Manson', 'Self Help, Social, Psychology', 'https://books.google.com/books/content?id=W8bJ0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'A counterintuitive approach to living a good life by choosing what truly matters....'),
(83, 34, 'Social: Why Our Brains Are Wired to Connect', 'Matthew Lieberman', 'Psychology, Social, Neuroscience', 'https://books.google.com/books/content?id=7ZOJAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Being social is as fundamental to our survival as our ability to navigate the world through vision and reason. In this book, Matthew Lieberman draws on the latest research in the newly emerging field of social cognitive neuroscience to show that social interaction has moulded the evolution of our brains: we are wired to be social.'),
(84, 34, 'Introvert Power', 'Laurie Helgoe', 'Psychology, Self Help, Social', 'https://books.google.com/books/content?id=NfHoCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', '\"Vivid and engaging.\"—Publishers Weekly, starred review Embrace the Power Inside You It\'s no wonder that introversion is making headlines—half of all Americans are introverts. But if that describes you—are you making the most of your inner strength? Psychologist and introvert Laurie Helgoe unveils the genius of introversion. Introverts gain energy and power through reflection and solitude. Our culture, however, is geared toward the extrovert. The pressure to get out there and get happier can lead people to think that an inward orientation is a problem instead of an opportunity. Helgoe shows that the exact opposite is true: introverts can capitalize on this inner source of power. Introvert Power is a blueprint for how introverts can take full advantage of this hidden strength in daily life. Revolutionary and invaluable, Introvert Power includes ideas for how introverts can learn to: •Claim private space •Bring a slower tempo into daily life •Deal effectively with parties, interruptions, and crowds Quiet is might. Solitude is strength. Introversion is power. \"A modern-day Thoreau.\"—Stephen Bertman, author of The Eight Pillars of Greek Wisdom'),
(85, 37, 'The Untethered Soul', 'Michael A. Singer', 'Self Help, Spirituality, Psychology', 'https://books.google.com/books/content?id=QEc3xfvzUdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Journey beyond yourself — free from habitual thoughts and emotional patterns....'),
(86, 37, 'The Gifts of Imperfection', 'Brené Brown', 'Self Help, Psychology', 'https://books.google.com/books/content?id=0kPXDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'NEW YORK TIMES BESTSELLER • This tenth-anniversary edition of the game-changing #1 New York Times bestseller features a new foreword and new tools to make the work your own. For over a decade, Brené Brown has found a special place in our hearts as a gifted mapmaker and a fellow traveler. She is both a social scientist and a kitchen-table friend whom you can always count on to tell the truth, make you laugh, and, on occasion, cry with you. And what’s now become a movement all started with The Gifts of Imperfection, which has sold more than two million copies in thirty-five different languages across the globe. What transforms this book from words on a page to effective daily practices are the ten guideposts to wholehearted living. The guideposts not only help us understand the practices that will allow us to change our lives and families, they also walk us through the unattainable and sabotaging expectations that get in the way. Brené writes, “This book is an invitation to join a wholehearted revolution. A small, quiet, grassroots movement that starts with each of us saying, ‘My story matters because I matter.’ Revolution might sound a little dramatic, but in this world, choosing authenticity and worthiness is an absolute act of resistance.”'),
(87, 37, 'Mans Search for Meaning', 'Viktor E. Frankl', 'Psychology, Philosophy, Self Help', 'https://books.google.com/books/content?id=8SERAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Psychiatrist Viktor Frankl\'s memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Between 1942 and 1945 Frankl labored in four different camps, including Auschwitz, while his parents, brother, and pregnant wife perished. Based on his own experience and the experiences of others he treated later in his practice, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. Frankl\'s theory-known as logotherapy, from the Greek word logos (\"meaning\")-holds that our primary drive in life is not pleasure, as Freud maintained, but the discovery and pursuit of what we personally find meaningful. At the time of Frankl\'s death in 1997, Man\'s Search for Meaning had sold more than 10 million copies in twenty-four languages. A 1991 reader survey for the Library of Congress that asked readers to name a \"book that made a difference in your life\" found Man\'s Search for Meaning among the ten most influential books in America.');

-- --------------------------------------------------------

--
-- Table structure for table `tb_rekomendasi_distribusi`
--

CREATE TABLE `tb_rekomendasi_distribusi` (
  `id` int NOT NULL,
  `sesi_id` int NOT NULL,
  `aktivitas` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'journaling, membaca, olahraga',
  `probabilitas` decimal(5,3) NOT NULL COMMENT '0.000 - 1.000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_rekomendasi_distribusi`
--

INSERT INTO `tb_rekomendasi_distribusi` (`id`, `sesi_id`, `aktivitas`, `probabilitas`) VALUES
(1, 1, 'journaling', 0.041),
(2, 1, 'membaca', 0.959),
(3, 1, 'olahraga', 0.000),
(4, 2, 'journaling', 0.000),
(5, 2, 'membaca', 0.000),
(6, 2, 'olahraga', 1.000),
(7, 3, 'journaling', 0.000),
(8, 3, 'membaca', 1.000),
(9, 3, 'olahraga', 0.000),
(10, 4, 'journaling', 0.000),
(11, 4, 'membaca', 0.000),
(12, 4, 'olahraga', 1.000),
(13, 5, 'journaling', 0.000),
(14, 5, 'membaca', 0.000),
(15, 5, 'olahraga', 1.000),
(16, 6, 'journaling', 0.000),
(17, 6, 'membaca', 0.000),
(18, 6, 'olahraga', 1.000),
(19, 7, 'journaling', 0.000),
(20, 7, 'membaca', 0.000),
(21, 7, 'olahraga', 1.000),
(22, 8, 'journaling', 0.000),
(23, 8, 'membaca', 0.000),
(24, 8, 'olahraga', 1.000),
(25, 9, 'journaling', 0.000),
(26, 9, 'membaca', 1.000),
(27, 9, 'olahraga', 0.000),
(28, 10, 'journaling', 0.000),
(29, 10, 'membaca', 1.000),
(30, 10, 'olahraga', 0.000),
(31, 11, 'journaling', 0.000),
(32, 11, 'membaca', 1.000),
(33, 11, 'olahraga', 0.000),
(34, 12, 'journaling', 0.000),
(35, 12, 'membaca', 1.000),
(36, 12, 'olahraga', 0.000),
(37, 13, 'journaling', 0.000),
(38, 13, 'membaca', 1.000),
(39, 13, 'olahraga', 0.000),
(40, 14, 'journaling', 0.000),
(41, 14, 'membaca', 1.000),
(42, 14, 'olahraga', 0.000),
(43, 15, 'journaling', 0.000),
(44, 15, 'membaca', 1.000),
(45, 15, 'olahraga', 0.000),
(46, 16, 'journaling', 0.000),
(47, 16, 'membaca', 1.000),
(48, 16, 'olahraga', 0.000),
(49, 17, 'journaling', 0.000),
(50, 17, 'membaca', 1.000),
(51, 17, 'olahraga', 0.000),
(52, 18, 'journaling', 0.000),
(53, 18, 'membaca', 1.000),
(54, 18, 'olahraga', 0.000),
(55, 19, 'journaling', 0.000),
(56, 19, 'membaca', 1.000),
(57, 19, 'olahraga', 0.000),
(58, 20, 'journaling', 0.000),
(59, 20, 'membaca', 1.000),
(60, 20, 'olahraga', 0.000),
(61, 21, 'journaling', 0.000),
(62, 21, 'membaca', 1.000),
(63, 21, 'olahraga', 0.000),
(64, 22, 'journaling', 0.000),
(65, 22, 'membaca', 1.000),
(66, 22, 'olahraga', 0.000),
(67, 23, 'journaling', 0.000),
(68, 23, 'membaca', 1.000),
(69, 23, 'olahraga', 0.000),
(70, 24, 'journaling', 0.000),
(71, 24, 'membaca', 1.000),
(72, 24, 'olahraga', 0.000),
(73, 25, 'journaling', 0.000),
(74, 25, 'membaca', 1.000),
(75, 25, 'olahraga', 0.000),
(76, 26, 'journaling', 0.000),
(77, 26, 'membaca', 1.000),
(78, 26, 'olahraga', 0.000),
(79, 27, 'journaling', 0.000),
(80, 27, 'membaca', 1.000),
(81, 27, 'olahraga', 0.000),
(82, 28, 'journaling', 0.000),
(83, 28, 'membaca', 1.000),
(84, 28, 'olahraga', 0.000),
(85, 29, 'journaling', 0.000),
(86, 29, 'membaca', 1.000),
(87, 29, 'olahraga', 0.000),
(88, 30, 'journaling', 0.000),
(89, 30, 'membaca', 1.000),
(90, 30, 'olahraga', 0.000),
(91, 31, 'journaling', 0.000),
(92, 31, 'membaca', 1.000),
(93, 31, 'olahraga', 0.000),
(94, 32, 'journaling', 0.000),
(95, 32, 'membaca', 1.000),
(96, 32, 'olahraga', 0.000),
(97, 33, 'journaling', 0.000),
(98, 33, 'membaca', 1.000),
(99, 33, 'olahraga', 0.000),
(100, 34, 'journaling', 0.000),
(101, 34, 'membaca', 1.000),
(102, 34, 'olahraga', 0.000),
(103, 35, 'journaling', 0.018),
(104, 35, 'membaca', 0.021),
(105, 35, 'olahraga', 0.961),
(106, 36, 'journaling', 1.000),
(107, 36, 'membaca', 0.000),
(108, 36, 'olahraga', 0.000),
(109, 37, 'journaling', 0.054),
(110, 37, 'membaca', 0.946),
(111, 37, 'olahraga', 0.000);

-- --------------------------------------------------------

--
-- Table structure for table `tb_rekomendasi_sesi`
--

CREATE TABLE `tb_rekomendasi_sesi` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `kuesioner_id` int NOT NULL,
  `model_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Deep Learning (Neural Network)',
  `alasan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_rekomendasi_sesi`
--

INSERT INTO `tb_rekomendasi_sesi` (`id`, `user_id`, `kuesioner_id`, `model_type`, `alasan`, `createdAt`) VALUES
(1, 10, 3, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 95.9% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-08 22:06:49'),
(2, 10, 4, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'olahraga\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-08 22:10:39'),
(3, 10, 5, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 11:58:25'),
(4, 10, 6, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'olahraga\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 14:16:17'),
(5, 10, 7, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'olahraga\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 14:17:02'),
(6, 10, 8, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'olahraga\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 14:18:17'),
(7, 10, 9, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'olahraga\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 14:20:24'),
(8, 10, 10, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'olahraga\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 15:05:14'),
(9, 10, 11, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 15:07:49'),
(10, 10, 12, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 15:09:17'),
(11, 10, 13, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 15:11:43'),
(12, 10, 14, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 15:25:43'),
(13, 10, 15, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:03:26'),
(14, 10, 16, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:09:49'),
(15, 10, 17, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:14:10'),
(16, 10, 18, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:16:51'),
(17, 10, 19, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:19:43'),
(18, 10, 20, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:26:33'),
(19, 10, 21, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:31:54'),
(20, 10, 22, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:37:29'),
(21, 10, 23, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:41:20'),
(22, 10, 24, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:42:39'),
(23, 10, 25, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:46:55'),
(24, 10, 26, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:49:27'),
(25, 10, 27, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 16:56:53'),
(26, 10, 28, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 17:05:53'),
(27, 10, 29, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 17:11:48'),
(28, 10, 30, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 17:15:39'),
(29, 10, 31, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 17:23:22'),
(30, 10, 32, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-09 17:25:05'),
(31, 10, 33, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-10 16:29:37'),
(32, 10, 34, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-10 16:38:40'),
(33, 10, 35, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-10 16:42:39'),
(34, 10, 36, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-10 16:43:43'),
(35, 11, 37, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 96.1% bahwa \'olahraga\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-10 16:55:25'),
(36, 11, 38, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 100.0% bahwa \'journaling\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-10 17:03:56'),
(37, 10, 39, 'Deep Learning — Functional API + Residual Block', 'Jaringan saraf tiruan (Neural Network) dengan arsitektur Residual Block memiliki tingkat keyakinan 94.6% bahwa \'membaca\' adalah aktivitas yang paling sesuai dengan kondisi Anda saat ini.', '2026-05-12 20:41:45');

-- --------------------------------------------------------

--
-- Table structure for table `tb_stress_scan`
--

CREATE TABLE `tb_stress_scan` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `tingkat_stres` tinyint NOT NULL COMMENT '1-5',
  `keterangan` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Stres Rendah, Stres Sedang, dst',
  `mood` tinyint NOT NULL COMMENT '0-4',
  `keterangan_mood` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Sangat Buruk, Buruk, dst',
  `foto_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_users`
--

CREATE TABLE `tb_users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `jenis_kelamin` enum('laki-laki','perempuan') DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_users`
--

INSERT INTO `tb_users` (`id`, `name`, `email`, `role`, `password`, `avatar`, `jenis_kelamin`, `createdAt`, `updatedAt`) VALUES
(1, 'Wawan', 'email@gmail.com', 'user', '$2b$10$kBCPYBkGbUrABwQtlA4Uzewgcqa53/rkos61dkek/d9tYFbq78ag.', NULL, NULL, '2026-05-01 01:56:52', '2026-05-01 02:36:36'),
(2, 'Budi Santoso', 'budisantoso@example.com', 'user', '$2b$12$NPiIqYNFCpTN.759EgD9su0N/bX/d9uqab.eVKaud.cJzSKOsKgoe', NULL, NULL, '2026-05-03 20:32:13', '2026-05-03 20:32:13'),
(3, 'satosi kang poto', 'satosi@example.com', 'user', '$2b$12$YwlkETkVBvK784G8xPDP1OefVi/kpCvADsydUv4465JrH2eEqfesK', NULL, NULL, '2026-05-03 20:47:10', '2026-05-03 20:47:10'),
(4, 'lukman', 'lukman@example.com', 'user', '$2b$12$VHHrIEC/eEVNzlwAWxGP3OMYwwBh6D7GJErzM5QuqoAYk2AweeOZi', NULL, NULL, '2026-05-03 20:48:55', '2026-05-03 20:48:55'),
(5, 'wawan', 'wawan@example.com', 'user', '$2b$12$hoaH1vIMGRpY.TGmGeYspuM7P/wIy7TNqeL0exne1zZ7fPHDHHtGG', NULL, NULL, '2026-05-03 20:51:13', '2026-05-03 20:51:13'),
(6, 'nikki', 'nikki@example.com', 'user', '$2b$12$lHHKk7nrb6A6lu4Vm6PKUuZA2R6KLdsMAMKuFjOGCUcMmjElee54i', NULL, NULL, '2026-05-03 20:54:29', '2026-05-03 20:54:29'),
(7, 'nikki', 'nikki123@example.com', 'user', '$2b$12$MzZ2/HJBaNv3dGSYmHulN.mR6h.TzWE5Ry1bfGXFifWK/3nFcwELC', NULL, NULL, '2026-05-03 20:56:02', '2026-05-03 20:56:02'),
(8, 'nikki', 'nikki1234@example.com', 'user', '$2b$12$fV46hlVXNdHki5KdEVap3.EA61AS73oDXyVv3LuYJITwfatgSJKJK', NULL, NULL, '2026-05-03 20:57:18', '2026-05-03 21:49:36'),
(9, 'lukman', 'lukman123@example.com', 'user', '$2b$12$PQQSPnCGAGqjKIR9f8Ckj.414ur4ZhE9w1UUx3WC4Z.eoOQtzrRJy', NULL, NULL, '2026-05-06 13:30:25', '2026-05-06 13:30:25'),
(10, 'Lukman123', 'lukluk12@gmail.com', 'user', '$2b$12$3bXjgy2droe0wa56Hz1lXuq/rspY5YT9fq.F0UbSGwHRtKKOOGbXG', NULL, NULL, '2026-05-07 19:34:50', '2026-05-07 19:34:50'),
(11, 'kacamata', 'lukmanulhakim6305@gmail.com', 'user', '$2b$12$FFezOdq.KiI13VNMsB.28OyiVnTgEVqmC2SZiEECVbR//7Js/zCgm', NULL, NULL, '2026-05-10 16:49:59', '2026-05-10 16:49:59'),
(12, 'kacamata', 'lukmanulhakim6305@gmail.com', 'user', '$2b$12$FsH6GZkOOdkHtJDT5vrywOwl8pEjPty6ekkQEJxkqaoYOkAoh70x2', NULL, NULL, '2026-05-10 16:50:00', '2026-05-10 16:50:00'),
(13, 'Lukmanman123', 'lukmanman123@gmail.com', 'user', '$2b$12$NpZAC3AZZ7lNPbWRjna3W.bCBMOaZWoT69A5jEY28rTUcycRKgMHe', NULL, NULL, '2026-05-14 10:29:39', '2026-05-14 10:29:39'),
(14, 'Lukmanman123', 'lukmanman12@gmail.com', 'user', '$2b$12$Do/1f48nGgS/l3DT0.D6cekMa9WU68yul1lySGuSZSwVwecIKtpPm', NULL, NULL, '2026-05-14 11:05:40', '2026-05-14 11:05:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_authentications`
--
ALTER TABLE `tb_authentications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_auth_user` (`user_id`);

--
-- Indexes for table `tb_journal`
--
ALTER TABLE `tb_journal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_journal_user` (`user_id`);

--
-- Indexes for table `tb_kuesioner_hasil`
--
ALTER TABLE `tb_kuesioner_hasil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kuesioner_user` (`user_id`);

--
-- Indexes for table `tb_olahraga`
--
ALTER TABLE `tb_olahraga`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_lari_user` (`user_id`);

--
-- Indexes for table `tb_rekomendasi_aktivitas`
--
ALTER TABLE `tb_rekomendasi_aktivitas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_aktivitas_sesi` (`sesi_id`);

--
-- Indexes for table `tb_rekomendasi_buku`
--
ALTER TABLE `tb_rekomendasi_buku`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_buku_aktivitas` (`aktivitas_id`);

--
-- Indexes for table `tb_rekomendasi_distribusi`
--
ALTER TABLE `tb_rekomendasi_distribusi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_distribusi_sesi` (`sesi_id`);

--
-- Indexes for table `tb_rekomendasi_sesi`
--
ALTER TABLE `tb_rekomendasi_sesi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sesi_user` (`user_id`),
  ADD KEY `fk_sesi_kuesioner` (`kuesioner_id`);

--
-- Indexes for table `tb_stress_scan`
--
ALTER TABLE `tb_stress_scan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_stress_user` (`user_id`);

--
-- Indexes for table `tb_users`
--
ALTER TABLE `tb_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_authentications`
--
ALTER TABLE `tb_authentications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tb_journal`
--
ALTER TABLE `tb_journal`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tb_kuesioner_hasil`
--
ALTER TABLE `tb_kuesioner_hasil`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tb_olahraga`
--
ALTER TABLE `tb_olahraga`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_rekomendasi_aktivitas`
--
ALTER TABLE `tb_rekomendasi_aktivitas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `tb_rekomendasi_buku`
--
ALTER TABLE `tb_rekomendasi_buku`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `tb_rekomendasi_distribusi`
--
ALTER TABLE `tb_rekomendasi_distribusi`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `tb_rekomendasi_sesi`
--
ALTER TABLE `tb_rekomendasi_sesi`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `tb_stress_scan`
--
ALTER TABLE `tb_stress_scan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_users`
--
ALTER TABLE `tb_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_authentications`
--
ALTER TABLE `tb_authentications`
  ADD CONSTRAINT `fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_journal`
--
ALTER TABLE `tb_journal`
  ADD CONSTRAINT `fk_journal_user` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_kuesioner_hasil`
--
ALTER TABLE `tb_kuesioner_hasil`
  ADD CONSTRAINT `fk_kuesioner_user` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_olahraga`
--
ALTER TABLE `tb_olahraga`
  ADD CONSTRAINT `fk_lari_user` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_rekomendasi_aktivitas`
--
ALTER TABLE `tb_rekomendasi_aktivitas`
  ADD CONSTRAINT `fk_aktivitas_sesi` FOREIGN KEY (`sesi_id`) REFERENCES `tb_rekomendasi_sesi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_rekomendasi_buku`
--
ALTER TABLE `tb_rekomendasi_buku`
  ADD CONSTRAINT `fk_buku_aktivitas` FOREIGN KEY (`aktivitas_id`) REFERENCES `tb_rekomendasi_aktivitas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_rekomendasi_distribusi`
--
ALTER TABLE `tb_rekomendasi_distribusi`
  ADD CONSTRAINT `fk_distribusi_sesi` FOREIGN KEY (`sesi_id`) REFERENCES `tb_rekomendasi_sesi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_rekomendasi_sesi`
--
ALTER TABLE `tb_rekomendasi_sesi`
  ADD CONSTRAINT `fk_sesi_kuesioner` FOREIGN KEY (`kuesioner_id`) REFERENCES `tb_kuesioner_hasil` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sesi_user` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_stress_scan`
--
ALTER TABLE `tb_stress_scan`
  ADD CONSTRAINT `fk_stress_user` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
