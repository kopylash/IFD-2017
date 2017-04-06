'use strict';

import React from 'react';
import GuessWordForm from './GuessWordForm';
import MoveList from './MoveList';

const GuessWordApp = (props) => {
  return (
    <div>
      <h2>Word Guess Game</h2>
      <GuessWordForm onSubmit={(word) => (props.onGuess(props.game.id, word))} finished={props.game.finished}/>
      <MoveList moves={props.game.moves}/>
    </div>
  );
};

GuessWordApp.propTypes = {
  onGuess: React.PropTypes.func.isRequired,
  game: React.PropTypes.shape({
    id: React.PropTypes.number,
    finished: React.PropTypes.bool,
    moves: React.PropTypes.array,
    target: React.PropTypes.string
  }).isRequired
};

export default GuessWordApp;
