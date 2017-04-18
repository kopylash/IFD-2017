'use strict';

import {
  GAME_CREATION_REQUEST,
  GUESS_REQUEST
} from '../actions/actionTypes';

import {
  createGame,
  guess,
} from '../actions/gameServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
  [GAME_CREATION_REQUEST]: createGame,
  [GUESS_REQUEST]: guess
};

const gameServerMiddleware = (store) => (next) => (action) => {
  const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
  if (serverAction) {
    serverAction(action.payload)(store.dispatch);
  }
  return next(action);
};

export default gameServerMiddleware;
