import React from "react";
import "./Taskitems.css";
import Card from '../UI/Card';
import Tasks from './Tasks';

function Taskitems (props) {

return ( 
    <div>
        <Card>
        {props.items.map(dummyTodoData => <Tasks task = {dummyTodoData.task} duedate={dummyTodoData.duedate} />)}

        </Card>
    </div>
)

}

export default Taskitems