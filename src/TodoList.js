import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h1>React To Do List</h1>
        <Todo />
      </div>
    )
  }
}

export default TodoList;
