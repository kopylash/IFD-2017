import React from 'react';
import { shallow } from 'enzyme';

import { GAME_TYPES, GAME_STATUSES } from '../../../src/constants';

import GuessWordApp from '../../../src/components/WordGame';
import MoveList from '../../../src/components/WordGame/MoveList';

describe('GuessWordApp component', () => {
  it('does not render anything except message about move processed', () => {
    const game = {
      id: '1',
      fetchState: {
        inFlight: true
      }
    };

    const app = shallow(<GuessWordApp onGuess={sinon.stub()} game={game}/>);

    expect(app).to.not.contain(<MoveList moves={[]}/>);
    expect(app).to.contain('Wait a moment. Your move is processed...');
  });

  it('renders error if fetch state has it', () => {
    const game = {
      id: '1',
      status: GAME_STATUSES.WAITING_FOR_MOVE,
      moves: [],
      type: GAME_TYPES.WORD,
      fetchState: {
        inFlight: false,
        error: 'oops, error'
      }
    };

    const app = shallow(<GuessWordApp onGuess={sinon.stub()} game={game}/>);

    expect(app).to.contain(<MoveList moves={[]}/>);
    expect(app).to.contain(<span className="red">{game.fetchState.error}</span>);
  });
});
