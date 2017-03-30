import React, {PropTypes} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Animation.less';

import { bounce } from 'react-animations';
import Radium from 'radium';

const styles = {
  bounce: {
    animationDuration: '.3s',
    // animation: 'x .3s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
};
@Radium
export default class Animation extends React.Component {
  static propTypes = {
    todo: PropTypes.object,
    todoBoundAC: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      list: ['hello', 'world', 'click', 'me'],
      isAnimate: false
    };
  }
  // shouldComponentUpdate(nextProps) {
  //   return shallowEqual(this.props.todo.get('filter'), nextProps.todo.get('filter'), this.props.todo.get('todoList'), nextProps.todo.get('todoList'));
  // }
  handleRemove = (idx) => {
    const newList = this.state.list;
    newList.splice(idx, 1);
    this.setState({
      list: newList
    });
  }
  handleAdd = () => {
    const newItems = 'newItems';
    const lists = this.state.list;
    lists.push(newItems);
    this.setState({list: lists});
  }
  createList = () => {
    const output = [];
    this.state.list.map((item, idx) => {
      output.push(<div key={idx} onClick={this.handleRemove.bind(this, idx)} style={{cursor: 'pointer'}}>{item}</div>);
    });
    return output;
  }
  handlePlay = () => {
    this.setState({
      isAnimate: true
    });
    setTimeout(() => {
      this.setState({
        isAnimate: false
      });
    }, 2000);
  }
  render() {
    return (
      <div style={{padding: '10px'}}>
        <div>
          <h2>react-addons-css-transition-group</h2>
          <p style={{margin: '20px 0'}}>react 自带动画: react-addons-css-transition-group>ReactCSSTransitionGroup</p>
          <button onClick={this.handleAdd} style={{padding: '0 5px', border: '1px solid #ddd', marginBottom: '20px'}}>Add Item</button>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {this.createList()}
          </ReactCSSTransitionGroup>
        </div>
        <div style={{paddingTop: '40px'}}>
          <h2>react-animations:</h2>
          <p style={{padding: '20px 0'}}>demo: </p>
          <div style={this.state.isAnimate ? styles.bounce : null}>react-animations</div>
          <button onClick={this.handlePlay} style={{padding: '0 5px', border: '1px solid #ddd', marginTop: '20px'}}>play</button>
        </div>
      </div>
    );
  }
}

// export default Radium(Animation);
