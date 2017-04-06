'use strict';

import React from 'react';
import { connect } from 'react-redux';
import WordGame from '../components/WordGame';
import NumberGame from '../components/NumberGame';
import { GameActions } from '../actions';

const WORD_GAME = 'WORD_GAME';

const GamesContainer = (props) => {
  return (
    <div className="ordered-reverse">
      {props.games.map((game) => {
        return game.type === WORD_GAME
          ? <WordGame key={game.id} game={game} onGuess={props.guessWord}/>
          : <NumberGame key={game.id} game={game} onGuess={props.guessNumber}/>;
      })}
    </div>
  );
};

GamesContainer.propTypes = {
  games: React.PropTypes.array,
  guessWord: React.PropTypes.func,
  guessNumber: React.PropTypes.func
};

const mapStateToProps = (state) => ({
  games: state.games
});

const mapDispatchToProps = (dispatch) => ({
  guessNumber: (id, number) => (dispatch(GameActions.guessNumber(id, number))),
  guessWord: (id, word) => (dispatch(GameActions.guessWord(id, word)))
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
