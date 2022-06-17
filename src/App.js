import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Card from './Components/Card';

function App() {

const userdata = (props) => {
  console.log('In App.js');
  console.log(userinputHandler);
}


  return (
    <div className="App">
      <Card>
      <Form onUser={userdata}></Form>
      </Card>
      <div className='Task-grid'>
      <Card>
    <Tasks></Tasks>
    <Tasks></Tasks>
      </Card>
      </div>
    </div>
  );
}

export default App;
