import React, {useState} from 'react';
import './App.css';
import NewTask from './Components/NewTask/NewTask';
import Tasks from './Components/Expenses/Tasks';

const dummyTodoData = [{
  id:'1',
  task:'',
  duedate:'',
}]
function App() {
const [userData, setuserData] = useState(dummyTodoData)

    const UserDataHandler = (userData) => {
      setuserData((prevdummyTodoData) => {
        return [userData, ...prevdummyTodoData];
      });
    };


  return (
    <div className="App">

      <NewTask value= '' onUserData ={UserDataHandler} />

      <div className='Task-grid'>
        <Tasks items = {userData} />
      </div>

    </div>
  );
}

export default App;
