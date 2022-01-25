import React, { useEffect, useState } from 'react';
import SmallComponent from './SmallComponent';
import LargeComponent from './LargeComponent';

const getSize = () => {
    return window.innerWidth > 1000 ? "large" : "small";
}

// 自定义hooks
const useWindowSize = () => {
    const [size, setSize] = useState(getSize());
    useEffect(() => {
        const handler = () => {
            setSize(getSize());
        }
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("resize", handler);
        }
    }, []);
    return size;
}

export default function WindowResize() {
    const size = useWindowSize();
    if (size == "small") {
        return <SmallComponent />;
    } else {
        return <LargeComponent />
    }
}
