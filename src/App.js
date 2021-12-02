import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Credentials } from './components/Credentials';
import axios from 'axios';

import './components/Navbar.css';

import "./components/YoutubeEmbed.css";


// import RevampedSearchBar from './components/searchbar-revamped';

import Navbar from './components/Navbar';
import AutoGrid from './components/MainGrid';
// import HomeSearchBar from './components/HomeSearchBar';


import 'antd/dist/antd.css';

import Listbox from './components/Listbox';
import Detail from './components/Detail';


// import {searchRequested} from '../App';

import './components/Navbar.css';

import "./components/YoutubeEmbed.css";




import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from 'antd';
import { RevampedSearchBar } from './components/searchbar-revamped';
const { Search } = Input;




// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#SettingModal');
const App = () => {

  const [constant, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
   
  useEffect(() => {
    const tracks = [];
    const promises = new Array(20).fill()
    .map((v, i) => fetch (`####/ ${i+1}`));

    Promise.all(promises).then(trackArray => {
      return trackArray.map(value => 
        value
        .json()
        .then((
          {track_name, album_art, artist_name}) => 
            tracks.push({track_name, album_art, artist_name})
          )
      );
        });
        setOptions(tracks);
    }, []);


  
    

  const spotify = Credentials();  

  // console.log('RENDERING APP.JS');


  
  

  // const NewSearch = props => {

  //   const dropdownChanged = e => {
  //     props.changed(e.target.value);

  // } 


  //   const [searchParam, setSearchParam] = useState();

  //   function updateSearchParam(e){
  //     setSearchParam(e.target.value);

  //     // pass the search parameter to the searchParamRequeste 
      
  //   }

  //   return(
      
  //     <Card >
  //     <Card.Img variant="top"  />
  //     <Card.Body>
  //       <Card.Text>


  //                 <label>searchParam</label> <input type="text" name="currentSearchParam" value={searchParam} onChange={updateSearchParam}></input>
                  
  //                 <p>searchParam is {searchParam}</p>      

  //                   <div className="row">
  //                                   <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}  />
  //                       {trackDetail && <Detail {...trackDetail} /> }
  //                     </div>     
  //       </Card.Text>
  //     </Card.Body>
  //   </Card>
  //   )
  // }

  

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



  return (
    <Router>
        <Navbar />

        
  

        
        <Switch>

          <Route exact path="/">
          <div className="container">
            <RevampedSearchBar placeholderText="Test"/>
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



