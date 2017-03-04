import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date()
    };

    this.intervalID = 0;
    this.setState.bind(this);
  }

  componentDidMount() {
    // debugger;
    this.intervalID = setInterval(this.updateTime.bind(this), 1000);
  }

  pad(num) {
    let str = `0${num}`;
    return str.slice(str.length - 2);
  }

  renderTime() {
    let time = this.state.currentTime;
    let seconds = this.pad(time.getSeconds());
    let minutes = this.pad(time.getMinutes());
    let hours = this.pad(time.getHours());
    return `${hours}:${minutes}:${seconds}`;
  }

  updateTime() {
    // debugger;
    this.setState({currentTime: new Date()});
  }

  render() {
    return (
      <header>
        <div><h2>Time</h2><h2>{this.renderTime()}</h2></div>
        <div><h2>Date</h2><h2>{this.state.currentTime.toDateString()}</h2></div>
      </header>
    );
  }

}

export default Clock;
