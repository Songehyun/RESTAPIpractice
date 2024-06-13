const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("../database/index.db");

db.run(
  "CREATE TABLE Deajeonfood(id integer primary key, resname text not null)"
);

db.close();
