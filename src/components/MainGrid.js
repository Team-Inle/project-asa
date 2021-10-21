import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Collapsible from 'react-collapsible';
import "./Collapsible.css"


import MapChart from "./MapChart";

import "./MapChart.css"

import { styled } from '@mui/material/styles';
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;


 const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function AutoGridNoWrap() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>
    <Collapsible open="true" trigger="Music Video">
      Test Text
    </Collapsible>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Collapsible open="true" trigger="Artist Description">
      <Typography>{message}</Typography>
    </Collapsible>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Collapsible open="true" trigger="Music Video">
      <Typography>{message}</Typography>
    </Collapsible>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Collapsible open="true" trigger="Track Availability (Spotify)">
    <MapChart/>
    </Collapsible>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Collapsible open="true" trigger="Music Video Availability (Youtube)">
    <MapChart/>
    </Collapsible>
    </Item>
  </Grid>
</Grid>

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
      </Paper>

    </Box>




    
  );
}