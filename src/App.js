import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Credentials } from './components/Credentials';
import axios from 'axios';

import './components/Navbar.css';

import "./components/YoutubeEmbed.css";

import Navbar from './components/Navbar';
import AutoGrid from './components/MainGrid';
// import HomeSearchBar from './components/HomeSearchBar';



import Dropdown from './components/Dropdown';
import Listbox from './components/Listbox';
import Detail from './components/Detail';


// import {searchRequested} from '../App';

import './components/Navbar.css';

import "./components/YoutubeEmbed.css";




import { Input, List, Avatar } from 'antd';
const { Search } = Input;




const App = () => {

  

  const spotify = Credentials();  

  console.log('RENDERING APP.JS');

  const data = [
    {value: 1, name: 'A'},
    {value: 2, name: 'B'},
    {value: 3, name: 'C'},
  ]; 

  
  

  const NewSearch = props => {

    const dropdownChanged = e => {
      props.changed(e.target.value);

  } 


    const [searchParam, setSearchParam] = useState();

    function updateSearchParam(e){
      setSearchParam(e.target.value);

      // pass the search parameter to the searchParamRequeste 
      
    }

    return(
      
      <Card >
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Text>


                  <label>searchParam</label> <input type="text" name="currentSearchParam" value={searchParam} onChange={updateSearchParam}></input>
                  
                  <p>searchParam is {searchParam}</p>      

                    <div className="row">
                                    <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}  />
                        {trackDetail && <Detail {...trackDetail} /> }
                      </div>     
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }

  

  const [trackData, setTrackData] = useState({trackID:'', trackArtist:'', trackTitle:'', artistDescription:''});

  const [token, setToken] = useState('');  
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
  const [trackDetail, setTrackDetail] = useState(null);


  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {        
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });
      
    });

  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 

  const genreChanged = val => {
    setGenres({
      selectedGenre: val, 
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(playlistResponse => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items
      })
    });

    console.log(val);
  }



  const playlistChanged = val => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }


  const searchRequested = e => {
    e.preventDefault();

    var searchQuery = "Never Gonna";

    axios(`https://api.spotify.com/v1/search/?q=${searchQuery}&type=track&limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        listOfTracksFromAPI: tracksResponse.data.tracks.items
      })
    });
  }


  

  
  const searchParamRequested = e => {
    e.preventDefault();

    var searchQuery = "Never Gonna";

    axios(`https://api.spotify.com/v1/search/?q=${searchQuery}&type=track&limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        listOfTracksFromAPI: tracksResponse.data.tracks.items
      })
    });
  }


  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.id === val);

    console.log(trackInfo);

    console.log(trackInfo[0].id);

    setTrackData(trackInfo[0].id);
    
    setTrackData({...trackData,trackID:trackInfo[0].id})


  }

 



  

  return (
    <Router>
        <Navbar />

        <Switch>

          <Route exact path="/">
          <div className="container">

         
    {/* <NewSearch/> */}
        

<form onSubmit={searchRequested}>
  {/* <SearchBar label="Search" searchValue={searchValue} changed={searchValue} />        */}
    {/* <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} /> */}
    {/* <Dropdown label="Playlist :" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} /> */}
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onChange={value => this.getSearchResults(value.target.value)}
      // onChange={searchParamChanged}
      onChange={value => console.log(value.target.value)}
      onSearch={value => console.log(value)}
    />
    <div className="col-sm-6 row form-group px-0">
      <button type='submit' className="btn btn-success col-sm-12">
        Search
      </button>
    </div>
    <div className="row">
                  <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}  />
      {trackDetail && <Detail {...trackDetail} /> }
    </div>        
</form>
</div>

           </Route>

          <Route path="/results/:id">
          <AutoGrid/>
          </Route>

        </Switch>

            
    </Router> 
    
    
    
  );
}




export default App;



