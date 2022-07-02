import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      name: '',
      email: '',
      password: '',
      form1Complete: false
    }
  }

  onNameChange (e) {
    this.setState({
      name: e.target.value
    });
  }
  onEmailChange (e) {
   this.setState({
      email: e.target.value
    });
  }

  onPasswordChange (e) {
     this.setState({
       password: e.target.value
     });
   }

  // form1Add(name, email, password) {
  //   // this.setState({
  //   //   form1Complete: true
  //   // });

  //   var form1Obj = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     password: this.state.password
  //   }
  //  console.log(form1Obj);
  //  console.log(this.state.form1Complete);
  //   //this.props.openForm2();
  // }

  onNext() {
    var form1Obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    console.log('next clicked', form1Obj)
    this.props.open2();
  }


  render() {
    return (<div>
     <form>
     Name: <input value={this.state.name} onChange={this.onNameChange.bind(this)}/>
      {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
      <br></br>
      <br></br>
      Email: <input value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
      {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
      <br></br>
      <br></br>
      Password: <input value={this.state.password} onChange={this.onPasswordChange.bind(this)}/>
      {/* <button onClick={this.form1Add.bind(this)}> Submit </button> */}
     </form>
     <br></br>
     <br></br>

     <button onClick={this.onNext.bind(this)}> Next </button>
    </div>)
  }
}

export default Form1;
