import logo from './logo.svg';
import './App.css';
import LickButton from './components/LickButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        demo演示：
      </header>
      <LickButton />

    </div>
  );
}

export default App;
