import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const[title,setTitle] = useState("");
    const[priority,setPriority] = useState("");
    const navigate = useNavigate();
    return (
        <form onSubmit={()=>{navigate('/')}}>
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