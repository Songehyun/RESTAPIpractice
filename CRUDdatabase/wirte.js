const http = require("http");
const fs = require("fs");
const flieUtils = require("../module/server.js");
const sqlite3 = require("sqlite3").verbose();

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    let url = req.url;
    let filePath = flieUtils.getFliePath(url);
    let ext = flieUtils.getFlieExtension(filePath);
    let contype = flieUtils.getContentType(ext);

    if (req.url === url) {
      console.log(req.url);
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
          res.end("서버 연결 오류");
          return;
        } else {
          res.writeHead(200, { "Content-Type": contype });
          res.end(data);
        }
      });
    }
  } else if (req.method === "POST") {
    if (req.url === "/create") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const parsedData = new URLSearchParams(body);
        const resname = parsedData.get("resname");
        let db = new sqlite3.Database("../database/index.db");

        db.run(
          `INSERT INTO Deajeonfood(resname) VALUES("${resname}")`,
          function (err) {
            if (err) {
              return console.log(err.message);
            }
          }
        );

        db.close();
      });
    }
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
