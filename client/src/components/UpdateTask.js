import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { todoService } from "../services/todo.service.js";

function UpdateTask() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const[priority,setPriority] = useState(location.state.priority);
    const title=location.state.todo;

    const handleSubmit = (e) => {
      e.preventDefault();

      const todo = {
        todo: e.target[0].value,
        priority: e.target[1].value
      };

      todoService.update(todo)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      navigate('/');
    };

    return (

        <form onSubmit={(e)=>handleSubmit(e)}>
          <input
             value={title}
             type="text"
             name="title"
             readOnly
           />
          <input
             value={priority}
             onChange={e => setPriority(e.target.value)}
             placeholder="priority"
             type="number"
             name="priority"
             required
           />
        <button> Submit </button>
        </form>
    );
}

export default UpdateTask;