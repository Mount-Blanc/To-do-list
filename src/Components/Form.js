import React, {useState} from "react";
import './Form.css';

function Card() {
    const [enteredTodo, setenteredTodo] = useState('');
    const userinputHandler = (event) => {
        setenteredTodo(event.target.value);
    } 
 
return <div> 
        <div>
            <form className="form">
                <label>ToDo </label>
                <input type="text" onChange={userinputHandler} ></input>
                <label>Due date</label>
                <input type="date"></input>

            </form>
        </div>
    </div>
}
export default Card;