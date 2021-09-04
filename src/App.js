
import './App.css';
import AddTask from './Components/AddTask';
import Counter from './Components/counter';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
