'use strict';

import React from 'react';
import NewGameContainer from './NewGameContainer';
import GamesContainer from './GamesContainer';
import ConnectionContainer from './ConnectionContainer';
import PlayersContainer from './PlayersContainer';

const App = () => {
    return (
      <div>
        <h1>Game Lobby</h1>
        <ConnectionContainer />
        <PlayersContainer />
        <NewGameContainer />
        <GamesContainer />
      </div>
    );
};

export default App;
