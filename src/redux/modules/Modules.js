import { createSlice } from "@reduxjs/toolkit";
import { __getUsers, __addUsers } from "./thunk";
import { __loginUser } from "./userThunk";
const initialState = {
  users: [{}],
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      console.log(action.payload);
    },
    [__getUsers.rejected]: (state, action) => {
      state.users = action.payload;
    },
    [__addUsers.fulfilled]: (state, action) => {
      state.users.push(action.payload);
      console.log(action.payload);
    },
    [__addUsers.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export default users;
