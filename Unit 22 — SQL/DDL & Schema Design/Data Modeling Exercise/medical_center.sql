DROP DATABASE IF EXISTS medical_center_db;
CREATE DATABASE medical_center_db;
\c medical_center_db

CREATE TABLE Doctors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    deparment TEXT NOT NULL
);

CREATE TABLE Patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE Diseases (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE Diagnoses (
    id SERIAL PRIMARY KEY,
    diseaseID INT REFERENCES Diseases ON DELETE SET NULL,
    patientID INT REFERENCES Patients ON DELETE SET NULL
);

CREATE TABLE Patient_Doctor_Appointments (
    id SERIAL PRIMARY KEY,
    doctorID INT REFERENCES Doctors ON DELETE SET NULL,
    patientID INT REFERENCES Patients ON DELETE SET NULL
);

INSERT INTO Doctors (name, deparment)
  VALUES ('Phil Dunfy', 'Cardiology');

INSERT INTO Doctors (name, deparment)
  VALUES ('Marge Simpson', 'Opthamology');

INSERT INTO Patients (name)
  VALUES ('Maggie Simpson');

INSERT INTO Patients (name)
  VALUES ('Alex Dunfy');

INSERT INTO Diseases (name)
  VALUES ('Glaucoma');

INSERT INTO Diseases (name)
  VALUES ('Heartburn');

INSERT INTO Patient_Doctor_Appointments (doctorID, patientID)
  VALUES (1, 2);

INSERT INTO Patient_Doctor_Appointments (doctorID, patientID)
  VALUES (2, 1);

INSERT INTO Diagnoses (diseaseID, patientID)
  VALUES (1, 1);

INSERT INTO Diagnoses (diseaseID, patientID)
  VALUES (2, 2);

SELECT * FROM Doctors;
SELECT * FROM Patients;
SELECT * FROM Diseases;
SELECT * FROM Diagnoses;
SELECT * FROM Patient_Doctor_Appointments;
