'use strict';

import { connect } from 'react-redux';
import PlayerList from '../components/PlayerList';

const mapStateToProps = (state) => ({
  players: state.players,
  currentPlayerId: state.connection.playerId,
  show: state.connection.connected
});

export default connect(mapStateToProps)(PlayerList);
