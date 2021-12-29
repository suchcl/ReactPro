import React, { Component } from 'react';
import Counter from "./components/counter/Counter";
import Person from "./components/person/person";

export default class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <Person />
            </div>
        )
    }
}
