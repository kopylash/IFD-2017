'use strict';

import React from 'react';
import { NUMBER_GAME_RESPONSES } from '../../constants';

const Move = (props) => {
  switch (props.response) {
    case NUMBER_GAME_RESPONSES.WIN:
      return (<p className="green">{`${props.number}: was correct`}</p>);
    case NUMBER_GAME_RESPONSES.SMALL:
      return (<p className="red">{`${props.number}: was smaller than target`}</p>);
    case NUMBER_GAME_RESPONSES.BIG:
      return (<p className="red">{`${props.number}: was bigger than target`}</p>);
  }
};

Move.propTypes = {
  number: React.PropTypes.number.isRequired,
  response: React.PropTypes.string.isRequired
};

export default Move;
