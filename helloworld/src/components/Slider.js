import React, { Component } from "react";
import Slide1 from "../assets/images/slider1.png";
import Slide2 from "../assets/images/slider2.png";
import Slide3 from "../assets/images/slider3.png";

function Slider() {
  return (
    // Slide of Bootstrap 4
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={Slide1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Slide2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Slide3} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
