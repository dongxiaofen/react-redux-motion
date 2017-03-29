import React, { Component } from 'react';
import { TransitionDemo } from 'components';

export default class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <TransitionDemo />
      </div>
    );
  }
}
