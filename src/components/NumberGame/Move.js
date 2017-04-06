'use strict';

import React from 'react';

const Move = (props) => {
  switch (props.response) {
    case 'WIN':
      return (<p className="green">{`${props.number}: was correct`}</p>);
    case 'SMALL':
      return (<p className="red">{`${props.number}: was smaller than target`}</p>);
    case 'BIG':
      return (<p className="red">{`${props.number}: was bigger than target`}</p>);
  }
};

Move.propTypes = {
  number: React.PropTypes.number.isRequired,
  response: React.PropTypes.string.isRequired
};

export default Move;