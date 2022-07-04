import React from 'react';
import axios from 'axios'
//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      form2Complete: false
    }
  }

  onLine1Change(e) {
    this.setState({
      line1: e.target.value
    });
  }

  onLine2Change(e) {
    this.setState({
      line2: e.target.value
    });
  }

  onCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  onStateChange(e) {
    this.setState({
      state: e.target.value
    });
  }

  onZipChange(e) {
    this.setState({
      zip: e.target.value
    });
  }

  onPhoneChange(e) {
    this.setState({
      phone: e.target.value
    });
  }

  on2Next(name, email, password) {
    this.setState({
      form2Complete: true
    });

    var address = this.state.line1 + this.state.line2 + this.state.city + this.state.state + this.state.zip;

    var form2Obj = {
      form: 'form2',
      address: address,
      phone: this.state.phone
    }

    axios
    .post( '/checkout', form2Obj)
    .then(() => {
      console.log('inside then after axios form2 post')
    })
    .catch(err => {
      console.log(err);
    });


    this.props.open3();
  }


  render() {
    return (<div>
      <form>
        Line 1: <input value={this.state.line1} onChange={this.onLine1Change.bind(this)} />
        {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
        <br></br>
        <br></br>
        Line 2: <input value={this.state.line2} onChange={this.onLine2Change.bind(this)} />
        {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
        <br></br>
        <br></br>
        City: <input value={this.state.city} onChange={this.onCityChange.bind(this)} />
        <br></br>
        <br></br>
        State:  <input value={this.state.state} onChange={this.onStateChange.bind(this)} />
        <br></br>
        <br></br>
        Zip: <input value={this.state.zip} onChange={this.onZipChange.bind(this)} />
        <br></br>
        <br></br>
        Phone Number: <input value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
        {/* <button onSubmit={this.form2Add.bind(this)}> Submit </button> */}
      </form>
      <br></br>
      <br></br>

      <button onClick={this.on2Next.bind(this)}> Next </button>
    </div>)
  }
}

export default Form2;


