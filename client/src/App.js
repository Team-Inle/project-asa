import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    track: '',
    id: ''
  }
componentDidMount() {
    this.fetchResponse()
  }

fetchResponse = async () => {
    const response = await fetch(`/api/track`)
    const initialTrackResponse = await response.json()
    const track = initialTrackResponse.track
    this.setState({ track })
  }
customTrack = async evt => {
    evt.preventDefault()
    const id = this.state.id
    const response = await fetch(`/api/track/${id}`)
    const custom = await response.json()
    const track = custom.track
    this.setState({ track, id: '' })
  }
handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
    console.log(this.state.id)
  }
render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>
          Welcome to <code>Tunescout</code>.
        </h1>
      <p>
          Search for a song, we'll do the rest!
        </p>
        </header>
        <code>{this.state.cow}</code>
        
        <a
          className="App-link"
          href="www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google it
        </a>

      </div>
    )
  }
}
export default App;

