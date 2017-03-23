'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

const game = new Game(Math.floor(Math.random() * 10));

class GuessForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessNumber: ''
    };
  }

  onChange(event) {
    if (!isNaN(event.target.value)) {
      this.setState({guessNumber: event.target.value});
    } else {
      this.setState({guessNumber: ''});
    }
  }

  onEnterKey(event) {
    if (event.keyCode === 13) {
      let num = this.state.guessNumber;
      if (num.length) {
        this.props.onSubmit(parseInt(num));
      }
    }
  }

  render() {
    return this.props.finished ? (<p>You won!</p>) : (
      <div>
        <p>Guess a number from 0 to 9</p>
        <input type='text'
               placeholder="Guess the number"
               value={this.state.guessNumber}
               onChange={this.onChange.bind(this)}
               onKeyUp={this.onEnterKey.bind(this)}
        />
      </div>
    );
  }
}

GuessForm.defaultProps = {
  finished: false
};

GuessForm.propTypes = {
  finished: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

const MoveList = (props) => {
  const moves = props.moves.map((move, idx) => {
    switch (move.response) {
      case 'WIN':
        return (<p className="move-correct" key={idx}>{`${move.number}: was correct`}</p>);
      case 'SMALL':
        return (<p className="move-incorrect" key={idx}>{`${move.number}: was smaller than target`}</p>);
      case 'BIG':
        return (<p className="move-incorrect" key={idx}>{`${move.number}: was bigger than target`}</p>);
    }
  });

  return moves.length ? (
    <div>
      <h4>Previous moves:</h4>
      <div className="move-list">{moves}</div>
    </div>
  ) : null;
};

MoveList.propTypes = {
  moves: React.PropTypes.array.isRequired
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: game.finished,
      moves: game.moves
    };
  }

  guessTheNumber(num) {
    game.guess(num);
    this.setState({
      finished: game.finished,
      moves: [...game.moves]
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>Game Lobby</h1>
        <h2>Number Guess Game</h2>
        <GuessForm onSubmit={this.guessTheNumber.bind(this)} finished={this.state.finished}/>
        <MoveList moves={this.state.moves}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
