'use strict';

export const GAME_TYPES = {WORD: 'guess_word', NUMBER: 'guess_number'};

export const NUMBER_GAME_RESPONSES = {
  WIN: 'EQ',
  SMALL: 'LT',
  BIG: 'GT'
};

export const GAME_STATUSES = {
  WAITING_FOR_MOVE: 'waiting_for_move',
  FINISHED: 'finished'
};
