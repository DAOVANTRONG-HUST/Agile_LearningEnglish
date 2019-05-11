var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
<<<<<<< HEAD
    test_id: {
        type: Number
    },
    type: {
        type: String
=======
    _id: mongoose.Schema.Types.ObjectId, 
    type: {
        type: String
    },
    name: {
        type: String
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
    }
});

module.exports = mongoose.model('Test', TestSchema);