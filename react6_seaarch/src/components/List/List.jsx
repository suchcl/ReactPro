import React, { Component } from "react";
import "./List.css";
import img1 from "../../assets/images/img1.jpg";

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <a href="https://www.baidu.com" target="_blank" rel="noreferrer">
            <img
              src={img1}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://www.baidu.com">
            <img
              src={img1}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://www.baidu.com">
            <img
              src={img1}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://www.baidu.com">
            <img
              src={img1}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    );
  }
}
