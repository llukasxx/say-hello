import React, { Component } from 'react';
import Hello from './Hello';

class SayHello extends Component {
  state = {
    name: ''
  }
  handleNameInput(name) {
    this.setState({ name });
  }
  render() {
    return (
      <div>
        Say hello to:
        <input
          onChange={(e) => this.handleNameInput(e.target.value)}
          value={this.state.name}
        />
        <br />
        <Hello
          name={this.state.name}
        />
      </div>
    );
  }
}

export default SayHello;
