import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: []};
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo]});
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter( todo => todo.id !== id)
        });
    }

    // @TODO change todos from an array to an object to improve performance
    update(id, updatedTask) {
        /**bcos we don't want to mutate todos, we map through it to get a new todos array in return, then we
         * check if d current todo id === the todo we want to update, if yes, we return into d new todos array
         *  a new todo where we update the task property by spreading it to get all the properties then update
         *  'task'. else if IDs don't match, we just return that todo object into our new array as is.
         */
        const updatedTodods = this.state.todos.map( todo => {
            if (todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });

        this.setState({ todos: updatedTodods});
    }
    toggleCompletion(id) {
        const updatedTodods = this.state.todos.map( todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });

        this.setState({ todos: updatedTodods});
    }

    render() {
      const todos = this.state.todos.map( todo => <Todo 
        key={todo.id} 
        id={todo.id}
        completed={todo.completed}
        removeTodo={this.remove} 
        updateTodo={this.update}
        toggleTodo ={ this.toggleCompletion}
        task={todo.task} 
    />)
    return (
      <div className='TodoList'>
        <h1>TechTalk <span>Simple Todo List!</span></h1>
        <ul>
            {todos}
        </ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    )
  }
}

export default TodoList;
