import React from 'react';
import { useDispatch } from 'react-redux';
import { likeVideo, dislikeVideo } from '../redux/videoSlice';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeVideo(video.id));
  };

  const handleDislike = () => {
    dispatch(dislikeVideo(video.id));
  };

  return (
    <div className="video-card">
      <video src={video.url} controls />
      <div className="video-actions">
        <button onClick={handleLike}>Like ({video.likes})</button>
        <button onClick={handleDislike}>Dislike ({video.dislikes})</button>
      </div>
    </div>
  );
};

export default VideoCard;
