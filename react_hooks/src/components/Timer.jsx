import React, { useCallback, useRef, useState } from 'react';

export default function Timer() {
    // 定义time，这个state用于保存计时的累积时间
    const [time, setTime] = useState(0);
    // 定义timer这个容器，用于在夸组件之间保存、共享变量
    const timer = useRef(null);

    // 开始计时的事件处理函数
    const timerStart = useCallback(() => {
        // 使用current属性设置ref的值
        timer.current = window.setInterval((time) => {
            setTime(time => time + 1);
        }, 100)
    }, []);

    // 暂停计时的事件处理函数
    const timerParse = useCallback(() => {
        // 使用window.clearInterval来清理计时器
        window.clearInterval(timer.current);
        timer.current = null;
    }, []);

    // 停止计时器的事件处理函数
    const timerStop = () => {
        window.clearInterval(timer.current);
        timer.current = null;
        setTime(0);
    }
    return (
        <div>
            {time / 10} seconds,
            <br />
            <button onClick={timerStart}>Start</button>
            <button onClick={timerParse}>Parse</button>
            <button onClick={timerStop}>Stop</button>
        </div>
    );
}
