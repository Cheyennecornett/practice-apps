const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/glossary'); //2707?
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
let wordSchema = mongoose.Schema({
 word: String,
 definition: {type: String, unique: true }

});

let Word = mongoose.model('Word', wordSchema);

let save = (words) => {
  return new Promise((resolve, reject) => {
    var count = 0;
    words.map(word => {
     // console.log(word)
      var wordToSave = new Word({

          word: word.word,
          definition: word.definition
          // definition: String

         })


      wordToSave.save((err) => {
        count++;
        if(count === words.length) {
          resolve('success');
        }
      });
    })
    });
  }




var findWords = function(cb) {
  Word.find(function(err, words) {
    if (err) {
      console.log('Err when finding words', err)
    } else {
      cb(words)
    }
  })
}

var deleteWord = function (itemToDelete) {
  console.log('inside delete word function in db:', itemToDelete);
  Word.deleteOne(itemToDelete, function(err){
    if (err) {
      console.log('err inside deleteWord func:', err)
    } else {
       console.log('success in deleteWord func');
    }
  })
}

module.exports.save = save;
module.exports.findWords = findWords;
module.exports.deleteWord = deleteWord;
// 3. Export the models
// 4. Import the models into any modules that need them
