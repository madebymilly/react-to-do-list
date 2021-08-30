import React, { Component } from 'react'

export default class EditTodoForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       task: this.props.todo.task
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.edit(this.props.todo.id, this.state.task)
    this.setState({
      todo: ''
    })
  }
  

  render() {
    return (
      <form className="EditTodoForm" onSubmit={this.handleSubmit}>
        <input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
        <button>Edit</button>
      </form>
    )
  }
}
