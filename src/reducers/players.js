'use strict';

import {
  CONNECTION_CLOSED,
  PLAYERS_CONNECTED
} from '../actions/actionTypes';

const initialState = [];

const players = (state = initialState, action) => {
  switch (action.type) {
    case PLAYERS_CONNECTED: {
      return action.payload;
    }
    case CONNECTION_CLOSED: {
      return [];
    }
    default:
      return state;
  }
};

export default players;
