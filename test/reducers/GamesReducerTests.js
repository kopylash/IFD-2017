'use strict';

import reducer from '../../src/reducers/games';
import {
  GAME_CREATION_REQUEST,
  GAME_CREATION_FAILURE,
  GAME_CREATION_SUCCESS,
  GUESS_REQUEST,
  GUESS_FAILURE,
  GUESS_SUCCESS
} from '../../src/actions/actionTypes';
import { GAME_TYPES, NUMBER_GAME_RESPONSES, GAME_STATUSES } from '../../src/constants';

describe('Game creation', () => {
  it('has the right initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      fetchState: {
        inFlight: false,
        error: null
      },
      list: []
    });
  });

  it('sets fetch state to inFlight upon game creation', () => {
    const newState = reducer(undefined, {
      type: GAME_CREATION_REQUEST,
      payload: {
        type: GAME_TYPES.NUMBER
      }
    });

    expect(newState.fetchState.inFlight).to.be.true;
  });

  it('adds a game to the list when created successfully', () => {
    const previousState = {
      list: [],
      fetchState: {inFlight: true}
    };
    const action = {
      type: GAME_CREATION_SUCCESS,
      payload: {
        id: '1',
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.fetchState.inFlight).to.be.false;

    expect(newState.list).to.have.lengthOf(1);
    expect(newState.list[0].id).to.eql(action.payload.id);
    expect(newState.list[0].type).to.eql(action.payload.type);
    expect(newState.list[0].status).to.eql(action.payload.status);
    expect(newState.list[0].fetchState).to.eql({inFlight: false});
    expect(newState.list[0].moves).to.have.lengthOf(0);
  });

  it('removes inFlight state when game creation failed', () => {
    const action = {
      type: GAME_CREATION_FAILURE,
      payload: {error: 'error'}
    };
    const newState = reducer(undefined, action);

    expect(newState.fetchState.inFlight).to.be.false;
  });

  it('adds error to fetchState when game creation failed', () => {
    const action = {
      type: GAME_CREATION_FAILURE,
      payload: {error: 'error'}
    };
    const newState = reducer(undefined, action);

    expect(newState.fetchState.error).to.eql('error');
  });
});

describe('Game guess', () => {
  it('should set game\'s fetchState to inFlight when guess is made', () => {
    const gameId = '1';
    const guess = 3;

    const previousState = {
      list: [{
        id: gameId,
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE,
        moves: [],
        fetchState: {inFlight: false}
      }]
    };

    const action = {
      type: GUESS_REQUEST,
      payload: {
        gameId: guess
      }
    };

    const newState = reducer(previousState, action);

    expect(newState.list[0].fetchState.inFlight).to.be.true;
  });

  it('should set game\'s fetchState to not inFlight when guess succeeded', () => {
    const gameId = '1';
    const guess = 3;

    const previousState = {
      list: [{
        id: gameId,
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE,
        moves: [],
        fetchState: {inFlight: false}
      }]
    };

    const action = {
      type: GUESS_SUCCESS,
      payload: {
        game: {
          id: gameId,
          type: GAME_TYPES.NUMBER,
          status: GAME_STATUSES.WAITING_FOR_MOVE
        },
        move: {
          comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL,
          guess
        }
      }
    };

    const newState = reducer(previousState, action);

    expect(newState.list[0].fetchState.inFlight).to.be.false;
  });

  it('should add move to game when guess succeeded', () => {
    const gameId = '1';
    const guess = 3;

    const previousState = {
      list: [{
        id: gameId,
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE,
        moves: [],
        fetchState: {inFlight: false}
      }]
    };

    const action = {
      type: GUESS_SUCCESS,
      payload: {
        game: {
          id: gameId,
          type: GAME_TYPES.NUMBER,
          status: GAME_STATUSES.WAITING_FOR_MOVE
        },
        move: {
          comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL,
          guess
        }
      }
    };

    const newState = reducer(previousState, action);

    expect(newState.list[0].moves).to.have.lengthOf(1);
    expect(newState.list[0].moves[0]).to.eql({
      comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL,
      guess
    });
  });

  it('should set game\'s fetchState to not inFlight when guess failed', () => {
    const gameId = '1';
    const guess = 3;

    const previousState = {
      list: [{
        id: gameId,
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE,
        moves: [{
          comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL,
          guess
        }],
        fetchState: {inFlight: true}
      }]
    };

    const action = {
      type: GUESS_FAILURE,
      payload: {
        gameId,
        error: 'error'
      }
    };

    const newState = reducer(previousState, action);

    expect(newState.list[0].fetchState.inFlight).to.be.false;
  });

  it('should add error to game\'s fetchState when guess failed', () => {
    const gameId = '1';
    const guess = 3;

    const previousState = {
      list: [{
        id: gameId,
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE,
        moves: [{
          comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL,
          guess
        }],
        fetchState: {inFlight: true}
      }]
    };

    const action = {
      type: GUESS_FAILURE,
      payload: {
        gameId,
        error: {error: 'error'}
      }
    };

    const newState = reducer(previousState, action);

    expect(newState.list[0].fetchState.error).to.eql(action.payload.error.error);
  });
});
