import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Header.module.css";

class Header extends Component {
  forward = () => {
    this.props.history.goForward();
  };

  back = () => {
    this.props.history.goBack();
  };

  go = () => {
    this.props.history.go(1);
  };

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <div className="btn-area">
          <button className="btn" onClick={this.forward}>
            前进
          </button>
          <button className="btn" onClick={this.back}>
            后退
          </button>
          <button className="btn" onClick={this.go}>
            go
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
