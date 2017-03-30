import React, { Component } from 'react';
import { TweenMaxDemo } from 'components';

export default class TweenMax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{width: '1200px', margin: '0 auto'}}>
        <TweenMaxDemo />
      </div>
    );
  }
}
