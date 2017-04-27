'use strict';

import React from 'react';
import { GAME_TYPES } from '../constants';

const NewGame = (props) => {
  return props.show ? (
    <div>
      <h3>Create a game!</h3>
      {props.inFlight ? 'Creating game ...' : (
        <div>
          <button id="wordGameBtn" onClick={() => props.createGame(GAME_TYPES.WORD)}>Create word game</button>
          <button id="numberGameBtn" onClick={() => props.createGame(GAME_TYPES.NUMBER)}>Create number game</button>
        </div>
      )}
      {props.error ? <span className="red">{props.error}</span> : null}
    </div>
  ) : null;
};

NewGame.propTypes = {
  createGame: React.PropTypes.func,
  inFlight: React.PropTypes.bool,
  error: React.PropTypes.string,
  show: React.PropTypes.bool
};

export default NewGame;
