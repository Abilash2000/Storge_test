import { configureStore } from '@reduxjs/toolkit';
import friendsReducer from '../features/friends/friendSlice';


export const store = configureStore({
  reducer: {
    friends: friendsReducer,
  },
});
