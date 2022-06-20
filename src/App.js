import React, {useState} from 'react';
import './App.css';
import NewTask from './Components/NewTask/NewTask';
import Taskitems from './Components/Expenses/Taskitems';

const dummyTodo = [ {
  id:"1", task: '', dueDate: ''}
]

function App() {

  const UserDataHandler = (userdata) => {

    console.log(userdata)
  }

  return (


    <div className="App">

      <NewTask value= '' onUserData= {UserDataHandler} />

      <div className='Task-grid'>
        <Taskitems task = {dummyTodo} />
      </div>

    </div>
  );
}

export default App;
