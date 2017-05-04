'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import App from './containers/App';
import gameServerMiddleware from './middlewares/GameServerMiddleware';
import webSocketMiddleware from './middlewares/WebsocketMiddleware';

// `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
// store enhancher is applied last so that it will not miss any actions. See
// http://redux.js.org/docs/api/applyMiddleware.html#tips for more information.
const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

let store = createStore(
  connectRouter(history)(rootReducer),
  composeStoreEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      gameServerMiddleware,
      webSocketMiddleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
