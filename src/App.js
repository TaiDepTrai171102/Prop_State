import logo from './logo.svg';
import './App.css';
import  Hello from './components/props/index'
import States from './components/state';
import Task from './components/Item/Task';
function App() {
  return (
    <div className="App">
      <Task title="Tinh" creator="A" status="Doing"/>

    </div>
  );
}

export default App;
