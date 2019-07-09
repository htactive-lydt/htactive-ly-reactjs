import React from "react";
import User from "./page/user";
import Contact from "./page/contact";
import Home from "./page/home";
import Notfound from "./page/notfound";

const routers = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/users",
    exact: false,
    main: () => <User />
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />
  },
  {
    path: "",
    exact: false,
    main: () => <Notfound />
  }
];

export default routers;
