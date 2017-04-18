import {
  GAME_CREATION_FAILURE,
  GAME_CREATION_SUCCESS,
  GUESS_FAILURE,
  GUESS_SUCCESS
} from '../../src/actions/actionTypes';

import {
  createGame,
  guess,
} from '../../src/actions/gameServerActions';

import { GAME_TYPES, GAME_STATUSES, NUMBER_GAME_RESPONSES } from '../../src/constants';

describe('Server actions :: game creation', () => {
  let xhr;
  let requests;
  let dispatch;

  beforeEach(() => {
    // Mock out XMLHttpRequest with sinon
    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    // Store XMLHttpRequests to respond to them
    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr);
    dispatch = sinon.stub();
  });

  afterEach(() => {
    xhr.restore();
  });

  it('dispatches GAME_CREATION_FAILURE when xhr fails', () => {
    createGame({type: GAME_TYPES.NUMBER})(dispatch);

    requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

    expect(dispatch).to.have.been.calledWith({
      type: GAME_CREATION_FAILURE,
      payload: {error: 'error'}
    });
  });

  it('dispatches GAME_CREATION_SUCCESS when xhr fails', () => {
    createGame({type: GAME_TYPES.NUMBER})(dispatch);

    requests[0].respond(201, {}, JSON.stringify({
      id: '1',
      type: GAME_TYPES.NUMBER,
      status: GAME_STATUSES.WAITING_FOR_MOVE
    }));

    expect(dispatch).to.have.been.calledWith({
      type: GAME_CREATION_SUCCESS,
      payload: {
        id: '1',
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE
      }
    });
  });
});

describe('Server actions :: guess', () => {
  let xhr;
  let requests;
  let dispatch;

  beforeEach(() => {
    // Mock out XMLHttpRequest with sinon
    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    // Store XMLHttpRequests to respond to them
    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr);
    dispatch = sinon.stub();
  });

  afterEach(() => {
    xhr.restore();
  });

  it('dispatches GUESS_FAILURE when xhr fails', () => {
    const gameId = '1';
    guess({gameId, guess: 3})(dispatch);

    // Fails the pending request
    requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

    expect(dispatch).to.have.been.calledWith({
      type: GUESS_FAILURE,
      payload: {error: {error: 'error'}, gameId}
    });
  });

  it('dispatches GUESS_SUCCESS when xhr succeeds', () => {
    const guessNumber = 3;
    guess({gameId: '1', guess: guessNumber})(dispatch);

    requests[0].respond(201, {}, JSON.stringify({
      game: {
        id: '1',
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE
      },
      move: {comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL, guess: guessNumber}
    }));

    expect(dispatch).to.have.been.calledWith({
      type: GUESS_SUCCESS,
      payload: {
        game: {
          id: '1',
          type: GAME_TYPES.NUMBER,
          status: GAME_STATUSES.WAITING_FOR_MOVE
        },
        move: {comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL, guess: guessNumber}
      }
    });
  });
});
