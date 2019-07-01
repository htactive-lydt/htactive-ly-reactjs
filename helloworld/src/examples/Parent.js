import React, { Component } from 'react'

export default class Parent extends Component {
  handleXinTien= (tenThangCon) =>{
    console.log(`Thằng con tên ${tenThangCon} đang xin tiền`)
  }

  render() {
    return (
      <div>
        <h1>Tao là cha</h1>
        <Child onXinTien={this.handleXinTien}/>
      </div>
    )
  }
}
