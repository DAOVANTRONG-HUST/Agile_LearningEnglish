var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VocabSchema = new Schema({
    vocab_id: {
        type: Number
    },
    word: {
      type: String  
    },
    meaning: { 
        type: String 
    },
    examples: { 
        type: String
    },
    synonyms: [
        {
            vocab_id: Number
        }
    ]
});
module.exports = mongoose.model('Vocab', VocabSchema);