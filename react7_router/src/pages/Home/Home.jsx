import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log("Home组件默认接收到的参数：", this.props);
    return <div>Home</div>;
  }
}
