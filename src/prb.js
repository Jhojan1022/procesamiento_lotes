const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const csvFile = 'Archivos/dta.csv';
const db = new sqlite3.Database(':memory:');


db.run("CREATE TABLE users (ID INT, NOMBRE VARCHAR(500))");

db.all("SELECT * FROM users", (err, rows) => {
    if (err) throw err;
    console.log(rows);
  });