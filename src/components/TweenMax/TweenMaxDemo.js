import React, { Component } from 'react';

import Styles from './TweenMaxDemo.less';
import { Button } from 'antd';

export default class TweenMaxDemo extends Component {
  constructor(props) {
    super(props);
  }
  handleTo = () => {
    const toBox = document.getElementById('toBox');
    window.TweenMax.to(toBox, 1, {x: 350, delay: 1});
  }
  handleFrom = () => {
    const fromBox = document.getElementById('fromBox');
    window.TweenMax.from(fromBox, 1, {x: 0, scale: 0, opacity: 0});
  }
  render() {
    return (
      <div style={{width: '1200px', margin: '0 auto'}}>
        <h2>TweenMaxDemo：</h2>
        <div className={Styles.demoTo}>
          <Button type="primary" onClick={this.handleTo}>TweenMax.to</Button>
          <div className={Styles.demoBox + ' ' + Styles.toBox} id="toBox"></div>
        </div>
        <div className={Styles.demoTo}>
          <Button type="primary" onClick={this.handleFrom}>TweenMax.from</Button>
          <div className={Styles.demoBox + ' ' + Styles.fromBox} id="fromBox"></div>
        </div>
      </div>
    );
  }
}
