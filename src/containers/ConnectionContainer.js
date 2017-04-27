'use strict';

import { connect } from 'react-redux';
import { ConnectionActions } from '../actions';
import ConnectionForm from '../components/ConnectionForm';

const mapStateToProps = (state) => ({
  inFlight: state.connection.fetchState.inFlight,
  error: state.connection.fetchState.error,
  connected: state.connection.connected
});

const mapDispatchToProps = (dispatch) => ({
  connect: (playerName) => (dispatch(ConnectionActions.connect(playerName))),
  disconnect: () => (dispatch(ConnectionActions.connectionClosed()))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionForm);
