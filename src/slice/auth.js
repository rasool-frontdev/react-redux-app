import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    signUserFailure: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure } =
  authSlice.actions;
export default authSlice.reducer;
