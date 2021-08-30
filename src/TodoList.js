import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { v4 as uuid } from 'uuid';

class TodoList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      todos: [ 
        { id: uuid(), task: 'Milk the Cow', editable: false, done: false }, 
        { id: uuid(), task: 'Buy Bread', editable: false, done: false }
      ]
    }

    this.add = this.add.bind(this)
    this.edit = this.edit.bind(this)
    this.editable = this.editable.bind(this)
    this.remove = this.remove.bind(this)
    this.done = this.done.bind(this)
  }

  add(task) {
    const newTodo = { id: uuid(), task: task, editable: false, done: false };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }))
  }
  
  edit(id, task) {
    //console.log('edit', id, task)
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? { ...todo, task: task, editable: false } : todo )
    }))
  }

  editable(id) {
    //console.log('editable', id)
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? { ...todo, editable: true } : todo )
    }))
  }

  remove(id) {
    // console.log('remove', id)
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }

  done(id) {
    //console.log('done', id)
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? { ...todo, done: true } : todo )
    }))
  }

  render() {
    return (
      <div className="TodoList">
        <h1>React To Do List</h1>
        <ul>
          {this.state.todos.map(todo =>
            <Todo key={todo.id} id={todo.id} todo={todo} edit={this.edit} editable={this.editable} remove={this.remove} done={this.done} />
          )}
          
        </ul>
        <NewTodoForm add={this.add} />
      </div>
    )
  }
}

export default TodoList;
