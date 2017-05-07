'use strict';

import {
  CONNECTION_REQUEST,
  CONNECTION_ACCEPTED,
  CONNECTION_CLOSED,
  PLAYERS_CHANGED
} from './actionTypes';

import { push } from 'connected-react-router';

const createPayloadForwardingAction = (type) => (payload) => ({type: type, payload: payload});

export const connect = (playerName) => {
  return {
    type: CONNECTION_REQUEST,
    payload: {
      playerName
    }
  };
};
export const connectionClosed = (payload) => (dispatch) => {
  dispatch({
    type: CONNECTION_CLOSED,
    payload: payload
  });
  dispatch(push('/'));
};

export const connectionAccepted = createPayloadForwardingAction(CONNECTION_ACCEPTED);
export const playersConnected = createPayloadForwardingAction(PLAYERS_CHANGED);
