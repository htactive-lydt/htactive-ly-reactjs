import Header from "../components/Header";
import React from "react";

export default function productDetail(props) {
  const { id } = props.match.params;
  const { products } = props;
  const { img, description, title } = products.find(
    item => item.id === id.toString()
  );
  return (
    <>
      <Header />
      <div className="container">
        <h4>PRODUCT DETAIL</h4>
        <div className="row">
          <div className="col-sm-5">
            <img src={img} alt="Img" width="100%" />
          </div>
          <div className="col-sm-7">
            <p>
              <b>Name:</b> {title}
            </p>
            <p>
              <b>Description:</b> {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
