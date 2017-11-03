import React, { Component } from 'react';
import Rx from 'rxjs/Rx';
import styles from './example.less';

export default class example1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFixed: false
    };
  }
  componentDidMount() {
    const video = document.getElementById('video');
    setTimeout(() => { // 设置延时是应为开发模式下，样式文件会延后加入
      const top = video.offsetTop;
      const height = video.clientHeight;
      const scroll = Rx.Observable.fromEvent(document, 'scroll')
      .map(() => {
        const scrollH = document.documentElement.scrollTop || document.body.scrollTop;
        return scrollH > height + top;
      });
      scroll.subscribe((bool) => {
        if (bool) {
          this.setState({
            isFixed: true
          });
        } else {
          this.setState({
            isFixed: false
          });
        }
      });
    }, 1000);
    const mouseDown = Rx.Observable.fromEvent(video, 'mousedown');
    const mouseUp = Rx.Observable.fromEvent(video, 'mouseup');
    const mouseMove = Rx.Observable.fromEvent(video, 'mousemove');
    mouseDown.filter(() => video.classList.length === 2)
      .map(() => mouseMove.takeUntil(mouseUp))
      .concatAll()
      .withLatestFrom(mouseDown, (move, down) => {
        return {movX: move.clientX - down.clientX, movY: move.clientY - down.clientY};
      })
      .subscribe((dis) => {
        video.style.left = 10 + dis.movX + 'px';
        video.style.top = 10 + dis.movY + 'px';
      });
  }
  render() {
    return (
      <div className={styles['example-container']}>
        <div className={styles['video-box']}>
          <div id="video" className={`${styles.video} ${this.state.isFixed ? styles['video-fixed'] : ''}`}>
            <div>video</div>
          </div>
        </div>
      </div>
    );
  }
}
