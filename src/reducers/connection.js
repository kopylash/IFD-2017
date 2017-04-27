'use strict';

import {
  CONNECTION_REQUEST,
  CONNECTION_ACCEPTED,
  CONNECTION_FAILURE,
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
    case CONNECTION_FAILURE: {
      return {
        ...state,
        fetchState: {inFlight: false, ...action.payload}
      };
    }
    case CONNECTION_CLOSED: {
      return initialState;
    }
    default:
      return state;
  }
};

export default connection;
