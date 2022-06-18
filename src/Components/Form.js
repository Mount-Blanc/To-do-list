import React, {useState} from "react";
import './Form.css';
import Card from './Card';
function Form(props) {
    const [enteredTodo, setenteredTodo] = useState('');
    const userinputHandler = (event) => {
        setenteredTodo(event.target.value);
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onUser(enteredTodo);
    }
return <div> 
        <div>
            <Card>
            <form  onSubmit={handleSubmit} className="form">
                <label>ToDo </label>
                <input type="text" value={enteredTodo} onChange={userinputHandler} ></input>
                <label>Due date</label>
                <input type="date"></input>
                <button type="submit">Submit</button>

            </form>
            </Card>
        </div>
    </div>
}
export default Form;