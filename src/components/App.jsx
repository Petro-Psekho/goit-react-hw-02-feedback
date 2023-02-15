import React, { Component } from 'react';

import { Container } from 'components/App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    positiveFeedback = (good / total) * 100;
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <div>
          <h3>Please leave feedback</h3>
          <button type="button" onClick={this.goodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.badIncrement}>
            Bad
          </button>
          <h3>Statistics</h3>
          <p>Good: {good} </p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </Container>
    );
  }
}

export default App;
