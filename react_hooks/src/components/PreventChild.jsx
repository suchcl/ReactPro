import React, { useRef, useState } from 'react';

export default function PreventChild() {
    const [show, setShow] = useState(true);
    const notShow = () => {
        setShow(false);
    }
    return <div>
        <Child show={show} />
        <button onClick={notShow}>阻止子组件渲染</button>
    </div>;
}

function Child(props) {
    console.log(props);
    const { show } = props;
    if (!show) {
        return null;
    }
    return (<p>子组件内容</p>);
}
