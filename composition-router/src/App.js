import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routers from "./router/router";

function App() {
  const routerList = routers.map((item, index) => (
    <Route exact path={item.path} component={item.main} exact={item.exact} />
  ));
  return (
    <Router>
      <div>
        <Switch>{routerList}</Switch>
      </div>
    </Router>
  );
}

export default App;
