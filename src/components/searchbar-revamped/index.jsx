import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

// pull this in so we can make the query to the spotify API
import axios from "axios";

// need this to expand the searchbar
import {motion, AnimatePresence} from 'framer-motion';

// need to import useState hook
import {useState, useEffect, useRef} from "react";

// import this to allow clicking outside the searchbar to reset the field
import { useClickOutside } from "react-click-outside-hook";

// import this for loading
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from "../../hooks/debounceHook";

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


// line separator styling
const lineSeparatorStyle = {
    display: "flex",
    minWidth: "100%",
    minHeight: "2px",
    backgroundColor: "#d8d8d878"
}

// now creating content boxes
const searchResultStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "1em",
}



// define variants for when we expand the searchbar
const containerVariants = {
    expanded: {
        height: "30.5em"
    },

    collapsed: {
        height: "3.8em"
    }
}


const LoadingWrapperStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

// adjustments being made to make the searchbar transition smoother
const containerTransition = {type: 'spring', damping: 22, stiffness: 150}

 
export function RevampedSearchBar(props){

    // function to handle expanded state of searchbar
    const [isExpanded, setExpanded] = useState(false);
    
    // this is useClickOutside
    const [parentRef, isClickedOutside] = useClickOutside();

    // check if loading
    const [isLoading, setIsLoading] = useState(false);

    // need to create a reference to the value contained within the searchbar
    // by storing this, we can clear this value using the collapseContainer function
    const inputRef = useRef();

    // need to set the search content to the state. This starts as "" to represent no input provided
    const [searchQuery, setSearchQuery] = useState("");

    // change handler updates the query content
    const changeHandler = (event) => {

        // this grabs the value and saves it to state when the event occurs
        event.preventDefault(event.target.value);
    }

    // expand container
    const expandContainer = () => {
        setExpanded(true);
    }

    // collapse container
    const collapseContainer = () => {
        setExpanded(false);
        setSearchQuery("");
        if(inputRef.current)
            inputRef.current.value = "";
    }

    // prepare the url (whatever you get as a result here, clean up the result)
    const prepareSearchQuery = (query) => {

        const url = `q=${query}`;

        // need to always encode so that we don't pass in bad input
        return encodeURI(url);

    }

    // add core functions of search
    const searchSpotifyTracks = async () => {

        // need to grab the content of the searchbar
        if (!searchQuery || searchQuery.trim() === "")
            return;
        
        setIsLoading(true);

        const URL = prepareSearchQuery(searchQuery);

        const response = await axios.get(URL).catch((err) => {
            console.log("Error:", err)
        });

        if (response) {
            console.log("Response: ", response.data)
        };
    }   


    // here we pull in the custom debounce hook
    useDebounce(searchQuery, 500, searchSpotifyTracks);


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
            {/* searchbar goes here */}
            <div style={SearchInputContainerStyle} onFocus={expandContainer}>
                <SearchIcon style={SearchIconStyle}/>
                <input 
                    style={SearchInputStyle} 
                    placeholder="Search for a track name, we'll do the rest!"
                    ref={inputRef}

                    // when this content changes, update the state
                    onChange={changeHandler}
                    />
                <AnimatePresence>
                    {isExpanded && (
                    <motion.span 
                        key="close-icon" 
                        initial={{ opacity:0 }} 
                        animate={{ opacity:1}} 
                        transition={{ duration:0.2}} 
                        exit={{ opacity:0}}>
                        <CloseIcon style={CloseIconStyle} onClick={collapseContainer}/>
                    </motion.span>
                    )}
                </AnimatePresence>
            </div>

            {/* content goes here */}
            <div style={lineSeparatorStyle}>

            </div>
            <div style={searchResultStyle}>
                
                <div style={LoadingWrapperStyle}>
                  
                       <MoonLoader loading size={50}/>
                </div>
            </div>
        </motion.div>
    )}