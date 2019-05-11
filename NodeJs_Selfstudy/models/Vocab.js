var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VocabSchema = new Schema({
<<<<<<< HEAD
    vocab_id: {
        type: Number
    },
=======
    _id: mongoose.Schema.Types.ObjectId,
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
    word: {
      type: String  
    },
    meaning: { 
        type: String 
    },
    examples: { 
        type: String
    },
<<<<<<< HEAD
    synonyms: [
        {
            vocab_id: Number
        }
    ]
=======
    synonyms: 
        {
            type: String
        }
    }, 
    {
        collection:"vocab"
    
>>>>>>> 216ba34625163f201cf656331af5aa7e92d5a484
});
module.exports = mongoose.model('Vocab', VocabSchema);