import './App.css';
import List from './components/List.js'
import {  useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const addTask = ()=>{
    navigate('/addTask');
    <button onClick={addTask}>addTask</button>
  }
  return (
    <div className='main'>
      <h1>Todo App</h1>
        <List/>
        <button className='button add' onClick={addTask}>Add Todo</button>
    </div>
  );
}

export default App;
