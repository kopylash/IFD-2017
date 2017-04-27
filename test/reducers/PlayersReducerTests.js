'use strict';

import reducer from '../../src/reducers/players';
import {
  PLAYERS_CHANGED,
  CONNECTION_CLOSED
} from '../../src/actions/actionTypes';

describe('Connection tests', () => {
  it('has the right initial state', () => {
    const state = reducer(undefined, {});
    expect(state).to.be.empty;
  });

  it('should set the players from payload as the new state', () => {
    const previousState = [{id: '1', name: 'vlad'}];
    const action = {
      type: PLAYERS_CHANGED,
      payload: [{id: '1', name: 'vlad'}, {id: '3', name: 'valera'}]
    };
    const newState = reducer(previousState, action);

    expect(newState).to.have.lengthOf(2);
    expect(newState[1]).to.eql({id: '3', name: 'valera'});
  });

  it('should reset state on connection close', () => {
    const previuosState = [{id: '1', name: 'vlad'}, {id: '3', name: 'valera'}]
    const action = {
      type: CONNECTION_CLOSED,
      payload: {}
    };
    const newState = reducer(previuosState, action);

    expect(newState).to.be.empty;
  });
});
