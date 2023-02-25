import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ( props) => {
  const opts = {
   // height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={props.id} opts={opts} />;
};

export default VideoPlayer;