// import React, {PropTypes} from 'react';
import React from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router';
import styles from './MotionCont.less';
import API from './API.js';
import MotionDemo from './MotionDemo.js';
import StaggeredDemo from './StaggeredDemo.js';
// import TransitionDemo from './TransitionDemo.js';

export default class MotionCont extends React.Component {
  // static propTypes = {
  //   todo: PropTypes.object,
  //   todoBoundAC: PropTypes.object,
  // };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.motionWrap}>
        <h1>react-motion</h1>
        <h2>安装:</h2>
        <code>npm install --save react-motion</code>
        <API />
        <div>
          <h2>demo: </h2>
          <MotionDemo />
          <StaggeredDemo />
          {/* <TransitionDemo /> */}
          <div style={{width: '800px'}}>
            <Row>
              <Col span={4}>TransitionMotion</Col>
              <Col span={20}><Link to="/transition">TransitionMotion demo</Link></Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
