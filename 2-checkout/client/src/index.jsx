import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Form1 from './components/Form1.jsx'
import Form2 from './components/Form2.jsx'
import HomePage from './components/HomePage.jsx'




class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      HomePage: true,
      Form1: false,
      Form2: false,
      Form3: false
    }

  }

  openForm1() {

    this.setState({
      HomePage: false,
      Form1: true
    })
    //this.render();
    console.log('openForm1:', this.state)
  }

  openForm2() {

    this.setState({
      HomePage: false,
      Form1: false,
      Form2: true,
      Form3: false
    })
    //this.render();

  }

  openForm3() {
    this.setState({
    Form2: false,
    Form3: true
    })
    console.log('openForm3:',this.state)
  }

  checkedOut() {
    this.setState({
      HomePage: true,
      Form3: false
    })
    console.log('checkedOut:',this.state)

  }

  render() {
    if (this.state.HomePage === true) {
      return (<div>
        <HomePage start={this.openForm1.bind(this)} />
      </div>)
    }
      if (this.state.Form1 === true) {
        return (
          <div>
            <Form1 open2={this.openForm2.bind(this)}/>
          </div>
        )
       }
        if (this.state.Form2 === true) {
          return (<div>
            <Form2 open3={this.openForm3.bind(this)}/>
          </div>)
        }
       }



};
  //   return (
  //     <div>
  //     <p>Hello, World!</p>
  //     <p>
  //       <Form1/>
  //       {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
  //     </p>
  //   </div>
  //   )
  // }

ReactDOM.render(<App />, document.getElementById('app'));
// render(
//   <div>
//     <p>Hello, World!</p>
//     <p>
//       <Form1/>
//       <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
//     </p>
//   </div>,
//   document.getElementById("root")
// );
