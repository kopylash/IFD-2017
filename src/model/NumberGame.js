'use strict';

const WIN = 'WIN';
const SMALL = 'SMALL';
const BIG = 'BIG';

class NumberGame {
  constructor(number) {
    this.targetNumber = number;
    this._finished = false;
    this._moves = [];
  }

  get finished() {
    return this._finished;
  }

  get moves() {
    return this._moves;
  }

  guess(number) {
    let response;

    if (number === this.targetNumber) {
      this._finished = true;
      response = WIN;
    } else {
      response = number < this.targetNumber ? SMALL : BIG;
    }

    this._moves.push({number, response});

    return response;
  }
}

export default NumberGame;
