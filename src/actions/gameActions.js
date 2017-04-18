'use strict';

import {
  GAME_CREATION_REQUEST,
  GAME_CREATION_FAILURE,
  GAME_CREATION_SUCCESS,
  GUESS_REQUEST,
  GUESS_FAILURE,
  GUESS_SUCCESS
} from './actionTypes';

const createPayloadForwardingAction = (type) => (payload) => ({type: type, payload: payload});

export const addGame = (type) => {
  return {
    type: GAME_CREATION_REQUEST,
    payload: {type}
  };
};

export const guess = (gameId, guess) => {
  return {
    type: GUESS_REQUEST,
    payload: {gameId, guess}
  };
};

export const gameCreationSucceeded = createPayloadForwardingAction(GAME_CREATION_SUCCESS);
export const gameCreationFailed = createPayloadForwardingAction(GAME_CREATION_FAILURE);
export const guessSucceeded = createPayloadForwardingAction(GUESS_SUCCESS);
export const guessFailed = createPayloadForwardingAction(GUESS_FAILURE);
