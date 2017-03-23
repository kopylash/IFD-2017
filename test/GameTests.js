import Game from '../src/Game';

describe('Game', () => {
  it('should return WIN when guess is correct', () => {
    const game = new Game(5);
    expect(game.guess(5)).to.eql('WIN');
  });

  it('should return SMALL when guess is less than target number', () => {
    const game = new Game(5);
    expect(game.guess(3)).to.eql('SMALL');
  });

  it('should return BIG when guess is more than target number', () => {
    const game = new Game(5);
    expect(game.guess(9)).to.eql('BIG');
  });
});
