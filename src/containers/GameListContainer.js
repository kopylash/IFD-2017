'use strict';

import { connect } from 'react-redux';
import GameList from '../components/GameList';

const mapStateToProps = (state, ownProps) => ({
  games: state.games.list.filter(ownProps.filter),
  show: state.connection.connected
});

export default connect(mapStateToProps)(GameList);
