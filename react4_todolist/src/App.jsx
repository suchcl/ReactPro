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

  addTodo = (todo) => {
    console.log("App:", todo);
    // 获取源todos
    const { todos } = this.state;
    // 新增todo
    const newTodo = [todo, ...todos];

    // 更新状态
    this.setState({
      todos: newTodo,
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 父组件向子组件传递自定义函数 */}
          <Header addTodoTask={this.addTodo} />
          {/* 父组件将todos传递给子组件List，父组件向子组件传值 */}
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
