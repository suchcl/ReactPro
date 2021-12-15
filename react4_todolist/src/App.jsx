import React, { Component } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import Footer from "./Footer/Footer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}
