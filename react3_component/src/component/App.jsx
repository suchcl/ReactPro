import React, { Component } from "react";
import Hello from "../Hello/Hello";
import Welcome from "../Welcome/Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 设置内联样式 */}
        <h2
          style={{
            fontSize: "32px",
            height: 46,
            lineHeight: "46px",
            color: "#fff",
            backgroundColor: "#369",
          }}
        >
          app……
        </h2>
        {/* 类似DOM中常规的引入css的方式 */}
        <Hello info="常规方式引入css" />
        {/* 模块化的css引入方式 */}
        <Welcome info="模块化的方式引入css" />
      </div>
    );
  }
}
