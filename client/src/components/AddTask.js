import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoService } from "../services/todo.service.js";

function AddTask() {
    const[title,setTitle] = useState("");
    const[priority,setPriority] = useState("");
    const navigate = useNavigate();

    const handleSumit = (e) => {
      e.preventDefault();

      const todo = {
        todo: e.target[0].value,
        priority: e.target[1].value
      };

      todoService.add(todo)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      navigate('/');
    }

    return (
        <form onSubmit={(e)=>handleSumit(e)}>
        <input
             value={title}
             onChange={e => setTitle(e.target.value)}
             placeholder="Title"
             type="text"
             name="title"
             required
           />
            <input
             value={priority}
             onChange={e => setPriority(e.target.value)}
             placeholder="priority"
             type="number"
             name="p"
             required
           />
        <button> Submit </button>
        </form>
    );
}

export default AddTask;