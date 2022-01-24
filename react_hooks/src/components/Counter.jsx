import React from 'react';

function CountLabel() {

}

export default function Counter() {
    const [count, setCount] = React.useState(0);
    return <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>;
}
