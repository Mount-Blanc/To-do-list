import React, {useState} from 'react';
import './App.css';
import NewTask from './Components/NewTask/NewTask';
import Taskitems from './Components/Expenses/Taskitems';

const dummyTodoData = {
  task:'0',
  duedate:'0'
}
function App() {

const [enteredData, setentereddata] = useState()

  const UserDataHandler = (userdata) => {
     setentereddata(userdata)
  }

  return (


    <div className="App">

      <NewTask value= '' onUserData= {UserDataHandler} />

      <div className='Task-grid'>
        <Taskitems dummy = {dummyTodoData} />
      </div>

    </div>
  );
}

export default App;
