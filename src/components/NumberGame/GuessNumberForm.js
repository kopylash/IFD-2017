'use strict';

import React, { Component } from 'react';

class GuessNumberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessNumber: ''
    };
  }

  onChange(event) {
    if (!isNaN(event.target.value)) {
      this.setState({guessNumber: event.target.value});
    } else {
      this.setState({guessNumber: ''});
    }
  }

  onEnterKey(event) {
    if (event.keyCode === 13) {
      let num = this.state.guessNumber;

      this.setState({guessNumber: ''});

      if (num.length) {
        this.props.onSubmit(parseInt(num));
      }
    }
  }

  render() {
    return this.props.finished ? (<p>You won!</p>) : (
      <div>
        <p>Guess a number from 0 to 9</p>
        <input type="text"
               placeholder="Guess the number"
               value={this.state.guessNumber}
               onChange={this.onChange.bind(this)}
               onKeyUp={this.onEnterKey.bind(this)}
        />
      </div>
    );
  }
}

GuessNumberForm.defaultProps = {
  finished: false
};

GuessNumberForm.propTypes = {
  finished: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default GuessNumberForm;
