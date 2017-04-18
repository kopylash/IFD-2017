import React from 'react';
import { shallow } from 'enzyme';

import MoveList from '../../../src/components/WordGame/MoveList';
import Move from '../../../src/components/WordGame/Move';

describe('MoveList', () => {
  it('renders nothing if moves are empty', () => {
    expect(shallow(<MoveList moves={[]}/>)).to.not.contain(<div className="ordered-reverse"></div>);
  });

  it('renders Move for each move', () => {
    const moves = [
      {guess: 'baker', letterMatches: [true, true, false, false, false], correct: false},
      {guess: 'bazuka', letterMatches: [true, true, true, false, false], correct: false}
    ];

    const wrapper = shallow(<MoveList moves={moves}/>).find('.ordered-reverse');

    expect(wrapper).to.have.exactly(2).descendants(Move);
    expect(wrapper).to.contain(<Move guess="baker" letterMatches={[true, true, false, false, false]} correct={false}/>);
    expect(wrapper).to.contain(<Move guess="bazuka" letterMatches={[true, true, true, false, false]} correct={false}/>);
  });
});
