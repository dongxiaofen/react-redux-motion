import React from 'react';
import { Button } from 'antd';
import {TransitionMotion, spring, presets} from 'react-motion';
// import __range from 'lodash/range';
import Styles from './MotionCont.less';
export default class TransitionDemo0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      // arrLength: 5
      arrData: [
        {key: 'bl0', data: 'blk0', text: 'skdhg'},
        {key: 'bl1', data: 'blk1', text: 'skdhg'},
        {key: 'bl2', data: 'blk2', text: 'skdhg'},
        {key: 'bl3', data: 'blk3', text: 'skdhg'},
        {key: 'bl4', data: 'blk4', text: 'skdhg'},
      ]
    };
  }
  getDefaultStyles = () => {
    return this.state.arrData.map((item) => ({...item, style: {width: 0}}));
  }
  getStyles = () => {
    return this.state.arrData.map((item) => ({...item, style: {width: spring(50, presets.gentle)}}));
  }
  willEnter = () => {
    return {width: 0};
  }
  willLeave = () => {
    return {width: spring(0)};
  }
  handleAdd = () => {
    const data = this.state.arrData;
    data.push({key: `bl${Date.now()}`, data: 'new'});
    this.setState({
      arrData: data
    });
  }
  handleDelete = () => {
    const data = this.state.arrData;
    data.splice(0, 1);
    this.setState({
      arrData: data
    });
  }

  render() {
    return (
      <div className={Styles.boxwrap}>
        <Button type="primary" onClick={this.handleAdd}>add</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
         <Button type="primary" onClick={this.handleDelete}>delete</Button>
           <TransitionMotion
             defaultStyles={this.getDefaultStyles()}
             styles={this.getStyles()}
             willLeave={this.willLeave}
             willEnter={this.willEnter}>
             {styles => (
               <div className={Styles.transBox}>
                 {styles.map(({key, data, style}) => {
                   return (
                     <div key={key} style={style} className={Styles.transItem}>
                       <span>{data}</span>
                     </div>
                   );
                 })}
               </div>
             )}
           </TransitionMotion>
      </div>
    );
  }
}
