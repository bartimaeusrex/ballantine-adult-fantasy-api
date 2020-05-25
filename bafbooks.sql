DROP DATABASE bafbooks;
DROP USER 'bafbooks'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE bafbooks;

CREATE USER 'bafbooks'@'localhost' IDENTIFIED BY 'scrumpTIOU$!';

GRANT ALL ON bafbooks.* TO 'bafbooks'@'localhost';

USE bafbooks;

CREATE TABLE authors (
  id INT auto_increment,
  nameFirst VARCHAR(255) NOT NULL,
  nameLast VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE books (
  id INT auto_increment,
  title VARCHAR(255) NOT NULL,
  authorId INT NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (authorId) REFERENCES authors(id)
);

INSERT INTO authors (nameFirst, nameLast) VALUES ("Bram", "Stoker");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Oscar", "Wilde");

INSERT INTO books (title, authorId) VALUES ("Dracula", 1);
INSERT INTO books (title, authorId) VALUES ("The Picture of Dorian Gray", 2);