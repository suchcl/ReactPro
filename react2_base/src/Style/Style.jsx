import React, { Component } from "react";
// 常规的非模块化的方式引入css
import "./Style.css";

export default class Style extends Component {
  render() {
    return (
      // 常规模式下，非模块化的使用css选择器为class设置样式
      <div className="style">
        <h2 className="style-title">普通的方式使用非模块化的css</h2>
      </div>
    );
  }
}
