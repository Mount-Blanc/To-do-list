import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Card from './Components/Card';
import {Helmet} from "react-helmet";

function App() {
  const [newtask, setnewtask] = useState('')
const userdata = (newtask) => {
  console.log("app");
  console.log(newtask);
};

  return (


    <div className="App">

      <Form value= "" onUser={userdata} ></Form>

      <div className='Task-grid'>
        <Tasks task = {newtask}></Tasks>
      </div>

    </div>
  );
}

export default App;
