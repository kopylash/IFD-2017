'use strict';

import React, { Component } from 'react';
import GuessNumberForm from '../components/NumberGame/GuessNumberForm';
import MoveList from '../components/NumberGame/MoveList';
import NumberGame from '../model/NumberGame';

class GuessNumberApp extends Component {
  constructor(props) {
    super(props);
    this.game = new NumberGame(Math.floor(Math.random() * 10));

    this.state = {
      finished: this.game.finished,
      moves: this.game.moves
    };
  }

  guessTheNumber(num) {
    this.game.guess(num);
    this.setState({
      finished: this.game.finished,
      moves: [...this.game.moves]
    });
  }

  render() {
    return (
      <div>
        <h2>Number Guess Game</h2>
        <GuessNumberForm onSubmit={this.guessTheNumber.bind(this)} finished={this.state.finished}/>
        <MoveList moves={this.state.moves}/>
      </div>
    );
  }
}

export default GuessNumberApp;
