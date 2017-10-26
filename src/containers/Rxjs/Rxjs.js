import React, { Component } from 'react';
// import { TweenMaxDemo } from 'components';
import Rx from 'rxjs/Rx';

export default class TweenMax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // eg1:
    const weight = Rx.Observable.of(70, 72, 76, 79, 75, 80);
    const height = Rx.Observable.of(3, 4, 5);
    const bmi = Rx.Observable.combineLatest(weight, height, (wei, hei) => {
      return wei / (hei * hei);
    });
    bmi.subscribe(val => console.log('bmi is ' + val));

    // // eg2
    // const	timer =	Rx.Observable.interval(1000).take(4);
    // const	sequence =	Rx.Observable.range(1,	10);
    // const	result2 =	Rx.Observable.concat(timer,	sequence);
    // result2.subscribe(val => console.log('result2:' + val));

    // // eg3
    // const	timer3eg1	=	Rx.Observable.interval(1000).take(10);
    // const	timer3eg2	=	Rx.Observable.interval(2000).take(6);
    // const	timer3eg3	=	Rx.Observable.interval(500).take(10);
    // const	result3	=	Rx.Observable.concat(timer3eg1,	timer3eg2,	timer3eg3);
    // result3.subscribe(val	=>	console.log('result3: ' + val));

    // eg4
    // const	clicksOrInterval =	Rx.Observable.defer(() => {
    //   if (Math.random()	>	0.5)	{
    //     return	Rx.Observable.fromEvent(document,	'click');
    //   }
    //   // else	{
    //   return	Rx.Observable.interval(1000);
    //   // }
    // });
    // clicksOrInterval.subscribe(xxx	=>	console.log(xxx));

    // eg5
    // const	source	=	Rx.Observable.empty().startWith(7);
    // source.subscribe(
    //   xxx	=>	console.log(`onNext:	${xxx}`),
    //   eee	=>	console.log(`onError:	${eee}`),
    //   ()	=>	console.log('onCompleted')
    // );

    // eg6
    // const interval = Rx.Observable.interval(1000).mergeMap((val) => {
    //   console.log(val, 'origin');
    //   return val % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty();
    // });
    // interval.subscribe(val => console.log('interval:' + val));

    // eg7
    // const	source	=	Rx.Observable.forkJoin(
    //   // Rx.Observable.return(42),
    //   Rx.Observable.range(0,	10),
    //   Rx.Observable.from([1, 2, 3, 4]),
    //   Rx.Observable.of(3, 9, 7),
    //   // RSVP.Promise.resolve(56)
    // );
    // source.subscribe(
    //   xxx => console.log(xxx)
    // );

    // eg8
    // const	timer1 = Rx.Observable.interval(1000).take(10);
    // const	timer2 =	Rx.Observable.interval(2000).take(6);
    // const	timer3 =	Rx.Observable.interval(500).take(10);
    // const	concurrent = 2;	// the	argument
    // const	merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
    // merged.subscribe(xxx => console.log(xxx));

    // eg9
  }
  render() {
    return (
      // <div style={{width: '1200px', margin: '0 auto'}}>
      //   <TweenMaxDemo />
      // </div>
      <div>这是Rxjs的测试, 打开控制台</div>
    );
  }
}
