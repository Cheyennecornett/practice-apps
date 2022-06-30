import React from 'react';


const Word = ({word, onDelete}) => (
  <div>

    <div>{word.word}:{word.definition}</div>
    <button onClick={onDelete}> delete </button>
  </div>
);

export default Word;