import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function deleteTask (task){
    console.log(task)
    if(task){
        console.log("En delete: "+ task.todo + " "+task.priority);
    }
    
};

function List() {
    
    const [listTaks,setListTasks] = useState([{todo:"Task1",priority:0},
            {todo:"Task2",priority:1}]);//should be the call to backend
    const navigate = useNavigate();
    function updateTask(task){
        console.log(task)
        navigate('/updateTask',{state:task});
    }
    const listAll = () =>{
        return listTaks.map(
            (d) => <p key={d.todo}>
                {d.todo}
                 {d.priority}
                 {<button onClick={()=>{
                     updateTask(d)}}> Update Task </button>}
                 {<button onClick={()=>{
                     deleteTask(d)}} >Delete</button>}
                 </p>)
    }
    return (
        <div>
            {listAll()}
        </div>
    );
}

export default List;