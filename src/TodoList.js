import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { v4 as uuid } from 'uuid';
import './TodoList.css'

class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { id: uuid(), task: 'Milk the Cow', editable: false, done: false },
        { id: uuid(), task: 'Buy Bread', editable: false, done: false }
      ]
    }

    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.toggleDone = this.toggleDone.bind(this)
  }

  create(task) {
    const newTodo = { id: uuid(), task: task, editable: false, done: false };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }))
  }

  update(id, task) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? { ...todo, task: task, editable: false } : todo )
    }))
  }

  delete(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }

  toggleDone(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo )
    }))
  }

  render() {
    return (
      <div className="TodoList">
        <h1>React To Do List <span>MadebyMilly</span></h1>
        <ul>
          {this.state.todos.map(todo =>
            <Todo key={todo.id} id={todo.id} todo={todo} update={this.update} delete={this.delete} toggleDone={this.toggleDone} />
          )}
        </ul>
        <NewTodoForm create={this.create} />
      </div>
    )
  }
}

export default TodoList;
