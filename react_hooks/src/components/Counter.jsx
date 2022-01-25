import React from 'react';

function CountLabel({ count }) {
    // 子组件用于显示颜色
    const textColor = count > 4 ? "red" : "orange";
    return <span style={{ color: textColor }}>{count}</span>
}

export default function Counter() {
    const [count, setCount] = React.useState(0);
    return <div>
        <button onClick={() => setCount(count + 1)}>
            <CountLabel count={count} />
        </button>
    </div>;
}
