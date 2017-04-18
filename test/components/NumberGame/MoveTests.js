import React from 'react';
import { shallow } from 'enzyme';
import { NUMBER_GAME_RESPONSES } from '../../../src/constants';

import Move from '../../../src/components/NumberGame/Move';

describe('Move', () => {
  it('exists', () => {
    expect(shallow(<Move guess={3} comparedToAnswer={NUMBER_GAME_RESPONSES.WIN}/>)).to.exist;
  });

  it('renders green if WIN', () => {
    expect(shallow(<Move guess={3} comparedToAnswer={NUMBER_GAME_RESPONSES.WIN}/>))
      .to.contain(<p className="green">3: was correct</p>);
  });

  it('renders red if not WIN', () => {
    expect(shallow(<Move guess={3} comparedToAnswer={NUMBER_GAME_RESPONSES.SMALL}/>))
      .to.contain(<p className="red">3: was smaller than target</p>);
  });
});
