import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jwtFromLocalStorage: "",
  loginValid: false,
  userType: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    placeJwt: (state, action) => {
      state.jwtFromLocalStorage = [
        ...state.jwtFromLocalStorage,
        action.payload,
      ];
    },
    validateLogin: (state, action) => {
      state.loginValid = [...state.loginValid, action.payload];
    },
    placeUserType: (state, action) => {
      state.userType = [...state.userType, action.payload];
    },
  },
});

export const { placeJwt, validateLogin, placeUserType } = loginSlice.actions;

export default loginSlice.reducer;
