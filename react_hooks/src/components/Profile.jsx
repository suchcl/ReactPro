import React, { useRef, useState } from 'react';

export default function Profile() {
    const userInfo = {
        name: "Nicholas Zakas",
        gender: "male",
        age: 16
    };
    const [profile, setProfile] = useState(userInfo);
    const changeName = () => {
        setProfile({ name: "Hameimei", age: 20 });
    }

    let [email, setEmail] = useState("");
    let job = useRef(HTMLInputElement);
    const getJob = () => {
        console.log(job.current.value);
    }
    return <div style={{ background: '#9a0' }}>
        {
            profile.name ? (<h4>姓名: {profile.name}</h4>) : ""
        }
        {
            profile.age ? (<p>年龄: {profile.age}</p>) : ""
        }
        {
            profile.gender ? (<p>性别: {profile.gender}</p>) : ""
        }
        {
            email ? (<p>xxxx@xx.com</p>) : ""
        }
        <button onClick={changeName}>修改姓名</button>
        <br />
        <input type="text" ref={job} />
        <button onClick={getJob}>获取job</button>
    </div>;
}
