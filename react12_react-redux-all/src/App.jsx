import React, { Component } from "react";
import CounterContainer from "./containers/Counter/Counter";


export default class App extends Component {
  render() {
    return <div>
        <CounterContainer />
    </div>;
  }
}
