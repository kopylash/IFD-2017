'use strict';

import React from 'react';
import NewGameContainer from './NewGameContainer';
import GamesContainer from './GamesContainer';
import ConnectionContainer from './ConnectionContainer';

const App = () => {
    return (
      <div>
        <h1>Game Lobby</h1>
        <ConnectionContainer />
        <NewGameContainer />
        <GamesContainer />
      </div>
    );
};

export default App;
