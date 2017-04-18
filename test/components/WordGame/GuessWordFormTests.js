import React from 'react';
import { shallow } from 'enzyme';

import GuessWordForm from '../../../src/components/WordGame/GuessWordForm';

describe('GuessWordForm', () => {
  it('renders', () => {
    expect(shallow(
      <GuessWordForm onSubmit={sinon.stub()} finished={false}/>
    )).to.exist;
  });

  it('calls submit with text when submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessWordForm onSubmit={onSubmit} finished={false}/>);

    form.setState({guessWord: 'vals'});
    form.find('input').simulate('keyUp', {keyCode: 13});

    expect(onSubmit).to.have.been.calledWith('vals');
  });

  it('clears state when submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessWordForm onSubmit={onSubmit} finished={false}/>);

    form.setState({guessWord: 'vals'});
    form.find('input').simulate('keyUp', {keyCode: 13});

    expect(form.state()).to.eql({guessWord: ''});
  });

  it('renders "You won!" when game finish', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessWordForm onSubmit={onSubmit} finished={true}/>);

    expect(form).not.to.have.descendants('input');
    expect(form).to.contain(<p>You won!</p>);
  });
});
