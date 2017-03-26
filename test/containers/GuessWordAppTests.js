'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import GuessWordApp from '../../src/containers/GuessWordApp';
import GuessWordForm from '../../src/components/WordGame/GuessWordForm';
import MoveList from '../../src/components/WordGame/MoveList';

describe('GuessWordApp', () => {
  it('initially renders empty MoveList', () => {
    expect(
      shallow(<GuessWordApp />)
    ).to.contain(
      <MoveList moves={[]}/>
    );
  });

  it('renders GuessWordForm', () => {
    expect(shallow(<GuessWordApp />)).to.contain.descendants(GuessWordForm);
  });

  it('adds new Move to MoveList when submitted from GuessWordForm', () => {
    const app = shallow(<GuessWordApp />);

    app.find(GuessWordForm).props().onSubmit('accd');

    expect(app).to.contain(<MoveList moves={[{word: 'accd', matches: []}]}/>);
  });


  it('changes state of finished when submitted from GuessWordForm', () => {
    const app = shallow(<GuessWordApp />);
    const form = app.find(GuessWordForm);

    app.setState({finished: true});
    form.props().onSubmit('acdc');

    expect(app.state().finished).to.eql(false);
  });
});
