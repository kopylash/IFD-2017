'use strict';

import { GameActions } from '../../src/actions';
import { GAME_TYPES } from '../../src/constants';

describe('Game actions', () => {
  it('has increasing game ID', () => {
    const actions = [
      GameActions.addGame(GAME_TYPES.WORD),
      GameActions.addGame(GAME_TYPES.NUMBER),
    ];

    expect(actions[1].payload.id).to.eq(
      actions[0].payload.id+1
    );
  });

  it('should create game of WORD type', () => {
    const action = GameActions.addGame(GAME_TYPES.WORD);
    expect(action.payload.type).to.eq(GAME_TYPES.WORD);
  });

  it('should create game of NUMBER type', () => {
    const action = GameActions.addGame(GAME_TYPES.NUMBER);
    expect(action.payload.type).to.eq(GAME_TYPES.NUMBER);
  });

  it('should create unfinished game', () => {
    const action = GameActions.addGame(GAME_TYPES.NUMBER);
    expect(action.payload.finished).to.eq(false);
  });
});
