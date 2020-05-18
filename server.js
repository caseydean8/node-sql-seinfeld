const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "fatbeats",
  database: "seinfeld_db",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

let html = "";

// Routes
app.get("/", function (req, res) {
  //Initiate sql query
  connection.query("SELECT * FROM characters", (err, result) => {
    if (err) throw err;
    // Build html
    html = "<h1> Seinfeld Characters </h1>";
    html += "<ul>";

    // Use result to populate html with data
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>" + result[i].name + " </p></li>";
    }

    html += "</ul>";

    // Send html to user
    res.send(html);
  });
});

// "coolness" route
app.get("/coolness", (req, res) => {
  connection.query(
    "select * from characters order by coolness desc",
    (err, result) => {
      if (err) throw err;

      html = "<h1>Characters</h1>";
      html += "<ul>";

      result.forEach((character) => {
        html += `<li><p>${character.name}</p>`;
        html += `<p>coolness points: ${character.coolness}</p></li>`;
      });

      html += "</ul>";
      res.send(html);
    }
  );
});

//Attitude route displays character with specific attitude
app.get("/attitude/:att", (req, res) => {
  let attitude = req.params.att;
  connection.query(
    `select * from characters where attitude = "${attitude}"`,
    (err, result) => {
      if (err) throw err;
      let html = `<h1>Who's the ${attitude} character?</h1>`;
      result.forEach((character) => {
        html += `<li><p>${character.name}</p></li>`;
      });
      html += "</ul>";
      res.send(html);
    }
  );
});

app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`));
