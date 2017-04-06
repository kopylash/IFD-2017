'use strict';

import React from 'react';
import Move from './Move';

const MoveList = (props) => {
  const moves = props.moves.map((move, idx) => {
    return (
      <Move key={idx} word={move.word} matches={move.matches}/>
    );
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
    word: React.PropTypes.string,
    matches: React.PropTypes.arrayOf(React.PropTypes.number)
  })).isRequired
};

export default MoveList;

