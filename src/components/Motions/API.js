import React from 'react';
import {Motion, spring} from 'react-motion';
import tragger from './tragger.png';
import transition from './transition.png';
import MotionDemo from './MotionDemo.js';
import StaggeredDemo from './StaggeredDemo.js';
import TransitionDemo0 from './TransitionDemo_0.js';

import styles from './API.less';
const height = [100, 410, 920, 1050, 180];
export default class MotionCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [
        {open: true, name: 'spring'},
        {open: true, name: 'Motion'},
        {open: true, name: 'StaggeredMotion'},
        {open: true, name: 'TransitionMotion'},
        {open: true, name: 'presets'},
      ],
    };
  }
  handleOpen = (idx) => {
    this.setState({
      api: this.state.api.map((item, index) => {
        const {open, name} = item;
        return index === idx ? {open: !open, name} : item;
      })
    });
  }
  createApiList = () => {
    const output = [];
    this.state.api.map((item, idx) => {
      output.push(
        <li className={styles.list}>
          <p className={styles.apiBtn} onClick={this.handleOpen.bind(this, idx)}>{item.name}</p>
          <Motion style={{x: spring(item.open ? height[idx] : 0)}}>
            {({x}) => (
              <div className={styles.apiwrap} style={{height: `${x}px`}}>
                <div className={styles.apiCont} style={{height: `${x}px`}}>{this.createDetail(item.name)}</div>
              </div>
            )}
          </Motion>
        </li>
      );
    });
    return (<ul>{output}</ul>);
  }
  createDetail = (detailApi) => {
    // return detailApi.toLowerCase() + 'cont'();
    let detailCont;
    switch (detailApi) {
      case 'spring':
        detailCont = this.springCont();
        break;
      case 'Motion':
        detailCont = this.motionCont();
        break;
      case 'StaggeredMotion':
        detailCont = this.staggeredMotionCont();
        break;
      case 'TransitionMotion':
        detailCont = this.transitionMotionCont();
        break;
      case 'presets':
        detailCont = this.presetsCont();
        break;
      default:
        detailCont = this.springCont();
        break;
    }
    return detailCont;
  }
  springCont = () => {
    return (
      <div className={styles.detailApi}>
        <p>spring，声明动画的缓动效果，比如 spring(10, &#123;stiffness: 120, damping: 17&#125;), spring(10, presets.wobbly)</p>
         <p>10 是目标值， stiffness 是弹性动画的刚度值，影响弹性， damping 是弹性动画的阻力</p>
      </div>
    );
  }
  motionCont = () => {
    return (
      <div className={styles.detailApi}>
        <p>Motion ，该动画组件内部往往只有一个直接子组件，也就是只有一个动画目标</p>
        <pre><code>
          &lt;Motion defaultStyle=&#123;&#123;x: 0&#125;&#125; style=&#123;&#123;x: spring(100)&#125;&#125; onRest=&#123;() => void&#125;&gt;<br/>
        &nbsp;&nbsp;&nbsp; &#123;interpolatingStyle => &lt;div style=&#123;interpolatingStyle&#125; /&gt;&#125;<br/>
          &lt;/Motion&gt;
        </code></pre>
      <p>defaultStyle: 可选参数 , 为动画设定初始值</p>
      <p>style: 必选参数，指定动画完成的目标值，并设定动画的变化类型，实际上是一种数据驱动的形式</p>
      <p>onRest: 可选参数，在动画完成后调用</p>
      <p>children: (interpolatedStyle: PlainStyle) => ReactElement ，必选函数，接收一个从初始值到目标值中间的值，这个值不断变化，用于渲染子组件的样式</p>
      <MotionDemo />
      </div>
    );
  }
  staggeredMotionCont = () => {
    return (
      <div className={styles.detailApi}>
        <img src={tragger} alt=""/>
        <p>StaggerdMotion: 该动画组件内部有一个或多个直接子组件，多个子组件之间的动画效果由关联性</p>
        <p>defaultStyles: array(可选参数)</p>
        <p>styles: function(必选函数)</p>
        <p>children: function(必选函数)</p>
        <p>区别Motion为defaultStyle，style，　而staggeredMotionCont为defaultStyles，styles</p>
        <p>暂不支持onRest</p>
        <StaggeredDemo />
      </div>
    );
  }
  transitionMotionCont = () => {
    return (
      <div className={styles.detailApi}>
        <img src={transition} alt=""/>
        <p>TransitionMotion ，常用于一个或多个组件的卸载或挂载</p>
        <p>styles: array(必选参数)， [&#123; key: 'string', data?: any, style: Style &#125;}]</p>
        <p>defaultStyles: array(可选参数)</p>
        <p>children: function(必选函数)</p>
        <p>提供 Enter 和 Leave 动画效果，　包括willLeave，　didLeave，　willEnter</p>
        <p>区别Motion为defaultStyle，style，　而TransitionMotion为defaultStyles，styles</p>
        <p>暂不支持onRest</p>
        <TransitionDemo0 />
      </div>
    );
  }
  presetsCont = () => {
    return (
      <div className={styles.detailApi}>
        <p>预置的缓动效果，比如 spring(10, preset.gentle)</p>
        <pre>
          noWobble: &#123;stiffness: 170, damping: 26&#125;,<br/>
        gentle: &#123;stiffness: 120, damping: 14&#125;,<br/>
      wobbly: &#123;stiffness: 180, damping: 12&#125;,<br/>
    stiff: &#123;stiffness: 210, damping: 20&#125;,
        </pre>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>API:</h2>
        {this.createApiList()}
        <p style={{paddingTop: '20px'}}>官方地址：　<a href="https://github.com/chenglou/react-motion">https://github.com/chenglou/react-motion</a></p>
      </div>
    );
  }
}
