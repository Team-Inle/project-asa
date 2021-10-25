import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Collapsible from 'react-collapsible';
import "./Collapsible.css"


import YoutubeEmbed from "./YoutubeEmbed";

import MapChart from "./MapChart";

import * as lyric_data from "../data/sample_lyrics.json"

import "./MapChart.css"

import "./MainGrid.css"

import { styled } from '@mui/material/styles';

const song_lyrics = lyric_data.lyrics;

const song_title = `Never Gonna Give You Up`;

const artist_name = `Rick Astley`;

const artist_description = `Richard Paul Astley (born 6 February 1966) is an English singer, songwriter and radio personality, who has been active in music for several decades. He gained worldwide fame in the 1980s, having multiple hits including his signature song "Never Gonna Give You Up", "Together Forever" and "Whenever You Need Somebody", and returned to music full-time in the 2000s. Outside his music career, Astley has occasionally worked as a radio DJ and a podcaster.

Born and raised in Lancashire, Astley became a musician after leaving school, as the drummer for the soul band FBI. Three years later, he rose to fame through his association with the production trio Stock Aitken Waterman; releasing the 1987 album Whenever You Need Somebody, which sold 15.2 million copies worldwide. His debut single "Never Gonna Give You Up" was a number 1 hit single in 25 countries, winning the 1988 Brit Award for Best British Single. His 1988 single "Together Forever" became his second single to top the US Billboard Hot 100, and was one of his eight songs to reach the top ten on the UK Singles Chart. The title track was a No 1 single in seven countries, and it reached No 3 in the UK. In 1988, Astley followed-up his debut album with Hold Me In Your Arms. The lead single "She Wants to Dance with Me" was Astley's first single that he wrote himself, and became a worldwide top 10 hit.

In 1991, Astley left Stoke Aitken Waterman and moved his musical direction away from dance-pop and towards soul, which he explored on his albums Free (1991) and Body and Soul (1993). His 1991 single "Cry for Help" was Astley's last single to reach the top 10 in either the US or UK. From 1994 to 2000, Astley retired from music to focus on spending time with his wife and raising their daughter. He returned to the music industry in 2000, and released the single "Sleeping" and the album Keep It Turned On in 2001. Four years later, Astley released his covers album Portrait.

Astley became an Internet phenomenon in 2007 when the music video for his song "Never Gonna Give You Up" became integral to the Rickrolling meme, and his performance career was revitalised by the meme's popularity. In 2010, Astley released the single "Lights Out" after touring with Peter Kay. Six years later, he released his album 50 to celebrate his 50th birthday, which debuted in the UK at No. 1. He released his most recent studio album Beautiful Life in 2018, and released his greatest hits album The Best of Me in 2019. His most recent albums were recorded at his home studio in Surrey.

By the time of his brief retirement, Astley had sold approximately 40 million records worldwide. A year after the Rickrolling meme began, Astley was voted "Best Act Ever" by Internet users at the MTV Europe Music Awards 2008. His song "Never Gonna Give You Up" reached 1 billion views in July 2021, becoming the fourth 1980s song to reach this milestone (behind "Billie Jean" by Michael Jackson, "Take On Me" by A-ha and "Sweet Child o' Mine" by Guns N' Roses).`;


 const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function AutoGridNoWrap() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>

<Item>
    <b> 
    {artist_name}
    </b>

  
    <p> 
    {song_title}
    </p>

    <Collapsible open="true" trigger="Music Video">
      Test Text
    </Collapsible>
    </Item>

<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={5}>
    <Item>
    <Collapsible open="true" trigger="Music Video">
      <YoutubeEmbed embedId="dQw4w9WgXcQ" />
    </Collapsible>
    </Item>

    <Item>
    <Collapsible open="true" trigger="Track (Spotify)">
      
    <iframe src="https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

    </Collapsible>
    </Item>
    

    <Item>
    <Collapsible open="true" trigger="Track Availability (Spotify)">
    <MapChart/>
    </Collapsible>
    </Item>
  </Grid>

  <Grid item xs={2}>
    <Item>
    <Collapsible open="true" trigger="Lyrics">
      <Typography><div id="lyrics_box">{song_lyrics}</div></Typography>
    </Collapsible>
    </Item>
  </Grid>

  <Grid item xs={5}>
    <Item>
    <Collapsible open="true" trigger="Artist Description">
      <Typography>{artist_description}</Typography>
    </Collapsible>
    </Item>

    <Item>
    <Collapsible open="true" trigger="Music Video Availability (Youtube)">
    <MapChart/>
    </Collapsible>
    </Item>
  </Grid>
  
  {/* <Grid item xs={6}>
    <Item>
    <Collapsible open="true" trigger="Music Video">
      <Typography>{message}</Typography>
    </Collapsible>
    </Item>
  </Grid> */}
  <Grid item xs={6}>
    
  </Grid>
  <Grid item xs={6}>
    
  </Grid>
</Grid>
{/* 
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>Y</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>S</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper> */}

    </Box>




    
  );
}