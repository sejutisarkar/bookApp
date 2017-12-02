import { combineReducers } from 'redux'
import { setVisibilityFilter } from './visibilityFilter'
import { todoApp } from './todos'

// combine reducer which is ALSO KNOWN AS Root Reducer
const todoAppWhole = combineReducers({
  todos: todoApp,
  visibilityFilter: setVisibilityFilter
})

export default todoAppWhole
