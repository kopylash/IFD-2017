import React from 'react';
import { shallow } from 'enzyme';

import GameList from '../../src/components/GameList';

describe('GameList', () => {
  it('renders nothing if show property is false', () => {
    expect(shallow(<GameList show={false} games={[]}/>)).to.be.blank();
  });
});
