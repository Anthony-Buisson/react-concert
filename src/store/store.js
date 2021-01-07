import { configureStore } from '@reduxjs/toolkit';
import postReducer from './counter/postSlice';

export default configureStore({
  reducer: {
    post: postReducer,
  },
});

