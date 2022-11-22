import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { isConnected: false, username: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.isConnected = true;
      state.value.username = action.payload;
    },
    logout: (state) => {
      state.value.isConnected = false;
      state.value.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
