var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
    test_id: {
        type: Number
    },
    type: {
        type: String
    }
});

module.exports = mongoose.model('Test', TestSchema);