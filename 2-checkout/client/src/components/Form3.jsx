//F3 collects credit card #, expiry date, CVV, and billing zip code.

import axios from 'axios'
import React from 'react';

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      creditCardNumber: '',
      expiryDate: '',
      cvv: '',
      billingZip: '',
      form3Complete: false
    }
  }

  onCreditCardChange(e) {
    this.setState({
      creditCardNumber: e.target.value
    });
  }
  onExpiryChange(e) {
    this.setState({
      expiryDate: e.target.value
    });
  }

  onCvvChange(e) {
    this.setState({
      cvv: e.target.value
    });
  }

  onBillingZipChange(e) {
    this.setState({
      billingZip: e.target.value
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
    var form3Obj = {
      form: 'form3',
      creditcard: this.state.creditCardNumber,
      expiry: this.state.expiryDate,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
  }
  axios
    .post( '/checkout', form3Obj)
    .then(() => {
      console.log('inside then after axios form3 post')
    })
    .catch(err => {
      console.log(err);
    });

    console.log('next clicked', form3Obj)
    this.props.finish();
  }


render() {
  return (<div>
    <form>
      Credit Card Number: <input value={this.state.creditCardNumber} onChange={this.onCreditCardChange.bind(this)} />
      {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
      <br></br>
      <br></br>
      Expiration Date: <input value={this.state.expiryDate} onChange={this.onExpiryChange.bind(this)} />
      {/* <button onClick={this.formAdd.bind(this)}> Submit </button> */}
      <br></br>
      <br></br>
      CVV: <input value={this.state.password} onChange={this.onCvvChange.bind(this)} />
      {/* <button onClick={this.form1Add.bind(this)}> Submit </button> */}
      <br></br>
      <br></br>
      Billing Zip Code: <input value={this.state.billingZip} onChange={this.onBillingZipChange.bind(this)} />
    </form>
    <br></br>
    <br></br>

    <button onClick={this.onNext.bind(this)}> Purchase </button>
  </div>)
}
}

export default Form3;