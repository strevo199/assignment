/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {


  constructor(props) {
    super(props);
  }
  
  state ={
    counter: 0

  }


   handleIncrement = () => {
    console.log(this.state.counter);
    this.setState({counter: this.state.counter +1})
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>{this.state.counter}</span></p>
        <button onClick={this.handleIncrement} id="mainButton">Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);