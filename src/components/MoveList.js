'use strict';

import React from 'react';

const MoveList = (props) => {
  const moves = props.moves.map((move, idx) => {
    switch (move.response) {
      case 'WIN':
        return (<p className="move-correct" key={idx}>{`${move.number}: was correct`}</p>);
      case 'SMALL':
        return (<p className="move-incorrect" key={idx}>{`${move.number}: was smaller than target`}</p>);
      case 'BIG':
        return (<p className="move-incorrect" key={idx}>{`${move.number}: was bigger than target`}</p>);
    }
  });

  return moves.length ? (
    <div>
      <h4>Previous moves:</h4>
      <div className="move-list">{moves}</div>
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
