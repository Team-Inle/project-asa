// modified from https://github.com/briancodex/react-website-v2

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdStream, MdSettings } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


import Modal from "react-bootstrap/Modal";


import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Navbar() {

  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const [isSpotifyEmbedEnabled, setIsSpotifyEmbedEnabled] = React.useState(true);
  const [isYoutubeEmbedEnabled, setIsYoutubeEmbedEnabled] = React.useState(true);
  const [isSpotifyMapEnabled, setIsSpotifyMapEnabled] = React.useState(true);
  const [isYoutubeMapEnabled, setIsYoutubeMapEnabled] = React.useState(true);
  const [isLyricsEnabled, setIsLyricsEnabled] = React.useState(true);
  const [isArtistDescriptionEnabled, setIsArtistDescriptionEnabled] = React.useState(true);


  const [isSpotifyEmbedCheckboxEnabled, setIsSpotifyEmbedCheckboxEnabled] = React.useState(true);
  const [isYoutubeEmbedCheckboxEnabled, setIsYoutubeEmbedCheckboxEnabled] = React.useState(true);
  const [isSpotifyMapCheckboxEnabled, setIsSpotifyMapCheckboxEnabled] = React.useState(true);
  const [isYoutubeMapCheckboxEnabled, setIsYoutubeMapCheckboxEnabled] = React.useState(true);
  const [isLyricsCheckboxEnabled, setIsLyricsCheckboxEnabled] = React.useState(true);
  const [isArtistDescriptionCheckboxEnabled, setIsArtistDescriptionCheckboxEnabled] = React.useState(true);


  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const showConfirmModal = () => {
    setIsConfirmOpen(true);
    hideModal();
  };

  const hideConfirmModal = () => {
    setIsConfirmOpen(false);
  };


  const cancelConfirmModal = () => {
    hideConfirmModal();
    showModal();
  };

const confirmConfirmModal = () => {
  setIsSpotifyEmbedEnabled(isSpotifyEmbedCheckboxEnabled);
setIsYoutubeEmbedEnabled(isYoutubeEmbedCheckboxEnabled);
setIsSpotifyMapEnabled(isSpotifyMapCheckboxEnabled);
setIsYoutubeMapEnabled(isYoutubeMapCheckboxEnabled);
setIsLyricsEnabled(isLyricsCheckboxEnabled);
setIsArtistDescriptionEnabled(isArtistDescriptionCheckboxEnabled);

  hideConfirmModal();
  hideModal();
};


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

const renderSettingsTooltip = props => (
  <Tooltip {...props}>Advanced Settings</Tooltip>
);

const renderTunescoutHomeTooltip = props => (
  <Tooltip className="pl-3" {...props}>Home</Tooltip>
);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
          <OverlayTrigger placement="right" overlay={renderTunescoutHomeTooltip}>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdStream className='navbar-icon' />
              Tunescout
            </Link>
            </OverlayTrigger>
            The only music search app you'll ever need
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

 

            <OverlayTrigger placement="right" overlay={renderSettingsTooltip}>
              <div> 
            <MdSettings className='navbar-icon' size={40} onClick={showModal}/>
              </div>
            </OverlayTrigger>

            
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Advanced Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Allow collapsed components:
  <div class="form-check">
  <input class="form-check-input" type="checkbox"  value={setIsSpotifyEmbedCheckboxEnabled} id="flexCheck1"/>
  <label class="form-check-label" for="flexCheck1">
    Spotify Embed
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheck2"/>
  <label class="form-check-label" for="flexCheck2">
    Youtube Video Embed
  </label>
  </div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheck3"/>
  <label class="form-check-label" for="flexCheck3">
    Spotify Track Availability Map
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheck4"/>
  <label class="form-check-label" for="flexCheck4">
    Youtube Video Availability Map
  </label>
  </div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheck5"/>
  <label class="form-check-label" for="flexCheck5">
    Lyrics
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheck6"/>
  <label class="form-check-label" for="flexCheck6">
    Artist Description
  </label>
</div></Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button onClick={showConfirmModal}>Save</button>
        </Modal.Footer>
      </Modal>

      <Modal show={isConfirmOpen} onHide={hideConfirmModal}>
        <Modal.Header>
          <Modal.Title>Confirm Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to update your settings?
        </Modal.Body>
        <Modal.Footer>
          <button onClick={cancelConfirmModal}>No, Cancel</button>
          <button onClick={confirmConfirmModal}>Yes, Confirm</button>
        </Modal.Footer>
      </Modal>

      
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;