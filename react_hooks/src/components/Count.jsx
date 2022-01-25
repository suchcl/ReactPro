import React from 'react';

export default function Count() {
    // 创建一个保存count的state，且初始化为8
    const [count, setCount] = React.useState(8);
    // 创建用于保存用户列表的state，类型为Array
    const [users, setUSers] = React.useState([]);
    // 创建用于保存个人档案的state
    const [profile, setProfile] = React.useState({
        name: "Nicholas Zakas",
        age: 18,
        gender: "sex"
    });
    const increment = () => {
        setCount(count + 1);
    }
    return <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
    </div>;
}
