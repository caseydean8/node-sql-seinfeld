-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS seinfeld_db;

-- Created the DB "seinfeld_db" (only works on local connections)
CREATE DATABASE seinfeld_db;

-- Use the DB seinfeld_db for all the rest of the script
USE seinfeld_db;

-- need id, coolness pts, attitude

-- Created the table "characters"
CREATE TABLE characters (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  coolness int not null,
  attitude VARCHAR(30) not NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
-- INSERT INTO schools (name)
-- VALUES ("Hogwarts School of Witchcraft");

-- INSERT INTO schools (name)
-- VALUES ("Castelobruxo");

-- INSERT INTO schools (name)
-- VALUES ("Durmstrang Institute");

-- INSERT INTO schools (name)
-- VALUES ("Beauxbatons Academy of Magic");
