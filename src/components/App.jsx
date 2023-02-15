import React, { Component } from 'react';

import { Container } from 'components/App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <Container>
        <div>
          <h2>Please leave feedback</h2>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
          <h3>Statistics</h3>
          <p>Good:</p>
          <p>Neutral:</p>
          <p>Bad:</p>
        </div>
      </Container>
    );
  }
}

export default App;
