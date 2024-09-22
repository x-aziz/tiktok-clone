import { createSlice } from '@reduxjs/toolkit';
import { videos } from '../data/videos';

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: videos,
  },
  reducers: {
    likeVideo: (state, action) => {
      const video = state.videos.find((v) => v.id === action.payload);
      if (video) video.likes++;
    },
    dislikeVideo: (state, action) => {
      const video = state.videos.find((v) => v.id === action.payload);
      if (video) video.dislikes++;
    },
  },
});

export const { likeVideo, dislikeVideo } = videoSlice.actions;
export default videoSlice.reducer;
