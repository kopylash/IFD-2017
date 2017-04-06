'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { GameActions } from '../actions';
import { GAME_TYPES } from '../constants';


const NewGameContainer = (props) => {
  return (
    <div>
      <button id="wordGameBtn" onClick={() => props.createGame(GAME_TYPES.WORD)}>Create word game</button>
      <button id="numberGameBtn" onClick={() => props.createGame(GAME_TYPES.NUMBER)}>Create number game</button>
    </div>
  );
};

NewGameContainer.propTypes = {
  createGame: React.PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  createGame: (type) => (dispatch(GameActions.addGame(type)))
});

export default connect(null, mapDispatchToProps)(NewGameContainer);
