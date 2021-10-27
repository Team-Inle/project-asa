
import './components/Navbar.css';

import "./components/YoutubeEmbed.css";

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AutoGrid from './components/MainGrid';
import HomeSearchBar from './components/HomeSearchBar';



// // initial function to fire off the API 
// const APIController = (function(){
//   const clientID = '';
//   const clientSecret = '';

//   // private methods
//   const _getToken = async () => {
//     const result = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type' : 'application/x-www.form-urlencoded',
//         'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret)
//       },

//       body: 'grant_type=client_credentials'
//     });

//     // wait for a response for result, save as data
//     const data = await result.json()

//     // return access token property of the stored data
//     return data.access_token;
//   }

//   const _getTracks = async (token, tracksEndPoint) => {

//     // declare a limit
//     const limit = 10;

//     // api endpoint to get a track
//     const result = await fetch (`${tracksEndPoint}?limit=${limit}`, {
//       method: 'GET',
//       headers: { 'Authorization': 'Bearer ' + token }
//     });

//     // convert results of fetch call
//     const data = result.json();
//     return data.items;
//   }


//   const _getTrack = async (token, trackEndPoint) => {

//     // api endpoint to get a track
//     const result = await fetch (`${trackEndPoint}`, {
//       method: 'GET',
//       headers: { 'Authorization': 'Bearer ' + token }
//     });

//     const data = result.json();
//     return data.items;
//   }

//   return {


//     // each of these public methods have access to the closures provided by the private methods
//     getToken() {
//       return _getToken();     
//     },
//     getTrack(token, trackEndPoint) {
//       return _getTrack(token, trackEndPoint);     
//     },
//     getTracks(token, tracksEndPoint) {
//       return _getTracks(token, tracksEndPoint);
//     }

//   };

// })();


// import hash from "./hash";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "YOUR_CLIENT_ID_GOES_HERE";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";
class App extends Component {
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    item: {
      album: {
        images: [{ url: "" }]
      },
      name: "",
      artists: [{ name: "" }],
      duration_ms:0,
    },
    is_playing: "Paused",
    progress_ms: 0
  };
  this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }
  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
        });
      }
    });
  }

function App() {
  return (
    <Router>
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />

            <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {!this.state.token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {this.state.token && (
        <Player
        item={this.state.item}
        is_playing={this.state.is_playing}
        progress_ms={this.progress_ms}
      />
      )}
      </header>
    </div>
          </Route>

          <Route path="/results">
          <AutoGrid/>
          </Route>

        </Switch>

            
    </Router>
   
  );
}

export default App;



function Home() {
  return (
    <HomeSearchBar/>
  );
}

