import React from 'react';


const MyWord = ({word, onDelete}) => (
  <div>

    <div>{word.word} {word.def}</div>
    <button onClick={onDelete}> delete </button>
    <button onClick={console.log('edit button pressed')}> edit </button>
  </div>
);

export default MyWord;