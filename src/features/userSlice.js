import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  phone: '',
  gender: '',
  state: '',
  city: '',
  pincode: '',
  address: '',
  username: '',
  password: '',
  confirmPassword: '',
  picture: '',
  verified: false,
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

    verify: state => {
      state.value = { ...state.value, verified: true };
    },
  },
});

export const { add, reset, verify } = userSlice.actions;

export default userSlice.reducer;
