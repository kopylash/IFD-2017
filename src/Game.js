'use strict';

const WIN = 'WIN';
const SMALL = 'SMALL';
const BIG = 'BIG';

class Game {
  constructor(number) {
    this.targetNumber = number;
    this._finished = false;
  }

  get finished() {
    return this._finished;
  }

  guess(number) {
    if (number === this.targetNumber) {
      this._finished = true;
      return WIN;
    }
    return (number < this.targetNumber ? SMALL : BIG);
  }
}

export default Game;
