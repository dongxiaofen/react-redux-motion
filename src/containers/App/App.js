import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div style={{width: '1200px', margin: '20px auto', fontSize: '14px'}}>
        {/* {this.props.children} */}
        <div>
          <span style={{marginRight: '20px'}}><Link to="/">react-animations</Link></span>
          <span style={{marginRight: '20px'}}><Link to="/motions">react-motion</Link></span>
          <span><Link to="/tweenmax">TweenMax</Link></span>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
