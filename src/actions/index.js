import { ADD_TODO, SET_VISIBILITY_FILTER ,TOGGLE_TODO } from './actionType'

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload: payload
  }
}

export function visibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}
