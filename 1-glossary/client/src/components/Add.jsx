import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
     // def: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value

    });
  }

  add() {
    this.props.onAdd(this.state.term);
  }

  render() {
    return (<div>

      Enter a word: <input value={this.state.term} onChange={this.onChange.bind(this)}/>
      <button onClick={this.add.bind(this)}> Add Words </button>
    </div>)
  }
}

export default Add;