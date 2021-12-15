// 这里的{Component}不是解构，这点需要注意，不要理解错了
import React, { Component } from "react";
import Hello from "./Hello/Hello";

// Component直接从react导入了，这里就不需要从React派生了
class App extends Component {
    render() {
        return (
            <Hello />
        );
    }
}

export default App;