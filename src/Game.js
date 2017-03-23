'use strict';

const WIN = 'WIN';
const SMALL = 'SMALL';
const BIG = 'BIG';

class Game {
  constructor(number) {
    this.targetNumber = number;
    // Math.floor(Math.random() * 10);
  }

  guess(number) {
    if (number === this.targetNumber) {
      return WIN;
    }
    return (number < this.targetNumber ? SMALL : BIG);
  }

}

export default Game;
