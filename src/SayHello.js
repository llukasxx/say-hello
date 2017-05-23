import React, { Component } from 'react';
import Hello from './Hello';

class SayHello extends Component {
  render() {
    return (
      <div>
        Say hello to: <input />
        <br />
        <Hello />
      </div>
    );
  }
}

export default SayHello;
