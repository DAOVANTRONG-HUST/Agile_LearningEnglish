var express=require('express');
var router=express.Router();
// dinh nghi phuong thuc get
router.get("/",function(req,res){
    res.json({message:"this is blog page"})
})

module.exports=router;