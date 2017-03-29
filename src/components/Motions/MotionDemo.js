import React from 'react';
import { Button, Row, Col } from 'antd';
import {Motion, spring} from 'react-motion';
import styles from './MotionCont.less';

export default class MotionDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div className={styles.boxwrap}>
        <Row>
          <Col span={4}><span>Motion:</span></Col>
          <Col span={20}>
            <div>
              <Button type="primary" onMouseDown={this.handleMouseDown}>Toggle</Button>

              <Motion style={{x: spring(this.state.open ? 550 : 0)}}>
                {({x}) =>
                  <div className={styles.demo0}>
                    <div className={styles.demo0Block} style={{
                      WebkitTransform: `translate3d(${x}px, 0, 0)`,
                      transform: `translate3d(${x}px, 0, 0)`,
                    }} ></div>
                  </div>
                }
              </Motion>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
