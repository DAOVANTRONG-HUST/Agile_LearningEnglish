const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User'); 
const auth = require('../api/middleware/checkAuth');
var url = "mongodb://127.0.0.1:27017";
var mongoClient = require('mongodb').MongoClient;
router.all('*', auth);

router.get('/', (req, res, next) => {
    User.findById(req.session.user._id, (err, _user) => 
    {   
        if(err)
        res.status(200).json({
            error: err
        })
        else 
        res.render('home', { data: _user });
    })
})

router.get('/listTheme/:id', (req, res, next) => {
    var theme = req.params.id;
    var uid = req.session.user._id ; 
    // truy cập database để tìm chủ đề 
    
    var check = [];
    // res.status(200).json({ code: "aksjhfakjshfkjahsfkha", theme: theme, uid: uid });
    mongoClient.connect(url, (err, db) => {
        // if (err) throw err;
        if (err) {
            console.log(err);
            res.status(200).json({ code: "aksjhfakjshfkjahsfkha", theme: theme, uid: uid, error: err  });
        }
        var dbo = db.db('englishWebsite');

        var element = { chude: theme };
        dbo.collection('words').findOne(element, function (err, re) {
            if (!re) {
                console.log("no exist");
            }
            if (err) throw err;
            re.word.forEach(e => {
                //console.log(e);
                if (e.userlist.indexOf(uid) > -1) {
                    check.push(1);
                } else {
                    check.push(0);
                }
            });
            console.log(check);
            // tìm được chủ đề và trả về dữ liệu tìm được trong database
            res.render('listWord', { data: re, check: check });
            db.close();
        })
    })
})

router.get("/learned", function (req, res) {
    // truy cập database để tìm chủ đề 

    mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db('englishWebsite');
        dbo.collection('words').find({}).toArray(function (err, re) {
            if (!re) {
                console.log("no exist");
            }
            if (err) throw err;
            // tìm được chủ đề và trả về dữ liệu tìm được trong database
            res.render('learned_word', { data: re, username: req.session.user._id });
            db.close();
        })
    })
})

// xử lí khi nhấn vào forget or remember
router.post("/check", (req, res) => {
    // lấy chủ để và từ mà client gửi lên
    var theme = req.body.theme;
    var word = req.body.word;
    var user = req.body.user;
    theme = theme.trim();
    //truy cập database và tim từ nhận được từ client
    mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db('englishWebsite');
        var element = { chude: theme };
        console.log(element);
        dbo.collection('words').findOne(element, function (err, resul) {
            if (err) throw err;
            var result = resul;
            for (var i = 0; i < result.word.length; i++) {
                // tìm từ , tìm thấy thì dừng vòng lặp
                if (result.word[i].name == word) {
                    if (result.word[i].userlist.indexOf(user) > -1) {
                        //Xóa user trong mảng
                        var array = result.word[i].userlist;
                        array.splice(result.word[i].userlist.indexOf(user), 1);
                        result.word[i].userlist = array;
                        var update = { $set: { word: result.word } }
                        dbo.collection("words").updateOne({ chude: theme }, update, function (err, res) {
                            if (err) throw err;
                            console.log(array);
                            db.close();
                        });
                    } else {
                        //Thêm user trong mảng
                        var array = result.word[i].userlist;
                        array.push(user);
                        result.word[i].userlist = array;
                        var update = { $set: { word: result.word } }
                        dbo.collection("words").updateOne({ chude: theme }, update, function (err, res) {
                            if (err) throw err;
                            console.log(array);
                            db.close();
                        });
                    }
                    break;
                }
            }
            // gửi giao diện kèm theo dữ liệu gửi về
            res.render("listWord", { data: result, check: 2 });
            db.close();
        })
    })
})

module.exports = router;