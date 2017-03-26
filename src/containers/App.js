'use strict';

import React, { Component } from 'react';
import GuessNumberApp from './GuessNumberApp';
import GuessWordApp from './GuessWordApp';

const WORD_GAME = 'WORD_GAME';
const NUMBER_GAME = 'NUMBER_GAME';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  createGame(type) {
    this.setState({
      games: [...this.state.games, {type}]
    });
  }

  renderGames() {
    return this.state.games.map((game, idx)=> {
      return game.type === WORD_GAME
        ? <GuessWordApp key={idx}/>
        : <GuessNumberApp key={idx}/>;
    });
  }

  render() {
    return (
      <div>
        <h1>Game Lobby</h1>
        <button onClick={() => {this.createGame(WORD_GAME)}}>Create word game</button>
        <button onClick={() => {this.createGame(NUMBER_GAME)}}>Create number game</button>
        {this.renderGames()}
      </div>
    );
  }
}

export default App;
