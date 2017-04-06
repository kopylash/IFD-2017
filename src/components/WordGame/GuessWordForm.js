'use strict';

import React, { Component } from 'react';

class GuessWordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessWord: ''
    };
  }

  onChange(event) {
    this.setState({guessWord: event.target.value});
  }

  onEnterKey(event) {
    if (event.keyCode === 13) {
      let word = this.state.guessWord;

      this.setState({guessWord: ''});

      if (word.length) {
        this.props.onSubmit(word);
      }
    }
  }

  render() {
    return this.props.finished ? (<p>You won!</p>) : (
      <div>
        <p>Guess a 5 letter word</p>
        <input type="text"
               placeholder="Word"
               value={this.state.guessWord}
               onChange={this.onChange.bind(this)}
               onKeyUp={this.onEnterKey.bind(this)}
        />
      </div>
    );
  }
}

GuessWordForm.defaultProps = {
  finished: false
};

GuessWordForm.propTypes = {
  finished: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default GuessWordForm;

