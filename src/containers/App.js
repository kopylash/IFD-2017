'use strict';

import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import NewGameContainer from './NewGameContainer';
import GamesContainer from './GamesContainer';
import ConnectionContainer from './ConnectionContainer';
import PlayersContainer from './PlayersContainer';
import NavigationContainer from './NavigationContainer';

const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <NavigationContainer/>
        <h1>Game lobby</h1>
        <ConnectionContainer />
        <Route path="/players" component={PlayersContainer}/>
        <Route path="/createGame" component={NewGameContainer}/>
        <Route path="/ongoingGames" component={GamesContainer}/>
        <Route path="/finishedGames" component={GamesContainer}/>
        {/* <Route path="/games/:gameId" component={GameContainer}/> */}
      </div>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default App;
