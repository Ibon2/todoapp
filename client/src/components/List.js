import { useState,useEffect,useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { todoService } from "../services/todo.service";

function deleteTask (task){
    console.log(task)
    if(task){
        console.log("En delete: "+ task.todo + " "+task.priority);
    }
    
};

function List() {
    const receivedData = useRef(false);
    const [list, setList] = useState([]);
    const [search,setSearch] = useState("");
    const [showButton,setShowButton] = useState(false);

    function getAll(){
        todoService.getAll()
        .then(response => {
            setList(response.data.response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (receivedData.current === false) {
            getAll();
        }
        receivedData.current = true;
    });

    const navigate = useNavigate();
    function updateTask(task){
        console.log(task)
        navigate('/updateTask',{state:task});
    }
    function makeQuery(e,search){
        e.preventDefault();
        todoService.getOne(search).then(response => {
            if(!response.data.response){
                alert('There is not todo with that title');
            }
            else{
                const todo = [response.data.response];
                setList(todo);
                console.log(list);
            }
        })
        .catch(error => {
            console.log(error);
        });
        setShowButton(true);
    }
    const listAll = () =>{
        return list.map(
            (d) => <li key={d.todo}>
                {d.todo}
                 {d.priority}
                 {<button onClick={()=>{
                     updateTask(d)}}> Update Task </button>}
                 {<button onClick={()=>{
                     deleteTask(d)}} >Delete</button>}
                 </li>)
    }
    return (
        <div>
            <form onSubmit={(e)=>{makeQuery(e,search)}}>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="search"
                    required
                />
                <button> Search Task </button>
            </form>
            {showButton && <button onClick={()=>{getAll();setShowButton(false)}}>Back</button>}
            {listAll()}
        </div>
    );
}
export default List;