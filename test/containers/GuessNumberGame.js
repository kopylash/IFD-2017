'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import GuessNumberApp from '../../src/containers/GuessNumberApp';
import GuessNumberForm from '../../src/components/NumberGame/GuessNumberForm';
import MoveList from '../../src/components/NumberGame/MoveList';

describe('GuessNumberApp', () => {
  it('initially renders empty MoveList', () => {
    expect(
      shallow(<GuessNumberApp />)
    ).to.contain(
      <MoveList moves={[]}/>
    );
  });

  it('renders GuessNumberForm', () => {
    expect(shallow(<GuessNumberApp />)).to.contain.descendants(GuessNumberForm);
  });

  it('adds new Move to MoveList when submitted from GuessNumberForm', () => {
    const app = shallow(<GuessNumberApp />);

    app.find(GuessNumberForm).props().onSubmit(15);

    expect(app).to.contain(<MoveList moves={[{number: 15, response:'BIG'}]}/>);
  });


  it('changes state of finished when submitted from GuessNumberForm', () => {
    const app = shallow(<GuessNumberApp />);
    const form = app.find(GuessNumberForm);

    app.setState({finished: true});
    form.props().onSubmit(15);

    expect(app.state().finished).to.eql(false);
  });
});
