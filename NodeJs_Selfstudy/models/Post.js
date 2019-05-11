var mongoose = require('mongoose');
<<<<<<< HEAD
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    post_id: {
        type: Number
    },
    views: {
        type: Number
    },
    author_id: {
        type: Number
=======
var Answer = require('./Answer');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    views: {
        type: Number,
        default: 0
    },
    author_id: {
        type: String
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
    },
    time: {
        type: Date
    },
    reputations: {
<<<<<<< HEAD
        type: Number
    },
    content: {
        type: String
    }
=======
        type: Number,
        default: 0, 
    },
    title: String,
    content: {
        type: String
    },
    answers:  [
        {}
    ],
}, {
    collection : "post"
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
});
module.exports = mongoose.model('Post', PostSchema);