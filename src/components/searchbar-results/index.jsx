import React from "react";
import { useHistory } from "react-router-dom";

const SearchBarResultStyle = {
    width: "100%",
    height: "6em",
    display: "flex",
    borderBottom: "1px solid #d8d8d852",
    padding: "6px 8px",
}

const ThumbnailStyle = {
    width: "auto",
    height: "100%",

    img: {
        width :"auto",
        height: "100%",
    }
}

const TrackNameStyle = {
    fontSize: "20px",
    color: "#000",
    marginLeft: "10px",
    marginTop: "20px"
}


export function SearchBarResult(props) {

    // set props of result
    const { thumbnailSRC, trackName, artistName, trackID} = props;

    // layout of the result
    const history = useHistory();

    // add clickable result
    const clicked = e => {
        e.preventDefault();
        props.clicked(trackID);
        let path = `results/${trackID}`; 
        history.push(path);
    }
    

    return (
        <div style={SearchBarResultStyle} onClick={clicked}>
        <div style={ThumbnailStyle}>
            <img src={thumbnailSRC} />
        </div>
        <h3 style={TrackNameStyle}><b>{trackName}</b> by {artistName}</h3>
    </div>
    );

}