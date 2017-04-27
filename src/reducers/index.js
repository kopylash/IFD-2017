'use strict';

import { combineReducers } from 'redux';

import games from './games';
import connection from './connection';
import players from './players';

const rootReducer = combineReducers({
  games,
  connection,
  players
});

export default rootReducer;
