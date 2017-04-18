'use strict';

import React from 'react';

const Move = (props) => {
  return (
    <div>
      {
        props.guess.split('').map((letter, idx) => {
          return <span className={props.letterMatches[idx] ? 'green' : 'red'} key={idx}>{letter}</span>;
        })
      }
    </div>
  );
};

Move.propTypes = {
  correct: React.PropTypes.bool,
  guess: React.PropTypes.string.isRequired,
  letterMatches: React.PropTypes.arrayOf(React.PropTypes.bool).isRequired
};

export default Move;

