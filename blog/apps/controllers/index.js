var express=require('express');
var router=express.Router();

// các router được sử dụng để điều hướng.

router.use("/admin",require(__dirname+"/admin.js"));
// tham so thu nhat la ten tren trinh duyet web
// tham so thu hai la thu muc tuyet doi trong server

router.use("/blog",require(__dirname+"/blog.js"));

router.get("/",function(req,res){
  res.json({'message':'This is home page'});
  //res.render('test');
})
module.exports=router;