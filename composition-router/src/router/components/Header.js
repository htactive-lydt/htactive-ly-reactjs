import React from "react";
import { Link, Route } from "react-router-dom";

const menus = [
  {
    to: "/",
    label: "Home",
    exact: true
  },
  {
    to: "/users",
    label: "Users",
    exact: false
  },
  {
    to: "/contact",
    label: "Contact",
    exact: false
  }
];

const MenuLi = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? "active" : "";
        return (
          <li className={`${active} nav-item`}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const menuLis = menus.map((menu, index) => (
      <MenuLi
        to={menu.to}
        activeOnlyWhenExact={menu.exact}
        label={menu.label}
        key={index}
      />
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">LYLY</Link>
        <div className="collapse navbar-collapse" id="navb">
          <ul className="navbar-nav mr-auto">
           {menuLis}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-success my-2 my-sm-0" type="button">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
