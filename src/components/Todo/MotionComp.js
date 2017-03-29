import React, {PropTypes} from 'react';

import {Motion, spring} from 'react-motion';

export default class MotionComp extends React.Component {
  static propTypes = {
    todo: PropTypes.object,
    todoBoundAC: PropTypes.object,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{padding: '10px'}}>
        Motion:
        <Motion defaultStyle={{x: 0}} style={{x: spring(100)}}>
          {value => <div>{value.x}</div>}
        </Motion>
      </div>
    );
  }
}
