import React, { Component } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import Footer from "./Footer/Footer";
import "./App.css";

export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      {
        id: "001",
        name: "吃饭",
        done: true,
      },
      {
        id: "002",
        name: "睡觉",
        done: true,
      },
      {
        id: "003",
        name: "敲代码",
        done: false,
      },
      {
        id: "004",
        name: "购物",
        done: true,
      },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}