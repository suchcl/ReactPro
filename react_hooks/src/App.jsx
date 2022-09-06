import React from "react";
import Header from "./components/Header.tsx";
import Counter from './components/Counter';
import UserList from './components/UserList';
import WindowResize from './components/WindowResize';
import Count from './components/Count';
import Counter2 from './components/Counter2';
import UserListbyUseMemo from './components/UserListbyUseMemo';
import Timer from './components/Timer';
import InputFocus from './components/InputFocus';
import theme from "./assetes/data/theme.json";
import ToolBar from "./components/UseContext";
import Profile from "./components/Profile";
import ConditionRender from "./components/ConditionRender";
import PreventChild from "./components/PreventChild";
import './App.css';

// 创建一个theme的Context
const ThemeContext = React.createContext(theme.light);
function App() {
  return (
    <ThemeContext.Provider value={theme.dark}>
      <div className="App">
        <Header message="我是传递过来的信息" />
        <Counter />
        <UserList />
        <WindowResize />
        <Count />
        <h3>Counter2</h3>
        <Counter2 />
        <h2>UserListbyUseMemo</h2>
        <UserListbyUseMemo />
        <h2>Timer</h2>
        <Timer />
        <h2>InputFocus</h2>
        <InputFocus />
        <h3>ToolBar</h3>
        <ToolBar />
        <h2>BlogViewClass</h2>
        {/* <BlogViewClass /> */}
        <h4>Profile</h4>
        <Profile />
        <h4>ConditionRender</h4>
        <ConditionRender />
        <h4>PreventChild</h4>
        <PreventChild />
      </div>
    </ThemeContext.Provider>
  );
}


export default App;
