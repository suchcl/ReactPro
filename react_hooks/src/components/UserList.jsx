import React from 'react';

export default function UserList() {
    // 使用3个状态分别保存用户列表、loading和错误状态
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    // 定义获取用户的回调函数
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://reqres.in/api/users");
            const json = await res.json();
            // 将请求成功后的用户数据存入state
            setUsers(json.data);
        } catch (err) {
            // 请求失败将错误信息、状态存入state
            setError(err);
        }
        setLoading(false);
    }
    return <div className='user-list'>
        <button onClick={fetchUsers} disabled={loading}>
            {loading ? "loading……" : "Show Users"}
        </button>
        {error &&
            <div style={{ color: "red" }}>Faild:{String(error)}</div>
        }
        <ul>
            {
                users.map((user) => {
                    return <li key={user.id}>{user.first_name}</li>
                })
            }
        </ul>
    </div>;
}