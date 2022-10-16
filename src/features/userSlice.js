import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
  state: '',
  city: '',
  pincode: '',
  address: '',
  username: '',
  password: '',
  confirmPassword: '',
  picture: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialValues },

  reducers: {
    add: (state, action) => {
      const data = action.payload;
      state.value = { ...state.value, ...data };
    },

    reset: state => {
      state.value = initialValues;
    },
  },
});

export const { add, reset } = userSlice.actions;

export default userSlice.reducer;
