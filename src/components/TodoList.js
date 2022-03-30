import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: []};
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo]});
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter( todo => todo.id !== id)
        });
    }
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

    render() {
      const todos = this.state.todos.map( todo => <Todo 
        key={todo.id} 
        id={todo.id}
        removeTodo={this.remove} 
        updateTodo={this.update}
        task={todo.task} 
    />)
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
            {todos}
        </ul>
      </div>
    )
  }
}

export default TodoList;
