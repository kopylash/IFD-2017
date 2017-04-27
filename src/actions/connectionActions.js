'use strict';

import {
  CONNECTION_REQUEST,
  CONNECTION_ACCEPTED,
  CONNECTION_CLOSED,
  PLAYERS_CHANGED
} from './actionTypes';

const createPayloadForwardingAction = (type) => (payload) => ({type: type, payload: payload});

export const connect = (playerName) => {
  return {
    type: CONNECTION_REQUEST,
    payload: {
      playerName
    }
  };
};
export const connectionClosed = createPayloadForwardingAction(CONNECTION_CLOSED);

export const connectionAccepted = createPayloadForwardingAction(CONNECTION_ACCEPTED);
export const playersConnected = createPayloadForwardingAction(PLAYERS_CHANGED);
