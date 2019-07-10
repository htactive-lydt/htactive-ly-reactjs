import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import IsLoading from "../components/isLoading";
import axios from "axios";

// import ProductDetail from "../page/productDetail";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get("http://5d19c3a8b3b6a100148d22b1.mockapi.io/startWithReact")
      .then(res => {
        if (res.status === 200) {
          this.setState({
            products: res.data,
            isLoaded: true
          });
        }
      });
  }

  render() {
    const { products, isLoaded } = this.state;
    const productsList = products.map(item => (
      <Product product={item} key={item.id} />
    ));
    console.log(this.state)
    return (
      <>
        {isLoaded ? (
          <div>
            <Header />
            <div className="container">
              <div className="row">{productsList}</div>
            </div>
          </div>
        ) : (
          (<IsLoading />)
        )}
      </>
    );
  }
}

export default Home;
