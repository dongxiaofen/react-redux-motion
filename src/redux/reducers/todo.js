import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
import __findIndex from 'lodash/findIndex';
const initState = {
  // todoList: [],
  todoList: [
    // key is creation date
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
  currentInput: '',
  filter: 'All'
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.INIT_TODO:
      return state.set('todoList', fromJS(action.data));
    case ActionTypes.SET_CURRENT:
      return state.updateIn(['currentInput'], () => action.data);
    case ActionTypes.ADD_TODO:
      return state.updateIn(['todoList'], val => val.push(fromJS(action.data)));
    case ActionTypes.DEL_TODO:
      const idx1 = __findIndex(state.get('todoList').toJS(), {id: action.data});
      return state.deleteIn(['todoList', idx1]);
    case ActionTypes.TOGGLE_STATUS:
      const idx2 = __findIndex(state.get('todoList').toJS(), {id: action.data.id});
      return state.updateIn(['todoList', idx2], () => fromJS(action.data));
    case ActionTypes.TOGGLE_FILTER:
      return state.updateIn(['filter'], () => action.data);
    case ActionTypes.TOGGLE_ALL:
      return state.updateIn(['todoList'], () => fromJS(action.data));
    case ActionTypes.TOGGLE_EDIT:
      const idx3 = __findIndex(state.get('todoList').toJS(), {id: action.data.id});
      return state.updateIn(['todoList', idx3], (val) => val.mergeDeep(fromJS({canEdit: action.data.canEdit === 1 ? 0 : 1})));
    case ActionTypes.MODIFY_TODO:
      const idx4 = __findIndex(state.get('todoList').toJS(), {id: action.data.id});
      return state.updateIn(['todoList', idx4], (val) => val.mergeDeep(fromJS({text: action.data.text})));
    default:
      return state;
  }
}
