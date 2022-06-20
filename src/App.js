import React, {useState} from 'react';
import './App.css';
import NewTask from './Components/NewTask/NewTask';
import Tasks from './Components/Expenses/Tasks';

const dummyTodoData = [{
  task:'0',
  duedate:'0',
}]
function App() {

    const UserDataHandler = () => {
      
    }
  return (


    <div className="App">

      <NewTask value= '' onUserData ={UserDataHandler} />

      <div className='Task-grid'>
        <Tasks items = {dummyTodoData} />
      </div>

    </div>
  );
}

export default App;
