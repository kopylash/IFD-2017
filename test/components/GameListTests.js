import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import GameList from '../../src/components/GameList';
import { GAME_STATUSES, GAME_TYPES } from '../../src/constants';

describe('GameList', () => {
  it('renders nothing if show property is false', () => {
    expect(shallow(<GameList show={false} games={[]}/>)).to.be.blank();
  });

  it('should render 2 links to games', () => {
    const games = [
      {
        id: '1',
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE,
        moves: [],
        fetchState: {inFlight: false}
      },
      {
        id: '2',
        type: GAME_TYPES.NUMBER,
        status: GAME_STATUSES.WAITING_FOR_MOVE,
        moves: [],
        fetchState: {inFlight: false}
      }
    ];
    expect(shallow(
      <GameList show={true} games={games}/>
    )).to.have.exactly(2).descendants(Link);
  });

  it('should render message about empty game list if there are no games', () => {
    expect(shallow(
      <GameList show={true} games={[]}/>
    ).text()).to.include('There are no games, create new one to play!');
  });
});
