'use strict';

import React from 'react';

const Move = (props) => {
  return (
    <div key={props.key}>
      {
        props.word.split('').map((letter, idx) => {
          return <span className={props.matches.indexOf(idx) > -1 ? 'green' : 'red'} key={idx}>{letter}</span>;
        })
      }
    </div>
  );
};

Move.propTypes = {
  word: React.PropTypes.string.isRequired,
  matches: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
};

export default Move;
