import React, { useState } from 'react';

export default function ConditionRender() {
    const userInfo = { name: "Nicholas Zakas", age: 18, job: "" };
    const [user, setUser] = useState(userInfo);

    const newsList = [
        {
            id: 1,
            title: "新闻1"
        },
        {
            id: 2,
            title: "新闻2"
        },
        {
            id: 3,
            title: "新闻3"
        },
        {
            id: 4,
            title: "新闻4"
        },
        {
            id: 5,
            title: "新闻5"
        },
    ];
    const [news, setNews] = useState(newsList);

    const [isShow, setIsShow] = useState(true);
    const showOrHideText = (event) => {
        if (isShow) {
            setIsShow(false);
            event.target.innerText = "展示";
        } else {
            setIsShow(true);
            event.target.innerText = "隐藏";
        }
    }
    return <div>
        <div style={{ background: "#8c0", padding: '20px' }}>
            {
                isShow && (<div>我是判断需要展示和隐藏的文案</div>)
            }
            <button onClick={showOrHideText}>隐藏</button>
        </div>
        <h4>用户名: {user.name}</h4>
        <p>年龄: {user.age}</p>
        {
            user.job ? (<p>工作: {user.job}</p>) : (<p>无工作</p>)
        }
        <ul className='news'>
            {
                // news.map(item => {
                //     return <li key={item.id}>{item.title}</li>
                // })
                news.map(item => <li key={item.id}>{item.title}</li>)
            }
        </ul>
    </div>;
}
