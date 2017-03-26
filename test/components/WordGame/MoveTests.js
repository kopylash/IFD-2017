import React from 'react';
import { shallow } from 'enzyme';

import Move from '../../../src/components/WordGame/Move';

describe('Move', () => {
  it('exists', () => {
    expect(shallow(<Move word={'baker'} matches={[0, 1]}/>)).to.exist;
  });

  it('renders green letters', () => {
    expect(shallow(<Move word={'baker'} matches={[0, 1]}/>))
      .to.contain(<span className="green">b</span>);
  });

  it('renders red letters', () => {
    expect(shallow(<Move word={'baker'} matches={[]}/>))
      .to.contain(<span className="red">b</span>);
  });
});
