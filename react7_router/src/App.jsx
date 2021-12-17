import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
            <div className="list-group">
              {/* 编写路由连接 */}
              <Link className="list-group-item" to="/about">
                关于
              </Link>
              <Link className="list-group-item" to="/home">
                Home
              </Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home/>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
