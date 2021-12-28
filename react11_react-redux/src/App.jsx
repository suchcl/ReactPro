import React, { Component } from 'react';
// import Counter from './components/Counter/Counter';
import CounterContainer from "./container/Counter/Counter";
import store from "./redux/store";

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递store */}
                <CounterContainer store={store} />
            </div>
        )
    }
}
