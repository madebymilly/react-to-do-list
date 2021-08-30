import React, { Component } from 'react'
import './Todo.css'
import EditTodoForm from './EditTodoForm'

class Todo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  handleDone = (e) => {
    e.preventDefault();
    this.props.done(this.props.todo.id);
  }
  

  handleEditable = (e) => {
    e.preventDefault();
    this.props.editable(this.props.todo.id);
  }
  
  handleRemove = (e) => {
    e.preventDefault();
    this.props.remove(this.props.todo.id);
  }
  
  render() {

    const { todo } = this.props

    return (
      <li className={`Todo ${todo.done && 'Todo--done'}`}>
        {!todo.editable
          ? <>
              <h3 onClick={this.handleDone}>{todo.task}</h3>
              <button onClick={this.handleEditable}>edit</button>
              <button onClick={this.handleRemove}>X</button>
            </>
          : <EditTodoForm edit={this.props.edit} todo={todo} />
        }
      </li>
    )
  }
}


export default Todo;
