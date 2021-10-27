import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./components/Player";

import logo from "./logo.svg";
import "./App.css";



const _getTracks = async (token) => {

      // declare a limit
      const limit = 10;

      const searchTerms = "Never";

    

  
      // api endpoint to get a track
      const result = await fetch (`https://api.spotify.com/v1/search/q=${searchTerms}&type=track&limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
      });

     
      console.log(result);
      // convert results of fetch call
      const data = result.json();
      return data.items;
    }



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
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
      this.getTracks(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }


  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the
                            user does not give F5 and has opened his Spotify. */
        });
      }
    });
  }


  getTracks(token){

    console.log('fired');

    const searchTerms = "Never";

    const limit = 10;

    console.log(token);
    
    $.get( "https://api.spotify.com/v1/search?q=track%3Anumb+artist%3Alinkin+park&type=track", 
    function( data ) {
        console.log(data);  
    });

    $.ajax({
      url: `https://api.spotify.com/v1/search/q=${searchTerms}&type=track&limit=${limit}`,
      headers: {
          'Authorization': 'Bearer ' + token
      },
      success: function(response) {
          console.log(response);
      }
   });
        }

   

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="input-group">

          <div class="form-outline">
            <input type="search" placeholder="Searh for a track, we'll do the rest!" id="form1" class="form-control" />
    
            </div>

          <button onClick={this.getTracks} type="button" class="btn btn-primary">
            <i class="fas fa-search">Search</i>
          </button>

      </div>
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && !this.state.no_data && (
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
            />
          )}
          {this.state.no_data && (
            <p>
              You need to be playing a song on Spotify, for something to appear here.
            </p>
          )}
        </header>
      </div>
    );
  }
}

export default App;