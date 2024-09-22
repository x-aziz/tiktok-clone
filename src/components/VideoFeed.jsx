import React from 'react';
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard.jsx';
import './VideoFeed.css';

const VideoFeed = () => {
  const videos = useSelector((state) => state.videos.videos);

  return (
    <div className="video-feed">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
