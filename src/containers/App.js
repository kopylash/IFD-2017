'use strict';

import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import NewGameContainer from './NewGameContainer';
import GameListContainer from './GameListContainer';
import ConnectionContainer from './ConnectionContainer';
import PlayersContainer from './PlayersContainer';
import NavigationContainer from './NavigationContainer';
import SingleGameContainer from './SingleGameContainer';
import { GAME_STATUSES } from '../constants';

const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <NavigationContainer/>
        <h1>Game lobby</h1>
        <ConnectionContainer />
        <Route path="/players" component={PlayersContainer}/>
        <Route path="/createGame" component={NewGameContainer}/>
        <Route path="/ongoingGames"
               render={() => (<GameListContainer filter={(g) => g.status !== GAME_STATUSES.FINISHED}/>)}/>
        <Route path="/finishedGames"
               render={() => (<GameListContainer filter={(g) => g.status === GAME_STATUSES.FINISHED}/>)}/>
        <Route path="/games/:gameId" component={SingleGameContainer}/>
      </div>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default App;
