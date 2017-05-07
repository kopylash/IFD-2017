'use strict';

import { connect } from 'react-redux';
import { GameActions } from '../actions';
import Game from '../components/Game';

const mapStateToProps = (state, ownProps) => ({
  game: state.games.list.find((g) => g.id === ownProps.match.params.gameId),
  show: state.connection.connected
});

const mapDispatchToProps = (dispatch) => ({
  guess: (id, guess) => (dispatch(GameActions.guess(id, guess))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
