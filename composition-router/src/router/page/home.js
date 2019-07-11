import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";

function Home(props) {
  const { products } = props;
  const productsList = products.map(item => (
    <Product product={item} key={item.id} />
  ));
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">{productsList}</div>
      </div>
    </>
  );
}

export default Home;
