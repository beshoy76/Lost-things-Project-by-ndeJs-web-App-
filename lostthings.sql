-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2021 at 01:13 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lostthings`
--

-- --------------------------------------------------------

--
-- Table structure for table `bags`
--

CREATE TABLE `bags` (
  `idbags` int(11) NOT NULL,
  `place` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bags`
--

INSERT INTO `bags` (`idbags`, `place`, `date`, `color`, `phonenumber`, `fullname`, `notes`) VALUES
(1, 'lab 300', NULL, 'white', 100, 'beshoy ehab', ''),
(56, 'lab 300', '0000-00-00', 'red', 1068173639, 'negm', '				  \r\n				  enter your notes\r\n\r\n      '),
(155, 'lab 300', NULL, 'white', 100, 'bebe', 'bebe'),
(114354, 'class room 1', '0000-00-00', 'green', 10544656, 'bavle', 'ba7ebaaak               '),
(252525, 'lab 303', NULL, 'pink', 2525, 'besta', ''),
(555333, 'lab 300', '0000-00-00', 'red', 2147483647, 'lala', '				  \r\n				  enter your notes\r\n\r\n      '),
(5132131, 'class room 1', '2312-02-21', 'pink', 1068173639, 'kokeeezzz', '				  \r\n				  enter your notes\r\n\r\n      '),
(525252141, 'class room 2', '0000-00-00', 'white', 1068173639, 'negm', '				  \r\n				  enter your notes\r\n\r\n      '),
(777777777, 'class room 2', '2010-10-10', 'orange', 1068173639, 'beshoy ehab amin', 'bakrahk');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `idbook` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `place` text DEFAULT NULL,
  `phonenumber` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `nameofbooks` text DEFAULT NULL,
  `notes` varchar(40) NOT NULL,
  `color` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`idbook`, `date`, `place`, `phonenumber`, `fullname`, `nameofbooks`, `notes`, `color`) VALUES
(332211, NULL, 'lab 303', 1068173639, 'beshooo', 'beshoy elgamed', '', ''),
(969969, '0000-00-00', 'class room 1', 1068173639, 'beshoy ehab amin', 'beshoo elgamed', '				  \r\n				  enter your notes\r\n\r\n      ', 'orange'),
(3322112, NULL, 'lab 303', 1068173639, 'beshooooooo', 'beshoybook', '', 'red');

-- --------------------------------------------------------

--
-- Table structure for table `caps`
--

CREATE TABLE `caps` (
  `idcaps` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `color` text DEFAULT NULL,
  `place` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `caps`
--

INSERT INTO `caps` (`idcaps`, `fullname`, `phonenumber`, `color`, `place`, `date`, `notes`) VALUES
(0, 'beshoy ehab amin', 0, 'red', 'lab 300', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(2524, 'beshoy', 2525, 'black', 'lab 400', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(14444, 'beshoy', 0, 'white', 'lab 400', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(54545, 'beshoy', 1016363636, 'black', 'class room 1', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(444555, 'beshoy', 10, 'red', 'lab 300', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(522123, 'bbjk', 31321, 'brown', 'lab 302', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(555555, 'basyony', 101, 'blue', 'lab 301', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(123123123, 'basyoneee', 10613639, 'pink', 'other', '1110-10-10', 'ok\r\n		\r\n							'),
(123321123, 'beshoy', 10613639, 'brown', 'other', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n'),
(652365236, 'beshoy ehab amin', 25256565, 'orange', 'class room 2', '1000-10-10', '						  \r\n		noooooooooo						'),
(2147483647, 'beshoye', 1016363634, 'green', 'class room 3', '0000-00-00', '						  \r\n						  enter your notes\r\n		\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `charger`
--

CREATE TABLE `charger` (
  `idcharger` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `color` text DEFAULT NULL,
  `place` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `type` text DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `charger`
--

INSERT INTO `charger` (`idcharger`, `fullname`, `phonenumber`, `color`, `place`, `date`, `type`, `notes`) VALUES
(1, 'reda', 38773, 'black', NULL, NULL, '', 'jfdkst');

-- --------------------------------------------------------

--
-- Table structure for table `glasses`
--

CREATE TABLE `glasses` (
  `idglasses` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `color` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `place` text DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glasses`
--

INSERT INTO `glasses` (`idglasses`, `fullname`, `phonenumber`, `color`, `date`, `place`, `notes`) VALUES
(11, 'nn', 1068173639, 'red', NULL, 'lab 303', ''),
(53221534, 'beshoy ehab amin', 1010101010, 'orange', '0000-00-00', 'class room 4', '				  \r\n				  enter your notes\r\n\r\n      ');

-- --------------------------------------------------------

--
-- Table structure for table `headphone`
--

CREATE TABLE `headphone` (
  `idheadphone` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `color` text DEFAULT NULL,
  `place` text DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) NOT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `headphone`
--

INSERT INTO `headphone` (`idheadphone`, `type`, `date`, `color`, `place`, `fullname`, `phonenumber`, `notes`) VALUES
(88, 'samsung', NULL, 'red', 'lab 303', 'nmnm', 1068173639, ''),
(2147483647, 'Samsung', '0000-00-00', 'red', 'class room 1', 'beshoy ehab amin', 1068173639, '				  \r\n				  enter your notes\r\n\r\n      ');

-- --------------------------------------------------------

--
-- Table structure for table `id-card`
--

CREATE TABLE `id-card` (
  `idcard` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `grade` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `place` text DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `keys`
--

CREATE TABLE `keys` (
  `idkeys` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `place` text DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `noofkeys` int(11) DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `keys`
--

INSERT INTO `keys` (`idkeys`, `date`, `place`, `phonenumber`, `fullname`, `noofkeys`, `notes`) VALUES
(12121, NULL, 'lab 303', 1068173639, 'beshoo', 5, 'm');

-- --------------------------------------------------------

--
-- Table structure for table `mobile`
--

CREATE TABLE `mobile` (
  `idmobile` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `color` text DEFAULT NULL,
  `place` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `type` text DEFAULT NULL,
  `notes` varchar(40) NOT NULL,
  `size` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mobile`
--

INSERT INTO `mobile` (`idmobile`, `fullname`, `phonenumber`, `color`, `place`, `date`, `type`, `notes`, `size`) VALUES
(25257, 'beso', 1068173639, 'red', 'lab 301', NULL, 'oppo', 'jbdjnjbjdjkd', '8g'),
(7878788, 'beshoy ehab amin', 1068173639, 'black', 'lab 300', '0000-00-00', 'iphone', '				  \r\n				  enter your notes\r\n\r\n      ', '64g'),
(787878845, 'beshoy ehab amin badawy', 1068173639, 'undefined', 'lab 300', '0000-00-00', 'hawawi', '				  \r\n				  enter your notes\r\n\r\n      ', '128g'),
(787878855, 'cmmc ', 44, 'undefined', 'lab 300', '0000-00-00', 'samsung', '				  \r\n				  enter your notes\r\n\r\n      ', '8g'),
(2147483647, 'beshoy ehab amin', 1068173639, 'red', 'lab 300', '0000-00-00', 'samsung', '				  \r\n				  enter your notes\r\n\r\n      ', '8g');

-- --------------------------------------------------------

--
-- Table structure for table `money`
--

CREATE TABLE `money` (
  `idmoney` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `place` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `rangofmoney` int(11) DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `money`
--

INSERT INTO `money` (`idmoney`, `fullname`, `phonenumber`, `place`, `date`, `rangofmoney`, `notes`) VALUES
(1010, 'besho', 1068173639, 'lab 300', NULL, 100, ''),
(1515, 'beshoyehab', 1068173639, 'lab 404', '0000-00-00', 0, '				  \r\n				  enter your notes\r\n\r\n      '),
(141414, 'beshoyehab', 1068173639, 'lab 402', '0000-00-00', 250, '				  \r\n				  enter your notes\r\n\r\n      '),
(1234456678, 'beshoy ehab amin', 10049330, 'lab 302', '1200-12-12', 166, '				  \r\nno\r\n\r\n                    ');

-- --------------------------------------------------------

--
-- Table structure for table `usb`
--

CREATE TABLE `usb` (
  `IDUSB` int(11) NOT NULL,
  `GB` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `place` text DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `notes` varchar(40) NOT NULL,
  `tybe` text NOT NULL,
  `color` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usb`
--

INSERT INTO `usb` (`IDUSB`, `GB`, `date`, `place`, `fullname`, `phonenumber`, `notes`, `tybe`, `color`) VALUES
(5, '8G', NULL, 'lab 303', 'bebe', 1068173639, '', 'kingston', ''),
(578, '8G', NULL, 'lab 303', 'beeeebeeeee', 1068173639, '', 'kingston', 'red'),
(2147483647, '64G', '0000-00-00', 'lab 300', 'beshoy ehab amin', 1068173639, '				  \r\n				  enter your notes\r\n\r\n      ', 'Samsung', 'red');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `phonenumber` int(11) NOT NULL,
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `idwallet` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `rangofmoney` text DEFAULT NULL,
  `place` text DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallet`
--

INSERT INTO `wallet` (`idwallet`, `date`, `fullname`, `phonenumber`, `color`, `rangofmoney`, `place`, `notes`) VALUES
(4, '0000-00-00', 'beshoy', 2147483647, 'red', 'undefined', 'lab 300', '				  \r\n				  enter your notes\r\n\r\n      '),
(45, '0000-00-00', 'beshoyehab', 1068173639, 'red', '200', 'lab 300', '				  \r\n				  enter your notes\r\n\r\n      '),
(89, '0000-00-00', 'nnn', 44, 'red', '550', 'lab 301', '				  \r\n				  enter your notes\r\n\r\n      '),
(245, '0000-00-00', 'basyonu', 32154, 'black', '550', 'lab 300', '				  \r\n				  enter your notes\r\n\r\n      '),
(445, '0000-00-00', 'beshoy elgameed', 1068173639, 'brown', '50', 'lab 402', '				  \r\n				  enter your notes\r\n\r\n      '),
(556, NULL, 'bebo', 1068173639, 'red', '100', 'lab 301', ''),
(999, '0000-00-00', 'cmmc ', 4444, 'brown', '500', 'lab 302', '				  \r\n				  enter your notes\r\n\r\n      '),
(33333, '0000-00-00', 'nada ahmed zaida', 1033333333, 'red', '1223', 'cario', ''),
(115122, '0000-00-00', 'beshoy ehab amin', 1068173639, 'brown', '1200', 'lab 404', '				  \r\n				  enter your notes\r\n\r\n      '),
(222255, '0000-00-00', 'beshoy ehab amin', 1068173639, 'black', '1000', 'class room 5', '				  \r\n				  enter your notes\r\n\r\n      '),
(2525252, '0000-00-00', 'besosaad', 1010101010, 'green', '80', 'lab 304', '				  \r\n				  enter your notes\r\n\r\n      '),
(777777777, '2525-10-10', 'beshoy ehab amin', 1068173639, 'black', '180', 'lab 404', 'hat mahfazty ya haramy'),
(2147483647, '0000-00-00', 'cmmc ', 1068173639, 'red', 'undefined', 'lab 300', '				  \r\n				  enter your notes\r\n\r\n      ');

-- --------------------------------------------------------

--
-- Table structure for table `watch`
--

CREATE TABLE `watch` (
  `idwatch` int(11) NOT NULL,
  `place` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `phone-number` int(11) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `color` text DEFAULT NULL,
  `notes` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bags`
--
ALTER TABLE `bags`
  ADD PRIMARY KEY (`idbags`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`idbook`);

--
-- Indexes for table `caps`
--
ALTER TABLE `caps`
  ADD PRIMARY KEY (`idcaps`);

--
-- Indexes for table `charger`
--
ALTER TABLE `charger`
  ADD PRIMARY KEY (`idcharger`);

--
-- Indexes for table `glasses`
--
ALTER TABLE `glasses`
  ADD PRIMARY KEY (`idglasses`);

--
-- Indexes for table `headphone`
--
ALTER TABLE `headphone`
  ADD PRIMARY KEY (`idheadphone`);

--
-- Indexes for table `id-card`
--
ALTER TABLE `id-card`
  ADD PRIMARY KEY (`idcard`);

--
-- Indexes for table `keys`
--
ALTER TABLE `keys`
  ADD PRIMARY KEY (`idkeys`);

--
-- Indexes for table `mobile`
--
ALTER TABLE `mobile`
  ADD PRIMARY KEY (`idmobile`);

--
-- Indexes for table `money`
--
ALTER TABLE `money`
  ADD PRIMARY KEY (`idmoney`);

--
-- Indexes for table `usb`
--
ALTER TABLE `usb`
  ADD PRIMARY KEY (`IDUSB`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`phonenumber`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`idwallet`);

--
-- Indexes for table `watch`
--
ALTER TABLE `watch`
  ADD PRIMARY KEY (`idwatch`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
