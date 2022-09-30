import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.userName = action.payload;
      },
    },
    emptyUser: {
      reducer(state, action) {
        state.userData = [];
      },
    },
  },
});

export const { addUser, emptyUser } = userSlice.actions;

export default userSlice.reducer;
