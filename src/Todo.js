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

  handleDone = (e) => {
    e.preventDefault();
    this.props.done(this.props.todo.id);
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
      <li className={`Todo ${todo.done && 'completed'}`}>
        {!this.state.isEditing
          ? <>
              <h3 onClick={this.handleDone}>{todo.task}</h3>
              <button onClick={this.toggleForm}>edit</button>
              <button onClick={this.handleDelete}>X</button>
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
