import React, { Component } from 'react';
import './App.scss';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      status: '200',
      todos: [],
    };
  }

  InputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  Submit = () => {
    const { name, age, status, todos } = this.state;
    const newTodo = { name, age, status };
    this.setState({ todos: [...todos, newTodo], name: '', age: '', status: '200' });
  }

  Delete = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    this.setState({ todos: updatedTodos });
  }

  render() {
    const { name, age, status, todos } = this.state;

    return (
      <div className="todo-list-container">
        <div>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.InputChange} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="text" name="age" value={age} onChange={this.InputChange} />
          </label>
        </div>
        <div>
          <label>
            Status:
            <select name="status" value={status} onChange={this.InputChange}>
              <option value="200">200</option>
              <option value="404">404</option>
              <option value="600">600</option>
            </select>
          </label>
        </div>
        <button onClick={this.Submit}>Submit</button>

        <div>
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              {`${todo.name}, ${todo.age}, Status: ${todo.status}`}
              <button onClick={() => this.Delete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;