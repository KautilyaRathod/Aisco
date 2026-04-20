SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aisco`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_inquiries`
--
-- Database: `aisco`

CREATE TABLE `contact_inquiries` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `fullName` varchar(150) NOT NULL,
  `company` varchar(150) DEFAULT NULL,
  `countryCode` varchar(8) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `email` varchar(200) NOT NULL,
  `subject` varchar(60) NOT NULL,
  `message` text NOT NULL,
  `agreeToPrivacy` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_email` (`email`),
  KEY `idx_createdAt` (`createdAt`)
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;



--
-- Dumping data for table `contact_inquiries`
--

INSERT INTO `contact_inquiries` (`id`, `fullName`, `company`, `countryCode`, `phone`, `email`, `subject`, `message`, `agreeToPrivacy`, `createdAt`) VALUES
(1, 'test', 'test', '+91', '6351729056', 'test@gmail.com', 'partnerships', 'test', 1, '2025-10-30 10:33:48'),
(2, 'Manav', 'test', '+91', '6351729056', 'hdhhdf@hdjd.ufhfur', 'sales', 'rfvwaar', 1, '2025-11-06 09:30:13'),
(3, 'Manav Naik', 'test', '+91', '6351729056', 'manavnaik@gmail.com', 'general', 'online E mail testing', 1, '2026-01-05 11:12:41');

-- --------------------------------------------------------

--
-- Table structure for table `quote_requests`
--

DROP TABLE IF EXISTS `quote_requests`;

CREATE TABLE `quote_requests` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `fullName` varchar(150) NOT NULL,
  `companyName` varchar(150) NOT NULL,
  `countryCode` varchar(8) NOT NULL,
  `phoneNumber` varchar(32) NOT NULL,
  `whatsappCountryCode` varchar(8) DEFAULT NULL,
  `whatsappNumber` varchar(32) DEFAULT NULL,
  `emailAddress` varchar(200) NOT NULL,
  `projectLocation` varchar(200) NOT NULL,
  `productType` varchar(50) NOT NULL,
  `quantityRange` varchar(50) NOT NULL,
  `requiredDiameter` varchar(255) NOT NULL,
  `deliveryRequired` tinyint(1) NOT NULL,
  `deliveryLocation` varchar(255) DEFAULT NULL,
  `projectTimeline` varchar(50) NOT NULL,
  `message` text,
  `agreeToTerms` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_emailAddress` (`emailAddress`),
  KEY `idx_createdAt` (`createdAt`)
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quote_requests`
--

INSERT INTO `quote_requests` (`id`, `fullName`, `companyName`, `countryCode`, `phoneNumber`, `whatsappCountryCode`, `whatsappNumber`, `emailAddress`, `projectLocation`, `productType`, `quantityRange`, `requiredDiameter`, `deliveryRequired`, `deliveryLocation`, `projectTimeline`, `message`, `agreeToTerms`, `createdAt`) VALUES
(1, 'test', 'test', '+91', '1234567890', '+91', '1234567890', 'kivewi5944@lovleo.com', 'mumbai', 'rebar', 'medium', '16mm', 0, '', 'quarter', 'test', 1, '2025-10-30 10:37:29'),
(2, 'test', 'test', '', '6351729056', NULL, NULL, 'test@gmail.com', 'test', 'commercial', '1', '8mm', 0, 'test', 'immediate', 'test', 1, '2025-10-30 10:40:43'),
(3, 'Online test', 'Online test', '+91', '1234567890', '+91', '1234567890', 'kivewi5944@lovleo.com', 'mumbai', 'billets', 'medium', '20mm,16mm,12mm,10mm', 0, '', 'immediate', 'zqwcrtfvgbyuhnjimk,op', 1, '2026-01-05 11:14:56'),
(4, 'Manav', 'test', '+91', '1234567890', '+91', '1234567890', 'kivewi5944@lovleo.com', 'mumbai', 'rebar', 'medium', '10mm', 0, '', 'month', 'Manav Naik', 1, '2026-01-05 11:16:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_inquiries`
--
ALTER TABLE `contact_inquiries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_createdAt` (`createdAt`);

--
-- Indexes for table `quote_requests`
--
ALTER TABLE `quote_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_emailAddress` (`emailAddress`),
  ADD KEY `idx_createdAt` (`createdAt`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_inquiries`
--
ALTER TABLE `contact_inquiries`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quote_requests`
--
ALTER TABLE `quote_requests`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

