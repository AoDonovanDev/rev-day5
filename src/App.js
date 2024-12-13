import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("")

  function handleChange(e){
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello secret={"SECRET"}/>
        <h1>{name}</h1>
        <input type='text' onChange={handleChange}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
