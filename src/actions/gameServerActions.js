'use strict';

import jsonAjax from '../util/JSONAjaxRequest';

import {
  gameCreationSucceeded,
  gameCreationFailed,
  guessSucceeded,
  guessFailed
} from './gameActions';

const SERVER_ADDRESS = 'http://localhost:8081';

export const createGame = ({type}) => (dispatch) => {
  jsonAjax(
    SERVER_ADDRESS + '/games',
    'POST',
    {type},
    (game) => dispatch(gameCreationSucceeded(game)),
    (error) => dispatch(gameCreationFailed(error))
  );
};

export const guess = ({gameId, guess}) => (dispatch) => {
  jsonAjax(
    `${SERVER_ADDRESS}/games/${gameId}/moves`,
    'POST',
    {guess},
    (moveResponse) => dispatch(guessSucceeded(moveResponse)),
    (error) => dispatch(guessFailed({gameId, error}))
  );
};
