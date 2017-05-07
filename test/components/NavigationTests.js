import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Navigation from '../../src/components/Navigation';

describe('Navigation component', () => {
  it('renders nothing if visible property is false', () => {
    expect(shallow(<Navigation visible={false} />)).to.be.blank();
  });

  it('renders 4 links', () => {
    expect(shallow(<Navigation visible={true} />)).to.have.exactly(4).descendants(Link);
  });
});
