import React from 'react';
import { shallow } from 'enzyme';

import ConnectionForm from '../../src/components/ConnectionForm';

describe('GuessWordForm', () => {
  it('renders', () => {
    expect(shallow(
      <ConnectionForm inFlight={false} connected={false} connect={sinon.stub()} disconnect={sinon.stub()}/>
    )).to.exist;
  });

  it('calls connect with player name if connect button clicked', () => {
    const connect = sinon.stub();
    const form = shallow(<ConnectionForm inFlight={false} connected={false} connect={connect}
                                         disconnect={sinon.stub()}/>);

    form.setState({playerName: 'vals'});
    form.find('#connectBtn').simulate('click');

    expect(connect).to.have.been.calledWith('vals');
  });

  it('calls disconnect with player name if disconnect button clicked', () => {
    const disconnect = sinon.stub();
    const form = shallow(<ConnectionForm inFlight={false} connected={true} connect={sinon.stub()}
                                         disconnect={disconnect}/>);

    form.find('#disconnectBtn').simulate('click');

    expect(disconnect).to.have.been.called;
  });

  it('renders input and connect button if not connected');

  it('renders disconnect button if connected');

  it('renders nothing except message about connection in process');

  it('renders error');
});
