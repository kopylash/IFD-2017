'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return props.visible ? (
    <ul>
      <li><Link to="/createGame">Create game</Link></li>
      <li><Link to="/players">Online players</Link></li>
      <li><Link to="/ongoingGames">Ongoing games</Link></li>
      <li><Link to="/finishedGames">Finished games</Link></li>
    </ul>
  ) : null;
};

Navigation.propTypes = {
  visible: React.PropTypes.bool.isRequired
};

export default Navigation;
