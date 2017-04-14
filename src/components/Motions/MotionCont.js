// import React, {PropTypes} from 'react';
import React from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router';
import styles from './MotionCont.less';
import API from './API.js';
// import MotionDemo from './MotionDemo.js';
// import StaggeredDemo from './StaggeredDemo.js';
// import TransitionDemo0 from './TransitionDemo_0.js';

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
          {/* <h2>demo: </h2>
          <Row>
            <Col span={4}> <div className={styles.titleLab}>Motion</div></Col>
            <Col span={20}><MotionDemo /></Col>
          </Row>
          <Row>
            <Col span={4}> <div className={styles.titleLab}>StaggeredMotion</div></Col>
            <Col span={20}><StaggeredDemo /></Col>
          </Row>
          <Row>
            <Col span={4}> <div className={styles.titleLab}>TransitionMotion</div></Col>
            <Col span={20}><TransitionDemo0 /></Col>
          </Row> */}
          <Row>
            <Col span={4}> <div className={styles.titleLab}>TransitionMotion</div></Col>
            <Col span={20}><div className={styles.titleLab}><Link to="/transition">TransitionMotion demo</Link></div></Col>
          </Row>
        </div>
      </div>
    );
  }
}
