import axios from "axios";
import Header from "../components/Header";
import React, { Component } from "react";
import IsLoading from "../components/isLoading";

export default class productDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoaded: false
    };
  }
  getProduct = id => {
    axios
      .get(`http://5d19c3a8b3b6a100148d22b1.mockapi.io/startWithReact/${id}`)
      .then(res =>
        this.setState({
          product: res.data,
          isLoaded: true
        })
      );
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    this.getProduct(id);
  }

  render() {
    const {isLoaded, product} = this.state;
    const { title, img, description } = product;
    return (
      <>
        {isLoaded ? (
          <div>
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
          </div>
        ) : (
          <IsLoading />
        )}
      </>
    );
  }
}
