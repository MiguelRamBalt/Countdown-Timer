import React, { Component } from "react";
import { Number } from "../../components";
import "./timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 1,
      hours: 0,
      minutes: 0, //27
      seconds: 47
    };
  }
  componentDidMount() {
    //86400
    this.countdown = setInterval(this.timer.bind(this), 1000);
  }
  componentWillMount() {
    clearInterval(this.state);
  }

  timer() {
    this.setState(prevState => {
      if (prevState.seconds > 0)
        return {
          seconds: prevState.seconds - 1
        };
      if (prevState.seconds === 0 && prevState.minutes > 0) {
        return {
          seconds: 59,
          minutes: prevState.minutes - 1
        };
      }
      if (prevState.minutes === 0 && prevState.hours > 0) {
        return {
          hours: prevState.hours - 1,
          minutes: 59,
          seconds: 59
        };
      }
      if (prevState.hours === 0 && prevState.days > 0) {
        return {
          days: prevState.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59
        };
      }
    });
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="body-container">
        <div className="container">
          <Number key="Days" name="Days" number={days} />
          <Number key="Hours" name="Hours" number={hours} />
          <Number key="Minutes" name="Minutes" number={minutes} />
          <Number key="Seconds" name="Seconds" number={seconds} />
        </div>
      </div>
    );
  }
}

export { Timer };
