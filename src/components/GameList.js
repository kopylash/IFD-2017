'use strict';

import React from 'react';
import WordGame from '../components/WordGame';
import NumberGame from '../components/NumberGame';
import { GAME_TYPES } from '../constants';

const GameList = (props) => {
  return (
    <div className="ordered-reverse">
      {props.games.map((game) => {
        return game.type === GAME_TYPES.WORD
          ? <WordGame key={game.id} game={game} onGuess={props.guess}/>
          : <NumberGame key={game.id} game={game} onGuess={props.guess}/>;
      })}
    </div>
  );
};

GameList.propTypes = {
  games: React.PropTypes.array,
  guess: React.PropTypes.func
};

export default GameList;
