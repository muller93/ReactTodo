import React from 'react';
import TodoItem from './todoItem';

class App extends React.Component {
  render () {
    return (
      <ul>
        <TodoItem label='Elso tennivalo' />
        <TodoItem label='Masodik tennivalo' />
        <TodoItem label='Ez meg a harmadik' />
      </ul>
    );
  }
}
export default App;
