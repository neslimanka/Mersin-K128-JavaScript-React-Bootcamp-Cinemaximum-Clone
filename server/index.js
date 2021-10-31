const express = require('express')
const app = express()
const port = 3001
const {Client} =require('pg')



const database_model = new Client ({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Ankara14",
  database:"postgres"
})

database_model.connect();

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  database_model.query("Select * from cinema")
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.listen(port, () => {
  console.log(`Server listening on port %s, Ctrl+C to stop ${port}.`)
})