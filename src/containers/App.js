'use strict';

import React from 'react';
import NewGameContainer from './NewGameContainer';
import GamesContainer from './GamesContainer';

const App = () => {
    return (
      <div>
        <h1>Game Lobby</h1>
        <NewGameContainer />
        <GamesContainer />
      </div>
    );
};

export default App;
