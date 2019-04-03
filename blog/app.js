var express=require('express');
var app=express();

// dung bien var de luu express lai vi express khong co san trong node
// app nhu la mot nguoi quan li cua nha hang

var config=require('config')



// body-parser: hứng dư liệu từ form về 
var bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));



// Bai 25 : Lam viec voi phien
var session=require("express-session");
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.get("secret_key"),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // để cho t có thể thêm dữ liệu khác vào
}));

// view la thu muc chua ca template
app.set("views",__dirname+"/apps/views");
// setup ejs la template mac dinh
app.set("view engine","ejs")
// sau lenh nay tat ca cac file co duoi ejs trong thu muc view deu duoc nhan la template va duoc render ra trong bien respon cua express

//Static folder
app.use("/static",express.static(__dirname+"/public"));


var controllers=require(__dirname+"/apps/controllers");
app.use(controllers);




// cach1 :
//app.listen(3000,function(){
    //console.log("server is runing on port 3000");
//});

// cach 2:
var host=config.get("server.host");
var port=config.get("server.port");
app.listen(port,host,function(){
    console.log("server is listening on port 3000");
})