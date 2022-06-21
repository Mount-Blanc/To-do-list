import React from "react";
import Card from "../UI/Card";
import './Tasks.css';
import Taskitems from './Taskitems';

function Tasks (props) {

    return (
    <div>
        <Card>
        {props.items.map((dummyTodoData) => <Taskitems 
        key={dummyTodoData.id}
        task= {dummyTodoData.task}
         duedate={dummyTodoData.duedate} />
         )}
        </Card>

    </div>
    
    )
}

export default Tasks