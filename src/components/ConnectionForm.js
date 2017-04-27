'use strict';

import React, { Component } from 'react';

class ConnectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };
  }

  onChange(event) {
    this.setState({playerName: event.target.value});
  }

  onSubmit() {
    if (this.state.playerName) {
      this.props.connect(this.state.playerName);
      this.setState({playerName: ''});
    }
  }

  render() {
    return this.props.inFlight ? <p>Connecting...</p> : (
      <div>
        {this.props.connected ? (
          <button id="disconnectBtn" onClick={() => this.props.disconnect()}>Disconnect</button>
        ) : (
          <div><input type="text"
                      placeholder="Enter the name"
                      value={this.state.playerName}
                      onChange={this.onChange.bind(this)}
          />
            <button id="connectBtn" onClick={this.onSubmit.bind(this)}>Connect</button>
          </div>
        )}
        {this.props.error ? <span className="red">{this.props.error}</span> : null}
      </div>
    );
  }
}

ConnectionForm.defaultProps = {
  inFlight: false,
  connected: false,
};

ConnectionForm.propTypes = {
  inFlight: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
  connected: React.PropTypes.bool.isRequired,
  connect: React.PropTypes.func.isRequired,
  disconnect: React.PropTypes.func.isRequired
};

export default ConnectionForm;
