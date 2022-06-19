import React, {useState} from 'react';
import './App.css';
import TaskForm from './Components/NewTask/TaskForm';
import Tasks from './Components/Expenses/Tasks';
import Taskitems from './Components/Expenses/Taskitems';

const dummyTodo = [ {
  id:"1", task: '', dueDate: ''}
]

function App() {
const [USERTASK, setUSERTASK] = useState(dummyTodo)

const addUserTaskHandler = USERTASK => {
  setUSERTASK( (prevUSERTASK) =>{
    return [USERTASK, ...prevUSERTASK];
})
}

  const [newtask, setnewtask] = useState('')
  const [newdate, setnewdate] = useState('')
  const userdate = (newdate) => {
    setnewdate(newdate);
    console.log(newdate);
  }

const userdata = (newtask) => {
  setnewtask(newtask);
  console.log("app");
  console.log(newtask);
  

};

  return (


    <div className="App">

      <TaskForm value= "" onuserTask={userdata} onuserDate={userdate} ></TaskForm>

      <div className='Task-grid'>
        <Taskitems 
        task = {newtask} date = {newdate}  items = {dummyTodo}> </Taskitems>
      </div>

    </div>
  );
}

export default App;
