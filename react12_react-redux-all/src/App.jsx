import React, { Component } from "react";
import CounterContainer from "./containers/Counter/Counter";
import Person from "./containers/Person/Person";


export default class App extends Component {
  render() {
    return <div>
        <CounterContainer />
        <hr />
        <Person />
    </div>;
  }
}
