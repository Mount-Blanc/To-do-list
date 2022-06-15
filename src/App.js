import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Card>Card</Card>
    </div>
  );
}

export default App;
