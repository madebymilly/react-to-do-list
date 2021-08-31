import React, { Component } from 'react'
import './Todo.css'
import EditTodoForm from './EditTodoForm'

class Todo extends Component {

  handleDone = (e) => {
    e.preventDefault();
    this.props.done(this.props.todo.id);
  }

  handleEditable = (e) => {
    e.preventDefault();
    this.props.editable(this.props.todo.id);
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.delete(this.props.todo.id);
  }

  render() {

    const { todo } = this.props

    return (
      <li className={`Todo ${todo.done && 'Todo--done'}`}>
        {!todo.editable
          ? <>
              <h3 onClick={this.handleDone}>{todo.task}</h3>
              <button onClick={this.handleEditable}>edit</button>
              <button onClick={this.handleDelete}>X</button>
            </>
          : <EditTodoForm update={this.props.update} todo={todo} />
        }
      </li>
    )
  }
}


export default Todo;
