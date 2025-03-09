import React from 'react';
import { connect } from 'react-redux';
import './style/timer.css';

const ONE_SECOND = 1000;
const CRITICAL_TIME = 10;

class PromisseTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      timerCount: 0,
    };
  }

  componentDidMount() {
    this.setTimeCount = setInterval(() => {
      this.setState(
        (previewState) => ({ timerCount: previewState.timerCount + 1 }),
      );
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.setTimeCount);
  }

  render() {
    const { timerCount } = this.state;

    return (
      <h1
        data-testid="timer"
        className={ timerCount > CRITICAL_TIME ? 'time' : 'time time_critical' }
      >
        {timerCount}
      </h1>
    );
  }
}

export default connect()(PromisseTimer);
