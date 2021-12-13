import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.feedback}>
      <button
        className={s.feedbackGood}
        type="button"
        data-good
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={s.feedbackNeutral}
        type="button"
        data-neutral
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={s.feedbackBad}
        type="button"
        data-bad
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
