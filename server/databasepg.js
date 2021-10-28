const {Client} =require('pg')
const client = new Client ({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Ankara14",
  database:"postgres"
})

client.connect();

client.query(`Select * from cinema`,(err,res)=>{
    console.log(err,res)
    client.end();
})