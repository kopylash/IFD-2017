'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { GameActions } from '../actions';
import { GAME_TYPES } from '../constants';

const NewGameContainer = (props) => {
  return (
    <div>
      {props.inFlight ? 'Creating game ...' :(
        <div>
          <button id="wordGameBtn" onClick={() => props.createGame(GAME_TYPES.WORD)}>Create word game</button>
          <button id="numberGameBtn" onClick={() => props.createGame(GAME_TYPES.NUMBER)}>Create number game</button>
        </div>
      )}
      {props.error ? <span className="red">{props.error}</span> : null}
    </div>
  );
};

NewGameContainer.propTypes = {
  createGame: React.PropTypes.func,
  inFlight: React.PropTypes.bool,
  error: React.PropTypes.string
};

const mapStateToProps = (state) => ({
  inFlight: state.games.fetchState.inFlight,
  error: state.games.fetchState.error
});

const mapDispatchToProps = (dispatch) => ({
  createGame: (type) => (dispatch(GameActions.addGame(type)))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGameContainer);
