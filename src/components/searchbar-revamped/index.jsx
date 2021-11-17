import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';


// need this to expand the searchbar
import {motion} from 'framer-motion';

// need to import useState hook
import {useState, useEffect, useRef} from "react";

// import this to allow clicking outside the searchbar to reset the field
import { useClickOutside } from "react-click-outside-hook";

const SearchBarContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '3.8em',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0px 2px 12px 3px rgba(0,0,0,0.14)',
    overflow: 'hidden'
}


const SearchInputContainerStyle = {
    width: '100%',
    minHeight: '4em',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '2px 15px'
}


const SearchInputStyle = {
    width: '100%',
    height: '100%',
    outline: 'none',
    border: 'none',
    fontSize: '21px',
    color: '#12112e',
    fontWeight: '500',
    borderWeight: '6px',
    backgroundColor: 'transparent'
}

const SearchIconStyle = {
    color: '#bebebe',
    fontSize: '27px',
    marginRight: '10px',
    marginTop: '6px',
    verticalAlign: 'middle'
}

const CloseIconStyle = {
    color: '#bebebe',
    fontSize: '23px',
    marginRight: '10px',
    verticalAlign: 'middle',
    transition: 'all 200ms ease-in-out',
    cursor: 'pointer',
    hover: {color: '#dfdfdf'}
}

// define variants
const containerVariants = {
    expanded: {
        height: "30.5em"
    },

    collapsed: {
        height: "3.8em"
    }
}


// adjustments being made to make the searchbar transition smoother
const containerTransition = {type: 'spring', damping: 22, stiffness: 150}

 
export function RevampedSearchBar(props){

    // function to handle expanded state of searchbar
    const [isExpanded, setExpanded] = useState(false);
    
    // this is useClickOutside
    const [parentRef, isClickedOutside] = useClickOutside();

    // need to create a reference to the value contained within the searchbar
    // by storing this, we can clear this value using the collapseContainer function
    const inputRef = useRef();

    // expand container
    const expandContainer = () => {
        setExpanded(true);
    }

    // collapse container
    const collapseContainer = () => {
        setExpanded(false);
        if(inputRef.current)
            inputRef.current.value = "";
    }

    // add a UseEffect for useClickOutside
    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside])

    // core layout
    return  (
        <motion.div 
        style={SearchBarContainerStyle} 
        animate={isExpanded ? "expanded" : "collapsed"} 
        variants={containerVariants}
        transition={containerTransition}   
        ref={parentRef}
        >
            <div style={SearchInputContainerStyle} onFocus={expandContainer}>
                <SearchIcon style={SearchIconStyle}/>
                <input 
                    style={SearchInputStyle} 
                    placeholder="Search for a track name, we'll do the rest!"
                    ref={inputRef}/>
                <CloseIcon style={CloseIconStyle} onClick={collapseContainer}/>
            </div>
        </motion.div>
    )}