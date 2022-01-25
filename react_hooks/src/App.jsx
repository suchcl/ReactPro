import Counter from './components/Counter';
import UserList from './components/UserList';
import WindowResize from './components/WindowResize';
import Count from './components/Count';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <UserList />
      <WindowResize />
      <Count />
    </div>
  );
}

export default App;
