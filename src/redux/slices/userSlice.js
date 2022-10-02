import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: [],
  userData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        const userInArray = state.userName.includes(action.payload);

        if (!userInArray) {
          state.userName.push(action.payload);
        } else {
          state.userName = [...state.userName];
        }
      },
    },
    addUserMessages: {
      reducer(state, action) {
        const userExists = state.userData.find(
          (user) => user.userName === action.payload.userName
        );

        if (!userExists) {
          state.userData.push({
            id: state.userData.length + 1,
            messages: [action.payload.message],
            ...action.payload,
          });
        } else {
          state.userData.map((user) => {
            if (user.userName === action.payload.userName) {
              user.messages.push(action.payload.message);
            }
            return user;
          });
        }
      },
    },
    emptyUser: {
      reducer(state, action) {
        state.userData = [];
      },
    },
  },
});

export const { addUser, emptyUser, addUserMessages } = userSlice.actions;

export default userSlice.reducer;
