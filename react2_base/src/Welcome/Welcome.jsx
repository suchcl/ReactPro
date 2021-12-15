import React, { Component } from "react";
import WelcomeStyle from "./Welcome.module.css";

export default class Welcome extends Component {
  render() {
    return (
      <div className={WelcomeStyle.welcome}>
        <h2 className={WelcomeStyle.title}>我是Welcome中的组件</h2>
      </div>
    );
  }
}
