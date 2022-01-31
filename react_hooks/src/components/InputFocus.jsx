import React, { useRef } from 'react';

export default function InputFocus() {
    const inputEle = useRef(null);

    const inputFocus = () => {
        // current属性指向了真实的input这个DOM节点，从而可以调用DOM的focus方法
        inputEle.current.focus();
    }
    return (
        <div>
            <input type="text" ref={inputEle} />
            <button onClick={inputFocus}>输入框获取焦点</button>
        </div>
    );
}
