import { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { todoService } from "../services/todo.service";

function deleteTask (task){
    console.log(task)
    if(task){
        console.log("En delete: "+ task.todo + " "+task.priority);
    }
    
};

function List() {    
    const [list, setList] = useState([]);
    useEffect(() => {
        todoService.getAll()
            .then(response => {
                setList(response.data.response);
            })
            .catch(error => {
                console.log(error);
            });
    });
    const navigate = useNavigate();
    function updateTask(task){
        console.log(task)
        navigate('/updateTask',{state:task});
    }
    const listAll = () =>{
        return list.map(
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