import logo from './logo.svg';
import './App.css';
import  Hello from './components/props/index'
import States from './components/state';
import Task from './components/Item/Task';
import TodoList from './components/Item/TodoList';
function App() {
  return (
    <div className="App">

      <div style={{columnCount: 4 }}>
      <TodoList />
      </div>
    </div>
  );
}

export default App;
