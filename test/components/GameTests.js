import React from 'react';
import { shallow } from 'enzyme';

import Game from '../../src/components/Game';
import WordGame from '../../src/components/WordGame';
import NumberGame from '../../src/components/NumberGame';
import { GAME_TYPES, GAME_STATUSES } from '../../src/constants';

describe('Game component tests', () => {
  it('renders nothing if show property is false', () => {
    expect(shallow(<Game show={false} games={[]}/>)).to.be.blank();
  });

  it('should render message that game not found if game prop is undefined', () => {
    expect(shallow(<Game show={true}/>).text()).to.include('Game not found');
  });

  it('should render Word game if type is appropriate', () => {
    const game = {
      id: '1',
      type: GAME_TYPES.WORD,
      status: GAME_STATUSES.WAITING_FOR_MOVE,
      moves: [],
      fetchState: {inFlight: false}
    };
    const guess = sinon.stub();
    expect(shallow(<Game show={true} game={game} guess={guess}/>)).to.contain(<WordGame game={game} onGuess={guess}/>);
  });

  it('should render Number game if type is appropriate', () => {
    const game = {
      id: '1',
      type: GAME_TYPES.NUMBER,
      status: GAME_STATUSES.WAITING_FOR_MOVE,
      moves: [],
      fetchState: {inFlight: false}
    };
    const guess = sinon.stub();
    expect(shallow(<Game show={true} game={game} guess={guess}/>))
      .to.contain(<NumberGame game={game} onGuess={guess}/>);
  });
});
