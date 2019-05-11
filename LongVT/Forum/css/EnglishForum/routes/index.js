var express = require('express');
var router = express.Router();
var contactModel = require('../model/contact.js');



/* GET home page. */
router.get('/', function(req, res, next) {
    contactModel.find({}, function(err, dulieu) {
        // console.log(dulieu);
        res.render('index', { title: 'Forum', data: dulieu });
    });

});

/* GET Topic page. */
router.get('/topic', function(req, res, next) {
    res.render('topic', { title: 'Express' });
});

/* GET Post page. */
router.get('/post', function(req, res, next) {
    res.render('post', { title: 'Express' });
});

/* GET Post page. */
router.post('/post', function(req, res, next) {
    var dulieu01 = req.body;

    var now = new Date();
    console.log(now.getTime());

    // contactModel.findByIdAndUpdate({ _id: id }, dulieu01, function(err, data) {
    res.redirect('/');
    // });
});

module.exports = router;