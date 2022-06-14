import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const navigate = useNavigate();
    function titleForm(){
        return(
            <input
             value={title}
             onChange={e => setTitle(e.target.value)}
             placeholder="Title"
             type="text"
             name="title"
             required
           />
        )
    }
    function descriptionForm(){
        return(
            <input
             value={description}
             onChange={e => setDescription(e.target.value)}
             placeholder="description"
             type="text"
             name="description"
             required
           />
        )
    }
    return (
        <form onSubmit={()=>{navigate('/')}}>
        {titleForm()}
        {descriptionForm()}
        <button> Submit </button>
        </form>
    );
}

export default AddTask;