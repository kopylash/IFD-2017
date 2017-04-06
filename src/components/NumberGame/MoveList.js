'use strict';

import React from 'react';
import Move from './Move';

const MoveList = (props) => {
  const moves = props.moves.map((move, idx) => {
    return <Move key={idx} number={move.number} response={move.response}/>;
  });

  return moves.length ? (
    <div>
      <h4>Previous moves:</h4>
      <div className="ordered-reverse">{moves}</div>
    </div>
  ) : null;
};

MoveList.propTypes = {
  moves: React.PropTypes.arrayOf(React.PropTypes.shape({
    number: React.PropTypes.number,
    response: React.PropTypes.string
  })).isRequired
};

export default MoveList;

