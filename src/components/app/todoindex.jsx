import React from 'react';
import TodoList from './todoList';
import CreateItem from './CreateItem';

class TodoIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { label: 'Saturn' },
        { label: 'Earth' },
        { label: 'Merkur' },
        { label: 'Mars' },
        { label: 'Venus' }
      ]
    };
  }
  delete (label) {
    console.log(label);
    let todos = this.state.todos;
    let i = 0;
    while (i < todos.length && todos[i].label !== label) {
      i++;
    }
    console.log(i);
    if (i < todos.length) {
      todos.splice(i, 1);
      this.setState({todos: todos});
    }
  }
  submit (inputValue) {
    console.log(inputValue);
    let todos = this.state.todos;
    todos.push({ label: inputValue });
    this.setState({ todos: todos });
  }

  render () {
    return (
      <div>
        <TodoList todos={this.state.todos} delete={this.delete.bind(this)} />
        <CreateItem submit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default TodoIndex;
