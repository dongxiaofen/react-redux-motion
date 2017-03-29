import React from 'react';
// import { Row, Col } from 'antd';
import {TransitionMotion, spring, presets} from 'react-motion';
import Styles from './MotionCont.less';
export default class TransitionDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {key: 't1', data: {text: 'Board the plane', isDone: false}},
        {key: 't2', data: {text: 'Sleep', isDone: false}},
        {key: 't3', data: {text: 'Try to finish conference slides', isDone: false}},
        {key: 't4', data: {text: 'Eat cheese and drink wine', isDone: false}},
        {key: 't5', data: {text: 'Go around in Uber', isDone: false}},
        {key: 't6', data: {text: 'Talk with conf attendees', isDone: false}},
        {key: 't7', data: {text: 'Show Demo 1', isDone: false}},
        {key: 't8', data: {text: 'Show Demo 2', isDone: false}},
        {key: 't9', data: {text: 'Lament about the state of animation', isDone: false}},
        {key: 't10', data: {text: 'Show Secret Demo', isDone: false}},
        {key: 't11', data: {text: 'Go home', isDone: false}},
      ],
      value: '',
      selected: 'All'
    };
  }

  getDefaultStyles = () => {
    return this.state.todos.map(todo => ({...todo, style: {height: 0, opacity: 0}}));
  }
  getStyles = () => {
    const {value, selected} = this.state;
    const newList = this.state.todos.filter(({data: {text, isDone}}) => {
      return text.toUpperCase().indexOf(value.toUpperCase()) >= 0 &&
            (selected === 'All' ||
            (selected === 'active' && !isDone) ||
            (selected === 'completed' && isDone));
    });
    return newList.map(todo => ({...todo, style: {height: spring(60, presets.gentle), opacity: spring(1, presets.gentle)}}));
  }
  willEnter = () => {
    return {height: 0, opacity: 0};
  }
  willLeave = () => {
    return {height: spring(0), opacity: spring(0)};
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newItem = {
      key: 't' + Date.now(),
      data: {text: this.state.value, isDone: false}
    };
    this.setState({
      todos: newItem.concat(this.state.todos)
    });
  }
  handleSelect = (selected) => {
    this.setState({
      selected: selected
    });
  }

  handleToggleAll = () => {
    const allNotDone = this.state.todos.every(({data}) => data.isDone);
    // console.log(allNotDone, 'allNotDone');
    this.setState({
      todos: this.state.todos.map(({key, data: {text}}) => (
        {key: key, data: {text: text, isDone: !allNotDone}}
      )),
    });
  }

  handleDone = (idx) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        const {key, data: {text, isDone}} = todo;
        return key === idx ? {key: key, data: {text: text, isDone: !isDone}} : todo;
      })
    });
  }
  handleDestroy = (idx) => {
    this.setState({
      todos: this.state.todos.filter(({key}) => (key !== idx))
    });
  }
  createFilteList = () => {
    const list = ['All', 'active', 'completed'];
    const output = list.map((item, idx) => {
      return (<li key={'fl' + idx}><a className={this.state.selected === item ? 'selected' : ''} onClick={this.handleSelect.bind(null, item)}>{item}</a></li>);
    });
    return output;
  }
  render() {
    const {todos, value} = this.state;
    const itemsLeft = todos.filter(({data: {isDone}}) => !isDone).length;
    return (
      <div className={Styles.boxwrap}>
        <div className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                autoFocus
                className="new-todo"
                placeholder="What needs to be done?"
                value={value}
                onChange={this.handleChange}
              />
            </form>
          </header>
          <div className="main">
            <input
              className="toggle-all"
              type="checkbox"
              checked={itemsLeft === 0} style={{display: todos.length === 0 ? 'none' : 'inline'}}
              onChange={this.handleToggleAll} style={{outline: 'none'}}/>
            <TransitionMotion
              defaultStyles={this.getDefaultStyles()}
              styles={this.getStyles()}
              willLeave={this.willLeave}
              willEnter={this.willEnter}>
              {styles => (
                <ul className="todo-list">
                  {styles.map(({key, style, data: {text, isDone}}) => (
                    <li key={key} style={style} className={isDone ? 'completed' : ''}>
                      <div className="view">
                        <input
                          className="toggle"
                          type="checkbox"
                          onChange={this.handleDone.bind(null, key)}
                          checked={isDone}
                          style={{outline: 'none'}}
                        />
                      <label style={{fontSize: '20px', lineHeight: '20px'}}>{text}</label>
                        <button
                          className="destroy"
                          onClick={this.handleDestroy.bind(null, key)}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </TransitionMotion>
          </div>
          <footer className="footer">
            <span className="todo-count">
              <strong>
                {itemsLeft}
              </strong> {itemsLeft === 1 ? 'item' : 'items'} left
            </span>
            <ul className="filters">
              {this.createFilteList()}
            </ul>
            <button className="clear-completed" onClick={this.handleClearCompleted}>
              Clear completed
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
