console.log("Web serverni boshlash");

const express = require("express");
const app = express();
// const fs = require("fs");

// MongoDB call
const db = require("./server").db();
const mongodb = require("mongodb");

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log("EROOR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

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
  console.log("user entered /create-item");
  // post - malumontni ozi bilan olib kelib va databasega olgan malumotni yozadi.
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // if (err) {
    //   console.log(err);
    //   res.end("something went wrong");
    // } else {
    //   res.end("succesfully added");
    // }
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "succes" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
