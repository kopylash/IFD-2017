'use strict';

import React, { Component } from 'react';
import GuessNumberForm from '../components/GuessNumberForm';
import MoveList from '../components/MoveList';
import NumberGame from '../NumberGame';

const game = new NumberGame(Math.floor(Math.random() * 10));

class GuessNumberApp extends Component {
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
        <GuessNumberForm onSubmit={this.guessTheNumber.bind(this)} finished={this.state.finished}/>
        <MoveList moves={this.state.moves}/>
      </div>
    );
  }
}

export default GuessNumberApp;
