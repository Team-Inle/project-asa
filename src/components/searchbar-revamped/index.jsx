import React from "react";

const SearchBarContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '34em',
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



 
export function RevampedSearchBar(props){
    return  (
        <div style={SearchBarContainerStyle}>   

            <div style={SearchInputContainerStyle}>
                <input style={SearchInputStyle} placeholder="Search for a track name, we'll do the rest!"/>
            </div>
        </div>
    )}