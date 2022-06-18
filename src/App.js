import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Card from './Components/Card';
import {Helmet} from "react-helmet";

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
  console.log();

  const userArr= [newtask,newdate]
  console.log(userArr)
};
  return (


    <div className="App">

      <Form value= "" onuserTask={userdata} onuserDate={userdate} ></Form>

      <div className='Task-grid'>
        <Tasks 
        task = {newtask}
         date = {newdate} >
         </Tasks>
      </div>

    </div>
  );
}

export default App;
