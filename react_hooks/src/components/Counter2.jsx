import React, { useCallback } from 'react';

export default function Counter2() {
    const [count, setCount] = React.useState(0);
    // 常规实现，会重复执行回调函数
    // const increment = () => {
    //     setCount(count + 1);
    // }

    // 使用useCallback，只有当依赖发生变化时，才去重新执行回调函数
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]); // 只有当count发生变化时，才会重新创建回调函数
    return <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
    </div>;
}
