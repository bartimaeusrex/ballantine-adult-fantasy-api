DROP DATABASE bafbooks;
DROP USER 'bafbooks'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE bafbooks;

CREATE USER 'bafbooks'@'localhost' IDENTIFIED BY 'scrumpTIOU$!';

GRANT ALL ON bafbooks.* TO 'bafbooks'@'localhost';

USE bafbooks;

CREATE TABLE authors (
  id INT auto_increment,
  author VARCHAR(255) NOT NULL,
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

CREATE TABLE publishInfo (
  id INT auto_increment,
  titleId INT NOT NULL,
  publishYear VARCHAR(255) NOT NULL,
  publishOriginYear VARCHAR(255) NOT NULL,
  originalPublisher VARCHAR(255) NOT NULL,
  coverArtist VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (titleId) REFERENCES books(id)
);

INSERT INTO authors (author) VALUES ("J.R.R. Tolkien");
INSERT INTO authors (author) VALUES ("E.R. Eddison");
INSERT INTO authors (author) VALUES ("J.R.R. Tolkien and Donald Swann");
INSERT INTO authors (author) VALUES ("Mervyn Peake");
INSERT INTO authors (author) VALUES ("David Lindsay");
INSERT INTO authors (author) VALUES ("Peter S. Beagle");
INSERT INTO authors (author) VALUES ("Lin Carter");

INSERT INTO books (title, authorId) VALUES ("The Hobbit", 1);
INSERT INTO books (title, authorId) VALUES ("The Fellowship of the Ring", 1);
INSERT INTO books (title, authorId) VALUES ("The Two Towers", 1);
INSERT INTO books (title, authorId) VALUES ("Return of the King", 1);
INSERT INTO books (title, authorId) VALUES ("The Tolkien Reader", 1);
INSERT INTO books (title, authorId) VALUES ("The Worm Ouroboros", 2);
INSERT INTO books (title, authorId) VALUES ("Mistress of Mistresses", 2);
INSERT INTO books (title, authorId) VALUES ("A Fish Dinner in Memison", 2);
INSERT INTO books (title, authorId) VALUES ("The Road Goes Ever On", 3);
INSERT INTO books (title, authorId) VALUES ("Titus Groan", 4);
INSERT INTO books (title, authorId) VALUES ("Gormenghast", 4);
INSERT INTO books (title, authorId) VALUES ("Titus Alone", 4);
INSERT INTO books (title, authorId) VALUES ("A Voyage to Arcturus", 5);
INSERT INTO books (title, authorId) VALUES ("The Last Unicorn", 6);
INSERT INTO books (title, authorId) VALUES ("A Fine and Private Place", 6);
INSERT INTO books (title, authorId) VALUES ("Smith of Wootton Major and Farmer Giles of Ham", 1);
INSERT INTO books (title, authorId) VALUES ("Tolkien: A Look Behind 'The Lord of the Rings'", 1);
INSERT INTO books (title, authorId) VALUES ("The Mezentian Gate", 2);

INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (1, '1965', '1937', 'George Allen & Unwin Ltd.', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (2, '1965', '1954', 'George Allen & Unwin Ltd.', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (3, '1965', '1955', 'George Allen & Unwin Ltd.', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (4, '1965', '1956', 'George Allen & Unwin Ltd.', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (5, '1966', '1966', 'Ballantine Books', 'Pauline Baynes');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (6, '1967', '1922', 'Jonathan Cape', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (7, '1967', '1935', 'Faber and Faber', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (8, '1968', '1941', 'Dutton', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (9, '1968', '1967', 'Houghton Mifflin', 'Barbara Remington');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (10, '1968', '1946', 'Eyre & Spottiswoode', 'Bob Pepper');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (11, '1968', '1950', 'Eyre & Spottiswoode', 'Bob Pepper');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (12, '1968', '1959', 'Eyre & Spottiswoode', 'Bob Pepper');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (13, '1968', '1920', 'Methuen & Co. Ltd.', 'Bob Pepper');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (14, '1969', '1968', 'Viking Press', 'Gervasio Gallardo');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (15, '1969', '1960', 'Viking Press', 'Gervasio Gallardo');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (16, '1969', '1967', 'George Allen & Unwin Ltd.', 'Pauline Baynes');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (17, '1969', '1969', 'Ballantine Books', 'Sheryl Slavitt');
INSERT INTO publishInfo (titleId, publishYear, publishOriginYear, originalPublisher, coverArtist)
  VALUES (18, '1969', '1958', 'Curwen Press', 'Barbara Remington');