DROP DATABASE IF EXISTS soccer_league_db;
CREATE DATABASE soccer_league_db;
\c soccer_league_db

CREATE TABLE Teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE Referees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE Seasons (
    id SERIAL PRIMARY KEY,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL
);

CREATE TABLE Players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  teamID INT REFERENCES Teams ON DELETE SET NULL
);

CREATE TABLE Rankings (
  id SERIAL PRIMARY KEY,
  teamID INT REFERENCES Teams ON DELETE SET NULL,
  ranking INT NOT NULL
);

CREATE TABLE Games (
  id SERIAL PRIMARY KEY,
  team1ID INT REFERENCES Teams ON DELETE SET NULL,
  team2ID INT REFERENCES Teams ON DELETE SET NULL,
  refID INT REFERENCES Referees ON DELETE SET NULL,
  seasonID INT REFERENCES Seasons ON DELETE SET NULL
);

CREATE TABLE Goals (
  id SERIAL PRIMARY KEY,
  playerID INT REFERENCES Players ON DELETE SET NULL,
  teamID INT REFERENCES Teams ON DELETE SET NULL,
  gameID INT REFERENCES Games ON DELETE SET NULL
);

-------------------------------------------------------

INSERT INTO Teams (name)
  VALUES ('The Simpsons');

INSERT INTO Teams (name)
  VALUES ('Moe Maniacs');

INSERT INTO Teams (name)
  VALUES ('The Kids');

INSERT INTO Teams (name)
  VALUES ('The Holy Ones');

-------------------------------------------------------

INSERT INTO Referees (name)
  VALUES ('Radioactive Man');

INSERT INTO Referees (name)
  VALUES ('Krusty the Man');

INSERT INTO Referees (name)
  VALUES ('Duff Man');

INSERT INTO Referees (name)
  VALUES ('Kent Brockman');

-------------------------------------------------------

INSERT INTO Seasons (startDate, endDate)
  VALUES ('2020-06-01', '2020-10-01');

INSERT INTO Seasons (startDate, endDate)
  VALUES ('2021-06-01', '2021-10-01');

-------------------------------------------------------

INSERT INTO Players (name, teamID)
  VALUES ('Homer Simpson', 1);

INSERT INTO Players (name, teamID)
  VALUES ('Marge Simpson', 1);

INSERT INTO Players (name, teamID)
  VALUES ('Maggie Simpson', 1);

INSERT INTO Players (name, teamID)
  VALUES ('Lisa Simpson', 1);

INSERT INTO Players (name, teamID)
  VALUES ('Bart Simpson', 1);


INSERT INTO Players (name, teamID)
  VALUES ('Moe Szyslak', 2);

INSERT INTO Players (name, teamID)
  VALUES ('Barney Gumble', 2);

INSERT INTO Players (name, teamID)
  VALUES ('Lenny Leonard', 2);

INSERT INTO Players (name, teamID)
  VALUES ('Carl Carlson', 2);

INSERT INTO Players (name, teamID)
  VALUES ('Grandpa Simpson', 2);


INSERT INTO Players (name, teamID)
  VALUES ('Ralph Wiggum', 3);

INSERT INTO Players (name, teamID)
  VALUES ('Martin Prince', 3);

INSERT INTO Players (name, teamID)
  VALUES ('Milhouse Van Houten', 3);

INSERT INTO Players (name, teamID)
  VALUES ('Nelson Muntz', 3);

INSERT INTO Players (name, teamID)
  VALUES ('Kearney Zzyzwicz', 3);


INSERT INTO Players (name, teamID)
  VALUES ('Todd Flanders', 4);

INSERT INTO Players (name, teamID)
  VALUES ('Rod Flanders', 4);

INSERT INTO Players (name, teamID)
  VALUES ('Ned Flanders', 4);

INSERT INTO Players (name, teamID)
  VALUES ('Reverend Lovejoy', 4);

INSERT INTO Players (name, teamID)
  VALUES ('Princial Skinner', 4);

-------------------------------------------------------

INSERT INTO Rankings (teamID, ranking)
  VALUES (1, 4);

INSERT INTO Rankings (teamID, ranking)
  VALUES  (2, 3);

INSERT INTO Rankings (teamID, ranking)
  VALUES (3, 1);

INSERT INTO Rankings (teamID, ranking)
  VALUES (4, 2);

-------------------------------------------------------

INSERT INTO Games (team1ID, team2ID, refID, seasonID)
  VALUES (1, 2, 4, 1);

INSERT INTO Games (team1ID, team2ID, refID, seasonID)
  VALUES (1, 3, 3, 1);

INSERT INTO Games (team1ID, team2ID, refID, seasonID)
  VALUES (1, 4, 2, 1);

INSERT INTO Games (team1ID, team2ID, refID, seasonID)
  VALUES (2, 3, 1, 1);

INSERT INTO Games (team1ID, team2ID, refID, seasonID)
  VALUES (3, 4, 1, 1);

-------------------------------------------------------

INSERT INTO Goals (playerID, teamID, gameID)
  VALUES (4, 1, 1);

INSERT INTO Goals (playerID, teamID, gameID)
  VALUES (3, 1, 2);

INSERT INTO Goals (playerID, teamID, gameID)
  VALUES (2, 1, 3);

INSERT INTO Goals (playerID, teamID, gameID)
  VALUES (14, 3, 4);

INSERT INTO Goals (playerID, teamID, gameID)
  VALUES (18, 4, 5);

-------------------------------------------------------

SELECT * FROM Teams;
SELECT * FROM Referees;
SELECT * FROM Seasons;
SELECT * FROM Players;
SELECT * FROM Rankings;
SELECT * FROM Games;
SELECT * FROM Goals;

-------------------------------------------------------

-- From Game 1, print all teams & Players
SELECT (Teams.name, Players.name) FROM
  Games
    INNER JOIN Teams ON Games.team1ID = Teams.id OR Games.team2ID = Teams.id
    INNER JOIN Players ON Players.teamID = Teams.id

  WHERE Games.id = 1;

SELECT * FROM
  Games
    INNER JOIN Teams as t1 ON Games.team1ID = t1.id
    INNER JOIN Teams as t2 ON Games.team2Id = t2.id
    INNER JOIN Players ON Players.teamId = t1.id OR Players.teamId = t2.id;
