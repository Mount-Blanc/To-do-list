import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Taskitems from './Components/Taskitems';

const dummyTodo = [ {
  id:"1", task: '', dueDate: ''}
]

function App() {


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

      <Form value= "" onuserTask={userdata} onuserDate={userdate} ></Form>

      <div className='Task-grid'>
        <Taskitems 
        task = {newtask} date = {newdate}  items = {dummyTodo}> </Taskitems>
      </div>

    </div>
  );
}

export default App;
