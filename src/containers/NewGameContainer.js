'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { GameActions } from '../actions';

const WORD_GAME = 'WORD_GAME';
const NUMBER_GAME = 'NUMBER_GAME';

const NewGameContainer = (props) => {
  return (
    <div>
      <button id="wordGameBtn" onClick={() => props.createGame(WORD_GAME)}>Create word game</button>
      <button id="numberGameBtn" onClick={() => props.createGame(NUMBER_GAME)}>Create number game</button>
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
