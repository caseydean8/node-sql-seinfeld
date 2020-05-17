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

insert into characters (name, coolness, attitude)
values ("Jerry", 2,"uptight");

insert into characters (name, coolness, attitude)
values ("Elaine", 3, "snotty");

insert into characters (name, coolness, attitude)
values ("George", 0, "jerk");

insert into characters (name, coolness, attitude)
values ("Kramer", 4, "aloof");
