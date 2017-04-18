'use strict';

import {
  GAME_CREATION_REQUEST,
  GAME_CREATION_FAILURE,
  GAME_CREATION_SUCCESS,
  GUESS_REQUEST,
  GUESS_FAILURE,
  GUESS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  fetchState: {
    inFlight: false,
    error: null
  },
  list: []
};

const games = (state = initialState, action) => {
  switch (action.type) {
    case GAME_CREATION_REQUEST: {
      return {...state, fetchState: {inFlight: true}};
    }
    case GAME_CREATION_SUCCESS: {
      return {
        ...state,
        fetchState: {inFlight: false},
        list: [...state.list, {
          ...action.payload,
          moves: [],
          fetchState: {inFlight: false}
        }]
      };
    }
    case GAME_CREATION_FAILURE: {
      return {
        ...state,
        fetchState: {inFlight: false, ...action.payload}
      };
    }
    case GUESS_REQUEST: {
      const index = state.list.findIndex((g) => (g.id === action.payload.gameId));
      const updatedGame = {
        ...state.list[index],
        fetchState: {inFlight: true}
      };

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          updatedGame,
          ...state.list.slice(index + 1)
        ]
      };
    }
    case GUESS_SUCCESS: {
      const {game, move} = action.payload;
      const index = state.list.findIndex((g) => (g.id === game.id));
      const updatedGame = {
        ...game,
        moves: [...state.list[index].moves, move],
        fetchState: {inFlight: false}
      };

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          updatedGame,
          ...state.list.slice(index + 1)
        ]
      };
    }
    case GUESS_FAILURE: {
      const {gameId, error} = action.payload;
      const index = state.list.findIndex((g) => (g.id === gameId));
      const updatedGame = {
        ...state.list[index],
        fetchState: {inFlight: false, ...error}
      };

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          updatedGame,
          ...state.list.slice(index + 1)
        ]
      };
    }
    default:
      return state;
  }
};

export default games;
