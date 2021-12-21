import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// 2个路由组件
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
// 一个一般组件
import Header from "./components/Header/Header";
import MyNavlink from "./components/MyNavlink/MyNavlink";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            {/* 一般组件：Header */}
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
            <div className="list-group">
              {/* 编写路由连接 */}
              {/* <NavLink className={({ isActive }) => isActive ? "nav-item on" : "nav-item" } to="/about">关于 </NavLink>
              <NavLink className={({ isActive }) => isActive ? "nav-item on" : "nav-item" } to="/home">Home </NavLink> */}
              <MyNavlink to="/about" title="About" a="1" b="2" c="3">About</MyNavlink>
              <MyNavlink to="/home" title="Home">Home</MyNavlink>
              {/* <MyNavlink to="/test">Test</MyNavlink> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  {/* 路由组件：About、Home */}
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/home" element={<Test />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
