import React from 'react';
import './App.css';
import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    if (event.target.dataset.good) {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (event.target.dataset.neutral) {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (event.target.dataset.bad) {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(total);
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <h1 className="AppHeader">Reviews widget</h1>
        <Container>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions onLeaveFeedback={this.addFeedback} />
          </Section>
          <Section title={'Statistics'}>
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedbackPercentage || '0'}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
