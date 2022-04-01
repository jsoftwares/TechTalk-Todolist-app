import React, { Component } from 'react'
import {v4 as uuid } from 'uuid'
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({[evt.target.name] : evt.target.value})
    }
    handleSubmit(evt) {
        evt.preventDefault();
        if (this.state.task === '') {
          alert('Please enter a task.');
          return;
        }
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        this.setState({task: ''});
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='NewTodoForm'>
        <label htmlFor='task'>New Todo</label>
        <input type='text' name='task' id='task' placeholder='New Todo' value={this.state.task} onChange={this.handleChange} />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;
