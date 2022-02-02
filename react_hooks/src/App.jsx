import React from "react";
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
import './App.css';

// 创建一个theme的Context
const ThemeContext = React.createContext(theme.light);
function App() {
  return (
    <ThemeContext.Provider value={theme.dark}>
      <div className="App">
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
      </div>
    </ThemeContext.Provider>
  );
}


export default App;
