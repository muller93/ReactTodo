import React from 'react';
import TodoItem from './todoList/todoItem';

class TodoList extends React.Component {
  render () {
    let todos = this.props.todos.map(element => {
      return <TodoItem label={element.label} key={element.label} />;
    }); // mappel új tömbbe pakoljuk az elemeket. behelyettesítjük a labelekbe a TodoItemeket
    return (
      <ul className='todo-list'>
        {todos}
      </ul>);
  }
}
export default TodoList;
