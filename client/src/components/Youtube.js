import React from "react";
//note : you need to install "npm install react-player"
import ReactPlayer from "react-player/youtube";

export const Youtube = ({ youtubeLink }) => {
  return (
    <ReactPlayer
      style={{ paddingLeft: "10%" }}
      width="100%"
      height="400px"
      url={youtubeLink}
    />
  );
};

export default Youtube;
