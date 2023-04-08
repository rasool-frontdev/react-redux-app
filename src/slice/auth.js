import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/helpersStorage";
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
      setItem("token", action.payload.token);
    },
    signUserFailure: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, signOut } =
  authSlice.actions;
export default authSlice.reducer;
