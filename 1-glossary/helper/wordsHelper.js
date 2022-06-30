const axios = require('axios');


let getWord = (word, cb) => {

  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    headers: {
      'User-Agent': 'request',
      //'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
  .then(response => {
   // console.log('API word INFO:', response.data);
    var words = [];

    response.data.forEach(word => {

      words.push({
       word: word.word,
       definition: word.meanings[0].definitions[0].definition
      });
    });
   return words;
  }).then((words) => {
   // console.log('helper axios get request:', words);
    cb(null, words)
  }
  ).catch(function(err) {
    console.log('err in axios helper get request', err);
  })
};


module.exports.getWord = getWord;