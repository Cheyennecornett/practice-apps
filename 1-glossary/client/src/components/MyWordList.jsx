import React from 'react';
import MyWord from './MyWord.jsx';

const MyWordList = ({words, onDelete}) => (
  <div>

   {words.map(word => <MyWord word={word} onDelete={() => onDelete(word)}/>)}
  </div>
)

export default MyWordList;