import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import User from "./router/page/user";
import Contact from "./router/page/contact";
import Home from "./router/page/home";
import Notfound from "./router/page/notfound";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={User} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
