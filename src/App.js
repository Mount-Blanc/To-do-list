import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Tasks from './Components/Tasks';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <Card className="item1" >
      <Form></Form>
      </Card>
      <Card>
        <Tasks></Tasks>
      </Card>
    </div>
  );
}

export default App;
