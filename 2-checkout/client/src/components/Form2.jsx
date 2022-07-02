import React from 'react';
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

  onLine1Change (e) {
    this.setState({
      line1: e.target.value
    });
  }

  onLine2Change (e) {
    this.setState({
      line2: e.target.value
    });
  }

  onCityChange (e) {
   this.setState({
      city: e.target.value
    });
  }

  onStateChange (e) {
     this.setState({
       state: e.target.value
     });
   }

   onZipChange (e) {
    this.setState({
      zip: e.target.value
    });
  }

  onPhoneChange (e) {
    this.setState({
      zip: e.target.value
    });
  }

  on2Next(name, email, password) {
    this.setState({
      form2Complete: true
    });

    var form2Obj = {
      line1: this.state.line1,
      line2: this.state.line2,
       city: this.state.city,
       state: this.state.state,
       zip: this.state.zip,
       phone: this.state.phone
    }
   console.log(form2Obj);
   console.log(this.state.form2Complete);
   this.props.open3();
  }


  render() {
    return (<div>
     <form>
     Line 1: <input value={this.state.line1} onChange={this.onLine1Change.bind(this)}/>
      {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
      <br></br>
      <br></br>
      Line 2: <input value={this.state.line2} onChange={this.onLine2Change.bind(this)}/>
      {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
      <br></br>
      <br></br>
      City: <input value={this.state.city} onChange={this.onCityChange.bind(this)}/>
      <br></br>
      <br></br>
      State:  <input value={this.state.state} onChange={this.onStateChange.bind(this)}/>
      <br></br>
      <br></br>
      Zip: <input value={this.state.zip} onChange={this.onZipChange.bind(this)}/>
      <br></br>
      <br></br>
      Phone Number: <input value={this.state.phone} onChange={this.onPhoneChange.bind(this)}/>
      {/* <button onSubmit={this.form2Add.bind(this)}> Submit </button> */}
     </form>
     <br></br>
     <br></br>

     <button onClick={this.on2Next.bind(this)}> Next </button>
    </div>)
  }
}

export default Form2;


