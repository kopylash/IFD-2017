'use strict';

import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const mapStateToProps = (state) => ({
  visible: state.connection.connected
});

export default connect(mapStateToProps)(Navigation);
