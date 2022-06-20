import React, {useState} from 'react';
import './App.css';
import TaskForm from './Components/NewTask/TaskForm';
import Taskitems from './Components/Expenses/Taskitems';

const dummyTodo = [ {
  id:"1", task: '', dueDate: ''}
]

function App() {

  return (


    <div className="App">

      <TaskForm value= ""  ></TaskForm>

      <div className='Task-grid'>
        <Taskitems 
        > </Taskitems>
      </div>

    </div>
  );
}

export default App;
