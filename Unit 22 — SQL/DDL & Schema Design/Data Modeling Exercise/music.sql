DROP DATABASE IF EXISTS music;
CREATE DATABASE music;
\c music


CREATE TABLE Artists
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE Producers
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE Albums
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  releaseDate DATE NOT NULL
);

CREATE TABLE ArtistsOfAlbums
(
  id SERIAL PRIMARY KEY,
  artistID INT REFERENCES Artists ON DELETE SET NULL,
  albumID INT REFERENCES Albums ON DELETE SET NULL
);

CREATE TABLE ProducersOfAlbums
(
  id SERIAL PRIMARY KEY,
  producerID INT REFERENCES Producers ON DELETE SET NULL,
  albumID INT REFERENCES Albums ON DELETE SET NULL
);

CREATE TABLE Songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  albumID INT REFERENCES Albums ON DELETE SET NULL
);

----------------------------------------------------

INSERT INTO Artists
  (name)
VALUES
  ('Hanson'),
  ('Queen'),
  ('Mariah Cary'),
  ('Boyz II Men'),
  ('Lady Gaga'),
  ('Bradley Cooper'),
  ('Nickelback'),
  ('Jay Z'),
  ('Alicia Keys'),
  ('Katy Perry'),
  ('Juicy J'),
  ('Maroon 5'),
  ('Christina Aguilera'),
  ('Avril Lavigne'),
  ('Destiny''s Child');


INSERT INTO Producers
  (name)
VALUES
  ('Dust Brothers'),
  ('Stephen Lironi'),
  ('Roy Thomas Baker'),
  ('Walter Afanasieff'),
  ('Benjamin Rice'),
  ('Rick Parashar'),
  ('Al Shux'),
  ('Max Martin'),
  ('Cirkut'),
  ('Shellback'),
  ('Benny Blanco'),
  ('The Matrix'),
  ('Darkchild');


INSERT INTO Albums
  (releaseDate, name)
VALUES
  ('04-15-1997', 'Middle of Nowhere'),
  ('10-31-1975', 'A Night at the Opera'),
  ('11-14-1995', 'Daydream'),
  ('09-27-2018', 'A Star Is Born'),
  ('08-21-2001', 'Silver Side Up'),
  ('10-20-2009', 'The Blueprint 3'),
  ('12-17-2013', 'Prism'),
  ('06-21-2011', 'Hands All Over'),
  ('05-14-2002', 'Let Go'),
  ('11-07-1999', 'The Writing''s on the Wall');


INSERT INTO ArtistsOfAlbums
  (albumID, artistID)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (3, 4),
  (4, 5),
  (4, 6),
  (5, 7),
  (6, 8),
  (6, 9),
  (7, 10),
  (7, 11),
  (8, 12),
  (8, 13),
  (9, 14),
  (10, 15);

INSERT INTO ProducersOfAlbums
  (albumID, producerID)
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (4, 5),
  (5, 6),
  (6, 7),
  (7, 8),
  (7, 9),
  (8, 10),
  (8, 11),
  (9, 12),
  (10, 13);


INSERT INTO Songs
  (title, duration_in_seconds, albumID)
VALUES
  ('MMMBop', 238, 1),
  ('Bohemian Rhapsody', 355, 2),
  ('One Sweet Day', 282, 3),
  ('Shallow', 216, 4),
  ('How You Remind Me', 223, 5),
  ('New York State of Mind', 276, 6),
  ('Dark Horse', 215, 7),
  ('Moves Like Jagger', 201, 8),
  ('Complicated', 244, 9),
  ('Say My Name', 240, 10);


----------------------------------------------------

SELECT * FROM Artists;
SELECT * FROM Producers;
SELECT * FROM Albums;
SELECT * FROM Songs;

----------------------------------------------------
