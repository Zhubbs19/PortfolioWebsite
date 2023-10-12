
import React from "react";
import PropTypes from "prop-types";

const VideoEmbed = ({ videoURL }) => (
    <div className="video-responsive">
      <iframe
        src={`${videoURL}`}
        frameBorder="0"
        width= "853px"
        height= "480px"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  VideoEmbed.propTypes = {
    videoURL: PropTypes.string.isRequired
  };
  
  export default VideoEmbed;