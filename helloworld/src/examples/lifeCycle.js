import React, { Component } from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentWillMount(){
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log("Render")
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
// componentWillMount
// Render
// componentDidMount
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);