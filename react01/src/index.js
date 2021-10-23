// React变量名按照规范，首字母要大写，但不是技术上一定要这样
// import React from "react";
/**
 * react可以做基于浏览器的web项目，也可以做native，也就是app
 * 如果是做基于浏览器的web项目，则需要导入react-dom
 * 如果是做native，则需要导入react-native
 */
import ReactDOM from "react-dom";
import App from "./app";

/**
 * render函数渲染一个模板，也就是段DOM结构
 * 但要注意这段DOM结构外面不要使用引号包裹，这段代码，就是jsx
 * react实现的核心：告诉render函数要渲染什么，以及渲染到哪里，就完成了react的使命了
 */
ReactDOM.render(
  //   App, // 这里直接App，是不可以的，因为App本身是一个class，而render需要的是一个组件，直接将App按照组件的方式写就可以了，按照组件的方式写，本质上就是一个类实例化的过程
  <App />,
  // document.getElementById("root")
  document.querySelector("#root")
);

// import React from "react";
// import ReactDOM from "react-dom";

// const app = <div>我就是来玩的</div>;
// ReactDOM.render(app, document.getElementById("root"));
