import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routers from "./router/router";

function App() {
  const routerList = routers.map(({ path, main, exact }, index) => (
    <Route path={path} component={main} exact={exact} key={index} />
  ));
  return (
    <Router>
      <Switch>{routerList}</Switch>
    </Router>
  );
}

export default App;
