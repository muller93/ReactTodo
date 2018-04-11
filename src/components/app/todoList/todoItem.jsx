import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isRed: false };
  }

  changeColor () {
    // let newValue = !this.state.isRed;
    this.setState({ isRed: !this.state.isRed });
  }

  render () {
    return (
      <li
        onClick={this.changeColor.bind(this)}
        style={{ color: (this.state.isRed ? 'red' : '') }} // ez a szín (? ez egy if), 'red (igaz ág)' : '(hamis ág)'
      >{this.props.label}</li>
    );
  }
}
export default TodoItem;
