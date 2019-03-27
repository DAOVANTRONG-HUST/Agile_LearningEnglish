var express = require("express");
var router = express.Router();
var user_md = require("../model/user");
router.get("/", function(req, res){
    res.json({"message": "This is Admin Page"});
})

router.get("/signup", function(req, res){
    res.render("signup", {data: {}}); // can push data for form.
});

router.post("/signup", function(req, res){
    var user = req.body;

    if( user.email.trim().length == 0){
        res.render("signup", {data: {error: "Email is required!!!"}});
    }

    if(user.passwd != user.repasswd && user.passwd.trim().length != 0){
        res.render("signup", {data: {error: "Password is not match!!!"}});
    }
    // insert to DB;

    user = {
        email: user.email,
        password: user.passwd,
        first_name: user.first_name,
        last_name: user.last_name
    };
     
    var result = user_md.addUser(user);
    console.log(result);

    if(!result){
        res.render("signup", {data: {error: "Could not insert user data to DB !!! "}});
    }
    else
    {
        res.json({message: "Insert success"});
    }
});

module.exports = router;