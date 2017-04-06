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
      {word: 'baker', matches: [0, 1]},
      {word: 'bazuka', matches: [0, 1, 2]}
    ];

    const wrapper = shallow(<MoveList moves={moves}/>).find('.ordered-reverse');

    expect(wrapper).to.have.exactly(2).descendants(Move);
    expect(wrapper).to.contain(<Move word="baker" matches={[0, 1]}/>);
    expect(wrapper).to.contain(<Move word="bazuka" matches={[0, 1, 2]}/>);
  });
});

