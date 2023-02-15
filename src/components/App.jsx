import React, { Component } from 'react';

import { Container } from 'components/App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <div>
          <h3>Please leave feedback</h3>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
          <h3>Statistics</h3>
          <p>Good: {good} </p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </Container>
    );
  }
}

export default App;
