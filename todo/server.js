// install 

// install --save express mysql body-parser

const mysql = require("mysql");
const experess = require("express");

var app = experess();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todoList"
});

mysqlConnection.connect(err => {
  if (!err) console.log("Connect succesed");
  else console.log(`Failed to connect. Error: ${JSON.stringify(err)}`);
});

app.listen(3000, () => {
  console.log("Express server is runnning in port 8000");
});

// Get all task
app.get("/listtask", (req, res) => {
  mysqlConnection.query("SELECT * FROM listTask", (err, rows, feilds) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

// Get all task
app.get("/listtask/:id", (req, res) => {
  mysqlConnection.query("SELECT * FROM listTask WHERE id = ?", [req.params.id], (err, rows, feilds) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.get("/listtask/delete/:id", (req, res) => {
  mysqlConnection.query("DELETE FROM listTask WHERE id = ?", [req.params.id], (err, rows, feilds) => {
    if (!err) console.log("deleted success");
    else console.log(err);
  });
});
