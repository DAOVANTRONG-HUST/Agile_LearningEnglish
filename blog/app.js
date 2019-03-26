var express = require("express");
var config = require("config");
var bodyParser = require
var app = express();

var controller = require(__dirname + "/app/controller");

app.use(controller);

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(port, host,  function(){
    console.log("Server is running port", port);
})

// app.listen(3000, function(){
//     console.log("Server is running port", 3000);
// })