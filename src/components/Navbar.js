// modified from https://github.com/briancodex/react-website-v2

import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdStream, MdSettings } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
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

            <MdSettings className='navbar-icon' />
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;