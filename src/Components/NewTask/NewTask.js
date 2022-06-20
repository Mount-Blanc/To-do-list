import React from "react";
import TaskForm from "../NewTask/TaskForm";


const NewTask = (props) => {

const saveNewTaskHandler = (enteredUserData) => {
   const userData = {
        ...enteredUserData,
        id: Math.random().toString()
   }
   props.onUserData(userData)
};
return (
            <div>
            <TaskForm onSaveNewTask={saveNewTaskHandler} />
            </div>
        );
};

export default NewTask;