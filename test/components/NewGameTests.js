import React from 'react';
import { shallow } from 'enzyme';

import NewGame from '../../src/components/NewGame';

describe('NewGame component', () => {
  it('does not render anything except message about game is creating', () => {
    const app = shallow(<NewGame show={true} createGame={sinon.stub()} inFlight={true}/>);

    expect(app).to.not.contain(<button/>);
    expect(app).to.contain('Creating game ...');
  });

  it('renders error', () => {
    const app = shallow(<NewGame show={true} createGame={sinon.stub()} inFlight={false} error={'error'}/>);

    expect(app).contains.exactly(2).descendants('button');
    expect(app).to.contain(<span className="red">{'error'}</span>);
  });

  it('does not render anything if show property is false', () => {
    const app = shallow(<NewGame show={false} createGame={sinon.stub()} inFlight={false}/>);

    expect(app).to.not.contain(<button/>);
    expect(app).to.not.contain(<h3>Create a game!</h3>);
  });
});
