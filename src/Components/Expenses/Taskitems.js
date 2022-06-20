import React from "react";
import "./Taskitems.css";
import Card from '../UI/Card';
function Taskitems (props) {

return (
    <Card>
 <div className="todo-title">  
     <div className="todo-button" > ToDo</div>
     <div className="todo-description">{props.task} </div>
     <div>{props.duedate}</div>

</div>

</Card>
)
}

export default Taskitems