var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
<<<<<<< HEAD
var dbpath = require('../config/database');


var UserSchema = new Schema({
    user_id: {
        type: Number,
        unique: true,
        required: true
    },
    id: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        default: "Unknown",
        unique: true,
        required: true
    },
    phonenumber: {
        type: String,
        unique: true,
        required: true
=======


var UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    firstname: {
        type: String, 
        unique: true
    },
    lastname: {
        type: String,
        unique: true
    },
    phonenumber: {
        type: String,
        unique: true
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
    },
    password: {
        type: String,
        required: true
    },
    workplace: {
        type: String,
        required: true
    },
    reputation: {
        type: Number,
        default : 0 
    },
    last_login: {
        type: Date,
        default: Date.now()
    },
<<<<<<< HEAD
    is_superuser: {
        type: false
    },
    is_active: {
        type: false,
=======
    is_admin: {
        type: Boolean, 
        default: false
    },
    is_active: {
        type: Boolean,
        default: true
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
    },
    date_joined: {
        type: Date,
        default: Date.now()
    },
    list_vocab: [
        {
            vocab_id: Number 
        }
    ],
<<<<<<< HEAD
    
});

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(dbpath.database, { useNewUrlParser: true }, (err, db) => {
    if(err)
        console.log('Lỗi kết nối database !'); 
    else {
        console.log('Kết nối thành công !');
        db.db().collection('users').insertOne({
            user_id: 2,
            id: 'username2',
            email: 'email2@gmail.com',
            username: 'Thor2',
            phonenumber: '09112312312',
            password: 'password',
            workplace: 'HaiPhong',
            reputation: 10000,
            last_login: Date.now(),
            is_superuser: false,
            is_active: true,
            date_joined: Date.now(),
            list_vocab: { 'vocab': 1 }
        }, (err, data) => {
                if (err) {
                    console.log('Lỗi chèn data !');
                    throw (err);
                }
                else {
                    console.log('insert successfully !');
                }
            });
        db.close();
    }
    
}); 
=======
}, {
    collection:"user"
}
); 
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484

module.exports = mongoose.model('User', UserSchema);