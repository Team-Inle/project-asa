
import './components/Navbar.css';

import "./components/YoutubeEmbed.css";
import YoutubeEmbed from "./components/YoutubeEmbed";

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AutoGrid from './components/MainGrid';



import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <Router>
        <Navbar />
        <AutoGrid/>       
        <YoutubeEmbed embedId="rokGy0huYEA" />
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
    </Router>
   
  );
}

export default App;
