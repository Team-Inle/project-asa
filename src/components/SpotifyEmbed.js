import React from "react";
import PropTypes from "prop-types";

const SpotifyEmbed = ({ embedId }) => (

 
  <div className="video-responsive">
    <iframe
      width="100%" height="380" frameBorder="0" allowfullscreen=""
      src={`https://open.spotify.com/embed/track/${embedId}`}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      title="Embedded Spotify"
    />
  </div>
);

SpotifyEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default SpotifyEmbed;