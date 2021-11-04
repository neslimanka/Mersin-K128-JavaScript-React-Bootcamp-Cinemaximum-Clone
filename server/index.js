

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
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

app.get("/cinema", async (req, res) => {
  db.query("SELECT * FROM cinema")
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
});
app.get("/vizyonda", async (req, res) => {
  db.query("SELECT * FROM vizyonda")
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
})
app.get("/yakinda", async (req, res) => {
  db.query("SELECT * FROM yakinda")
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
})
app.get("/slider", async (req, res) => {
  db.query("SELECT * FROM slider")
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
