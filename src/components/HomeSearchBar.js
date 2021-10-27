// import React, { useState, useEffect } from 'react';
// import Dropdown from './Dropdown';
// import Listbox from './Listbox';
// import Detail from './Detail';
// import { Credentials } from './Credentials';
// import axios from 'axios';

// // import {searchRequested} from '../App';

// import './Navbar.css';

// import "./YoutubeEmbed.css";

// import Navbar from './Navbar';
// import AutoGrid from './MainGrid';



// import { Input, List, Avatar } from 'antd';
// const { Search } = Input;


// // import React, { Component } from 'react';
// // import { Input, List, Avatar } from 'antd';




// // var redirect_uri = "https://localhost:3000/redirect"; // change this your value
// // //var redirect_uri = "http://127.0.0.1:5500/index.html";
 

// // var client_id = '702547d3761d435c950ad07e783b18e2';
// // var client_secret = 'dc0b4b95089e493f9f8ede45c628f54a';// In a real app you should not expose your client_secret to the user

// // var access_token = null;
// // var refresh_token = null;
// // var currentPlaylist = "";
// // var radioButtons = [];

// // const AUTHORIZE = "https://accounts.spotify.com/authorize"
// // const TOKEN = "https://accounts.spotify.com/api/token";
// // const PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
// // const DEVICES = "https://api.spotify.com/v1/me/player/devices";
// // const PLAY = "https://api.spotify.com/v1/me/player/play";
// // const PAUSE = "https://api.spotify.com/v1/me/player/pause";
// // const NEXT = "https://api.spotify.com/v1/me/player/next";
// // const PREVIOUS = "https://api.spotify.com/v1/me/player/previous";
// // const PLAYER = "https://api.spotify.com/v1/me/player";
// // const TRACKS = "https://api.spotify.com/v1/playlists/{{PlaylistId}}/tracks";
// // const CURRENTLYPLAYING = "https://api.spotify.com/v1/me/player/currently-playing";
// // const SHUFFLE = "https://api.spotify.com/v1/me/player/shuffle";

// // function onPageLoad(){
// //     client_id = localStorage.getItem("client_id");
// //     client_secret = localStorage.getItem("client_secret");
// //     if ( window.location.search.length > 0 ){
// //         handleRedirect();
// //     }
// //     else{
// //         access_token = localStorage.getItem("access_token");
// //         if ( access_token == null ){
// //             // we don't have an access token so present token section
// //             document.getElementById("tokenSection").style.display = 'block';  
// //         }
// //         else {
// //             // we have an access token so present device section
// //             document.getElementById("deviceSection").style.display = 'block';  
// //             refreshDevices();
// //             refreshPlaylists();
// //             currentlyPlaying();
// //         }
// //     }
// //     refreshRadioButtons();
// // }

// // function handleRedirect(){
// //     let code = getCode();
// //     fetchAccessToken( code );
// //     window.history.pushState("", "", redirect_uri); // remove param from url
// // }

// // function getCode(){
// //     let code = null;
// //     const queryString = window.location.search;
// //     if ( queryString.length > 0 ){
// //         const urlParams = new URLSearchParams(queryString);
// //         code = urlParams.get('code')
// //     }
// //     return code;
// // }

// // function requestAuthorization(){

// //   console.log('clicked');
// //     client_id = '702547d3761d435c950ad07e783b18e2';
// //     client_secret = 'dc0b4b95089e493f9f8ede45c628f54a';
// //     localStorage.setItem("client_id", client_id);
// //     localStorage.setItem("client_secret", client_secret); // In a real app you should not expose your client_secret to the user

// //     let url = AUTHORIZE;
// //     url += "?client_id=" + client_id;
// //     url += "&response_type=code";
// //     url += "&redirect_uri=" + encodeURI(redirect_uri);
// //     url += "&show_dialog=true";
// //     url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
// //     window.location.href = url; // Show Spotify's authorization screen
// // }

// // function fetchAccessToken( code ){
// //     let body = "grant_type=authorization_code";
// //     body += "&code=" + code; 
// //     body += "&redirect_uri=" + encodeURI(redirect_uri);
// //     body += "&client_id=" + client_id;
// //     body += "&client_secret=" + client_secret;
// //     callAuthorizationApi(body);
// // }

// // function refreshAccessToken(){
// //     refresh_token = localStorage.getItem("refresh_token");
// //     let body = "grant_type=refresh_token";
// //     body += "&refresh_token=" + refresh_token;
// //     body += "&client_id=" + client_id;
// //     callAuthorizationApi(body);
// // }

// // function callAuthorizationApi(body){
// //     let xhr = new XMLHttpRequest();
// //     xhr.open("POST", TOKEN, true);
// //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// //     xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
// //     xhr.send(body);
// //     xhr.onload = handleAuthorizationResponse;
// // }

// // function handleAuthorizationResponse(){
// //     if ( this.status == 200 ){
// //         var data = JSON.parse(this.responseText);
// //         console.log(data);
// //         var data = JSON.parse(this.responseText);
// //         if ( data.access_token != undefined ){
// //             access_token = data.access_token;
// //             localStorage.setItem("access_token", access_token);
// //         }
// //         if ( data.refresh_token  != undefined ){
// //             refresh_token = data.refresh_token;
// //             localStorage.setItem("refresh_token", refresh_token);
// //         }
// //         onPageLoad();
// //     }
// //     else {
// //         console.log(this.responseText);
// //         alert(this.responseText);
// //     }
// // }

// // function refreshDevices(){
// //     callApi( "GET", DEVICES, null, handleDevicesResponse );
// // }

// // function handleDevicesResponse(){
// //     if ( this.status == 200 ){
// //         var data = JSON.parse(this.responseText);
// //         console.log(data);
// //         removeAllItems( "devices" );
// //         data.devices.forEach(item => addDevice(item));
// //     }
// //     else if ( this.status == 401 ){
// //         refreshAccessToken()
// //     }
// //     else {
// //         console.log(this.responseText);
// //         alert(this.responseText);
// //     }
// // }

// // function addDevice(item){
// //     let node = document.createElement("option");
// //     node.value = item.id;
// //     node.innerHTML = item.name;
// //     document.getElementById("devices").appendChild(node); 
// // }

// // function callApi(method, url, body, callback){
// //     let xhr = new XMLHttpRequest();
// //     xhr.open(method, url, true);
// //     xhr.setRequestHeader('Content-Type', 'application/json');
// //     xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
// //     xhr.send(body);
// //     xhr.onload = callback;
// // }

// // function refreshPlaylists(){
// //     callApi( "GET", PLAYLISTS, null, handlePlaylistsResponse );
// // }

// // function handlePlaylistsResponse(){
// //     if ( this.status == 200 ){
// //         var data = JSON.parse(this.responseText);
// //         console.log(data);
// //         removeAllItems( "playlists" );
// //         data.items.forEach(item => addPlaylist(item));
// //         document.getElementById('playlists').value=currentPlaylist;
// //     }
// //     else if ( this.status == 401 ){
// //         refreshAccessToken()
// //     }
// //     else {
// //         console.log(this.responseText);
// //         alert(this.responseText);
// //     }
// // }

// // function addPlaylist(item){
// //     let node = document.createElement("option");
// //     node.value = item.id;
// //     node.innerHTML = item.name + " (" + item.tracks.total + ")";
// //     document.getElementById("playlists").appendChild(node); 
// // }

// // function removeAllItems( elementId ){
// //     let node = document.getElementById(elementId);
// //     while (node.firstChild) {
// //         node.removeChild(node.firstChild);
// //     }
// // }

// // function handleApiResponse(){
// //     if ( this.status == 200){
// //         console.log(this.responseText);
// //         setTimeout(currentlyPlaying, 2000);
// //     }
// //     else if ( this.status == 204 ){
// //         setTimeout(currentlyPlaying, 2000);
// //     }
// //     else if ( this.status == 401 ){
// //         refreshAccessToken()
// //     }
// //     else {
// //         console.log(this.responseText);
// //         alert(this.responseText);
// //     }    
// // }

// // function deviceId(){
// //     return document.getElementById("devices").value;
// // }

// // function fetchTracks(){
// //     let playlist_id = document.getElementById("playlists").value;
// //     if ( playlist_id.length > 0 ){
// //         let url = TRACKS.replace("{{PlaylistId}}", playlist_id);
// //         callApi( "GET", url, null, handleTracksResponse );
// //     }
// // }

// // function handleTracksResponse(){
// //     if ( this.status == 200 ){
// //         var data = JSON.parse(this.responseText);
// //         console.log(data);
// //         removeAllItems( "tracks" );
// //         data.items.forEach( (item, index) => addTrack(item, index));
// //     }
// //     else if ( this.status == 401 ){
// //         refreshAccessToken()
// //     }
// //     else {
// //         console.log(this.responseText);
// //         alert(this.responseText);
// //     }
// // }

// // function addTrack(item, index){
// //     let node = document.createElement("option");
// //     node.value = index;
// //     node.innerHTML = item.track.name + " (" + item.track.artists[0].name + ")";
// //     document.getElementById("tracks").appendChild(node); 
// // }

// // function currentlyPlaying(){
// //     callApi( "GET", PLAYER + "?market=US", null, handleCurrentlyPlayingResponse );
// // }

// // function handleCurrentlyPlayingResponse(){
// //     if ( this.status == 200 ){
// //         var data = JSON.parse(this.responseText);
// //         console.log(data);
// //         if ( data.item != null ){
// //             document.getElementById("albumImage").src = data.item.album.images[0].url;
// //             document.getElementById("trackTitle").innerHTML = data.item.name;
// //             document.getElementById("trackArtist").innerHTML = data.item.artists[0].name;
// //         }


// //         if ( data.device != null ){
// //             // select device
// //             let currentDevice = data.device.id;
// //             document.getElementById('devices').value=currentDevice;
// //         }

// //         if ( data.context != null ){
// //             // select playlist
// //             currentPlaylist = data.context.uri;
// //             currentPlaylist = currentPlaylist.substring( currentPlaylist.lastIndexOf(":") + 1,  currentPlaylist.length );
// //             document.getElementById('playlists').value=currentPlaylist;
// //         }
// //     }
// //     else if ( this.status == 204 ){

// //     }
// //     else if ( this.status == 401 ){
// //         refreshAccessToken()
// //     }
// //     else {
// //         console.log(this.responseText);
// //         alert(this.responseText);
// //     }
// // }

// // function saveNewRadioButton(){
// //     let item = {};
// //     item.deviceId = deviceId();
// //     item.playlistId = document.getElementById("playlists").value;
// //     radioButtons.push(item);
// //     localStorage.setItem("radio_button", JSON.stringify(radioButtons));
// //     refreshRadioButtons();
// // }

// // function refreshRadioButtons(){
// //     let data = localStorage.getItem("radio_button");
// //     if ( data != null){
// //         radioButtons = JSON.parse(data);
// //         if ( Array.isArray(radioButtons) ){
// //             removeAllItems("radioButtons");
// //             radioButtons.forEach( (item, index) => addRadioButton(item, index));
// //         }
// //     }
// // }

// // function onRadioButton( deviceId, playlistId ){
// //     let body = {};
// //     body.context_uri = "spotify:playlist:" + playlistId;
// //     body.offset = {};
// //     body.offset.position = 0;
// //     body.offset.position_ms = 0;
// //     callApi( "PUT", PLAY + "?device_id=" + deviceId, JSON.stringify(body), handleApiResponse );
// //     //callApi( "PUT", SHUFFLE + "?state=true&device_id=" + deviceId, null, handleApiResponse );
// // }

// // function addRadioButton(item, index){
// //     let node = document.createElement("button");
// //     node.className = "btn btn-primary m-2";
// //     node.innerText = index;
// //     // node.onclick = function() { onRadioButton( item.deviceId, item.playlistId ) };
// //     document.getElementById("radioButtons").appendChild(node);
// // }




// // const { Search } = Input;



// // export default function HomeSearchBar() {
// //     return (

      

// //       <div class="container">

// // <button onclick={requestAuthorization}>
// //                   Request Authorization
// //                 </button>

// // <div id="tokenSection" class="row">

// // <div class="col">
// //                 <p class="welcomeText">This is a javascript app that shows how to use the Spotify API to control the playback 
// //                     of music (playlist or albums) on any of your devices connected to your spotify account.</p>
// //                 <p class="welcomeText">To use this app you need a Spotify client ID and client secret. You get these by 
// //                     creating an app in the Spotify developers dashboard here 
// //                     <a href="https://developer.spotify.com/dashboard/applications" target="_blank">https://developer.spotify.com/dashboard/applications</a> 
// //                      and add https://makeratplay.github.io/SpotifyWebAPI/ in the "Redirect URIs" settings field.
// //                 </p>                    
               
                
// //             </div>


// //             <div class="col">
// //                 <div class="mb-3">
// //                     <label for="clientId" class="form-label">Client ID</label>
// //                     <input type="text" class="form-control" id="clientId" placeholder=""/>
// //                 </div>
// //                 <div class="mb-3">
// //                     <label for="clientSecret" class="form-label">Client Secret</label>
// //                     <input type="text" class="form-control" id="clientSecret" placeholder=""/>
// //                 </div>
               
                
// //             </div>

// //             <div class="col">
// //                 <p class="welcomeText"> I used this project to learn the Spotify API in order to create this project:</p>
// //                 <iframe width="560" height="315" src="https://www.youtube.com/embed/H2HJ-LY7-lQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// //             </div>



// //             <div id="deviceSection" class="row">
// //             <div class="col">

// //                 <div class="mb-3">
// //                     <label for="devices" class="form-label">Devices</label>
// //                     <select id="devices" class="form-control">
// //                     </select>
// //                     <input class="btn btn-primary btn-sm mt-3" type="button" onclick="refreshDevices()" value="Refresh Devices"/>
// //                     <input type="button" class="btn btn-dark btn-sm  mt-3" onclick="transfer()" value="Transfer"/>
// //                 </div>

// //                 <div class="mb-3">
// //                     <label for="playlists" class="form-label">Playlists</label>
// //                     <select id="playlists" class="form-control">
// //                     </select>
// //                     <input class="btn btn-primary btn-sm mt-3" type="button" onclick="refreshPlaylists()" value="Refresh Playlists"/>

// //                 </div>

// //                 <div class="mb-3">
// //                     <label for="tracks" class="form-label">Tracks</label>
// //                     <select id="tracks" class="form-control">
// //                     </select>
// //                     <input class="btn btn-primary btn-sm mt-3" type="button" onclick="fetchTracks()" value="Fetch Tracks"/>
// //                 </div>

// //                 <div class="mb-3">
// //                     <label for="tracks" class="form-label">Album</label>
// //                     <input id="album" class="form-control"/>
// //                 </div>

// //                 <div class="row">
// //                     <div class="col">
// //                         <input type="button" class="btn btn-dark" onclick="previous()" value="Prev"/>
// //                         <input type="button" class="btn btn-dark" onclick="play()" value="Play"/>
// //                         <input type="button" class="btn btn-dark" onclick="shuffle()" value="Shuffle"/>
// //                         <input type="button" class="btn btn-dark" onclick="pause()" value="Pause"></input>
// //                         <input type="button" class="btn btn-dark" onclick="next()" value="Next"></input>
// //                     </div>
// //                 </div>


// //                 <div class="row  mt-3">
// //                     <div class="col">
// //                         <h1> Currently Playing</h1>
// //                         <input type="button" class="btn btn-primary btn-sm mt-3" onclick="currentlyPlaying()" value="Refresh Currently Playing"></input>
// //                         <div>
// //                             <img id="albumImage" src=""/>
// //                             <div id="trackTitle"></div>
// //                             <div id="trackArtist"></div>
// //                         </div>

// //                     </div>
// //                 </div>

// //                 <div class="row  mt-3">
// //                     <div class="col">
// //                         <div id="radioButtons"></div>
// //                         <input type="button" class="btn btn-dark" onclick="saveNewRadioButton()" value="Add"></input>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// // </div>






// // <div className="Search">
// //         <Search
// //             placeholder="Search for a track, we'll do the rest!"
// //             enterButton="Search"
// //             size="large"
// //             // onChange={value => getSearchResults(value.target.value)}
// //             onSearch={value => console.log(value)}
// //           />

// //           {/* {results} */}
// //         </div>
// //         </div>

// //     )

// //     }



// export default function HomeSearchBar() {
//         return (

// <div className="container">
// <form onSubmit={searchRequested}>
//   {/* <SearchBar label="Search" searchValue={searchValue} changed={searchValue} />        */}
//     {/* <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} /> */}
//     {/* <Dropdown label="Playlist :" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} /> */}
//     <Search
//       placeholder="input search text"
//       enterButton="Search"
//       size="large"
//       onChange={value => this.getSearchResults(value.target.value)}
//       // onChange={searchParamChanged}
//       onChange={value => console.log(value.target.value)}
//       onSearch={value => console.log(value)}
//     />
//     <div className="col-sm-6 row form-group px-0">
//       <button type='submit' className="btn btn-success col-sm-12">
//         Search
//       </button>
//     </div>
//     <div className="row">
//                   <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
//       {trackDetail && <Detail {...trackDetail} /> }
//     </div>        
// </form>
// </div>


//         )}