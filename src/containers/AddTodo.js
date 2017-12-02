import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
let addTodoItem = ({dispatch}) => {
  let input
  return (
    <form
      onSubmit ={ e => {
        e.preventDefault()
        dispatch(addTodo(input.value))
        input.value = ''
      }}
      >
      <input type='text'
        ref={node => {
          input = node
        }}
        />
        <button type="submit">
            Add Todo
          </button>
    </form>
  )
}

const AddTodo = connect()(addTodoItem)
export default AddTodo
