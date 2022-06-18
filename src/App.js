import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Card from './Components/Card';

function App() {
  const [newtask, setnewtask] = useState(' ')

const userdata = (newtask) => {
  setnewtask ((prevtask) => {
    return [newtask, ...prevtask]
  });
};


  return (
    <div className="App">
      <Card>
      <Form value= "" onUser={userdata} ></Form>
      </Card>
      <div className='Task-grid'>
    <Tasks usertask={userdata}></Tasks>
      </div>
    </div>
  );
}

export default App;
