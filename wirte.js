const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./database/index.db");

db.run(
  `INSERT INTO DJfood(resname, menu) VALUES('item.restrntNm', 'item.rprsFod')`,
  function (err) {
    if (err) {
      return console.log(err.message);
    }
  }
);

db.close();
