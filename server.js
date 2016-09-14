
var http = require("http");

var express = require("express");
//var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var server = http.createServer(app);

//app.use(express.static("public"));
//app.use(bodyParser.json());

/****************************** Express Routes ********************************/
app.get("/", function (req, res) {
    //res.end("Hello world");
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/data", function (req, res) {
    res.end("{data: data}");
});

/******************************** Port assignment *****************************/
server.listen(80, function () {
    console.log("Listening on port 80");
});
