import React from 'react';
import { shallow } from 'enzyme';

import Move from '../../../src/components/NumberGame/Move';

describe('Move', () => {
  it('exists', () => {
    expect(shallow(<Move number={3} response="WIN"/>)).to.exist;
  });

  it('renders green if WIN', () => {
    expect(shallow(<Move number={3} response="WIN"/>))
      .to.contain(<p className="green">3: was correct</p>);
  });

  it('renders red if not WIN', () => {
    expect(shallow(<Move number={3} response="SMALL"/>))
      .to.contain(<p className="red">3: was smaller than target</p>);
  });
});
