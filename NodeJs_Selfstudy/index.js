var express = require("express"); 
var app = express() ; 
var get_request = require('./routes/get_request');


app.use(express.static("public"));
app.set("view engine","ejs"); 
app.set("views","./views");
app.listen(3000);

app.use(get_request);

app.get("/index",function(req,res){
    console.log("! ");
    res.render("index");
    console.log("Server has started ! ");
});
