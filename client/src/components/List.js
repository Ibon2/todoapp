import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoService } from "../services/todo.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

function List() {
    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
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
        if (!isLoaded) {
            getAll();
        };
        setIsLoaded(true);
    });

    const navigate = useNavigate();
    function updateTask(task){
        navigate('/updateTask',{state:task});
        setIsLoaded(false);
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
        return list.map(d => 
            <li className="list-item" key={d.todo}>
                {d.todo} pr. {d.priority}
                {
                    <FontAwesomeIcon className="icon" onClick={()=>{updateTask(d)}} icon={faPen} />
                }

                {
                    <FontAwesomeIcon className="icon" onClick={()=>{deleteTask(d)}} icon={faTrash} />
                }
            </li>
        )
    
    function deleteTask (task){
        todoService.delete(task.todo)
            .then(res => {
                console.log(res);
                setIsLoaded(false);
            })
            .catch(err => {
                console.log(err);
            });
    };}

    return (
        <div>
            <form onSubmit={(e)=>{makeQuery(e,search)}}>
                <div className="search">
                    <input
                        value={search}
                        className="search-bar"
                        onChange={e => setSearch(e.target.value)}
                        type="text"
                        name="search"
                        placeholder="search"
                        required
                    />
                    <button className="button"> Search Task </button>
                </div>
            </form>
            {showButton && <button onClick={()=>{getAll();setShowButton(false)}}>Back</button>}
            {list.length === 0 && 
                <h3 style={{textAlign: "center"}}>No todos</h3>
            }
            {listAll()}
        </div>
    );
}
export default List;