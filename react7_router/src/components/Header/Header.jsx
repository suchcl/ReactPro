import React, { Component } from "react";

export default class Header extends Component {
  render() {
    console.log("Header组件默认接收到的参数：",this.props);
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
      </div>
    );
  }
}
