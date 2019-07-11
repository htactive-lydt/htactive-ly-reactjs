import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import User from "./router/page/user";
import Contact from "./router/page/contact";
import Home from "./router/page/home";
import Notfound from "./router/page/notfound";
import ProductDetail from "./router/page/productDetail";
import IsLoading from "./router/components/isLoading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
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
    return (
      <>
        {isLoaded ? (
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Home products={products} />}
              />
              <Route path="/users" component={User} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/product/:id"
                component={({ match }) => (
                  <ProductDetail
                    products={products}
                    match={match}
                  />
                )}
              />
              <Route component={Notfound} />
            </Switch>
          </Router>
        ) : (
          <IsLoading />
        )}
      </>
    );
  }
}

export default App;
