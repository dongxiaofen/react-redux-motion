import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Radium, { StyleRoot } from 'radium';

import { bindActionCreators } from 'redux';
import * as todoAC from 'redux/actions/todo';
import { Animation } from 'components';
// import { Header, List, Footer } from 'components';

@Radium
@connect(
  state => ({todo: state.todo}),
  dispatch=>({todoBoundAC: bindActionCreators(todoAC, dispatch)}))
export default class Todo extends Component {
  static propTypes = {
    todo: PropTypes.object,
    todoBoundAC: PropTypes.object,
  };

  render() {
    return (
      <StyleRoot>
        <section className="todoapp">
          <Animation />
          {/* <Header />
          <List/>
          <Footer/> */}
        </section>
      </StyleRoot>
    );
  }
}

// export default Radium(Todo);
