import Counter from './components/Counter';
import UserList from './components/UserList';
import WindowResize from './components/WindowResize';
import Count from './components/Count';
import Counter2 from './components/Counter2';
import UserListbyUseMemo from './components/UserListbyUseMemo';
import Timer from './components/Timer';
import InputFocus from './components/InputFocus';
import './App.css';

function App() {
  return (
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
    </div>
  );
}

export default App;
