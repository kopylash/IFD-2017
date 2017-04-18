'use strict';

import React from 'react';
import Move from './Move';

const MoveList = (props) => {
  const moves = props.moves.map((move, idx) => {
    return (
      <Move key={idx} guess={move.guess} letterMatches={move.letterMatches} correct={move.correct}/>
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
    guess: React.PropTypes.string,
    letterMatches: React.PropTypes.arrayOf(React.PropTypes.bool),
    correct: React.PropTypes.bool
  })).isRequired
};

export default MoveList;

