'use strict';

import { connect } from 'react-redux';
import { GameActions } from '../actions';
import GameList from '../components/GameList';

const mapStateToProps = (state) => ({
  games: state.games.list
});

const mapDispatchToProps = (dispatch) => ({
  guess: (id, guess) => (dispatch(GameActions.guess(id, guess))),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
