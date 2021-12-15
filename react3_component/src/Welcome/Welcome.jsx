import React, { Component } from "react";
// 导入模块化的css
import WelcomeStyle from "./Welcome.module.css";

export default class Welcome extends Component {
  render() {
    return (
      // 模块化的css设置样式的方式,点语法
      <div className={WelcomeStyle.welcome}>
        <h2 className={WelcomeStyle.tit}>Welcome React!</h2>
        <p className={WelcomeStyle.desc}>模块化css的方式使用样式</p>
      </div>
    );
  }
}
