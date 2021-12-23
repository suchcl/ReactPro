import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail/Detail";

export default class Message extends Component {
  state = {
    message: [
      {
        id: "001",
        title: "消息1",
      },
      {
        id: "002",
        title: "消息2",
      },
      {
        id: "003",
        title: "消息3",
      },
    ],
  };
  render() {
    const { message } = this.state;
    return (
      <div>
        <ul>
          {message.map((msg) => {
            return (
              <li key={msg.id}>
                {/* 向路由组件通过params传递参数 */}
                <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
              </li>
            );
          })}
        </ul>

        {/* 注册路由 */}
        {/* 接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}
