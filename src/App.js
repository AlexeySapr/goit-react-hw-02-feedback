import React from 'react';
import './App.css';
import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  addNeutralFeedback = () => {};
  addBadFeedback = () => {};

  render() {
    return (
      <div className="App">
        <h1 className="AppHeader">Reviews widget</h1>
        <Container>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions onLeaveFeedback={this.addGoodFeedback} />
          </Section>
          <Section title={'Statistics'}>
            <Statistics good={this.state.good} />
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
