import React, {useState} from 'react';
import './App.css';
import NewTask from './Components/NewTask/NewTask';
import Taskitems from './Components/Expenses/Taskitems';

const dummyTodo = [ {
  id:"1", task: '', dueDate: ''}
]

function App() {

  return (


    <div className="App">

      <NewTask value= ""  />

      <div className='Task-grid'>
        <Taskitems 
        > </Taskitems>
      </div>

    </div>
  );
}

export default App;
