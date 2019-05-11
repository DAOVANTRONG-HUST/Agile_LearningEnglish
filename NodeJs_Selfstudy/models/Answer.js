var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answer_id: {
        type: Number
    },
<<<<<<< HEAD
    post_id: { 
        type: Number
    },
    author_id: {   
        type: Number
=======
    author: {   
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
});
=======
        type: Number, 
        default: 0
    }, 
    content: {
        type: String
    }},{
        collection:"answer"
    }
);
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
module.exports = mongoose.model('Answer', AnswerSchema);