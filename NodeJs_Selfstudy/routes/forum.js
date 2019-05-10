const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Post = require('../models/Post');
const Answer = require('../models/Answer');
const User = require('../models/User');
var MongoClient = require('mongodb').MongoClient;


const auth = require('../api/middleware/checkAuth');
const perm = require('../api/middleware/checkPerm');

router.all('*', auth); 

router.get('/', (req, res, next ) => { 
    res.status(200).json({
        code: "ok man "
    })
    // Post.find({}, (err, list_post) => {
    //     id = req.session.user._id ; 
    //     User.findById(id, (err, _user) => {
    //         res.render('/forum', { list_post: list_post, data: _user }); 
    //     })
    // })
})



module.exports = router; 