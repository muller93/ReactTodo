import React from 'react';
import TodoIndex from './app/todoindex';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

class App extends React.Component {
  render () {
    console.log(this.state);
    return (
      <div className='todoListWrapper'>
        <BrowserRouter>
          <Route path='/' component={TodoIndex} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
