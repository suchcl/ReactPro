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

  
  replaceShowMsg = (id,title) => {
    // 这就是编程式导航 params传参方式
    this.props.history.replace(`/home/message/detail/${id}/${title}`);

    // 编程式导航，state方式传参
    // this.props.history.replace(`/home/message/detail/`,{id,title});
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <ul>
          {message.map((msg) => {
            return (
              <li key={msg.id}>
                {/* 向路由组件传递params参数 */}
                <Link replace to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
                <button onClick={()=>{this.replaceShowMsg(msg.id,msg.title)}}>replace查看</button>
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>
                  {msg.title}
                </Link> */}
                {/* 向路由传递state参数：state参数需要是对象 */}
                {/* <Link to={{ pathname: "/home/message/detail", state: { id: msg.id, title: msg.title }}}>{msg.title}</Link> */}
              </li>
            );
          })}
        </ul>

        {/* 注册路由 */}
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
        {/* 声明接收search参数:search参数无需声明接收,正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* 声明接收state参数路由：state参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    );
  }
}
