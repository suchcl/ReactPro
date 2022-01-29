import React, { useEffect, useMemo, useState } from 'react';

export default function UserListbyUseMemo() {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [num, setNum] = useState(10);

  useEffect(() => {
    const doAsync = async () => {
      // 组件首次加载时，请求用户数据
      const res = await fetch("https://reqres.in/api/users/");
      setUsers(await res.json());
    };
    doAsync();
  }, []);

  // 常规实现，有个弊端是无论什么原因组件刷新，都会重新过滤下users数据 
  // let usersToShow = null;
  // if (users) {
  //   // 无论任何原因的组件刷新，这里一定会对数组做一次过滤操作
  //   usersToShow = users.data.filter((user) => {
  //     console.log("user和搜索关键字都没有变");
  //     return user.first_name.includes(searchKey);
  //   });

  //   // 这里有一个语法注意下：就是如果箭头函数体只有一个返回语句，那么可以省略函数体的大括号和return关键字，以及语句结束的分号
  //   // usersToShow = users.data.filter(user => user.first_name.includes(searchKey));
  // }

  // 通过useMemo，指定只有当users和searchKey发生变化时，才重新过滤用户users数据
  const usersToShow = useMemo(() => {
    console.log("user和搜索关键字都没有变");
    if (!users) {
      return null;
    }
    return users.data.filter((user) => user.first_name.includes(searchKey));
  }, [users, searchKey]);

  // 测试数字变化
  const numIncrement = () => {
    setNum(num + 1);
  }
  return (
    <div>
      <h3>我测试下数字变化</h3>
      <button onClick={numIncrement}>数字加1:{num}</button>
      <br />
      <input
        type="text"
        value={searchKey}
        onChange={(event) => setSearchKey(event.target.value)}
      />
      <ul>
        {usersToShow &&
          usersToShow.length > 0 &&
          usersToShow.map((user) => {
            return <li key={user.id}>{user.first_name}</li>
          })}
      </ul>
    </div>
  );
}
