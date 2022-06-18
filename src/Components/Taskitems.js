import React from "react";
import "./Taskitems.css";
import Card from './Card';

function Taskitems () {

return ( 
<Card>
<div className="todo-title">
    <div className="todo-button" >Todo</div>

        <div className="todo-description">Insert Task
    </div>

    <div>Due Date</div>
</div>
</Card>
)

}

export default Taskitems