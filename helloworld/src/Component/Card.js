import React, { Component } from "react";

function Card(props){
  return (
    <div className="card col-lg-4">
      <img className="card-img-top" src={props.card.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.card.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Detail
        </a>
      </div>
    </div>
  );
}

export default Card;
