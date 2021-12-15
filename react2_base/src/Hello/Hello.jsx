import React, { Component } from "react";
// 通过变量接收模块化的css
import HelloStyle from "./Hello.module.css";

export default class Hello extends Component {
  render() {
    return (
      // 通过点语法为class赋值，设置样式
      <div className={HelloStyle.hello}>
        <h2 className={HelloStyle.title}>Hello,React!我在Hello中</h2>
      </div>
    );
  }
}
