import React from 'react';
import s from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <div className={s.statistics}>
        <p>Good: {this.props.good}</p>
        <p>Neutral: 0</p>
        <p>Bad: 0</p>
      </div>
    );
  }
}

export default Statistics;
