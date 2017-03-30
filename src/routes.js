import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Todo,
    NotFound,
    Motions,
    Transition,
    TweenMax
  } from 'containers';


export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Todo}/>
      <Route path="motions" component={Motions} />
      <Route path="transition" component={Transition} />
      <Route path="tweenmax" component={TweenMax} />
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
