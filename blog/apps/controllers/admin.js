var express = require('express');
var router = express.Router();
var user_md = require("../models/user")
var post_md = require("../models/post")


var helper = require("../helpers/helper")
router.get("/", function (req, res) {
    // res.json({message:"this is admin page"})
    var data = post_md.getAllPosts();

    data.then(function (posts) {

        var data = {
            posts: posts,
            error: false
        }

        res.render('admin/dashboard', { data: data });

    }).catch(function (err) {
        res.render('admin/dashboard', { data: { error: "Get post data error" } });

    })

})


// định tuyến cho sign up
router.get("/signup", function (req, res) {
    res.render('signup', { data: {} });
})


router.get("/signin", function (req, res) {
    res.render('signin', { data: {} });
})



router.post("/signup", function (req, res) {
    var user = req.body;

    if (user.email.trim().length == 0) {
        res.render('signup', { data: { error: "Email is require" } });
    }
    if (user.passwd != user.repasswd && user.passwd.trim().length != 0) {
        res.render('signup', { data: { error: "Password not match" } });
    }
  
    user = {
        email: user.email,
        //password:password,
        password: user.passwd,
        first_name: user.firstname,
        last_name: user.lastname

    };
    var result = user_md.addUser(user);

    result.then(function (data) {
        // res.json({message:"Insert success"})
        //res.render("signin",{data:{}});
        res.redirect("/admin/signin");
    }).catch(function (err) {
        res.render('signup', { data: { error: "Could't insert user data to DB" } });
    })
})

router.post("/signin", function (req, res) {
    var params = req.body;

    if (params.email.trim().length == 0) {
        res.render("signin", { data: { error: "Please enter an email" } });
    } else {
        var data = user_md.getUserByEmail(params.email);
        console.log(data);
        if (data) {
            data.then(function (users) {
                console.log(users)
                var user = users[0];
                //  console.log(user.passwd);
                //var status=helper.compare_password(params.password,user.password);
                //if(!status)
                if (params.password === user.password) {
                    //res.render("signin",{data:{error:"Password is not correct"}});
                    req.session.user=user;
                    res.redirect("/admin/");
                } else {
                    // res.redirect("/admin/");
                    res.render("signin", { data: { error: "Password is not correct" } });
                }

            })

        } else {
            res.render("signin", { data: { error: "User is not exits!" } });
        }
    }
});

router.get("/post/new", function (req, res) {
    res.render("admin/post/new", { data: { error: false } });
})


router.post("/post/new", function (req, res) {
    var params = req.body;

    if (params.title.trim().length == 0) {
        var data = {
            error: "Please input Title"
        }
        res.render("admin/post/new", { data: data })

    } else {
        var now = new Date();

        params.created_at = now;
        params.updated_at = now;


        var data = post_md.addPost(params);
        data.then(function (result) {
            res.redirect("/admin");
        }).catch(function (err) {
            var data = {
                error: "Could not Insert post to db"
            }
            res.render("admin/post/new", { data: data })
        })

    }



})
router.get("/post/edit/:id",function(req,res){
    //:id la truyen du lieu vao bien id
    var params=req.params;
    var id=params.id;
        // req.params dung de lay ra du lieu do

    var data=post_md.getPostByID(id);
    if(data){
        data.then(function(posts){
            var post=posts[0];
            var data={
                post:post,
                error:false
            };
            res.render("admin/post/edit",{data:data});
        }).catch(function(err){
            var data={
                error:"Could not get Post by ID"
            }
            res.render("admin/post/edit",{data:data});
        })
    }else{
        var data={
            error:"Could not get Post by ID"
        }
        res.render("admin/post/edit",{data:data});
    }
     
})

router.put("/post/edit",function(req,res){
    var params=req.body;
    var data=post_md.updatePost(params);
    if(!data){
        res.json({status_code:500});
    }else{
        data.then(function(result){
            res.json({status_code:200});
        }).catch(function(err){
            res.json({status_code:500});
        })
    }
})

router.delete("/post/delete",function(req,res){
    var post_id=req.body.id;
    console.log(post_id);

    var data=post_md.deletePost(post_id);
    if(!data){
        res.json({status_code:500});
    }else{
        data.then(function(result){
            res.json({status_code:200});
        }).catch(function(err){
            res.json({status_code:500});
        })
    }

})

router.get("/posts",function(req,res){
    res.redirect("/admin");

})

router.get("/user",function(req,res){
    var data=user_md.getAllUsers();
    data.then(function(users){
       var data={
           users:users,
           error:false
       }
       res.render("admin/user",{data:data});

    }).catch(function(err){
        var data={
            error:"Could not get users"
        }
        res.render("admin/user",{data:data});
    })
})
module.exports = router;