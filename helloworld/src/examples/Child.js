import React, { Component } from 'react'

export default class Child extends Component {
  constructor(){
    super(props);
    this.state = {
      name: "Doan Thi Ly"
    }
  }

  handleAskMoney= () =>{
    this.props.onAskMoney(this.state.name); 
    // Call props from parent and pass parameter to parent by this props
  }

  render() {
    return (
      <div>
        <h1>I'm a child</h1>
        <button className="btn btn-danger" onClick={this.handleAskMoney}>Ask money</button>
      </div>
    )
  }
}

export default Child;
