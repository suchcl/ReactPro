import React, { Component } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import Footer from "./Footer/Footer";
import "./App.css";

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里，如todos状态在App中，那么修改状态、添加状态的方法，都在App中

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

  // 添加任务
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

  // 更新任务状态,传递给item组件，用于更新todo对象
  udpateTodo = (id, done) => {
    const { todos } = this.state;

    // 处理更新数据
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newTodos,
    });
  };

  // 删除任务
  deleteTask = (id) => {
    // 获取todos
    const { todos } = this.state;
    // 删除指定id的todo对象
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    // 更新状态
    this.setState({
      todos: newTodos,
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
          <List
            todos={todos}
            updateTodo={this.udpateTodo}
            deleteTask={this.deleteTask}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
