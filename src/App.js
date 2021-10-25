
import './components/Navbar.css';

import "./components/YoutubeEmbed.css";

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AutoGrid from './components/MainGrid';





// initial function to fire off the API 
const APIController = (function(){
  const clientID = '';
  const clientSecret = '';

  // private methods
  const _getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www.form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret)
      },

      body: 'grant_type=client_credentials'
    });

    // wait for a response for result, save as data
    const data = await result.json()

    // return access token property of the stored data
    return data.access_token;
  }

  const _getTracks = async (token, tracksEndPoint) => {

    // declare a limit
    const limit = 10;

    // api endpoint to get a track
    const result = await fetch (`${tracksEndPoint}?limit=${limit}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    });

    // convert results of fetch call
    const data = result.json();
    return data.items;
  }


  const _getTrack = async (token, trackEndPoint) => {

    // api endpoint to get a track
    const result = await fetch (`${trackEndPoint}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    });

    const data = result.json();
    return data.items;
  }

  return {


    // each of these public methods have access to the closures provided by the private methods
    getToken() {
      return _getToken();     
    },
    getTrack(token, trackEndPoint) {
      return _getTrack(token, trackEndPoint);     
    },
    getTracks(token, tracksEndPoint) {
      return _getTracks(token, tracksEndPoint);
    }

  };

})();

function App() {
  return (
    <Router>
        <Navbar />
        <AutoGrid/>    
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
