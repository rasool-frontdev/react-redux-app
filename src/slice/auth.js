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
    //LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserEnd: (state) => {},
    loginUserFailed: (state) => {},

    //REGISTER

    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      console.log("Registered user");
    },
    registerUserFailed: (state) => {
      state.isLoading = false;
      state.error = "ERROR";
    },
  },
});

export const {
  loginUserEnd,
  loginUserFailed,
  loginUserStart,

  registerUserSuccess,
  registerUserFailed,
  registerUserStart,
} = authSlice.actions;
export default authSlice.reducer;
