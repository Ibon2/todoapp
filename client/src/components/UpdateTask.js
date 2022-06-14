import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateTask() {
    const location = useLocation();
    console.log(location);
    const[priority,setPriority] = useState(location.state.priority);
    const title=location.state.todo;

    const navigate = useNavigate();
    return (

        <form onSubmit={()=>{navigate('/')}}>
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
             type="text"
             name="priority"
             required
           />
        <button> Submit </button>
        </form>
    );
}

export default UpdateTask;