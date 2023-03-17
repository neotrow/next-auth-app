var express = require("express");
var port = 3020;
var cors = require("cors");

var app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(function (req, res) {
  if (req.headers.authorization !== "{api access token}") {
    console.log("Unauthorized from " + req.query.origin);
    res.send("Unauthorized");
    return;
  }

  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`server listening on port ${port}`);
});
