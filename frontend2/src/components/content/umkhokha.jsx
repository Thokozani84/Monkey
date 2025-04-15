// src/pages/Topic1.jsx
import React, { useEffect, useState } from 'react';
import { getVideosByCategory } from '../../services/api';
import VideoPlayer from './VideoPlayer';
import './universal.css';

const Umkho = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosByCategory('umkhokha') 
      .then((data) => setVideos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      {videos.map((video, index) => (
        <div className="card" key={index}>
          <VideoPlayer url={video.videoUrl} />
          <div className="card-content">
            <p className="card-title">{video.title}</p>
            <p className="card-upload-date">Category: {video.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Umkho ;
