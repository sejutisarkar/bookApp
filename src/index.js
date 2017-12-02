import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {addTodo, toggleTodo, visibilityFilter} from './actions'
import { VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions/actionType'

// import root reducer to create store
import rootReducer from './reducers'
import App from './components/app';
function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

// createStore accept root reducers to create stoore
const store = createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState());
store.dispatch(addTodo("dodo lives here"))
store.dispatch(addTodo("dodo"))
// store.dispatch(toggleTodo(1))
//  store.dispatch(visibilityFilter(VISIBILITY_FILTER.SHOW_ACTIVE))
console.log(store.getState())
//
// store.dispatch(addTodo("dodo lives here"))
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
