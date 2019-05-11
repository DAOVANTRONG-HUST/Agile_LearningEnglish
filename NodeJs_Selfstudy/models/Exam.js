var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var dbpath = require('../config/database');

var ExamSchema = new Schema({
    exam_id: {
        type: Number
    },
    examinee_id: {
        type: Number
    },
    time: {
        type: Date
    },
    reading: {
        type: Number
    },
    listening: {
        type: Number
    },
    speaking: {
        type: Number
    },
    writing: {
        type: Number
    },
    test_list: [
        {
            test_id: Number
        }
    ]
});

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(dbpath.database, { useNewUrlParser: true }, (err, db) => {
    if (err)
        console.log('Lỗi kết nối database !');
        

}); 

module.exports = mongoose.model('Exam', ExamSchema);