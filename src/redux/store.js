
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import videoReducer from './videoSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videoReducer,
  },
});

export default store;
