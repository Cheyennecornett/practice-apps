import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx'
import WordList from './components/WordList.jsx';
import axios from 'axios';
import Word from './components/Word.jsx'
import MyAdd from './components/MyAdd.jsx'
import MyWordList from './components/MyWordList.jsx';
import MyWord from './components/MyWord.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      myWords: [{word:'test', def: 'a hard thing'}, {word: 'cat', def: 'a cute thing'}]

    }

  }

  componentDidMount() {
    this.getWords();
  }

  add (term) {
    console.log(term);
    axios
    .post( '/glossary', { word: term })
    .then(() => {
      return this.getWords();
    })
    .catch(err => {
      console.log(err);
    });
  }

  getWords () {
    console.log('got words')

    return axios.get('/glossary').then(({ data }) => {
      this.setState({
        words: data

      });
    });
  }

  onDelete (word) {
    var currWord = word;
    console.log('deleting word:', word._id)
    console.log(this.state.words.indexOf(word));
    axios.delete('/glossary', {data: {currWord}}).then(() => {
     return this.getWords();
     console.log('now inside then function after axios.delete');
    }).catch(err => {
      console.log('err in delete axios request:', err)
    })
  }

  myAdd(newWord) {
    console.log('in myAdd:', newWord);
    var newData = this.state.myWords.concat(newWord);
   // this.state.myWords.push(newWord);
    this.setState({

      myWords: newData
    // axios
    // .post( '/glossary', newWord)
    // .then(() => {
    //   return this.getWords();
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    });
   // console.log(def);
  }



  render() {
    return (
    <div>
      <h1>Real Words</h1>
      <br></br>
      <Add onAdd={this.add.bind(this)}/>
       <br></br>
      <WordList words={this.state.words} onDelete={this.onDelete.bind(this)}/>
       <br></br>
      <h1>My Words</h1>
      <br></br>
      <MyAdd addOn={this.myAdd.bind(this)}/>
      <MyWordList words={this.state.myWords} onDelete={this.onDelete.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

