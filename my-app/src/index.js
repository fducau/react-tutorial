import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
We work with 3 react components:
  Square
  Board
  Game
*/


class Square extends React.Component {
  constructor(props) {
    /*
      Note:
      In JavaScript classes, you need to always call super when
      defining the constructor of a subclass.
      All React component classes that have a constructor should
      start with a super(props) call.
    */
    super(props);
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button
        className="square"
        onClick= {
          () => { this.setState({value: 'X'}) }
      }>
        {this.state.value}
      </button>
    );
  }
}


/*
  To collect data from multiple children, or to have two child
  components communicate with each other, you need to declare the
  shared state in their parent component instead.
  The parent component can pass the state back down to the children
  by using props;
  this keeps the child components in sync with each other
  and with the parent component.
*/
class Board extends React.Component {
  renderSquare(i) {
    // Passes value i to Square component
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
