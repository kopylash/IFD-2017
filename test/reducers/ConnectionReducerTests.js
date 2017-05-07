'use strict';

import reducer from '../../src/reducers/connection';
import { formatError } from '../../src/reducers/connection';
import {
  CONNECTION_REQUEST,
  CONNECTION_ACCEPTED,
  CONNECTION_CLOSED
} from '../../src/actions/actionTypes';

describe('Connection tests', () => {
  it('has the right initial state', () => {
    const state = reducer(undefined, {});
    expect(state).to.eql({
      fetchState: {
        inFlight: false,
        error: null
      },
      connected: false,
      playerId: null
    });
  });

  it('sets fetch state to inFlight upon game creation', () => {
    const newState = reducer(undefined, {
      type: CONNECTION_REQUEST,
      payload: {
        playerName: 'vlad'
      }
    });

    expect(newState.fetchState.inFlight).to.be.true;
  });

  it('should save playerId, mark state as connected and remove inFlight state when connection accepted', () => {
    const previousState = {
      fetchState: {
        inFlight: true,
        error: null
      },
      connected: false,
      playerId: null
    };
    const action = {
      type: CONNECTION_ACCEPTED,
      payload: {
        playerId: '123'
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.fetchState.inFlight).to.be.false;
    expect(newState.connected).to.be.true;
    expect(newState.playerId).to.eql(action.payload.playerId);
  });

  it('should return error if connection was closed with reason', () => {
    const previuosState = {
      fetchState: {
        inFlight: false,
        error: null
      },
      connected: true,
      playerId: '123'
    };
    const action = {
      type: CONNECTION_CLOSED,
      payload: {
        reason: 'socket hang up'
      }
    };
    const newState = reducer(previuosState, action);

    expect(newState.fetchState.inFlight).to.be.false;
    expect(newState.fetchState.error).to.eql(action.payload.reason);
    expect(newState.connected).to.be.false;
    expect(newState.playerId).to.be.null;
  });

  it('should reset state if connection was closed by user', () => {
    const previousState = {
      fetchState: {
        inFlight: false,
        error: null
      },
      connected: true,
      playerId: '123'
    };
    const action = {
      type: CONNECTION_CLOSED,
      payload: {}
    };
    const newState = reducer(previousState, action);

    expect(newState).to.eql({
      fetchState: {
        inFlight: false,
        error: null
      },
      connected: false,
      playerId: null
    });
  });

  it('formatError should format error if connection was closed with known reason', () => {
    const formattedError = formatError('player-name-taken');

    expect(formattedError).to.eql('This player name is already taken. Try another one');
  });

  it('formatError should return input if connection was closed with unknown reason', () => {
    const formattedError = formatError('socket-hang-up');

    expect(formattedError).to.eql('socket-hang-up');
  });
});
