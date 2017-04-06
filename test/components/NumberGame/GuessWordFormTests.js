import React from 'react';
import { shallow } from 'enzyme';

import GuessNumberForm from '../../../src/components/NumberGame/GuessNumberForm';

describe('GuessNumberForm', () => {
  it('renders', () => {
    expect(shallow(
      <GuessNumberForm onSubmit={sinon.stub()} finished={false}/>
    )).to.exist;
  });

  it('calls submit with number when submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessNumberForm onSubmit={onSubmit} finished={false}/>);

    form.setState({guessNumber: '123'});
    form.find('input').simulate('keyUp', {keyCode: 13});

    expect(onSubmit).to.have.been.calledWith(123);
  });

  it('should not call submit if input is empty', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessNumberForm onSubmit={onSubmit} finished={false}/>);

    form.setState({guessNumber: ''});
    form.find('input').simulate('keyUp', {keyCode: 13});

    expect(onSubmit).not.to.have.been.called;
  });

  it('clears state when submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessNumberForm onSubmit={onSubmit} finished={false}/>);

    form.setState({guessNumber: '123'});
    form.find('input').simulate('keyUp', {keyCode: 13});

    expect(form.state()).to.eql({guessNumber: ''});
  });

  it('renders "You won!" when game finish', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessNumberForm onSubmit={onSubmit} finished={true}/>);

    expect(form).not.to.have.descendants('input');
    expect(form).to.contain(<p>You won!</p>);
  });
});

