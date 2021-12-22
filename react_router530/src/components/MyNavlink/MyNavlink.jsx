import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavlink extends Component {
  render() {
    return (
      //   <NavLink
      //     className={({ isActive }) => (isActive ? "nav-item on" : "nav-item")}
      //     {...this.props}
      //   />
      <NavLink className="nav-item" activeClassName="on" {...this.props} />
    );
  }
}
