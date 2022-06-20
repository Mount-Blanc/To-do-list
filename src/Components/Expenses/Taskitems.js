import React from "react";
import "./Taskitems.css";
import Card from '../UI/Card';

function Taskitems (props) {

return ( 
<Card>
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