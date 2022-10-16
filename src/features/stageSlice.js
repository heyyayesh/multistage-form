import { createSlice } from '@reduxjs/toolkit';

const initialValues = 1;

export const stageSlice = createSlice({
  name: 'stage',
  initialState: { value: initialValues },

  reducers: {
    next: state => {
      if (state.value < 4) state.value += 1;
    },

    previous: state => {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { next, previous } = stageSlice.actions;

export default stageSlice.reducer;
