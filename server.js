console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("EROOR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 ----> express ga bpg'liq bolgan kirib kelayotkan codelarimiz yoziladi // kirish codelari

app.use(express.static("public"));
app.use(express.json()); // kirib kelayotkan json farmatdagi datani objectga ogirib beradi
app.use(express.urlencoded({ extended: true })); //html forumdan post qilingan narsalarni express qabul qilishi uchun ishlatiladi

// 2 : Sessionlarga bog'liq narsalar yoziladi bizning bu loyihamizda sessionlar yoq hozircha

// 3 views ga bog'liq codelar

app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing ga bog'liq codelar
app.post("/create-item", function (req, res) {
  // post - malumontni ozi bilan olib kelib va databasega olgan malumotni yozadi.
  console.log(req.body);
  res.json({ test: "succes" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  //get - malumonni olish uchun ishlatiladi databasedan.
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running sucessfully on port : ${PORT}`);
});
