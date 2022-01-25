DROP DATABASE IF EXISTS outer_space;
CREATE DATABASE outer_space;
\c outer_space

CREATE TABLE Galaxies
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE Planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  galaxyID INT REFERENCES Galaxies ON DELETE SET NULL
);

CREATE TABLE Orbits
(
  id SERIAL PRIMARY KEY,
  orbitingPlanetID INT REFERENCES Planets ON DELETE SET NULL,
  oribitsAround TEXT NOT NULL,
  orbitalPeriodInYears FLOAT NOT NULL
);

CREATE TABLE Moons
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  planetID INT REFERENCES Planets ON DELETE SET NULL
);


-----------------------------------------------------------------

INSERT INTO Galaxies (name)
  VALUES ('Milky Way');

-----------------------------------------------------------------

INSERT INTO Planets
  (name, galaxyID)
VALUES
  ('EARTH', 1),
  ('Mars', 1),
  ('Venus', 1),
  ('Neptune', 1),
  ('Proxima Centauri b', 1),
  ('Gliese 876 b', 1);

-----------------------------------------------------------------

INSERT INTO Orbits
  (orbitingPlanetID, oribitsAround, orbitalPeriodInYears)
VALUES
  (1, 'The Sun', 1.00),
  (2, 'The Sun', 1.88),
  (3, 'The Sun', 0.62),
  (4, 'The Sun', 164.8),
  (5, 'Proxima Centauri', 0.03),
  (6, 'Gliese 876', 0.23);

-----------------------------------------------------------------

INSERT INTO Moons
  (name, planetID)
VALUES
  ('The Moon', 1),
  ('Phobos', 2),
  ('Deimos', 2),
  ('Naiad', 4),
  ('Thalassa', 4),
  ('Despina', 4),
  ('Galatea', 4),
  ('Larissa', 4),
  ('S/2004 N 1', 4),
  ('Proteus', 4),
  ('Triton', 4),
  ('Nereid', 4),
  ('Halimede', 4),
  ('Sao', 4),
  ('Laomedeia', 4),
  ('Psamathe', 4),
  ('Neso', 4);

-----------------------------------------------------------------

SELECT * FROM Galaxies;
SELECT * FROM Planets;
SELECT * FROM Orbits;
SELECT * FROM Moons;

-----------------------------------------------------------------

SELECT (Planets.id, Planets.name, Orbits.oribitsAround, Orbits.orbitalPeriodInYears, Moons.name) FROM
  Planets
    INNER JOIN Orbits ON Orbits.orbitingPlanetID = Planets.id
    INNER JOIN Moons ON Moons.planetID = Planets.id;
