'use strict';

import React, { Component } from 'react';
import GuessNumberApp from './GuessNumberApp';
import GuessWordApp from './GuessWordApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app'>
        <GuessNumberApp/>
        <GuessWordApp/>
      </div>
    );
  }
}

export default App;
