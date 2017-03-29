import React from 'react';
import { Row, Col } from 'antd';
import {StaggeredMotion, spring, presets} from 'react-motion';
import __range from 'lodash/range';
import Styles from './MotionCont.less';

export default class StaggeredDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrag: false,
      pos: {x: 0, y: 0},
      start: {x: 0, y: 0},
    };
  }
  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  getStyles = (prevStyles) => {
    const newStyles = prevStyles.map((item, idx) => {
      return idx === 0 ? this.state.pos : {x: spring(prevStyles[idx - 1].x - 55, presets.gentle), y: spring(prevStyles[idx - 1].y, presets.gentle)};
    });
    return newStyles;
  }
  handleMouseDown = ({pageX: x, pageY: y}) => {
    this.setState({
      isDrag: true,
      start: this.state.start.x === 0 ? {x: x, y: y} : this.state.start
    });
  }
  handleMouseUp = () => {
    this.setState({
      isDrag: false
    });
  }
  handleMouseMove = (event) => {
    if (this.state.isDrag) {
      this.setState({
        pos: {x: event.pageX - this.state.start.x, y: event.pageY - this.state.start.y}
      });
    }
  }

  render() {
    return (
      <div className={Styles.boxwrap}>
        <Row>
          <Col span={4}><span>StaggeredMotion:</span></Col>
          <Col span={20}>
            <StaggeredMotion defaultStyles={__range(3).map(() => ({x: 0, y: 0}))} styles={this.getStyles}>
              {styles => (
                <div className={Styles.staggerdbox} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}>
                  {styles.map((item, idx) => {
                    return (<div className={Styles.staggerCont} key={idx} style={{transform: `translate3d(${item.x}px, ${item.y}px, 0)`, zIndex: styles.length - 1, }} onMouseDown={this.handleMouseDown}>{idx}</div>);
                  })}
                </div>
              )}
            </StaggeredMotion>
          </Col>
        </Row>
      </div>
    );
  }
}
