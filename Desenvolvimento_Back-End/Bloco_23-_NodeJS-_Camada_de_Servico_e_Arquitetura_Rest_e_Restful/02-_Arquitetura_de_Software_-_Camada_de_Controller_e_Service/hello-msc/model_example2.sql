-- CREATE DATABASE IF NOT EXISTS model_example2;

-- USE model_example2;

-- CREATE TABLE IF NOT EXISTS authors (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(100),
--     last_name VARCHAR(100),
--     middle_name VARCHAR(100)
-- );

CREATE DATABASE IF NOT EXISTS model_example2;

USE model_example2;

CREATE TABLE authors
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	middle_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	birthday DATE,
	nationality VARCHAR(100),
	PRIMARY KEY(id)
);

INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)

VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
	('J.','R. R.','Tolkien','1892-01-03','britânico'),
	('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
	('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
	('Júlio',NULL,'Verne','1905-03-24','francês');