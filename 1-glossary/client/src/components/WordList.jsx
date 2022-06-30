import React from 'react';
import Word from './Word.jsx';

const WordList = ({words, onDelete}) => (
  <div>
    <h4>Dictionary Words List </h4>
   <br></br>



   {words.map(word => <Word word={word} onDelete={() => onDelete(word)}/>)}
   <br></br>
  </div>
)

export default WordList;