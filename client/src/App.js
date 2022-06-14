
import './App.css';
import List from './components/List.js'
import AddTask from './components/AddTask.js'
import {  useNavigate} from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const addTask = ()=>{
    navigate('/addTask');
    <button onClick={addTask}>addTask</button>
  }
  return (
    <div >
        <List/>
        <button onClick={addTask}>addTask</button>
    </div>
  );
}

export default App;
