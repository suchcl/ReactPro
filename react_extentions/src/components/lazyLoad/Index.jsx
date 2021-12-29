import { Redirect, Route, Switch, NavLink } from "react-router-dom";
import React, { Component, lazy, Suspense } from "react";
import "./Index.css";

const Home = React.lazy(() => import("./Home/Home"));
const About = React.lazy(() => import("./About/About"));

class LazyLoadUI extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
            <div className="list-group">
              <NavLink className="nav" to="/about">
                About
              </NavLink>
              <NavLink className="nav" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 父组件：App.jsx */}
                {/* 注册路由 */}
                <Suspense fallback={<h3>加载中……</h3>}>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LazyLoadUI;
