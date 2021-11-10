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

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

//   useEffect(() => {
//     showButton();
//     window.addEventListener('resize', showButton);
//     return {
//       window.removeEventListener('resize', showButton);
//     }
//   }, []);


const renderSettingsTooltip = props => (
  <Tooltip {...props}>Click to open advanced settings</Tooltip>
);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdStream className='navbar-icon' />
              Tunescout
            </Link>
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
  <input class="form-check-input" type="checkbox" value="" id="flexCheck1"/>
  <label class="form-check-label" for="flexCheck1">
    Spotify Embed
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheck2"/>
  <label class="form-check-label" for="flexCheck2">
    Youtube Video Embed
  </label>
  </div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheck3"/>
  <label class="form-check-label" for="flexCheck3">
    Spotify Track Availability Map
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheck4"/>
  <label class="form-check-label" for="flexCheck4">
    Youtube Video Availability Map
  </label>
  </div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheck5"/>
  <label class="form-check-label" for="flexCheck5">
    Lyrics
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheck6"/>
  <label class="form-check-label" for="flexCheck6">
    Artist Description
  </label>
</div></Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;