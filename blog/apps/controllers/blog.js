var express=require('express');
var router=express.Router();
var post_md=require("../models/post");
// dinh nghi phuong thuc get
router.get("/",function(req,res){
    var data=post_md.getAllPosts();
    data.then(function(posts){
        res.render("blog/index",{data:posts});
    }).catch(function(err){
        res.render("blog/index",{data:{}});
    })
    
});

router.get("/post/:id",function(req,res){
    var id=req.params.id;
    var data=post_md.getPostByID(id);
    data.then(function(post){
        res.render("blog/post",{data:post});
    }).catch(function(err){
        res.render("blog/post",{data:{}});
    })
})

module.exports=router;