import React from 'react';
import TodoItem from './todoList/todoItem';

class TodoList extends React.Component {
  render () {
    return (
      <ul className='todo-list'>
        <TodoItem label='Elso tennivalo' />
        <TodoItem label='Masodik tennivalo' />
        <TodoItem label='Ez meg a harmadik' />
      </ul>
    );
  }
}
export default TodoList;
