
import { todoService } from "../services/todo.service";
import { useEffect, useState } from "react";

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

    // const listTaks = [{title:"Task1",description:"Description1"},
    //         {title:"Task2",description:"Description2"}];//should be the call to backend
    
    const listAll = () =>{
        return list.map(
            (d) => <div key={d.todo}>{d.todo} {d.priority}</div>)
    }
    return (
        <div>
            {listAll()}
        </div>
    );
}

export default List;