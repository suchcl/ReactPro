import React, { Component } from 'react';
import Counter from "./components/setState/counter";

export default class App extends Component {
    render() {
        return (
            <div>
                <Counter a={18} />
            </div>
        )
    }
}
