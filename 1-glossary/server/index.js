require("dotenv").config();
const express = require("express");
const path = require("path");
const {getWord} = require('../helper/wordsHelper.js');
const {save, findWords, deleteWord} = require('../server/db.js');
const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());
/****
 *
 *
 * Other routes here....
 *
 *
 */

 app.post('/glossary', function (req, res) {
 // console.log(req.body);



  let word = req.body.word;
  getWord(word, (err, words) =>{
    if (err) {
      res.sendStatus(500);
      console.log(err);
    } else {
      save(words);
      res.end();

    }
  });

});

app.get('/glossary' , function (req, res) {

    findWords((words) => {

      res.send(words);
    });
});

app.delete('/glossary', function(req, res) {
  console.log('req:', req.body.currWord);
  let wordId = req.body.currWord._id;
  console.log(wordId);
  deleteWord({_id: wordId});

  res.end();
  })




app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
