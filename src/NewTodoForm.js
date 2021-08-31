import React, { Component } from 'react'

export default class NewTodoForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
       task: ''
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
    this.props.create(this.state.task)
    this.setState({
      task: ''
    })
  }


  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
        <button>create new todo</button>
      </form>
    )
  }
}
