import React, { Component } from "react";
// import Counter from "./components/setState/counter";
// import LazyLoadUI from "./components/lazyLoad/Index";
// import HooksUI from "./components/hooks";
// import ContextUI from "./components/context/Index";
// import OptimizeUI from "./components/optimize/Index";
// import RenderProps from "./components/renderprops";
import ErrorBoundaries from './components/ErrorBoundaries';

export default class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundaries />
      </div>
    );
  }
}
