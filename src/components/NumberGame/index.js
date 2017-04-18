'use strict';

import React from 'react';
import GuessNumberForm from './GuessNumberForm';
import MoveList from './MoveList';
import { GAME_STATUSES } from '../../constants';

const GuessNumberApp = (props) => {
  return (
    <div>
      <h2>Number Guess Game</h2>
      {props.game.fetchState.inFlight ? 'Wait a moment. Your move is processed...' : (
        <div>
          {props.game.fetchState.error ? <span className="red">{props.game.fetchState.error}</span> : null}
          <GuessNumberForm
            onSubmit={(number) => (props.onGuess(props.game.id, number))}
            finished={props.game.status === GAME_STATUSES.FINISHED}
          />
          <MoveList moves={props.game.moves}/>
        </div>
      )}
    </div>
  );
};

GuessNumberApp.propTypes = {
  onGuess: React.PropTypes.func.isRequired,
  game: React.PropTypes.shape({
    id: React.PropTypes.string,
    status: React.PropTypes.string,
    moves: React.PropTypes.array,
    type: React.PropTypes.string,
    fetchState: React.PropTypes.shape({
      inFlight: React.PropTypes.bool.isRequired,
      error: React.PropTypes.string
    })
  }).isRequired
};

export default GuessNumberApp;
