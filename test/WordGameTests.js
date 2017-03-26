'use strict';

import WordGame from '../src/WordGame';

describe('Word Game', () => {
  it('should create Game instance correctly', () => {
    const game = new WordGame('redux');
    expect(game.finished).to.eql(false);
    expect(game.moves.length).to.eql(0);
    expect(game.targetWord).to.eql('redux');
  });

  it('should finish the game when the word is correct', () => {
    const game = new WordGame('redux');
    game.guess('redux');
    expect(game.finished).to.eql(true);
  });

  it('should not finish the game on partial match', () => {
    const game = new WordGame('redux');
    game.guess('red12');
    expect(game.finished).to.eql(false);
  });

  it('should return empty array when no matches found', () => {
    const game = new WordGame('redux');
    let matches = game.guess('abracadabra');
    expect(matches).to.be.an.instanceOf(Array);
    expect(matches.length).to.eql(0);
  });

  it('should handle longer word', () => {
    const game = new WordGame('redux');
    let matches = game.guess('reflux');
    expect(matches.length).to.eql(2);
    expect(matches).to.include.members([0, 1]);
  });

  it('should handle empty string', () => {
    const game = new WordGame('redux');
    let matches = game.guess('');
    expect(matches.length).to.eql(0);
  });

  it('should return 3 matches', () => {
    const game = new WordGame('redux');
    let matches = game.guess('ardux');
    expect(matches.length).to.eql(3);
  });

  it('should record moves on each guess', () => {
    const game = new WordGame('redux');
    game.guess('ardux');
    game.guess('babax');
    expect(game.moves.length).to.eql(2);
  });
});
