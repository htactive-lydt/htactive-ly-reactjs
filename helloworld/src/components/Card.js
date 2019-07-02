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
    const { id, img, title, description } = this.props.card;
    return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a className="btn btn-primary" onClick={this.sendToParent}>
              Detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}
