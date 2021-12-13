import React from 'react';
import s from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <div className={s.statistics}>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
