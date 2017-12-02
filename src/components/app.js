import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

function App(){
  return(
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
  );
}
export default App;
