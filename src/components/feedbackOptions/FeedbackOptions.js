import React from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <div className={s.feedback}>
        <button className={s.feedbackGood} type="button">
          Good
        </button>
        <button className={s.feedbackNeutral} type="button">
          Neutral
        </button>
        <button className={s.feedbackBad} type="button">
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
