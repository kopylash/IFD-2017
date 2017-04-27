'use strict';

import {
  CONNECTION_REQUEST,
  CONNECTION_ACCEPTED,
  CONNECTION_CLOSED
} from '../actions/actionTypes';

const initialState = {
  fetchState: {
    inFlight: false,
    error: null
  },
  connected: false,
  playerId: null
};

const connection = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTION_REQUEST: {
      return {...state, fetchState: {inFlight: true}};
    }
    case CONNECTION_ACCEPTED: {
      return {
        ...state,
        fetchState: {inFlight: false},
        connected: true,
        playerId: action.payload.playerId
      };
    }
    case CONNECTION_CLOSED: {
      if (action.payload.reason) {
        return {
          ...initialState,
          fetchState: {inFlight: false, error: formatError(action.payload.reason)}
        };
      } else {
        return initialState;
      }
    }
    default:
      return state;
  }
};

export default connection;


const formatError = (errorMessage) => {
  switch (errorMessage) {
    case 'player-name-taken':
      return 'This player name is already taken. Try another one';
    default:
      return errorMessage;
  }
};
