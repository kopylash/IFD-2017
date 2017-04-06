import React from 'react';
import { shallow } from 'enzyme';

import MoveList from '../../../src/components/NumberGame/MoveList';
import Move from '../../../src/components/NumberGame/Move';

describe('MoveList', () => {
  it('renders nothing if moves are empty', () => {
    expect(shallow(<MoveList moves={[]}/>)).to.not.contain(<div className="ordered-reverse"></div>);
  });

  it('renders Move for each move', () => {
    const moves = [
      {number: 3, response: 'WIN'},
      {number: 5, response: 'SMALL'}
    ];

    const wrapper = shallow(<MoveList moves={moves}/>).find('.ordered-reverse');

    expect(wrapper).to.have.exactly(2).descendants(Move);
    expect(wrapper).to.contain(<Move number={3} response="WIN"/>);
    expect(wrapper).to.contain(<Move number={5} response="SMALL"/>);
  });
});

