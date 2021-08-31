import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      task: this.props.todo.task
    }
  }

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.props.toggleDone(this.props.todo.id);
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.delete(this.props.todo.id);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.update(this.props.todo.id, this.state.task)
    this.setState({ isEditing: false });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { todo } = this.props

    return (
      <li className={this.props.todo.done ? "Todo completed" : "Todo"}>
        {!this.state.isEditing
          ? <>
            <div className="Todo-task" onClick={this.handleToggle}>{todo.task}</div>
            <div className='Todo-buttons'>
              <button onClick={this.toggleForm}><i className='fas fa-pen' /></button>
              <button onClick={this.handleDelete}><i className='fas fa-trash' /></button>
            </div>
            </>
          : <>
              <form className="Todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
                <button>update</button>
              </form>
            </>
        }
      </li>
    )
  }
}


export default Todo;
