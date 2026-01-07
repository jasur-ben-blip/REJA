const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://ben:jirVcvCsK5xhBshj@cluster0.uirfq1g.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succed");
      module.exports = client;
      const app = require("./app");
      //   console.log(client);
      const server = http.createServer(app);
      let PORT = 4013;
      server.listen(PORT, function () {
        console.log(
          `The server is running sucessfully on port : ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
