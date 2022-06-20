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
        <div className="main">
          <h1>Update a Todo</h1>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <input
              value={title}
              className="search-bar add2"
              type="text"
              name="title"
              readOnly
            />
            <input
              value={priority}
              onChange={e => setPriority(e.target.value)}
              placeholder="priority"
              className="search-bar add2"
              type="number"
              name="priority"
              required
            />
          <button className="button add add2"> Submit </button>
          </form>
        </div>
    );
}

export default UpdateTask;