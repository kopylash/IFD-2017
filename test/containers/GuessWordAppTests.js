'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import GuessWordApp from '../../src/containers/GuessWordApp';
import GuessWordForm from '../../src/components/WordGame/GuessWordForm';
import MoveList from '../../src/components/WordGame/MoveList';
import { WORDS } from '../../src/model/WordGame';

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


  /*
   * maybe it is not the best test due to bruteforcing of win word
   */
  it('changes state of finished when submitted from GuessWordForm', () => {
    const app = shallow(<GuessWordApp />);
    const form = app.find(GuessWordForm);

    WORDS.some((w) => {
      form.props().onSubmit(w);
      return (app.state().finished);
    });

    expect(app.state().finished).to.eql(true);
  });
});
