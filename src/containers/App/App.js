import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div style={{width: '1200px', margin: '20px auto', fontSize: '14px'}}>
        {/* {this.props.children} */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
