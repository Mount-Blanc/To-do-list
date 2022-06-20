import React, {useState} from "react";
import './TaskForm.css';
import Card from '../UI/Card';

function TaskForm(props) {

    const [enteredTodo, setenteredTodo] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    const userdateHandler = (event) => {
        setenteredDate(event.target.value );
    }
    const userinputHandler = (event) => {
        setenteredTodo(event.target.value);
    } 
    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = [{ 
            task:enteredTodo,
            date:enteredDate,

        }];
        props.onSaveNewTask(userData)
        setenteredDate('');
        setenteredTodo('');
    };

return <div> 
        <div>
            <Card>
            <form  onSubmit={handleSubmit} className="form">
                <label>ToDo </label>
                <input type="text" value={enteredTodo} onChange={userinputHandler} ></input>
                <label>Due date</label>
                <input type="date" value={enteredDate} onChange={userdateHandler}></input>
                <button type="submit">Submit</button>

            </form>
            </Card>
        </div>
    </div>
}
export default TaskForm;