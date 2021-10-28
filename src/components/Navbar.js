// modified from https://github.com/briancodex/react-website-v2

import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdStream, MdSettings } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";



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
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

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
        <Modal.Body>The body</Modal.Body>
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