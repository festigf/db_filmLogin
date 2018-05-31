CREATE DATABASE  IF NOT EXISTS `dbfilm` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `dbfilm`;
-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: dbfilm
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attori`
--

DROP TABLE IF EXISTS `attori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attori` (
  `codAttore` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) DEFAULT NULL,
  `annoNascita` int(11) DEFAULT NULL,
  `nazionalita` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`codAttore`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attori`
--

LOCK TABLES `attori` WRITE;
/*!40000 ALTER TABLE `attori` DISABLE KEYS */;
INSERT INTO `attori` VALUES (1,'M.Mastroianniiii',1940,'Italiana'),(2,'S.Lorenn',1945,'Italiana'),(3,'A.Falchi',1970,'Italiana'),(4,'P.Anderson',1974,'USA'),(5,'K.Basinger',1972,'USA'),(6,'aa',2000,'USA');
/*!40000 ALTER TABLE `attori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `film` (
  `codFilm` int(11) NOT NULL AUTO_INCREMENT,
  `titolo` varchar(30) DEFAULT NULL,
  `annoProduzione` int(11) DEFAULT NULL,
  `nazionalita` varchar(15) DEFAULT NULL,
  `regista` varchar(30) DEFAULT NULL,
  `genere` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`codFilm`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES (1,'L\'ultima sequenza',2002,'Italiana','Rossi','Sentimentale'),(2,'Tre vite e una sola morte',2000,'Italiana','Rossi','Commedia'),(3,'La miliardaria',1960,'Italiana','Rossi','Commedia'),(4,'Cuori Estranei',1970,'Italiana','Bianchi','Sentimentale'),(5,'Lo spazio',1980,'Giapponese','Furgonzin','Fantascienza'),(6,'Giro del mondo',1991,'Giapponese','Furgonzin','Fantascienza'),(7,'Il quinto elemento',1997,'Francese','Besson','Fantascienza'),(8,'Marte',1988,'Francese','Baget','Fantascienza'),(9,'Venere',1999,'Francese','Clio','Azione'),(10,'Giove',2000,'Giapponese','Ciu','Azione'),(11,'Casablanca',1995,'Italiana','Rossi','Drammatico');
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proiezioni`
--

DROP TABLE IF EXISTS `proiezioni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proiezioni` (
  `codProiezione` int(11) NOT NULL AUTO_INCREMENT,
  `codFilm` int(11) DEFAULT NULL,
  `codSala` int(11) DEFAULT NULL,
  `incasso` decimal(10,2) DEFAULT NULL,
  `dataProiezione` date DEFAULT NULL,
  PRIMARY KEY (`codProiezione`),
  KEY `codFilm` (`codFilm`),
  KEY `codSala` (`codSala`),
  CONSTRAINT `proiezioni_ibfk_1` FOREIGN KEY (`codFilm`) REFERENCES `film` (`codFilm`),
  CONSTRAINT `proiezioni_ibfk_2` FOREIGN KEY (`codSala`) REFERENCES `sale` (`codSala`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proiezioni`
--

LOCK TABLES `proiezioni` WRITE;
/*!40000 ALTER TABLE `proiezioni` DISABLE KEYS */;
INSERT INTO `proiezioni` VALUES (1,1,1,4000.00,'2018-03-01'),(2,2,1,3000.00,'2017-01-01'),(3,3,2,2500.00,'2015-06-01'),(4,4,3,5000.00,'2018-01-01'),(5,5,4,4500.00,'2018-01-01'),(6,6,3,3500.00,'2018-01-01'),(7,7,4,1200.00,'2018-01-01'),(8,8,2,1300.00,'2017-01-15'),(9,9,3,1500.00,'2016-05-01'),(10,10,3,1800.00,'2017-04-01'),(11,11,1,2900.00,'2013-07-01');
/*!40000 ALTER TABLE `proiezioni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recita`
--

DROP TABLE IF EXISTS `recita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recita` (
  `codAttore` int(11) NOT NULL,
  `codFilm` int(11) NOT NULL,
  PRIMARY KEY (`codAttore`,`codFilm`),
  KEY `codFilm` (`codFilm`),
  CONSTRAINT `recita_ibfk_1` FOREIGN KEY (`codAttore`) REFERENCES `attori` (`codAttore`),
  CONSTRAINT `recita_ibfk_2` FOREIGN KEY (`codFilm`) REFERENCES `film` (`codFilm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recita`
--

LOCK TABLES `recita` WRITE;
/*!40000 ALTER TABLE `recita` DISABLE KEYS */;
INSERT INTO `recita` VALUES (1,1),(1,2),(1,3),(3,4),(3,5),(1,7),(2,8),(3,8),(4,8),(4,9),(5,10),(1,11);
/*!40000 ALTER TABLE `recita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale` (
  `codSala` int(11) NOT NULL AUTO_INCREMENT,
  `posti` int(11) DEFAULT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `citta` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`codSala`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
INSERT INTO `sale` VALUES (1,70,'Sala 1','Pisa'),(2,55,'Sala 2','Pisa'),(3,65,'Sala A','Roma'),(4,80,'Sala B','Roma');
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblusers`
--

DROP TABLE IF EXISTS `tblusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblusers` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblusers`
--

LOCK TABLES `tblusers` WRITE;
/*!40000 ALTER TABLE `tblusers` DISABLE KEYS */;
INSERT INTO `tblusers` VALUES ('user1','user1');
/*!40000 ALTER TABLE `tblusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'dbfilm'
--
/*!50003 DROP PROCEDURE IF EXISTS `getData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `getData`(  
 tableName varchar(100),
 pageIndex INT,  
 pageSize INT,
 OUT nRows int, 
 OUT nPages int 
)
Begin  
    set @sql_text=concat("SELECT * FROM ", tableName ," limit ", pageSize, " offset ", pageSize*(pageIndex-1), " ;");
	PREPARE stmt FROM @sql_text;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
    
    
    set @sql_text=concat("SELECT count(*), ceil((count(*)/",pageSize,"))  INTO @nrows, @nPages  FROM ", tableName , " ;");
	-- set @sql_text=concat("SELECT count(*), 55  INTO @nrows, @nPages  FROM ", tableName , " ;");
	PREPARE stmt FROM @sql_text;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
    set nrows=@nrows;
	set nPages=@nPages;
 
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDataRows` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `getDataRows`(  
 tableName varchar(100),
 pageIndex INT,  
 pageSize INT
)
Begin  
    set @sql_text=concat("SELECT * FROM ", tableName ," limit ", pageSize, " offset ", pageSize*(pageIndex-1), " ;");
	PREPARE stmt FROM @sql_text;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getnRowsnPages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `getnRowsnPages`(  
 tableName varchar(100),
 pageIndex INT,  
 pageSize INT
)
Begin  
 
    
    set @sql_text=concat("SELECT count(*), ceil((count(*)/",pageSize,"))  INTO @nrows, @nPages  FROM ", tableName , " ;");
	-- set @sql_text=concat("SELECT count(*), 55  INTO @nrows, @nPages  FROM ", tableName , " ;");
	PREPARE stmt FROM @sql_text;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;

End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-31 23:02:23
