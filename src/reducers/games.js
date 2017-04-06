'use strict';

import { gamesInitialState } from './initialStates';
import { GAME_ADDED, WORD_GUESSED, NUMBER_GUESSED } from '../actions/actionTypes';
import { NUMBER_GAME_RESPONSES } from '../constants';

const games = (state = gamesInitialState, action) => {
  switch (action.type) {
    case GAME_ADDED: {
      return [...state, action.payload];
    }
    case WORD_GUESSED: {
      const word = action.payload.word;
      const index = state.findIndex((g) => (g.id === action.payload.id));
      const updatedGame = {
        ...state[index],
        moves: [...state[index].moves, {word, matches: getWordGameMatches(state[index].target, word)}],
        finished: state[index].target === word
      };

      return [
        ...state.slice(0, index),
        updatedGame,
        ...state.slice(index + 1)
      ];
    }
    case NUMBER_GUESSED: {
      const number = action.payload.number;
      const index = state.findIndex((g) => (g.id === action.payload.id));
      const updatedGame = {
        ...state[index],
        moves: [...state[index].moves, {number, response: getNumberGameResponse(state[index].target, number)}],
        finished: state[index].target === number
      };

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

const getWordGameMatches = (target, word) => {
  let matches = [];
  const n = target.length >= word.length ? target.length : word.length;
  for (let i = 0; i < n; i++) {
    if (word[i] === target[i]) {
      matches.push(i);
    }
  }
  return matches;
};

const getNumberGameResponse = (target, number) => {
  let response;

  if (number === target) {
    response = NUMBER_GAME_RESPONSES.WIN;
  } else {
    response = number < target ? NUMBER_GAME_RESPONSES.SMALL : NUMBER_GAME_RESPONSES.BIG;
  }
  return response;
};
