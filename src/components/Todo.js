import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false, task: this.props.task}
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id)
    }
    toggleForm() {
        this.setState({ editMode: !this.state.editMode });
    }

    handleChange(evt) {
        this.setState({task: evt.target.value})
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ editMode: !this.state.editMode });
    }
    handleToggle() {
        this.props.toggleTodo(this.props.id)
    }

  render() {
      let view;
    if (this.state.editMode) {
        view = (
            <div className='Todo'>
                <form onSubmit={this.handleUpdate} className='Todo-edit-form'>
                    <input type='text' value={this.state.task} onChange={this.handleChange} />
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
      view = (
        <div className='Todo'>
            <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} 
                onClick={this.handleToggle}>
                    {this.props.task}
            </li>
            <div className='Todo-buttons'>
                <button onClick={this.toggleForm}><i className="fas fa-pen"></i></button>
                <button onClick={this.handleRemove}><i className="fas fa-trash"></i></button>
            </div>
        </div>
      )  
    }
    return view
  }
}

export default Todo;
