import { configureStore } from '@reduxjs/toolkit';
import stageReducer from '../features/stageSlice';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    stage: stageReducer,
    user: userReducer,
  },
});

export default store;
