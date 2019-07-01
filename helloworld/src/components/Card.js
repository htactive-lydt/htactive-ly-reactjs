import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ly",
      lastName: "Doan Thi"
    };
  }

  sendToParent = () => {
    this.props.onReceiveData(this.props); //Call thang props truyen tu thang cha, truyen tham so can truyen len thang cha
  };

  render() {
    return (
      <div className="col-sm-3">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.card.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.card.title}</h5>
            <p className="card-text">{this.props.card.description}</p>
            <a className="btn btn-primary" onClick={this.sendToParent}>
              Detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}
