import React, { useState } from 'react';

export default function ConditionRender() {
    const userInfo = { name: "Nicholas Zakas", age: 18 };
    const [user, setUser] = useState(userInfo);
    return <div>
        <h4>用户名: {user.name}</h4>
        <p>年龄: {user.age}</p>
    </div>;
}
