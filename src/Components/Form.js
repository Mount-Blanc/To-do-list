import React, {useState} from "react";
import './Form.css';

function Form(props) {
    const [enteredTodo, setenteredTodo] = useState('');
    const userinputHandler = (event) => {
        setenteredTodo(event.target.value);
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onUser();
    }
return <div> 
        <div>
            <form  onSubmit={handleSubmit} className="form">
                <label>ToDo </label>
                <input type="text" onChange={userinputHandler} ></input>
                <label>Due date</label>
                <input type="date"></input>
                <button type="submit">Submit</button>

            </form>
        </div>
    </div>
}
export default Form;