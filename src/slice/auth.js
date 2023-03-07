import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserEnd: (state) => {},
    loginUserFailed: (state) => {},
  },
});

export const { loginUserEnd, loginUserFailed, loginUserStart } =
  authSlice.actions;
export default authSlice.reducer;
