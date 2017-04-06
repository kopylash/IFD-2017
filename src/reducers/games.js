'use strict';

import { gamesInitialState } from './initialStates';
import { GAME_ADDED, WORD_GUESSED, NUMBER_GUESSED } from '../actions/actionTypes';

const WIN = 'WIN';
const SMALL = 'SMALL';
const BIG = 'BIG';

const games = (state = gamesInitialState, action) => {
  switch (action.type) {
    case GAME_ADDED: {
      return [...state, action.payload];
    }
    case WORD_GUESSED: {
      const word = action.payload.word;
      const index = state.findIndex((g) => (g.id === action.payload.id));
      const updatedGame = {...state[index]};

      let matches = [];
      const n = updatedGame.target.length >= word.length ? updatedGame.target.length : word.length;
      for (let i = 0; i < n; i++) {
        if (word[i] === updatedGame.target[i]) {
          matches.push(i);
        }
      }
      updatedGame.moves = [...updatedGame.moves, {word, matches}];
      updatedGame.finished = updatedGame.target === word;

      return [
        ...state.slice(0, index),
        updatedGame,
        ...state.slice(index + 1)
      ];
    }
    case NUMBER_GUESSED: {
      const number = action.payload.number;
      const index = state.findIndex((g) => (g.id === action.payload.id));
      const updatedGame = {...state[index]};

      let response;

      if (number === updatedGame.target) {
        updatedGame.finished = true;
        response = WIN;
      } else {
        response = number < updatedGame.target ? SMALL : BIG;
      }

      updatedGame.moves = [...updatedGame.moves, {number, response}];

      return [
        ...state.slice(0, index),
        updatedGame,
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
};

export default games;
