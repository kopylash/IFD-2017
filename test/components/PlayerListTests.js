import React from 'react';
import { shallow } from 'enzyme';

import PlayerList from '../../src/components/PlayerList';

describe('PlayerList', () => {
  it('renders nothing if show property is false', () => {
    expect(shallow(<PlayerList show={false} players={[]}/>)).to.be.blank();
  });

  it('renders only header if players are empty', () => {
    const output = shallow(<PlayerList show={true} players={[]}/>);

    expect(output).to.contain(<h3>Active players</h3>);
    expect(output).to.not.contain(<div key="123">vlad</div>);
  });

  it('renders players', () => {
    const players = [{id: '1', name: 'vlad'}, {id: '2', name: 'valera'}];
    const output = shallow(<PlayerList show={true} players={players}/>);

    expect(output).to.contain(<h3>Active players</h3>);
    expect(output.find('h3 + div > div')).to.have.lengthOf(2);
    expect(output.find('h3 + div > div').first()).to.have.html('<div>vlad</div>');
  });

  it('renders players with (you) mark', () => {
    const players = [{id: '1', name: 'vlad'}, {id: '2', name: 'valera'}];
    const output = shallow(<PlayerList show={true} players={players} currentPlayerId={'1'}/>);

    expect(output).to.contain(<h3>Active players</h3>);
    expect(output.find('h3 + div > div')).to.have.lengthOf(2);
    expect(output.find('h3 + div > div').first()).to.have.html('<div>vlad (you)</div>');
  });
});
