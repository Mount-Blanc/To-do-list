import React from "react";
import TaskForm from "../NewTask/TaskForm";


const NewTask = () => {

const saveNewTaskHandler = (enteredUserData) => {
   const userData = {
        ...enteredUserData,
        id: Math.random().toString()
   }

};
return (
            <div>
            <TaskForm onSaveNewTask={saveNewTaskHandler} />
            </div>
        );
};

export default NewTask;