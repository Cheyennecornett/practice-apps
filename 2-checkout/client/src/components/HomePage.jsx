import React from 'react'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkedOut: false
    }
  }

  startCheckout() {
    console.log('starting checkout');
    this.props.start();
  }


  render() {
    var checkedOut = this.state.checkedOut
    if (!checkedOut) {
    return (
        <div>
          <h1>Shopping Cart</h1>
          <br></br>
            <button onClick={this.startCheckout.bind(this)}> Check Out </button>
        </div>


    )
    }
  }
}

export default HomePage