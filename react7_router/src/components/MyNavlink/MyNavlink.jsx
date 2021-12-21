import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavlink extends Component {
  render() {
    const { to, title } = this.props;
    // 打印从组件传递过来的props
    console.log(this.props);
    return (
      <NavLink className={({ isActive }) => (isActive ? "nav-item on" : "nav-item")} {...this.props} />
    );
  }
}
