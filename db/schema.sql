-- DROP DATABASE IF EXISTS DB;
-- CREATE DATABASE DB;

USE DB;

-- CREATE TABLE Drivers
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	user_name varchar(255) NOT NULL,
--     `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- 	PRIMARY KEY (id)
-- );

CREATE TABLE Movements
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
    button_name varchar(255) NOT NULL,
    button_direction varchar(255) NOT NULL,
    button_degree int NOT NULL,
    current_direction varchar(255) NOT NULL,
    current_degree int NOT NULL,
    `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

--  mysql --host=127.0.0.1 --port=3306 --user=root --password=root