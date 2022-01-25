DROP DATABASE IF EXISTS craigslist_db;
CREATE DATABASE craigslist_db;
\c craigslist_db

CREATE TABLE Regions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE Locations (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    preferredRegionID INT REFERENCES Regions ON DELETE SET NULL
);

CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    userID INT REFERENCES Users ON DELETE CASCADE,
    regionID INT REFERENCES Regions ON DELETE CASCADE,
    locationID INT REFERENCES Locations ON DELETE CASCADE,
    categoryID INT REFERENCES Categories ON DELETE CASCADE
);


INSERT INTO Regions (name)
  VALUES ('San Francisco');

INSERT INTO Regions (name)
  VALUES ('Atlanta');

INSERT INTO Regions (name)
  VALUES ('Seattle');


INSERT INTO Categories (name)
  VALUES ('Housing');

INSERT INTO Categories (name)
  VALUES ('Jobs');

INSERT INTO Categories (name)
  VALUES ('For Sale');


INSERT INTO Locations (name)
  VALUES ('123 Pearl St');

INSERT INTO Locations (name)
  VALUES ('345 Oyster Blvd');

INSERT INTO Locations (name)
  VALUES ('678 zyz St');


INSERT INTO Users (name, username, password, preferredRegionID)
  VALUES ('Lisa Simpson', 'coffeelover', 'password1', 1);

INSERT INTO Users (name, username, password, preferredRegionID)
  VALUES ('Jack Sparrow', 'happygal2020', 'password2', 2);

INSERT INTO Users (name, username, password, preferredRegionID)
  VALUES ('Will Turner', 'foodeater101', 'password3', 3);

INSERT INTO Users (name, username, password, preferredRegionID)
  VALUES ('St. Bernard', 'doglover99', 'password4', 3);


INSERT INTO Posts (title, description, userID, regionID, locationID, categoryID)
  VALUES ('Caffeine', 'Coffee, tea, V8 Energy', 1, 1, 2, 3);

INSERT INTO Posts (title, description, userID, regionID, locationID, categoryID)
  VALUES ('Seasonings', 'Adobo, cumin, oregano', 2, 2, 3, 2);

INSERT INTO Posts (title, description, userID, regionID, locationID, categoryID)
  VALUES ('Recipes', 'Chicken parm, egg salad', 3, 3, 2, 1);

INSERT INTO Posts (title, description, userID, regionID, locationID, categoryID)
  VALUES ('Pets', 'Dogs, cats, pigs, birds', 4, 3, 1, 1);


SELECT * FROM Users;
SELECT * FROM Regions;
SELECT * FROM Categories;
SELECT * FROM Locations;
SELECT * FROM Posts;
