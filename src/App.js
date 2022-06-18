import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Card from './Components/Card';
import {Helmet} from "react-helmet";

function App() {
  const [newtask, setnewtask] = useState(' ')

const userdata = (newtask) => {
  setnewtask ((prevtask) => {
    return [newtask, ...prevtask]
  });
};


  return (


    <div className="App">
      <Helmet>
          <title>What to Do?</title>
          <meta name="What to Do?" content="Todo list" />
       </Helmet>


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
