// * Create a Node Application with Express and MySQL with three Express routes.

//     * Create a `/cast` route that will display all the actors and their data ordered by their id's.

//     * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.
const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

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

// Routes
app.get("/", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM characters", (err, result) => {
    if (err) throw err;
    // We then begin building out HTML elements for the page.
    var html = "<h1> Seinfeld Characters </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>" + result[i].name + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

// "coolness" route
app.get("/coolness", (req, res) => {
  connection.query("select * from characters order by coolness desc", (err, result) => {
    if (err) throw err;

    let html = "<h1>Characters</h1>";
    html += "<ul>";

    result.forEach(character => {
      html += `<li><p>${character.name}</p>`;
      html += `<p>coolness points: ${character.coolness}</p></li>`;
    });
    
    html += "</ul>";
    res.send(html);
  })
})

app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`));