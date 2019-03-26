var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.json({"message": "This is Admin Page"});
})

router.get("/signup", function(req, res){
    res.render("signup", {data: {}}); // can push data for form.
});

router.post("/signup", function(req, res){
    var user = req.body;

    if( user.email.trim().lenght == 0){
        res.render("signup", {data: {error: "Email is required!!!"}});
    }

    if(user.passwd != user.repasswd && user.passwd.trim().lenght != 0){
        res.render("signup", {data: {error: "Password is not match!!!"}});
    }

    // insert to DB
});

module.exports = router;