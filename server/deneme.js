

const express = require("express");
const pg_promise = require("pg-promise");
const dotenv = require("dotenv").config();
const app = express();
const pgp = pg_promise();
const port = 5001;

var db = pgp({
  user: "postgres",
  password: "Ankara14",
  host: "localhost",
  port: 5432,
  database: "postgres"

});

app.use(express.json());
// GET ALL MOVIES
app.get("/", async (req, res) => {
  db.query("SELECT * FROM cinema")
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});