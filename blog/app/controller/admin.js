var express = require("express");
var router = express.Router();
var user_md = require("../model/user");
var helper = require("../helpers/helper");

router.get("/", function (req, res) {
    res.json({ "message": "This is Admin Page" });
})

router.get("/signup", function (req, res) {
    res.render("signup", { data: {} }); // can push data for form.
});

router.post("/signup", function (req, res) {
    var user = req.body;

    if (user.email.trim().length == 0) {
        res.render("signup", { data: { error: "Email is required!!!" } });
    }

    if (user.passwd != user.repasswd && user.passwd.trim().length != 0) {
        res.render("signup", { data: { error: "Password is not match!!!" } });
    }

    // insert to DB;
    var password = helper.hash_password(user.passwd);

    user = {
        email: user.email,
        password: user.passwd,
        first_name: user.first_name,
        last_name: user.last_name
    };

    //console.log(user.last_name);
    var result = user_md.addUser(user);


    result
        .then(function (test) {
            res.redirect("/admin/signin");
            //console.log(test);
        })
        .catch(function () {
            res.render("signup", { data: { error: "error" } });
        })


    // if(!result){
    //     res.render("signup", {data: {error: "Could not insert user data to DB !!! "}});
    // }
    // else
    // {
    //     res.json({message: "Insert success"});
    // }
});

router.get("/signin", function (req, res) {
    res.render("signin", { data: {} });
})


// router.post("/signin", function(req, res){
//     var params = req.body;
//     if(params.email.trim().length == 0){
//         res.render("signin", {data: {error: "Please enter an email"}});
//     }
//     else
//     {
//         var data = user_md.getUserByEmail(params.email)
//         .then(function(users){
//             var user = user[0];

//             var status = helper.compare_password(params.password, user.password);

//             if(!status){
//                 res.render("signin", {data: {error: "Password Wrong !!!"}})
//             }
//             else
//             {
//                 res.redirect("/admin");
//             }
//         })
//         .catch(function(err){
//             res.render("signin", {data: {error: "User not exits!!!"}})
//         });
//     }
// });

router.post("/signin", function (req, res) {
    var params = req.body;
    if (params.email.trim().length == 0) {
        res.render("signin", { data: { error: "Please enter an email" } });
    }
    else {
        var data = user_md.getUserByEmail(params.email)
        if (data) {
            data.then(function (users) {
                var user = users[0];
                console.log(user.password);
                console.log(params.password);
                //console.log(helper.hash_password(params.password));
                if(params.password === user.password){
                    res.redirect("/admin/");
                    req.session.user = user; // đẩy thông tin user vào trong session
                    console.log(req.session.user);
                }
                else{
                    res.render("signin", { data: { error: "Pasword Wrong" } });
                }
                // var status = helper.compare_password(params.password, user.password);
                // //var status = helper.compare(params.password, user.password);
                // if (!status) {
                //     res.render("signin", { data: { error: "Pasword Wrong" } })
                // }
                // else {
                //     res.redirect("/admin/")
                // }
            })
            .catch(function(){
                res.render("signin", { data: { error: "User is not exits!" } });
            })
        }
    }
});


module.exports = router;