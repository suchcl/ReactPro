import React, { useEffect, useState } from 'react';

export default function BlogView({ id }) {
    // 设置本地的用于存储content的state
    const [blogContent, setBlogContent] = useState(null);

    useEffect(() => {
        // useEffect函数的callback要避免直接的async函数，要封装一下
        const doAsync = async () => {
            // 当id发生变化时，要清空content以保持内容的一致性
            setBlogContent(null);
            // 发情http请求，获取blog的内容详情
            const res = await fetch(`/blog-content/${id}`);
            // 将获取到的新的blog详情放入state
            setBlogContent(await res.text());
        };
        doAsync();
    }, [id]); // 使用id作为依赖项，当id发生了变化时，执行网络请求(副作用)

    const isLoading = !blogContent;
    return <>
        {isLoading ? "Loading……" : blogContent}
    </>;
}
