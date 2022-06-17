import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Card from './Components/Card';

function App(props) {

const userdata = (task) => {
}


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
