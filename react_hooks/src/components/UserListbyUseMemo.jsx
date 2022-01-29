import React, { useEffect, useState } from 'react';

export default function UserListbyUseMemo() {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const doAsync = async () => {
      // 组件首次加载时，请求用户数据
      const res = await fetch("https://reqres.in/api/users/");
      setUsers(await res.json());
    };
    doAsync();
  }, []);
  let usersToShow = null;

  if (users) {
    // 无论任何原因的组件刷新，这里一定会对数组做一次过滤操作
    // usersToShow = users.data.filter((user) => {
    //   return user.first_name.includes(searchKey);
    // });

    // 这里有一个语法：就是如果箭头函数体只有一个返回语句，那么可以省略函数体的大括号和return关键字，以及语句结束的分号
    usersToShow = users.data.filter(user => user.first_name.includes(searchKey));
  }
  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
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
