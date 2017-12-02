import { TOGGLE_TODO, ADD_TODO } from '../actions/actionType'

const initialState =  []

export function todoApp(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
          ...state,
          {
            payload: action.payload,
            completed: false
          }
      ]
    case TOGGLE_TODO:
      return state.map( (todo,index) => {
          if(index===action.index){
            return Object.assign({},todo,{
              completed : !todo.completed
            })
          }
          return todo;
        })
    default:
      return state
  }
}
