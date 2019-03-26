var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.json({"message": "This is Admin Page"});
})

router.get("/t", function(req, res){
    res.render("signup.ejs");
})
module.exports = router;