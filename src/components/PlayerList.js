'use strict';

import React from 'react';

const PlayerList = (props) => {
  return props.show ? (
    <div>
      <h3>Active players</h3>
      <div>
        {props.players.map((player) => {
          return <div key={player.id}>{`${player.name}${player.id === props.currentPlayerId ? ' (you)' : ''}`}</div>;
        })}
      </div>
    </div>
  ) : null;
};

PlayerList.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  })).isRequired,
  currentPlayerId: React.PropTypes.string,
  show: React.PropTypes.bool.isRequired
};

export default PlayerList;
