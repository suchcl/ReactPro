import React, { Component } from "react";
// 导入nanoid工具库，可以生成随机、唯一的字符串
import { nanoid } from "nanoid";
import "./Header.css";

export default class Header extends Component {
  handleKeyUP = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) {
      return;
    }

    // 任命名称不能为空,如果为空，返回
    if (target.value.trim() === "") {
      alert("任务名称不能为空");
      // 如果任务名为空，就直接中断后续代码的执行
      return;
    }
    // 测试下nanoid的使用
    const n1 = nanoid();
    console.log(`n1: ${n1}`);

    // 解构赋值，从props中拿到addTodoTask自定义事件
    const { addTodoTask } = this.props;

    // 为addTodo事件准备参数，对象类型
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    };

    // 执行从父组件通过props方式传递过来的自定义函数，触发父组件对该自定义函数的响应事件
    addTodoTask(todoObj);

    // 任务添加完成后，清空输入框
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handleKeyUP}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
