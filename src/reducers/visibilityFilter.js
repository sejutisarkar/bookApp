import { VISIBILITY_FILTER, SET_VISIBILITY_FILTER } from '../actions/actionType'

// we are writing reducers
const initialState =  VISIBILITY_FILTER.SHOW_ALL

export function setVisibilityFilter(state = initialState, action) {
  // if(typeof state === 'undefined') {
  //   state = initialState
  // }
//  console.log(state);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
