'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import { GAME_TYPES, GAME_STATUSES } from '../constants';

const GameList = (props) => {
  const formatGameType = (type) => (type === GAME_TYPES.WORD ? 'Word game.' : 'Number game.');
  const formatGameStatus = (status) => (
    `Status: ${status === GAME_STATUSES.WAITING_FOR_MOVE ? 'waiting for move' : 'finished'}`
  );

  return props.show ? (
    <div className="ordered-reverse">
      {props.games.length ? props.games.map((game) => (
        <Link to={'games/' + game.id} key={game.id}>
          {`${formatGameType(game.type)} ${formatGameStatus(game.status)}`}
        </Link>
      )) : 'There are no games, create new one to play!'}
    </div>
  ) : null;
};

GameList.propTypes = {
  games: React.PropTypes.array,
  show: React.PropTypes.bool
};

export default GameList;
