import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
We work with 3 react components:
  Square (function component -- see below)
  Board
  Game
*/

/*
  Square is a "function component".
  This is for components that only contain a `render`` method
  and don't have their own state.
  Instead of defining a class which extends React.Component,
  we can write a function that takes props as input and returns
  what should be rendered.
  Function components are less tedious to write than classes,
  and many components can be expressed this way.
*/

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
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
/*
  Since the Square components no longer maintain state,
  the Square components receive values from the Board
  component and inform the Board component when they’re
  clicked. In React terms, Square components are now controlled
  components. The Board has full control over them.
*/
class Board extends React.Component {
  renderSquare(i) {
    /*
      We’re passing down two props from Board to Square:
      value and onClick.
    */
    return (
      <Square
        value={ this.props.squares[i] }
        onClick={ () => this.props.onClick(i) }
      />
    );
  }

  render() {
    return (
      <div>
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
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();  // slice() creates a copy of the array

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    /*
      Unlike the array push() method you might be more
      familiar with, the concat() method doesn’t mutate
      the original array, so we prefer it.
    */
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) == 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // It’s strongly recommended that you assign proper
    // keys whenever you build dynamic lists.
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move # ' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={ () => this.jumpTo(move) }>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
