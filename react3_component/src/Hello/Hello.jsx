import React, { Component } from "react";
// 常规方式引入css
import "./Hello.css";

export default class Hello extends Component {
  render() {
    const { info } = this.props;
    return (
      // 常规方式设置样式
      <div className="hello">
        <h2 className="title">Hello,React!</h2>
        <p className="text">{info}</p>
      </div>
    );
  }
}
