import React from "react";

const SearchBarResultStyle = {
    width: "100%",
    height: "2em",
    display: "flex",
    borderBottom: "1px solid #d8d8d852",
    padding: "6px 8px"
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
    marginLeft: "10px"
}

const ArtistNameStyle = {
    fontSize: "18px",
    color: "#000",
    marginLeft: "10px"
}

export function SearchBarResult(props) {

    // set props of result
    const { thumbnailSRC, trackName, artistName, trackID} = props;

    // layout of the result
    

    return (
        <div style={SearchBarResultStyle}>
        <div style={ThumbnailStyle}>
            <img src={thumbnailSRC} />
        </div>
        <h3 style={TrackNameStyle}>{trackName}</h3> by <h4 style={ArtistNameStyle}>{artistName}</h4>
    </div>
    );

}