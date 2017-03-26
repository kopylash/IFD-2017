'use strict';

import React, { Component } from 'react';
import GuessWordForm from '../components/WordGame/GuessWordForm';
import MoveList from '../components/WordGame/MoveList';
import WordGame, { WORDS } from '../model/WordGame';

class GuessWordApp extends Component {

  constructor(props) {
    super(props);
    this.game = new WordGame(WORDS[Math.floor(Math.random() * 5)]);

    this.state = {
      finished: this.game.finished,
      moves: this.game.moves
    };
  }

  guessTheWord(word) {
    this.game.guess(word);
    this.setState({
      finished: this.game.finished,
      moves: [...this.game.moves]
    });
  }

  render() {
    return (
      <div>
        <h2>Word Guess Game</h2>
        <GuessWordForm onSubmit={this.guessTheWord.bind(this)} finished={this.state.finished}/>
        <MoveList moves={this.state.moves}/>
      </div>
    );
  }
}

export default GuessWordApp;
