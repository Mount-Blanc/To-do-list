import React from "react";
import "./Taskitems.css";
import Card from '../UI/Card';
import NewTask from '../NewTask/NewTask';

function Taskitems (props) {

return ( 
<Card>
    {props.items.map(dummyTodoData => <NewTask task={dummyTodoData.task} duedate = {dummyTodoData.date} />)}
<div className="todo-title">
    <div className="todo-button" >Todo</div>
        <div className="todo-description"> {props.items.task}
    </div>

    <div>{props.items.duedate}</div>
</div>
</Card>
)

}

export default Taskitems