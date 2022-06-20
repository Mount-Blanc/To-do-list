import React from "react";
import Card from "../UI/Card";
import './Tasks.css';
function Tasks (props) {


    return (
        <Card>
     <div className="todo-title">  
         <div className="todo-button" >Todo</div>
         <div className="todo-description"> {props.items.task}</div>
         <div>{props.items.duedate}</div>
    
    </div>
    
    </Card>
    )
}

export default Tasks