import React from 'react';
import { shallow } from 'enzyme';

import Move from '../../../src/components/WordGame/Move';

describe('Move', () => {
  it('exists', () => {
    expect(shallow(<Move guess={'baker'} letterMatches={[true, true, false, false, false]}/>)).to.exist;
  });

  it('renders green letters', () => {
    expect(shallow(<Move guess={'baker'} letterMatches={[true, true, false, false, false]}/>))
      .to.contain(<span className="green">b</span>);
  });

  it('renders red letters', () => {
    expect(shallow(<Move guess={'baker'} letterMatches={[false, false, false, false, false]}/>))
      .to.contain(<span className="red">b</span>);
  });
});
