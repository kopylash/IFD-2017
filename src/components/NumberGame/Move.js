'use strict';

import React from 'react';
import { NUMBER_GAME_RESPONSES } from '../../constants';

const Move = (props) => {
  switch (props.comparedToAnswer) {
    case NUMBER_GAME_RESPONSES.WIN:
      return (<p className="green">{`${props.guess}: was correct`}</p>);
    case NUMBER_GAME_RESPONSES.SMALL:
      return (<p className="red">{`${props.guess}: was smaller than target`}</p>);
    case NUMBER_GAME_RESPONSES.BIG:
      return (<p className="red">{`${props.guess}: was bigger than target`}</p>);
  }
};

Move.propTypes = {
  guess: React.PropTypes.number.isRequired,
  comparedToAnswer: React.PropTypes.string.isRequired
};

export default Move;
