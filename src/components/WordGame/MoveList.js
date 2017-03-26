'use strict';

import React from 'react';

const MoveList = (props) => {
  const renderChars = (move) => {
    return move.word.split('').map((letter, idx) => {
      return <span className={move.matches.indexOf(idx) > -1 ? 'green' : 'red'} key={idx}>{letter}</span>;
    })
  };

  const moves = props.moves.map((move, idx) => {
    return (
      <div key={idx}>{renderChars(move)}</div>
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
