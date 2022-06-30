import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx'
import WordList from './components/WordList.jsx';
import axios from 'axios';
import Word from './components/Word.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []

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

  render() {
    return (
    <div>
      <h1>My Words</h1>
      <br></br>
      <Add onAdd={this.add.bind(this)}/>

      <WordList words={this.state.words} onDelete={this.onDelete.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

