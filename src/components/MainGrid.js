import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import axios from "axios";


import "bootstrap/dist/css/bootstrap.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";




import { Credentials } from './Credentials';

import { useParams} from "react-router-dom";

import Collapsible from 'react-collapsible';
import "./Collapsible.css"

import { useState, useEffect } from 'react';

import YoutubeEmbed from "./YoutubeEmbed";

import SpotifyEmbed from './SpotifyEmbed';

import MapChart from "./MapChart";

import * as lyric_data from "../data/sample_lyrics.json"

import "./MapChart.css"

import "./MainGrid.css"

import { styled } from '@mui/material/styles';

const song_lyrics = lyric_data.lyrics;











 const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function AutoGridNoWrap() {

  
  // Blue_Öyster_Cult



  const renderMusicVideoTooltip = props => (
    <Tooltip {...props}>Click to collapse/expand music video</Tooltip>
  );

  const renderSpotifyEmebedTooltip = props => (
    <Tooltip {...props}>Click to collapse/expand Spotify track player</Tooltip>
  );



  const renderTrackAvailabilityTooltip = props => (
    <Tooltip {...props}>Click to collapse/expand track availability</Tooltip>
  );
  const renderSongLyricsTooltip = props => (
    <Tooltip {...props}>Click to collapse/expand song lyrics</Tooltip>
  );
const renderMusicVideoAvailabilityTooltip = props => (
  <Tooltip {...props}>Click to collapse/expand music video availability</Tooltip>
);
const renderArtistDescriptionTooltip = props => (
  <Tooltip {...props}>Click to collapse/expand artist description</Tooltip>
);

  let {id} = useParams();

  const spotifyEmbedURL = `https://open.spotify.com/embed/track/${id}`;

  const spotify = Credentials(); 

  const [token, setToken] = useState(''); 

  const [trackData, setTrackData] = useState({trackID:id, trackArtist:'', trackTitle:''});

  // declare a new state variable to store the microservice artist description, which will be called ms_artist_desc and will default to ""
  const [ms_artist_desc, set_ms_artist_desc] = useState("No artist description available.");
   
  // reauthenticate
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

      axios(`https://api.spotify.com/v1/tracks/${id}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then(tracksResponse => {
        // console.log(tracksResponse.data);

        // console.log(tracksResponse.data.artists[0].name);
        // console.log(tracksResponse.data.name);
        // console.log(tracksResponse.data.available_markets);
        setTrackData({...trackData,
          trackArtist: tracksResponse.data.artists[0].name,
          trackTitle: tracksResponse.data.name,
          trackDistribution: tracksResponse.data.available_markets
        })
      });
      
    });

    getAllArtistDescriptionMS(trackData.trackArtist);

  }, [spotify.ClientId, spotify.ClientSecret]); 
  


  function changeTrackData(e){
    console.log(e);
    setTrackData({...trackData,[e.target.name]:e.target.value})
  }

  // getTrackDetails();

  const [artistDescriptionMS, getArtistDescriptionMS] = useState('');

  // var artist_description_ms = '';

  // useEffect(()=> {

  //   if (trackData.trackArtist === "") {
  //       console.log();
  //   } else {

  //   }

  //   getAllArtistDescriptionMS(trackData.trackArtist);
  // },  []);


  const getAllArtistDescriptionMS = (currentArtistName) => {

    let current_url = 'https://kristina-micro.herokuapp.com/' + currentArtistName;
    console.log('Connecting to microservice at ', current_url);
    axios.get(current_url)
    .then((response)=> {
      const allArtistDescriptionMS = response.data.About;
      console.log('received result from Kristina microservice:', allArtistDescriptionMS);
      getArtistDescriptionMS(allArtistDescriptionMS);
    })
    .catch(error => console.error('Error', error));
  }

  // Blue_Öyster_Cult



  

  // console.log(artist_description_ms);

  // console.log(typeof(artist_description_ms));

  return (

    

    <div>
      {/* <Item>
        <label>TrackID</label> <input type="text" name="trackID" value={trackData.trackID} onChange={changeTrackData}></input>
        <label>Artist</label> <input type="text" name="trackArtist" value={trackData.trackArtist} onChange={changeTrackData}></input>
        <label>TrackTitle</label> <input type="text" name="trackTitle" value={trackData.trackTitle} onChange={changeTrackData}></input>
        <label>ArtistDescription</label> <input type="text" name="artistDescription" value={trackData.artistDescription} onChange={changeTrackData}></input>


        <p>
          ID is {trackData.trackID}
          Artist Name is {trackData.trackArtist}
          Track Title is {trackData.trackTitle}
          Artist Description is {trackData.artistDescription}
          </p>
    
          </Item> */}

    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>

<Item>
    <b> 
    {trackData.trackArtist}
    </b>

  
    <p> 
    {trackData.trackTitle}
    </p>

    </Item>

<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={5}>


    <OverlayTrigger placement="top" overlay={renderMusicVideoTooltip}>
              <Item>
                <Collapsible open="true" trigger="Music Video" data-tip data-for="musicVideoCollapse">
            <YoutubeEmbed embedId="dQw4w9WgXcQ" />
          </Collapsible>
          </Item>
      </OverlayTrigger>

    
      <OverlayTrigger placement="top" overlay={renderSpotifyEmebedTooltip}>
              
    <Item>
    <Collapsible open="true" trigger="Track (Spotify)">
      
      <SpotifyEmbed embedId={id}/>

    </Collapsible>
    </Item>
      </OverlayTrigger>


      <OverlayTrigger placement="top" overlay={renderTrackAvailabilityTooltip}>
    <Item>
    <Collapsible open="true" trigger="Track Availability (Spotify)">
    <MapChart/>
    </Collapsible>
    </Item>
  </OverlayTrigger>

  </Grid>

  
  <OverlayTrigger placement="top" overlay={renderSongLyricsTooltip}>
  <Grid item xs={2}>
    <Item>
    <Collapsible open="true" trigger="Lyrics">
      <Typography><div id="lyrics_box">{song_lyrics}</div></Typography>
    </Collapsible>
    </Item>
  </Grid>
  </OverlayTrigger>

  <Grid item xs={5}>


  <OverlayTrigger placement="top" overlay={renderArtistDescriptionTooltip}>
    <Item>
    <Collapsible open="true" trigger="Artist Description">
      <Typography>{artistDescriptionMS}</Typography>
      <p>{ms_artist_desc}</p>
      <button onClick={() => set_ms_artist_desc('updated')}>Click</button>
    </Collapsible>
    </Item>
    </OverlayTrigger>

    <OverlayTrigger placement="top" overlay={renderMusicVideoAvailabilityTooltip}>
    <Item>
    <Collapsible open="true" trigger="Music Video Availability (Youtube)">
    <MapChart/>
    </Collapsible>
    </Item>

    </OverlayTrigger>
  </Grid>
  
  <Grid item xs={6}>
    
  </Grid>
  <Grid item xs={6}>
    
  </Grid>
</Grid>
    </Box>



    </div>
    
  );
}