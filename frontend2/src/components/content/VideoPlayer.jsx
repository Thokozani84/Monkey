import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => (
  <div className="video-wrapper">
    <ReactPlayer url={url} controls width="100%" height="100%" />
  </div>
);

export default VideoPlayer;
