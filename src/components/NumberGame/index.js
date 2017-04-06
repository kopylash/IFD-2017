'use strict';

import React from 'react';
import GuessNumberForm from './GuessNumberForm';
import MoveList from './MoveList';

const GuessNumberApp = (props) => {
  return (
    <div>
      <h2>Number Guess Game</h2>
      <GuessNumberForm onSubmit={(number) => (props.onGuess(props.game.id, number))} finished={props.game.finished}/>
      <MoveList moves={props.game.moves}/>
    </div>
  );
};

GuessNumberApp.propTypes = {
  onGuess: React.PropTypes.func.isRequired,
  game: React.PropTypes.shape({
    id: React.PropTypes.number,
    finished: React.PropTypes.bool,
    moves: React.PropTypes.array,
    target: React.PropTypes.number
  }).isRequired
};

export default GuessNumberApp;
