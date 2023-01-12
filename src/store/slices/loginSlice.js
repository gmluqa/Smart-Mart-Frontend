import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jwtFromLocalStorage: "",
  loginValid: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getAndValidateJwt: (state /* maybe an action */) => {
      state.jwtFromLocalStorage = [
        ...state.jwtFromLocalStorage,
        action.payload,
      ];
      state.loginValid = [...state.loginValid, action.payload];
    },
  },
});

export const { getAndValidateJwt } = loginSlice.actions;

export default loginSlice.reducer;
