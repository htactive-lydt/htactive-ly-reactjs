import React, { Component } from 'react'

export default class Child extends Component {
  constructor(){
    super(props);
    this.state = {
      name: "Doan Thi Ly"
    }
  }

  handleXinTien= () =>{
    this.props.onXinTien(this.state.name);
  }

  render() {
    return (
      <div>
        <h1>Tao là con</h1>
        <button className="btn btn-danger" onClick={this.handleXinTien}>Xin Tiền</button>
      </div>
    )
  }
}

export default Child;
