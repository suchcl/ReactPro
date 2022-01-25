import Counter from './components/Counter';
import UserList from './components/UserList';
import WindowResize from './components/WindowResize';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <UserList />
      <WindowResize />
    </div>
  );
}

export default App;
