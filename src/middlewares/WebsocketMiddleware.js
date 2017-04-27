'use strict';

import {
  CONNECTION_REQUEST,
  CONNECTION_CLOSED
} from '../actions/actionTypes';

import {
  connectionAccepted,
  connectionClosed,
  playersConnected
} from '../actions/connectionActions';

import { connect as connectWebSocket } from '../util/WebSocket';

let webSocketConnection = null;

const initiateConnection = (parameters) => (dispatch) => {
  webSocketConnection = connectWebSocket({
    onOpen: () => {
      console.info('connection opened');
    },
    onClose: ({reason}) => {
      console.info('connection closed');
      dispatch(connectionClosed({reason}));
    },
    onMessage: ({eventName, payload}) => dispatch(messageToAction[eventName](payload)),
    parameters
  });
};

const ACTION_TYPE_WEBSOCKET_ACTION = {
  [CONNECTION_REQUEST]: ({playerName}) => (dispatch) => {
    initiateConnection({playerName})(dispatch);
  },
  [CONNECTION_CLOSED]: (payload) => (dispatch) => {
    if (webSocketConnection) {
      webSocketConnection.close();
      webSocketConnection = null;
    }
  },
};

const messageToAction = {
  'connection:accepted': connectionAccepted,
  'online-players': playersConnected

};

const websocketMiddleware = (store) => (next) => (action) => {
  const websocketAction = ACTION_TYPE_WEBSOCKET_ACTION[action.type];
  if (websocketAction) {
    websocketAction(action.payload)(store.dispatch);
  }
  return next(action);
};

export default websocketMiddleware;
