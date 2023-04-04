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
    signUserSuccess: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    signUserFailure: (state) => {
      state.error = "Error signing";
      state.isLoggedIn = false;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure } =
  authSlice.actions;
export default authSlice.reducer;
