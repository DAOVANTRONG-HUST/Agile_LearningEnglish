var express = require("express");
var config = require("config");
var bodyParser = require("body-parser")
var app = express();


// body parser create.
app.use(bodyParser.json()); // decode data convert json

app.set("views", __dirname + "/app/views"); // set thư mục để html và engine mặc định
app.set("view engine", "ejs"); // file .ejs template render html in res

//Static folder

app.use("/static", express.static(__dirname + "/public"));

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

