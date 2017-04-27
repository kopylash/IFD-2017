'use strict';

import { connect } from 'react-redux';
import { GameActions } from '../actions';
import NewGame from '../components/NewGame';

const mapStateToProps = (state) => ({
  inFlight: state.games.fetchState.inFlight,
  error: state.games.fetchState.error,
  show: state.connection.connected
});

const mapDispatchToProps = (dispatch) => ({
  createGame: (type) => (dispatch(GameActions.addGame(type)))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
