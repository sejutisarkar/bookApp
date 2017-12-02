import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Todo = ({payload, completed, onClick}) => (
  <li onClick = {onClick}
    style= {{
  //  text-decoration: completed ? 'line-through' : 'none'
    }}
  >
    {payload}
  </li>
)

Todo.propTypes = {
  payload: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo
