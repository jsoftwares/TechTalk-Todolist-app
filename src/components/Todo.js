import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false, task: this.props.task}
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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

  render() {
      let view;
    if (this.state.editMode) {
        view = (
            <div>
                <form onSubmit={this.handleUpdate}>
                    <input type='text' value={this.state.task} onChange={this.handleChange} />
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
      view = (
        <div>
            <button onClick={this.toggleForm}>Edit</button>
            <button onClick={this.handleRemove}>X</button>
            <li>{this.props.task}</li>
        </div>
      )  
    }
    return view
  }
}

export default Todo;
