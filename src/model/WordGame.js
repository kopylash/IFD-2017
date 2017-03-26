'use strict';

const WORDS = ['paper', 'grill', 'basil', 'hinge', 'ruler'];

export {
  WORDS
};

class WordGame {
  constructor(word) {
    this.targetWord = word;
    this._finished = false;
    this._moves = [];
  }

  get finished() {
    return this._finished;
  }

  get moves() {
    return this._moves;
  }

  guess(word = '') {
    let matches = [];
    const n = this.targetWord.length >= word.length ? this.targetWord.length : word.length;

    for (let i = 0; i < n; i++) {
      if (word[i] === this.targetWord[i]) {
        matches.push(i);
      }
    }

    this._moves.push({word, matches});
    this._finished = this.targetWord === word;

    return matches;
  }
}

export default WordGame;
