'use strict';

import reducer from '../../src/reducers/games';
import { GAME_ADDED, WORD_GUESSED, NUMBER_GUESSED } from '../../src/actions/actionTypes';
import { GAME_TYPES, NUMBER_GAME_RESPONSES } from '../../src/constants';

describe('Game creation', () => {
  it('has no games initially', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('adds game', () => {
    const newGame = {
      id: 1,
      type: GAME_TYPES.NUMBER,
      finished: false
    };

    const newState = reducer(undefined, {
      type: GAME_ADDED,
      payload: newGame
    });

    expect(newState.length).to.eql(1);
    expect(newState[0].id).to.eql(newGame.id);
    expect(newState[0].type).to.eql(newGame.type);
    expect(newState[0].finished).to.eql(newGame.finished);
  });
});

describe('Word game', () => {
  it('should finish the game when the word is correct', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.WORD,
      finished: false,
      target: 'redux',
      moves: []
    }];

    const action = {
      type: WORD_GUESSED,
      payload: {
        id: '1',
        word: 'redux'
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].finished).to.eql(true);
  });

  it('should not finish the game on partial match', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.WORD,
      finished: false,
      target: 'redux',
      moves: []
    }];

    const action = {
      type: WORD_GUESSED,
      payload: {
        id: '1',
        word: 'rexcx'
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].finished).to.eql(false);
  });

  it('should return empty array when no matches found', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.WORD,
      finished: false,
      target: 'redux',
      moves: []
    }];

    const action = {
      type: WORD_GUESSED,
      payload: {
        id: '1',
        word: 'basil'
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].moves.length).to.eql(1);
    expect(newState[0].moves[0].word).to.eql('basil');
    expect(newState[0].moves[0].matches.length).to.eql(0);
  });

  it('should handle longer word', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.WORD,
      finished: false,
      target: 'redux',
      moves: []
    }];

    const action = {
      type: WORD_GUESSED,
      payload: {
        id: '1',
        word: 'reflux'
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].moves[0].matches.length).to.eql(2);
    expect(newState[0].moves[0].matches).to.include.members([0, 1]);
  });

  it('should handle empty string', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.WORD,
      finished: false,
      target: 'redux',
      moves: []
    }];

    const action = {
      type: WORD_GUESSED,
      payload: {
        id: '1',
        word: ''
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].moves[0].matches.length).to.eql(0);
  });

  it('should return 3 matches', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.WORD,
      finished: false,
      target: 'redux',
      moves: []
    }];

    const action = {
      type: WORD_GUESSED,
      payload: {
        id: '1',
        word: 'ardux'
      }
    };
    const newState = reducer(previousState, action);

    expect(newState[0].moves[0].matches.length).to.eql(3);
  });

  it('should record moves on each guess', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.WORD,
      finished: false,
      target: 'redux',
      moves: []
    }];

    const action = {
      type: WORD_GUESSED,
      payload: {
        id: '1',
        word: 'ardux'
      }
    };
    const middleState = reducer(previousState, action);
    const newState = reducer(middleState, action);

    expect(newState[0].moves.length).to.eql(2);
  });
});

describe('Number game', () => {
  it('should return WIN when guess is correct', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.NUMBER,
      finished: false,
      target: 5,
      moves: []
    }];

    const action = {
      type: NUMBER_GUESSED,
      payload: {
        id: '1',
        number: 5
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].moves[0].number).to.eql(5);
    expect(newState[0].moves[0].response).to.eql(NUMBER_GAME_RESPONSES.WIN);
  });

  it('should return SMALL when guess is less than target number', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.NUMBER,
      finished: false,
      target: 5,
      moves: []
    }];

    const action = {
      type: NUMBER_GUESSED,
      payload: {
        id: '1',
        number: 3
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].moves[0].number).to.eql(3);
    expect(newState[0].moves[0].response).to.eql(NUMBER_GAME_RESPONSES.SMALL);
  });

  it('should return BIG when guess is more than target number', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.NUMBER,
      finished: false,
      target: 5,
      moves: []
    }];

    const action = {
      type: NUMBER_GUESSED,
      payload: {
        id: '1',
        number: 8
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].moves[0].number).to.eql(8);
    expect(newState[0].moves[0].response).to.eql(NUMBER_GAME_RESPONSES.BIG);
  });

  it('should add move on guess', () => {
    const previousState = [{
      id: '1',
      type: GAME_TYPES.NUMBER,
      finished: false,
      target: 5,
      moves: []
    }];

    const action = {
      type: NUMBER_GUESSED,
      payload: {
        id: '1',
        number: 3
      }
    };
    const newState = reducer(previousState, action);

    expect(newState.length).to.eql(1);
    expect(newState[0].moves.length).to.eql(1);
    expect(newState[0].moves[0].number).to.eql(3);
  });
});
