'use strict';

import NumberGame from '../../src/model/NumberGame';

describe('Number Game', () => {
  it('should create Game instance correctly', () => {
    const game = new NumberGame(5);
    expect(game.finished).to.eql(false);
    expect(game.moves.length).to.eql(0);
  });

  it('should return WIN when guess is correct', () => {
    const game = new NumberGame(5);
    expect(game.guess(5)).to.eql('WIN');
    expect(game.finished).to.eql(true);
  });

  it('should return SMALL when guess is less than target number', () => {
    const game = new NumberGame(5);
    expect(game.guess(3)).to.eql('SMALL');
  });

  it('should return BIG when guess is more than target number', () => {
    const game = new NumberGame(5);
    expect(game.guess(9)).to.eql('BIG');
  });

  it('should add move on guess', () => {
    const game = new NumberGame(5);
    game.guess(9);
    expect(game.moves.length).to.eql(1);
    expect(game.moves[0].number).to.eql(9);
  });
});
