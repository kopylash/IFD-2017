import React from 'react';
import { shallow } from 'enzyme';
import { NUMBER_GAME_RESPONSES } from '../../../src/constants';

import MoveList from '../../../src/components/NumberGame/MoveList';
import Move from '../../../src/components/NumberGame/Move';

describe('MoveList', () => {
  it('renders nothing if moves are empty', () => {
    expect(shallow(<MoveList moves={[]}/>)).to.not.contain(<div className="ordered-reverse"></div>);
  });

  it('renders Move for each move', () => {
    const moves = [
      {guess: 3, comparedToAnswer: NUMBER_GAME_RESPONSES.WIN},
      {guess: 5, comparedToAnswer: NUMBER_GAME_RESPONSES.SMALL}
    ];

    const wrapper = shallow(<MoveList moves={moves}/>).find('.ordered-reverse');

    expect(wrapper).to.have.exactly(2).descendants(Move);
    expect(wrapper).to.contain(<Move guess={3} comparedToAnswer={NUMBER_GAME_RESPONSES.WIN}/>);
    expect(wrapper).to.contain(<Move guess={5} comparedToAnswer={NUMBER_GAME_RESPONSES.SMALL}/>);
  });
});
