import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          Search for a song, we'll do the rest!
        </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome to <code>Tunescout</code>.
        </p>
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
