import React from 'react';
import Word from './Word.jsx';

const WordList = ({words, onDelete}) => (
  <div>
    <h4> Word List </h4>
    There are {words.length} words saved.


   {words.map(word => <Word word={word} onDelete={() => onDelete(word)}/>)}
  </div>
)

export default WordList;