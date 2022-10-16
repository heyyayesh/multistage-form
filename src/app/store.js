import { configureStore } from '@reduxjs/toolkit';
import stageReducer from '../features/stageSlice';

const store = configureStore({
  reducer: {
    stage: stageReducer,
  },
});

export default store;
