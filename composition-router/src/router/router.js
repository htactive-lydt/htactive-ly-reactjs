import React from "react";
import User from "./page/user";
import Contact from "./page/contact";
import Home from "./page/home";
import Notfound from "./page/notfound";
import ProductDetail from "./page/productDetail";

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
    path: "/product/:id",
    exact: false,
    main: ({match}) => <ProductDetail match={match}/>
  },
  {
    path: "",
    exact: false,
    main: () => <Notfound />
  }
];

export default routers;
