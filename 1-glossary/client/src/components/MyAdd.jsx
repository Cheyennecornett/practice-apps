import React from 'react';

class MyAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // myWords: [];
      term: '',
      def: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
      //def: e.target.value


    });
  }
  onChangeDef (e) {
   // console.log(e.target.value);
    this.setState({
      def: e.target.value
    });
  }

  defAdd() {

    var newWord = {
      word: this.state.term + ':',
      def: this.state.def
    }

    this.props.addOn(newWord);
  }
  // defAdd() {
  //   this.props.addDef(this.state.def);
  // }

  add() {

   // this.props.addOn(this.state.term);
   // this.props.addOn(this.state.def);
  }

  render() {
    return (<div>

      Enter a word: <input value={this.state.term} onChange={this.onChange.bind(this)}/>
      {/* <button onClick={this.add.bind(this)}> Add Words </button> */}
      <br></br>
      <br></br>
      Enter a definition: <input value={this.state.def} onChange={this.onChangeDef.bind(this)}/>
      <button onClick={this.defAdd.bind(this)}> Add word </button>
    </div>)
  }
}

export default MyAdd;