'use strict';

import { connect } from 'react-redux';
import { GameActions } from '../actions';
import GameList from '../components/GameList';

const mapStateToProps = (state) => ({
  games: state.games
});

const mapDispatchToProps = (dispatch) => ({
  guessNumber: (id, number) => (dispatch(GameActions.guessNumber(id, number))),
  guessWord: (id, word) => (dispatch(GameActions.guessWord(id, word)))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
