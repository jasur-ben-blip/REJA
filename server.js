console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1 ----> express ga bpg'liq bolgan kirib kelayotkan codelarimiz yoziladi // kirish codelari

app.use(express.static("public"));
app.use(express.json());  // kirib kelayotkan json farmatdagi datani objectga ogirib beradi
app.use(express.urlencoded({extended: true})); //html forumdan post qilingan narsalarni express qabul qilishi uchun ishlatiladi 


// 2 : Sessionlarga bog'liq narsalar yoziladi bizning bu loyihamizda sessionlar yoq hozircha 



// 3 views ga bog'liq codelar 

app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing ga bog'liq codelar 
app.post("/create-item",  function(req, res) {
    console.log(req.body);
    res.json({test: "succes"});
} );

app.get('/', function (req, res) {
    res.render('harid');
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running sucessfully on port : ${PORT}`);
});
