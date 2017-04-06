'use strict';

import { GAME_ADDED, WORD_GUESSED, NUMBER_GUESSED } from './actionTypes';

const WORD_GAME = 'WORD_GAME';
// const NUMBER_GAME = 'NUMBER_GAME';
const WORDS = ['paper', 'grill', 'basil', 'hinge', 'ruler'];

let id = 0;

const createGame = (type) => ({
  id: id++,
  type: type,
  finished: false,
  target: type === WORD_GAME ? WORDS[Math.floor(Math.random() * WORDS.length)] : Math.floor(Math.random() * 10),
  moves: []
});

export const addGame = (type) => {
  return {
    type: GAME_ADDED,
    payload: createGame(type)
  };
};

export const guessWord = (id, word) => {
  return {
    type: WORD_GUESSED,
    payload: {
      id,
      word
    }
  };
};

export const guessNumber = (id, number) => {
  return {
    type: NUMBER_GUESSED,
    payload: {
      id,
      number
    }
  };
};
