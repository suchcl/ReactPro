import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavlink from "../../components/MyNavlink/MyNavlink";
import News from "./News/News";
import Message from "./Message/Message";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home组件中的内容</h3>
        <div>
          {/* 导航区域 */}
          <ul className="nav nav-tabs">
            <li>
              {/* 子组件导航区域指定to属性时，需要同时带上父组件的路由，如/home/news */}
              <MyNavlink to="/home/news">News</MyNavlink>
            </li>
            <li>
              <MyNavlink to="/home/message">Message</MyNavlink>
            </li>
          </ul>
          {/* 子组件Home.jsx */}
          {/* 注册路由，路由的匹配顺序从父组件开始模糊匹配 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
