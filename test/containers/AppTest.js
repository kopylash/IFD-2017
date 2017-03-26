'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/containers/App';
import GuessWordApp from '../../src/containers/GuessWordApp';
import GuessNumberApp from '../../src/containers/GuessNumberApp';

describe('App', () => {
  it('initially does not render game apps', () => {
    expect(shallow(<App />)).not.to.contain.descendants(GuessNumberApp);
    expect(shallow(<App />)).not.to.contain.descendants(GuessWordApp);
  });

  it('renders buttons', () => {
    expect(shallow(<App />)).to.have.exactly(2).descendants('button');
  });

  it('adds new WordGame when a proper button clicked', () => {
    const app = shallow(<App />);

    app.find('#wordGameBtn').simulate('click');

    expect(app).to.contain.descendants(GuessWordApp);
  });

  it('adds new NumberGame when a proper button clicked', () => {
    const app = shallow(<App />);

    app.find('#numberGameBtn').simulate('click');

    expect(app.find('.ordered-reverse')).to.contain.descendants(GuessNumberApp);
  });
});
