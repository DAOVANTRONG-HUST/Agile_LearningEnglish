var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
<<<<<<< HEAD
var dbpath = require('../config/database');
=======
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484

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
<<<<<<< HEAD

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(dbpath.database, { useNewUrlParser: true }, (err, db) => {
    if (err)
        console.log('Lỗi kết nối database !');
        

}); 

=======
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
module.exports = mongoose.model('Exam', ExamSchema);