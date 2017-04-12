import React from 'react';
import { Button } from 'antd';
import {Motion, spring} from 'react-motion';
import styles from './MotionCont.less';

export default class MotionDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMove: false
    };
  }
  handleMouseDown = () => {
    this.setState({isMove: !this.state.isMove});
  }
  render() {
    return (
      <div className={styles.boxwrap}>
        <div>
          <Button type="primary" onMouseDown={this.handleMouseDown}>Toggle</Button>

          <Motion defaultStyle={{x: 0}} style={{x: spring(this.state.isMove ? 550 : 0)}}>
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
      </div>
    );
  }
}
