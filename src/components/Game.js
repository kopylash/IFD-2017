'use strict';

import React from 'react';
import WordGame from '../components/WordGame';
import NumberGame from '../components/NumberGame';
import { GAME_TYPES } from '../constants';

const Game = (props) => {
  const renderGame = (game) => {
    return props.game.type === GAME_TYPES.WORD
      ? <WordGame key={game.id} game={game} onGuess={props.guess}/>
      : <NumberGame key={game.id} game={game} onGuess={props.guess}/>;
  };

  return props.show ? (
    <div>{props.game ? renderGame(props.game) : 'Game not found'}</div>
  ) : null;
};

Game.propTypes = {
  game: React.PropTypes.object,
  guess: React.PropTypes.func,
  show: React.PropTypes.bool
};

export default Game;
