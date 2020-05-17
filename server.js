// * Create a Node Application with Express and MySQL with three Express routes.

//     * Create a `/cast` route that will display all the actors and their data ordered by their id's.

//     * Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.

//     * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.
const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "fatbeats",
  database: "seinfeld_db"
});

connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
})

// app.listen()